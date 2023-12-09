import { cn } from '@/lib/utils';
import { H1, P } from '@/components/HTMLTags';

export default function PageHeader({
  subTitle,
  mainTitle,
  className,
}) {
  return (
    <section className={cn('container', className)}>
      <div className={cn('', className)}>
        <H1>{mainTitle}</H1>
        <div className={cn('text-xl text-center mb-40', className)}>
          <P>{subTitle}</P>
        </div>
      </div>
    </section>
  );
}
