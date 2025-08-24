import { lazy, Suspense } from 'react';
import { LoadingSection } from './LoadingSection';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  variant?: 'hero' | 'cards' | 'table' | 'form';
}

export const LazySection = ({ children, fallback, variant = 'cards' }: LazySectionProps) => {
  return (
    <Suspense fallback={fallback || <LoadingSection variant={variant} />}>
      {children}
    </Suspense>
  );
};

// Pre-configured lazy components for common sections
export const LazyHeroSection = lazy(() => import('./HeroSection').then(module => ({ default: module.HeroSection })));
export const LazyFeaturedCourses = lazy(() => import('./FeaturedCourses').then(module => ({ default: module.FeaturedCourses })));
export const LazyAboutSection = lazy(() => import('./AboutSection').then(module => ({ default: module.AboutSection })));