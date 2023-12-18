import { cn } from '@/lib/utils';
import { P, SpanGradient } from '@/components/HTMLTags';

export default function TagLabel({ label = 'Label', className }) {
  return (
    <P>
      <span
        className={cn(
          'border rounded-[0.6rem] border-zinc-300 dark:border-zinc-900 pt-[0.6rem] pb-[0.6rem] px-[.025rem]',
          className
        )}
      >
        <SpanGradient
          className={cn('border rounded-lg p-2', className)}
        >
          {label}
        </SpanGradient>
      </span>
    </P>
  );
}
