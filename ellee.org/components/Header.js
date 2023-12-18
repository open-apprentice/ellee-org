import * as React from 'react';
import { cn } from '@/lib/utils';

import { Logo } from './Logo';
import { MobileMainMenu } from './menus/MobileMainMenu';
import MainMenu from './menus/MainMenu';
import { ModeToggle } from './ModeToggle';
import { SocialMediaIcons } from '@/data/SocialIcons';
import { HR } from './HTMLTags';

export default function Header({ children, className }) {
  return (
    <header>
      <div
        className={cn(
          'flex w-full flex-row justify-between py-3 md:py-3  px-8 lg:px-8 items-center mx-auto max-w-screen-xl',
          className
        )}
      >
        <div className={cn('basis-32', className)}>
          <Logo />
        </div>
        <div className={cn('hidden mainmenu:block', className)}>
          <MainMenu />
        </div>
        <div
          className={cn('hidden mainmenu:block basis-32', className)}
        >
          <ul className={cn('flex gap-4 items-center', className)}>
            <SocialMediaIcons />
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
        <div className={cn('flex mainmenu:hidden', className)}>
          <MobileMainMenu />
        </div>
        {children}
      </div>
      <HR mb={8} />
    </header>
  );
}
