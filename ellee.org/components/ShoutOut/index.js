import { cn } from '@/lib/utils';
import Link from 'next/link';
import { P, Section } from '@/components/HTMLTags';
import { ArrowBigRight } from 'lucide-react';
import { ELogo } from '@/components/Logo';

export default function ShoutOut({ className }) {
  return (
    <Section
      className={cn(
        'hidden md:flex w-full flex-row items-center  justify-center m-0 p-0 pt-2  mb-0  mx-auto max-w-screen-xl',
        className
      )}
    >
      <ELogo width='25' className={cn('mb-0 p-0 pr-2', className)} />
      <P
        className={cn(
          '[&:not(:first-child)]:mt-0 max-w-xl mb-0 ',
          className
        )}
      >
        Read the latest Blog post and discover the latest{' '}
      </P>
      <Link
        className={cn(
          'group text-sm flex hover:underline pl-4 pt-1',
          className
        )}
        href='/blog'
      >
        Read blog{' '}
        <ArrowBigRight
          className={cn(
            'z-40 ml-1 -mr-1  transition-all duration-300 group-hover:translate-x-1',
            className
          )}
        />
      </Link>
    </Section>
  );
}
