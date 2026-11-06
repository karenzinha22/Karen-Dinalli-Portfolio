import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './WebPortalLightbox.css';

type WebPortalLightboxProps = {
  src: string;
  alt: string;
  children: ReactNode;
  lightboxSrc?: string;
};

type View = {
  scale: number;
  x: number;
  y: number;
};

type Point = {
  x: number;
  y: number;
};

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ZOOM_STEP = 1.25;

const resetView: View = { scale: 1, x: 0, y: 0 };

function clampScale(scale: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale));
}

export function WebPortalLightbox({ src, alt, children, lightboxSrc }: WebPortalLightboxProps) {
  const [open, setOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState(lightboxSrc || src);
  const [view, setView] = useState<View>(resetView);
  const [panning, setPanning] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const viewRef = useRef<View>(resetView);
  const apiRef = useRef({
    zoomBy(_factor: number) {},
    reset() {},
    reclamp() {},
  });
  const titleId = useId();

  function resolveSrc() {
    if (lightboxSrc) {
      return lightboxSrc;
    }
    const img = triggerRef.current?.querySelector('img');
    return img?.currentSrc || img?.src || src;
  }

  function openLightbox() {
    viewRef.current = resetView;
    setView(resetView);
    setPanning(false);
    setActiveSrc(resolveSrc());
    setOpen(true);
  }

  function closeLightbox() {
    setOpen(false);
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!open || !stage) {
      return;
    }
    const stageEl = stage;

    function commit(next: View) {
      const currentStage = stageRef.current;
      const img = imgRef.current;
      const scale = clampScale(next.scale);
      let clamped = resetView;

      if (currentStage && img && scale > 1.001) {
        const maxX = Math.max(0, (img.offsetWidth * scale - currentStage.clientWidth) / 2);
        const maxY = Math.max(0, (img.offsetHeight * scale - currentStage.clientHeight) / 2);
        clamped = {
          scale,
          x: Math.min(maxX, Math.max(-maxX, next.x)),
          y: Math.min(maxY, Math.max(-maxY, next.y)),
        };
      }

      viewRef.current = clamped;
      setView(clamped);
    }

    function zoomAt(nextScale: number, pointX: number, pointY: number) {
      const current = viewRef.current;
      const scale = clampScale(nextScale);
      const worldX = (pointX - current.x) / current.scale;
      const worldY = (pointY - current.y) / current.scale;
      commit({
        scale,
        x: pointX - worldX * scale,
        y: pointY - worldY * scale,
      });
    }

    apiRef.current.zoomBy = (factor) => zoomAt(viewRef.current.scale * factor, 0, 0);
    apiRef.current.reset = () => commit(resetView);
    apiRef.current.reclamp = () => commit(viewRef.current);
    if (imgRef.current?.complete) {
      commit(viewRef.current);
    }

    const pointers = new Map<number, Point>();
    const gesture = {
      mode: 'none' as 'none' | 'pan' | 'pinch' | 'tap',
      startX: 0,
      startY: 0,
      originX: 0,
      originY: 0,
      startDist: 0,
      startScale: 1,
      moved: false,
    };
    let lastTap = 0;

    function stagePoint(clientX: number, clientY: number) {
      const rect = stageEl.getBoundingClientRect();
      return {
        x: clientX - (rect.left + rect.width / 2),
        y: clientY - (rect.top + rect.height / 2),
      };
    }

    function onWheel(event: WheelEvent) {
      event.preventDefault();
      const delta = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaY;
      const point = stagePoint(event.clientX, event.clientY);
      zoomAt(viewRef.current.scale * Math.exp(-delta * 0.0016), point.x, point.y);
    }

    function onPointerDown(event: PointerEvent) {
      if (event.pointerType === 'mouse' && event.button !== 0) {
        return;
      }
      try {
        stageEl.setPointerCapture(event.pointerId);
      } catch {
        // Capture is unavailable until the browser has a real pointer.
      }
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

      if (pointers.size >= 2) {
        const [a, b] = [...pointers.values()];
        gesture.mode = 'pinch';
        gesture.startDist = Math.hypot(a.x - b.x, a.y - b.y) || 1;
        gesture.startScale = viewRef.current.scale;
        gesture.startX = (a.x + b.x) / 2;
        gesture.startY = (a.y + b.y) / 2;
        gesture.originX = viewRef.current.x;
        gesture.originY = viewRef.current.y;
        gesture.moved = true;
        setPanning(false);
        return;
      }

      gesture.mode = viewRef.current.scale > 1.001 ? 'pan' : 'tap';
      gesture.startX = event.clientX;
      gesture.startY = event.clientY;
      gesture.originX = viewRef.current.x;
      gesture.originY = viewRef.current.y;
      gesture.startScale = viewRef.current.scale;
      gesture.moved = false;
      if (gesture.mode === 'pan') {
        setPanning(true);
      }
    }

    function onPointerMove(event: PointerEvent) {
      if (!pointers.has(event.pointerId)) {
        return;
      }
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

      if (gesture.mode === 'pinch' && pointers.size >= 2) {
        event.preventDefault();
        const [a, b] = [...pointers.values()];
        const midX = (a.x + b.x) / 2;
        const midY = (a.y + b.y) / 2;
        const dist = Math.hypot(a.x - b.x, a.y - b.y) || 1;
        const scale = gesture.startScale * (dist / gesture.startDist);
        const start = stagePoint(gesture.startX, gesture.startY);
        const worldX = (start.x - gesture.originX) / gesture.startScale;
        const worldY = (start.y - gesture.originY) / gesture.startScale;
        const mid = stagePoint(midX, midY);
        commit({
          scale,
          x: mid.x - worldX * scale,
          y: mid.y - worldY * scale,
        });
        return;
      }

      if (gesture.mode === 'pan' || gesture.mode === 'tap') {
        const distance = Math.hypot(event.clientX - gesture.startX, event.clientY - gesture.startY);
        if (distance > 6) {
          gesture.moved = true;
        }
      }

      if (gesture.mode === 'pan') {
        event.preventDefault();
        commit({
          scale: viewRef.current.scale,
          x: gesture.originX + event.clientX - gesture.startX,
          y: gesture.originY + event.clientY - gesture.startY,
        });
      }
    }

    function onPointerUp(event: PointerEvent) {
      const wasTap = !gesture.moved && (gesture.mode === 'tap' || gesture.mode === 'pan');
      const tapX = gesture.startX;
      const tapY = gesture.startY;
      pointers.delete(event.pointerId);

      if (wasTap && pointers.size === 0) {
        const now = Date.now();
        if (now - lastTap < 280) {
          const point = stagePoint(tapX, tapY);
          if (viewRef.current.scale > 1.001) {
            commit(resetView);
          } else {
            zoomAt(2.5, point.x, point.y);
          }
          lastTap = 0;
        } else {
          lastTap = now;
        }
      }

      if (pointers.size === 0) {
        gesture.mode = 'none';
        setPanning(false);
        return;
      }

      if (gesture.mode === 'pinch') {
        const remaining = [...pointers.values()][0];
        gesture.mode = viewRef.current.scale > 1.001 ? 'pan' : 'tap';
        gesture.startX = remaining.x;
        gesture.startY = remaining.y;
        gesture.originX = viewRef.current.x;
        gesture.originY = viewRef.current.y;
        gesture.moved = true;
        setPanning(gesture.mode === 'pan');
      }
    }

    stageEl.addEventListener('wheel', onWheel, { passive: false });
    stageEl.addEventListener('pointerdown', onPointerDown);
    stageEl.addEventListener('pointermove', onPointerMove);
    stageEl.addEventListener('pointerup', onPointerUp);
    stageEl.addEventListener('pointercancel', onPointerUp);

    return () => {
      stageEl.removeEventListener('wheel', onWheel);
      stageEl.removeEventListener('pointerdown', onPointerDown);
      stageEl.removeEventListener('pointermove', onPointerMove);
      stageEl.removeEventListener('pointerup', onPointerUp);
      stageEl.removeEventListener('pointercancel', onPointerUp);
      setPanning(false);
    };
  }, [open]);

  const zoomed = view.scale > 1.01;
  const percent = Math.round(view.scale * 100);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="wp-lightbox-trigger"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={openLightbox}
      >
        {children}
      </button>

      {open
        ? createPortal(
            <div className="wp-lightbox" role="presentation">
              <button
                type="button"
                className="wp-lightbox__backdrop"
                aria-label="Close image"
                onClick={closeLightbox}
              />
              <div
                className="wp-lightbox__dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
              >
                <p id={titleId} className="wp-lightbox__title">
                  {alt}
                </p>
                <div
                  ref={stageRef}
                  className={[
                    'wp-lightbox__stage',
                    zoomed ? 'is-zoomed' : '',
                    panning ? 'is-panning' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <img
                    ref={imgRef}
                    className="wp-lightbox__img"
                    src={activeSrc}
                    alt={alt}
                    draggable={false}
                    onLoad={() => apiRef.current.reclamp()}
                    style={{
                      transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
                    }}
                  />
                </div>
                <div
                  className="wp-lightbox__tools"
                  role="toolbar"
                  aria-label="Image zoom"
                  onPointerDown={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    aria-label="Zoom out"
                    disabled={!zoomed}
                    onClick={() => apiRef.current.zoomBy(1 / ZOOM_STEP)}
                  >
                    −
                  </button>
                  <span className="wp-lightbox__zoom">{percent}%</span>
                  <button
                    type="button"
                    className="wp-lightbox__reset"
                    aria-label="Reset zoom"
                    disabled={!zoomed}
                    onClick={() => apiRef.current.reset()}
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    aria-label="Zoom in"
                    disabled={view.scale >= MAX_SCALE - 0.01}
                    onClick={() => apiRef.current.zoomBy(ZOOM_STEP)}
                  >
                    +
                  </button>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  className="wp-lightbox__close"
                  aria-label="Close"
                  onClick={closeLightbox}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
