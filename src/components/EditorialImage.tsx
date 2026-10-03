import React, { useState, useEffect, useRef } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  priority?: boolean;
  objectPosition?: string;
  style?: React.CSSProperties;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio,
  priority = false,
  objectPosition,
  style = {},
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(priority);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Lazy loading observer to defer network fetching until near viewport
  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    if (!containerRef.current) return;

    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        {
          rootMargin: '200px 0px', // Preload when within 200px of viewport
          threshold: 0.01,
        }
      );

      observer.observe(containerRef.current);
      return () => observer.disconnect();
    } else {
      // Fallback
      setIsInView(true);
    }
  }, [priority]);

  // Handle cached images that are already complete
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [isInView, src]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#1F2420] ${aspectRatio || ''} ${containerClassName}`}
    >
      {/* Editorial shimmer placeholder skeleton while loading */}
      <div
        className={`absolute inset-0 bg-[#232824] transition-opacity duration-700 ease-out pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
      </div>

      {/* Lazy-loaded photographic element with editorial cross-fade reveal */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          style={{
            objectPosition,
            ...style,
          }}
          className={`w-full h-full object-cover will-change-[opacity,transform,filter] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isLoaded
              ? 'opacity-100 scale-100 filter-none'
              : 'opacity-0 scale-[1.03] filter blur-[2px]'
          } ${className}`}
        />
      )}
    </div>
  );
};
