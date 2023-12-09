'use client';

import * as React from 'react';
import Link from 'next/link';
import ListItem from './ListItem';
import { useCases, elleeLMS } from '@/data/data';
import { ArrowBigRight } from 'lucide-react';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { Button } from '@/components/ui/button';

export default function MainMenu({ className }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href='/' legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={cn(
                'grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ',
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
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Ellee LMS</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={cn(
                'grid gap-3 p-6  md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]',
                className
              )}
            >
              <li className={cn('row-span-3', className)}>
                <NavigationMenuLink asChild>
                  <Link
                    className={cn(
                      'flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 pb-14 no-underline outline-none focus:shadow-md ',
                      className
                    )}
                    href={elleeLMS[0].href}
                  >
                    <div
                      className={cn(
                        'mb-2 mt-4 text-lg font-medium',
                        className
                      )}
                    >
                      <span className={cn('pt-1 ', className)}>
                        {elleeLMS[0].icon}
                      </span>
                      <span className={cn('pl-0 ', className)}>
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
                </NavigationMenuLink>
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
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/blog' legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
            >
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button asChild>
            <Link href='/get-started'>
              Get started <ArrowBigRight />
            </Link>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
