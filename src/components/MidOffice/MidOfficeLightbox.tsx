import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './MidOfficeLightbox.css';

type MidOfficeLightboxProps = {
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

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ZOOM_STEP = 1.6;

const resetView: View = { scale: 1, x: 0, y: 0 };

function useMobileViewport() {
  const query = '(max-width: 767px)';
  const [mobile, setMobile] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => setMobile(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return mobile;
}

export function MidOfficeLightbox({ src, alt, children, lightboxSrc }: MidOfficeLightboxProps) {
  const [open, setOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState(lightboxSrc || src);
  const [view, setView] = useState<View>(resetView);
  const mobile = useMobileViewport();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const viewRef = useRef<View>(resetView);
  const titleId = useId();

  function resolveSrc() {
    if (lightboxSrc) {
      return lightboxSrc;
    }
    const img = triggerRef.current?.querySelector('img');
    return img?.currentSrc || img?.src || src;
  }

  function commit(next: View) {
    const stage = stageRef.current;
    const img = imgRef.current;
    const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, next.scale));
    let clamped = resetView;

    if (stage && img && scale > 1.001) {
      const maxX = Math.max(0, (img.offsetWidth * scale - stage.clientWidth) / 2);
      const maxY = Math.max(0, (img.offsetHeight * scale - stage.clientHeight) / 2);
      clamped = {
        scale,
        x: Math.min(maxX, Math.max(-maxX, next.x)),
        y: Math.min(maxY, Math.max(-maxY, next.y)),
      };
    }

    viewRef.current = clamped;
    setView(clamped);
  }

  function openLightbox() {
    viewRef.current = resetView;
    setView(resetView);
    setActiveSrc(resolveSrc());
    setOpen(true);
  }

  function closeLightbox() {
    setOpen(false);
  }

  function zoomBy(factor: number) {
    const current = viewRef.current;
    const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, current.scale * factor));
    const worldX = -current.x / current.scale;
    const worldY = -current.y / current.scale;
    commit({ scale, x: -worldX * scale, y: -worldY * scale });
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
    if (!open || !mobile || !stage) {
      return;
    }
    const stageEl = stage;

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

    function pointDistance(a: Touch, b: Touch) {
      return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    }

    function onTouchStart(event: TouchEvent) {
      if (event.touches.length === 2) {
        event.preventDefault();
        const [a, b] = [event.touches[0], event.touches[1]];
        gesture.mode = 'pinch';
        gesture.startDist = pointDistance(a, b);
        gesture.startScale = viewRef.current.scale;
        gesture.startX = (a.clientX + b.clientX) / 2;
        gesture.startY = (a.clientY + b.clientY) / 2;
        gesture.originX = viewRef.current.x;
        gesture.originY = viewRef.current.y;
        gesture.moved = true;
        return;
      }

      if (event.touches.length === 1) {
        const touch = event.touches[0];
        gesture.mode = viewRef.current.scale > 1 ? 'pan' : 'tap';
        gesture.startX = touch.clientX;
        gesture.startY = touch.clientY;
        gesture.originX = viewRef.current.x;
        gesture.originY = viewRef.current.y;
        gesture.startScale = viewRef.current.scale;
        gesture.moved = false;
      }
    }

    function onTouchMove(event: TouchEvent) {
      if (gesture.mode === 'pinch' && event.touches.length === 2) {
        event.preventDefault();
        const [a, b] = [event.touches[0], event.touches[1]];
        const rect = stageEl.getBoundingClientRect();
        const midX = (a.clientX + b.clientX) / 2;
        const midY = (a.clientY + b.clientY) / 2;
        const scale = gesture.startScale * (pointDistance(a, b) / gesture.startDist);
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const startX = gesture.startX - centerX;
        const startY = gesture.startY - centerY;
        const worldX = (startX - gesture.originX) / gesture.startScale;
        const worldY = (startY - gesture.originY) / gesture.startScale;
        commit({
          scale,
          x: midX - centerX - worldX * scale,
          y: midY - centerY - worldY * scale,
        });
        return;
      }

      if (gesture.mode === 'pan' && event.touches.length === 1) {
        event.preventDefault();
        const touch = event.touches[0];
        if (Math.hypot(touch.clientX - gesture.startX, touch.clientY - gesture.startY) > 6) {
          gesture.moved = true;
        }
        commit({
          scale: viewRef.current.scale,
          x: gesture.originX + touch.clientX - gesture.startX,
          y: gesture.originY + touch.clientY - gesture.startY,
        });
        return;
      }

      if (gesture.mode === 'tap' && event.touches.length === 1) {
        const touch = event.touches[0];
        if (Math.hypot(touch.clientX - gesture.startX, touch.clientY - gesture.startY) > 8) {
          gesture.moved = true;
        }
      }
    }

    function onTouchEnd(event: TouchEvent) {
      if (gesture.mode === 'tap' && !gesture.moved && event.touches.length === 0) {
        const now = Date.now();
        if (now - lastTap < 300) {
          const rect = stageEl.getBoundingClientRect();
          const localX = gesture.startX - (rect.left + rect.width / 2);
          const localY = gesture.startY - (rect.top + rect.height / 2);
          if (viewRef.current.scale > 1) {
            commit(resetView);
          } else {
            const scale = 2.5;
            commit({ scale, x: localX - localX * scale, y: localY - localY * scale });
          }
          lastTap = 0;
        } else {
          lastTap = now;
        }
      }

      if (event.touches.length === 0) {
        gesture.mode = 'none';
      }
    }

    stageEl.addEventListener('touchstart', onTouchStart, { passive: false });
    stageEl.addEventListener('touchmove', onTouchMove, { passive: false });
    stageEl.addEventListener('touchend', onTouchEnd);

    return () => {
      stageEl.removeEventListener('touchstart', onTouchStart);
      stageEl.removeEventListener('touchmove', onTouchMove);
      stageEl.removeEventListener('touchend', onTouchEnd);
    };
  }, [open, mobile]);

  const zoomed = view.scale > 1.01;

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
            <div className="mo-lightbox" role="presentation">
              <button
                type="button"
                className="mo-lightbox__backdrop"
                aria-label="Close image"
                onClick={closeLightbox}
              />
              <div
                className="mo-lightbox__dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
              >
                <p id={titleId} className="mo-lightbox__title">
                  {alt}
                </p>
                <button
                  ref={closeRef}
                  type="button"
                  className="mo-lightbox__close"
                  aria-label="Close"
                  onClick={closeLightbox}
                >
                  <span aria-hidden="true">×</span>
                </button>
                {mobile ? (
                  <>
                    <div ref={stageRef} className="mo-lightbox__stage">
                      <img
                        ref={imgRef}
                        className="mo-lightbox__img"
                        src={activeSrc}
                        alt={alt}
                        draggable={false}
                        style={{
                          transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
                        }}
                      />
                    </div>
                    <div className="mo-lightbox__tools" aria-label="Image zoom">
                      <button
                        type="button"
                        onClick={() => zoomBy(1 / ZOOM_STEP)}
                        disabled={!zoomed}
                      >
                        Zoom out
                      </button>
                      <button
                        type="button"
                        onClick={() => zoomBy(ZOOM_STEP)}
                        disabled={view.scale >= MAX_SCALE - 0.01}
                      >
                        Zoom in
                      </button>
                    </div>
                  </>
                ) : (
                  <img className="mo-lightbox__img" src={activeSrc} alt={alt} />
                )}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
