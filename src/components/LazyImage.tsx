import { useState } from 'react';
import { Skeleton } from './ui/skeleton';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const LazyImage = ({ src, alt, className, priority = false, ...props }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`${className} flex items-center justify-center bg-muted text-muted-foreground`}>
        <span>Không tải được hình ảnh</span>
      </div>
    );
  }

  return (
    <>
      {!isLoaded && <Skeleton className={className} />}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'block' : 'hidden'}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        {...props}
      />
    </>
  );
};