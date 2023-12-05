import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function LearningPatternCard(
  { title, description, summary, link },
  className
) {
  return (
    <div className={cn('w-full gap-2 grid  grid-cols-3', className)}>
      <div
        key={title}
        className={cn(
          'group relative rounded-lg overflow-hidden bg-white  hover:shadow-2xl ',
          className
        )}
      >
        <div className={cn('h-40')}>
          <Link href={link} className={cn('', className)}>
            <img
              src='https://lp-cms-production.imgix.net/2019-06/554369495_full.jpg'
              alt='City'
              className={cn(
                'h-40 w-full object-cover object-center ',
                className
              )}
            />
          </Link>
        </div>
        <div className={cn('h-1/2 p-4 ', className)}>
          <h3
            className={cn(
              'mb-2 text-base font-semibold text-blue-800',
              className
            )}
          >
            <Link
              href={link}
              className={cn('hover:underline', className)}
            >
              {title}
            </Link>
          </h3>
          <p
            className={cn(
              'text-sm font-bold text-orange-500',
              className
            )}
          >
            {summary}
          </p>
          <div
            className={cn(
              'flex flex-row justify-between text-xs mt-2',
              className
            )}
          >
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
