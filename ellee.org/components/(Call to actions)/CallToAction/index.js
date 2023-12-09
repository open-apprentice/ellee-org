import { cn } from '@/lib/utils';
import {
  DisplayText,
  SpanGradient,
  GetStartedButton,
} from '@/components/HTMLTags';

import Link from 'next/link';

export default function CallToAction({ className }) {
  return (
    <section className={cn('container', className)}>
      <div className={cn('mx-auto text-center w-auto', className)}>
        <DisplayText>
          The needed next evolution in education is{' '}
          <SpanGradient>now a reality.</SpanGradient>
        </DisplayText>
        <div
          className={cn(
            'flex content-center gap-5 items-center place-content-center text-xl  mt-16 mb-40 ',
            className
          )}
        >
          <GetStartedButton />
          <Link href='/get-started'>Learn more </Link>
        </div>
      </div>
    </section>
  );
}
