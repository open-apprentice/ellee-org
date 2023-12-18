import { cn } from '@/lib/utils';
import { H1, P } from '@/components/HTMLTags';

export default function PageHeader({
  subTitle,
  mainTitle,
  className,
  children,
}) {
  return (
    <section className={cn('container flex mb-2', className)}>
      <div>
        <H1 marginBottom='text-center md:text-left mb-4'>
          {mainTitle}
        </H1>
        <div
          className={cn(
            'text-xl text-center md:text-left',
            className
          )}
        >
          <P>{subTitle}</P>
        </div>
      </div>
      {children}
    </section>
  );
}
