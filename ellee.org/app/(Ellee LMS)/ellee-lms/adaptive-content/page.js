import { cn } from '@/lib/utils';

export default function AdaptiveContent({ className }) {
  return (
    <main
      className={cn(
        'container pt-12 md:pt-20 md:pb-20  items-center mx-auto max-w-screen-xl md:px-12 md:py-8 ',
        className
      )}
    >
      <h1>Adaptive Content</h1>
      <p>
        My book is written for business professionals
        <br /> In tech
        <br /> In fintech <br /> In as Programmers
      </p>
    </main>
  );
}
