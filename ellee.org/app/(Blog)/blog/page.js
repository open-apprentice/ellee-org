import { cn } from '@/lib/utils';

export default function Home({ className }) {
  return (
    <main
      className={cn(
        'container pt-12 md:pt-20 md:pb-20  items-center mx-auto max-w-screen-xl md:px-12 md:py-8 ',
        className
      )}
    >
      <h1>Blog</h1>
      <p>Learning is not Linear</p>
      <p>100% passing standard</p>
      <p>
        Turn on its head the idea that those who teach who cannot do.
        Let’s make it so those that can do, are the ones teaching.
      </p>
    </main>
  );
}
