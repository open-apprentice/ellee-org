import { cn } from '@/lib/utils';

export default function Home({ className }) {
  return (
    <main
      className={cn(
        'container  items-center mx-auto max-w-screen-xl md:px-12',
        className
      )}
    >
      <h1>Ellee LMS - Modular Knowledge</h1>
    </main>
  );
}
