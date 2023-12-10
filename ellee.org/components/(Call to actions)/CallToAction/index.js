import { cn } from '@/lib/utils';
import {
  DisplayText,
  SpanGradient,
  GetStartedButton,
} from '@/components/HTMLTags';

import { ArrowBigRight } from 'lucide-react';

import Link from 'next/link';

export default function CallToAction({ className }) {
  return (
    <div
      className={cn('mx-auto text-center w-auto pt-20 ', className)}
    >
      <DisplayText>
        The needed next evolution in education is{' '}
        <SpanGradient>now a reality.</SpanGradient>
      </DisplayText>
      <div
        className={cn(
          'flex content-center gap-5 items-center place-content-center   mt-16 mb-40 ',
          className
        )}
      >
        <GetStartedButton />
        <Link
          className={cn(
            'group text-sm flex hover:underline',
            className
          )}
          href='/get-started'
        >
          Learn more{' '}
          <ArrowBigRight
            className={cn(
              'z-40 ml-1 -mr-1  transition-all duration-300 group-hover:translate-x-1',
              className
            )}
          />
        </Link>
      </div>
    </div>
  );
}
