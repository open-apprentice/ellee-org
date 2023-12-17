import { cn } from '@/lib/utils';
import { P, Section } from '@/components/HTMLTags';

export default function CenteredText({ className, children }) {
  return (
    <Section
      className={cn(
        'hidden md:flex w-full flex-row items-center  justify-center m-0 p-0 pt-2 pb-2 mb-0  mx-auto max-w-screen-xl',
        className
      )}
    >
      <P
        className={cn(
          '[&:not(:first-child)]:mt-0 max-w-4xl mb-0 text-neutral-500 text-center',
          className
        )}
      >
        {children}
      </P>
    </Section>
  );
}
