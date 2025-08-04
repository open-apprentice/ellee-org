import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Button } from './ui/button';
import { ArrowBigRight } from 'lucide-react';
import Link from 'next/link';

export function H1({ children, className, marginBottom = 'mb-2' }) {
  return (
    <h1
      className={cn(
        `scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${marginBottom}`,
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }) {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight first:mt-0 mb-4 max-w-xl',
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }) {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold leading-none tracking-tight mb-2',
        className
      )}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className }) {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold leading-none tracking-tight mb-2',
        className
      )}
    >
      {children}
    </h4>
  );
}

export function P({ children, className }) {
  return (
    <p
      className={cn(
        'leading-7 [&:not(:first-child)]:mt-6 mb-8 max-w-xl',
        className
      )}
    >
      {children}
    </p>
  );
}

export function HR({
  className,
  mt = '1',
  mb = '1',
  mdmt = '1',
  mdmb = '1',
}) {
  return (
    <Separator
      className={cn(
        `mt-${mt} mb-${mb} md:mt-${mdmt} md:mb-${mdmb} bg-gradient-to-r
        from-white via-zinc-500 to-white
        dark:from-black dark:via-neutral-600 dark:to-black `,
        className
      )}
    />
  );
}

export function Section({ children, className }) {
  return (
    <section className={cn('container mx-auto', className)}>
      {children}
    </section>
  );
}

export function Main({ children, className }) {
  return (
    <main
      className={cn(
        '  items-center mx-auto max-w-screen-xl md:px-12 ',
        className
      )}
    >
      {children}
    </main>
  );
}

export function DisplayText({ children, className }) {
  return (
    <div
      className={cn(
        'text-3xl md:text-5xl lg:text-6xl font-semibold',
        className
      )}
    >
      {children}
    </div>
  );
}

export function SpanGradient({ children, className }) {
  return (
    <span
      className={cn(
        'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-600 to-blue-600 ',
        className
      )}
    >
      {children}
    </span>
  );
}

export function GetStartedButton({ className }) {
  return (
    <Button className={cn('flex ml-4 w-32', className)} asChild>
      <Link className={cn('group', className)} href='/get-started'>
        Get started{' '}
        <ArrowBigRight
          className={cn(
            'z-40 ml-1 -mr-1  transition-all duration-300 group-hover:translate-x-1',
            className
          )}
        />
      </Link>
    </Button>
  );
}

export function ArrowLink({ className, children, href }) {
  return (
    <Link className={cn('group flex w-32', className)} href={href}>
      {children}{' '}
      <ArrowBigRight
        className={cn(
          'z-40 ml-1 -mr-1  transition-all duration-300 group-hover:translate-x-1',
          className
        )}
      />
    </Link>
  );
}

export function LI({ children, className }) {
  return (
    <li className={cn('list-disc pb-4', className)}>{children}</li>
  );
}
