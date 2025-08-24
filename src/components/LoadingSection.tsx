import { Skeleton } from './ui/skeleton';

interface LoadingSectionProps {
  variant?: 'hero' | 'cards' | 'table' | 'form';
}

export const LoadingSection = ({ variant = 'cards' }: LoadingSectionProps) => {
  switch (variant) {
    case 'hero':
      return (
        <div className="py-20 space-y-8">
          <Skeleton className="h-16 w-3/4 mx-auto" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
          <div className="flex justify-center gap-4">
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      );
    
    case 'cards':
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-lg border p-6 space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
      );
    
    case 'table':
      return (
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex gap-4 p-4 border rounded">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-full" />
              </div>
              <Skeleton className="h-8 w-20" />
            </div>
          ))}
        </div>
      );
    
    case 'form':
      return (
        <div className="space-y-6">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-32 w-full" />
          <div className="grid md:grid-cols-2 gap-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
          <Skeleton className="h-12 w-32" />
        </div>
      );
    
    default:
      return <Skeleton className="h-40 w-full" />;
  }
};