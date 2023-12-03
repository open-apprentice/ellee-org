import * as React from 'react';
import { cn } from '@/lib/utils';

import { Logo } from './Logo';
import { MobileMainMenu } from './menus/MobileMainMenu';
import MainMenu from './menus/MainMenu';
import { ModeToggle } from './ModeToggle';

export default function Header({ children, className }) {
  return (
    <header
      className={cn(
        'flex w-full flex-row justify-between p-6 lg:px-8',
        className
      )}
    >
      <div>
        <Logo />
      </div>
      <div className={cn('hidden sm:block', className)}>
        <MainMenu />
      </div>
      <div className={cn('hidden sm:block', className)}>
        <ModeToggle />
      </div>
      <div className={cn('flex sm:hidden', className)}>
        <ModeToggle />
        <MobileMainMenu />
      </div>
      {children}
    </header>
  );
}
