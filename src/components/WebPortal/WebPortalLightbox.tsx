import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './WebPortalLightbox.css';

type WebPortalLightboxProps = {
  src: string;
  alt: string;
  children: ReactNode;
  lightboxSrc?: string;
};

export function WebPortalLightbox({ src, alt, children, lightboxSrc }: WebPortalLightboxProps) {
  const [open, setOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState(lightboxSrc || src);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  function resolveSrc() {
    if (lightboxSrc) {
      return lightboxSrc;
    }
    const img = triggerRef.current?.querySelector('img');
    return img?.currentSrc || img?.src || src;
  }

  function openLightbox() {
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
                <button
                  ref={closeRef}
                  type="button"
                  className="wp-lightbox__close"
                  aria-label="Close"
                  onClick={closeLightbox}
                >
                  <span aria-hidden="true">×</span>
                </button>
                <img className="wp-lightbox__img" src={activeSrc} alt={alt} />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
