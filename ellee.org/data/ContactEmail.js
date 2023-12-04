'use client';

import { Email } from 'react-obfuscate-email';
import { cn } from '@/lib/utils';

export default function ContactEmail({ className }) {
  return (
    <Email
      className={cn(
        'font-normal text-neutral-400 hover:underline',
        className
      )}
      email='contact@ellee.org'
      subject='Contacting you'
    />
  );
}
