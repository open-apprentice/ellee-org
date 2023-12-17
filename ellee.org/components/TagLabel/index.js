import { cn } from '@/lib/utils';
import { P, SpanGradient } from '@/components/HTMLTags';

export default function TagLabel({ label = 'Label', className }) {
  return (
    <P>
      <SpanGradient
        className={cn(' border rounded-lg p-2', className)}
      >
        {label}
      </SpanGradient>
    </P>
  );
}
