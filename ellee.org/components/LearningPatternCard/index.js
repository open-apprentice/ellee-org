'use client';
import { cn } from '@/lib/utils';
// import Link from 'next/link';
import { P, SpanGradient } from '@/components/HTMLTags';

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function LearningPatternCard(
  { title, description, summary, link, number },
  className
) {
  return (
    <Card
      className={cn(
        'md:w-full xl:w-[350px] bg-gradient-to-tr from-zinc-100 via-zinc-50 to-[#ffffff] dark:from-zinc-800 dark:via-zinc-900 dark:to-[#0a0a0a]  ',
        className
      )}
    >
      <CardHeader
      // className={cn(
      //   'bg-gradient-to-tr from-zinc-600 via-zinc-800 to-zinc-900',
      //   className
      // )}
      >
        <div className={cn('flex gap-4 pb-2', className)}>
          <SpanGradient
            className={cn('text-5xl align-middle', className)}
          >
            {number}
          </SpanGradient>{' '}
          <CardTitle className={cn('pt-2 ', className)}>
            {/* <Link href={link} alt={title}> */}
            {title}
            {/* </Link> */}
          </CardTitle>
        </div>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
      <CardContent
        className={cn('grid gap-4 grid-cols-1', className)}
      >
        <P>{description}</P>
      </CardContent>
      {/* <CardFooter>
        <P>
          <Link href={link} alt={title}>
            Read more about:{' '}
            <strong className={cn('hover:underline', className)}>
              {title}
            </strong>
            .
          </Link>
        </P>
      </CardFooter> */}
    </Card>
  );
}
