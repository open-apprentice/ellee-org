import { cn } from '@/lib/utils';

export default function Home({ className }) {
  return (
    <main
      className={cn(
        'container pt-12 md:pt-20 md:pb-20  items-center mx-auto max-w-screen-xl md:px-12 md:py-8 ',
        className
      )}
    >
      <h1>Terms of Use</h1>
    </main>
  );
}
