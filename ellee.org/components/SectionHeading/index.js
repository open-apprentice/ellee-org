import { cn } from '@/lib/utils';
import { H2, P } from '@/components/HTMLTags';
import TagLabel from '@/components/TagLabel';

export default function SectionHeading({
  label,
  description = '',
  title,
  className,
}) {
  return (
    <section
      className={cn(
        'flex align-middle text-center justify-center mt-20 mb-10',
        className
      )}
    >
      <div>
        <TagLabel label={label} />

        <H2 className={cn('border-0 pb-0', className)}>{title}</H2>
        <P
          className={cn(
            'text-xl [&:not(:first-child)]:mt-2',
            className
          )}
        >
          {description}
        </P>
      </div>
    </section>
  );
}
