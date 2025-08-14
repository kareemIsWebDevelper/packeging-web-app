import React from 'react';

// Image optimization and lazy loading utilities

export const getOptimizedImageUrl = (originalUrl: string, width?: number, height?: number): string => {
  // For now, return the original URL
  // In production, you could implement image optimization services like:
  // - Cloudinary: https://res.cloudinary.com/demo/image/fetch/w_${width},h_${height},c_fill/${encodeURIComponent(originalUrl)}
  // - ImageKit: https://ik.imagekit.io/demo/tr:w-${width},h-${height}/${encodeURIComponent(originalUrl)}
  return originalUrl;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = (srcs: string[]): Promise<void[]> => {
  return Promise.all(srcs.map(preloadImage));
};

// Image loading states
export interface ImageLoadState {
  loaded: boolean;
  error: boolean;
}

// Custom hook for image loading state
export const useImageLoad = (src: string): ImageLoadState => {
  const [state, setState] = React.useState<ImageLoadState>({
    loaded: false,
    error: false,
  });

  React.useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      setState({ loaded: true, error: false });
    };
    
    img.onerror = () => {
      setState({ loaded: false, error: true });
    };
    
    img.src = src;
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return state;
};

// Responsive image component
interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  fallbackSrc?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  sizes = '100vw',
  fallbackSrc = '/placeholder-image.jpg'
}) => {
  const { loaded, error } = useImageLoad(src);
  
  return (
    <img
      src={error && fallbackSrc ? fallbackSrc : src}
      alt={alt}
      className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      loading={loading}
      sizes={sizes}
    />
  );
};
