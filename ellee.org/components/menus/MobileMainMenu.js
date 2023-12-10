'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { useCases, elleeLMS } from '../../data/data';
import { Logo } from '../Logo';
import { SocialMediaIcons } from '@/data/SocialIcons';
import { ModeToggle } from '@/components/ModeToggle';
import { GetStartedButton } from '@/components/HTMLTags';

import ListItem from './ListItem';

import { Button } from '../ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowBigRight } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Menu as HamburgerIcon } from 'lucide-react';

export function MobileMainMenu({ className }) {
  return (
    <Sheet>
      <ModeToggle />
      <SheetTrigger className={cn('ml-2', className)} asChild>
        <Button variant='outline'>
          <HamburgerIcon />
          <span className={cn('sr-only', className)}>
            Toggle Menu
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className={cn('w-full pb-2 pl-6', className)}>
        <Logo />

        <ScrollArea
          className={cn('my-4 h-[calc(100vh-8rem)] pl-0', className)}
        >
          <ul className={cn('list-none mt-5', className)}>
            <li>
              <Link
                href='/'
                className={cn(
                  'inline-flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                  className
                )}
              >
                Home
              </Link>
            </li>
            <Separator className={cn('mt-4 mb-4', className)} />
            <li
              className={cn(
                'inline-flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
                className
              )}
            >
              Use Cases
            </li>
            <ul
              className={cn(
                'grid w-[250px] gap-3 p-4 md:w-[300px] mainmenu:grid-cols-2 lg:w-[600px] ',
                className
              )}
            >
              {useCases.map((useCase) => (
                <ListItem
                  key={useCase.title}
                  title={useCase.title}
                  href={useCase.href}
                  icon={useCase.icon}
                >
                  {useCase.description}
                </ListItem>
              ))}
            </ul>
            <Separator className={cn('mt-4 mb-4', className)} />

            <li
              className={cn(
                'inline-flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
                className
              )}
            >
              Ellee LMS
            </li>
            <ul
              className={cn(
                'grid w-[250px] gap-3 p-4 md:w-[300px] mainmenu:grid-cols-2 lg:w-[600px] ',
                className
              )}
            >
              <li className={cn('row-span-3', className)}>
                <Link
                  className={cn(
                    'flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 pl-5 pr-5 no-underline outline-none focus:shadow-md ',
                    className
                  )}
                  href={elleeLMS[0].href}
                >
                  <div
                    className={cn(
                      'inline-flex mb-2 mt-1 text-md font-medium',
                      className
                    )}
                  >
                    <span className={cn('pt-1 ', className)}>
                      {elleeLMS[0].icon}
                    </span>
                    <span className={cn('pl-2 ', className)}>
                      {elleeLMS[0].title}
                    </span>
                  </div>
                  <p
                    className={cn(
                      'text-sm leading-tight text-muted-foreground',
                      className
                    )}
                  >
                    {elleeLMS[0].description}
                  </p>
                </Link>
              </li>
              {elleeLMS.slice(1).map((elleeLMSlink) => (
                <ListItem
                  key={elleeLMSlink.title}
                  title={elleeLMSlink.title}
                  href={elleeLMSlink.href}
                  icon={elleeLMSlink.icon}
                >
                  {elleeLMSlink.description}
                </ListItem>
              ))}
            </ul>
            <Separator className={cn('mt-4 mb-4', className)} />
            <li>
              <Link
                href='/blog'
                className={cn(
                  'inline-flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                  className
                )}
              >
                Blog
              </Link>
            </li>
            <li>
              <GetStartedButton
                className={cn('mt-4 mb-4', className)}
              />
            </li>
          </ul>
          <ul className={cn('flex gap-3 mt-8 mb-24', className)}>
            <SocialMediaIcons />
          </ul>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
