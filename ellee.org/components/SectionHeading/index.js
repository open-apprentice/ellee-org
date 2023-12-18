import { cn } from '@/lib/utils';
import { H2, P } from '@/components/HTMLTags';
import TagLabel from '@/components/TagLabel';
import CenteredText from '../CenteredText';

export default function SectionHeading({
  label,
  description = '',
  subsection = '',
  title,
  className,
}) {
  return (
    <>
      <section
        className={cn(
          'container flex align-middle text-center justify-center mb-10',
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
      {subsection ? <CenteredText>{subsection}</CenteredText> : ''}
    </>
  );
}
