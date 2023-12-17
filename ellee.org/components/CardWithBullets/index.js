'use client';
import { cn } from '@/lib/utils';
// import Link from 'next/link';
import TagLabel from '../TagLabel';
import { ArrowLink } from '@/components/HTMLTags';

import Image from 'next/image';

// Why do I have double renders in this ?

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function CardWithBullets(
  { label, title, subtitle, bulletPoints, link, id },
  className
) {
  return (
    <li key={id}>
      {label ? <TagLabel label={label} /> : ''}
      {console.log({ id })}
      <Card
        className={cn(
          'md:w-full xl:w-[350px] bg-gradient-to-tr from-zinc-100 via-zinc-50 to-[#ffffff] dark:from-zinc-800 dark:via-zinc-900 dark:to-[#0a0a0a]  ',
          className
        )}
      >
        <CardHeader>
          <div className={cn('flex gap-4 pb-2', className)}>
            <CardTitle className={cn('pt-2 ', className)}>
              {/* <Link href={link} alt={title}> */}
              {title}
              {/* </Link> */}
            </CardTitle>
          </div>
          {subtitle ? (
            <CardDescription>{subtitle}</CardDescription>
          ) : (
            ''
          )}
        </CardHeader>
        <CardContent
          className={cn('grid gap-4 grid-cols-1', className)}
        >
          {' '}
          <ul>
            {bulletPoints.map((point, idx) => {
              return (
                <li className={cn('flex ', className)} key={idx}>
                  <Image
                    className={cn('mr-2 w-6 h-8', className)}
                    src={'/images/checkmark.png'}
                    width={20}
                    height={20}
                    quality={80}
                    alt=''
                  />
                  {point}
                </li>
              );
            })}
          </ul>
        </CardContent>
        <CardFooter>
          {link ? <ArrowLink href={link}>Read more</ArrowLink> : ''}
        </CardFooter>
      </Card>
    </li>
  );
}

export function SingleCardWithBullets(
  { label, title, subtitle, bulletPoints, link, key },
  className
) {
  return (
    <>
      {label ? <TagLabel label={label} /> : ''}

      <Card
        className={cn(
          'md:w-full xl:w-[350px] bg-gradient-to-tr from-zinc-100 via-zinc-50 to-[#ffffff] dark:from-zinc-800 dark:via-zinc-900 dark:to-[#0a0a0a]  ',
          className
        )}
      >
        <CardHeader>
          <div className={cn('flex gap-4 pb-2', className)}>
            <CardTitle className={cn('pt-2 ', className)}>
              {/* <Link href={link} alt={title}> */}
              {title}
              {/* </Link> */}
            </CardTitle>
          </div>
          {subtitle ? (
            <CardDescription>{subtitle}</CardDescription>
          ) : (
            ''
          )}
        </CardHeader>
        <CardContent
          className={cn('grid gap-4 grid-cols-1', className)}
        >
          {' '}
          <ul>
            {bulletPoints.map((point, idx) => {
              // console.log({ idx });
              return (
                <li className={cn('flex ', className)} key={idx}>
                  <Image
                    className={cn('mr-2 w-6 h-8', className)}
                    src={'/images/checkmark.png'}
                    width={20}
                    height={20}
                    quality={80}
                    alt=''
                  />
                  {point}
                </li>
              );
            })}
          </ul>
        </CardContent>
        <CardFooter>
          {link ? <ArrowLink href={link}>Read more</ArrowLink> : ''}
        </CardFooter>
      </Card>
    </>
  );
}
