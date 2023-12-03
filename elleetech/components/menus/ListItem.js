import React from 'react';
import { cn } from '@/lib/utils';

const ListItem = React.forwardRef(
  ({ className, title, icon, children, ...props }, ref) => {
    return (
      <li>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div
            className={cn(
              'inline-flex text-sm font-medium leading-none',
              className
            )}
          >
            {icon}
            <span className={cn('pl-2', className)}>{title}</span>
          </div>
          <p
            className={cn(
              'line-clamp-2 text-sm leading-snug text-muted-foreground pl-8',
              className
            )}
          >
            {children}
          </p>
        </a>
      </li>
    );
  }
);

export default ListItem;
