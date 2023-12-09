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
        'md:w-full xl:w-[350px] hover:bg-zinc-100 dark:hover:bg-zinc-900 ',
        className
      )}
    >
      <CardHeader>
        <div className={cn('flex gap-4 ', className)}>
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
