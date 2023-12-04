import * as React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { ELogo } from './Logo';
import { useCases, elleeLMS } from '@/data/data';
import ContactEmail from '@/data/ContactEmail';

import { ModeToggle } from './ModeToggle';

export default function Footer({ children, className }) {
  return (
    <footer
      className={cn(
        'container pt-12 md:pt-20 md:pb-20  items-center mx-auto max-w-screen-xl md:px-12 md:py-8 ',
        className
      )}
    >
      <nav>
        <ul
          className={cn(
            'grid grid-cols-2 gap-y-2 gap-x-10 md:gap-10 xl:gap-0 md:grid-cols-3 xl:justify-between xl:flex xl:flex-wrap',
            className
          )}
        >
          {/* ELLEE LOGO */}
          <li className={cn('mb-8 md:w-auto md:mb0')}>
            <div className={cn('mb-6 sm:mb-0', className)}>
              <ELogo width={180} />
            </div>
          </li>

          {/* USE CASES */}
          <li className={cn('mb-8 md:w-auto md:mb0')}>
            <h2
              className={cn(
                'text-neutral-400 text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest',
                className
              )}
            >
              USE CASES
            </h2>
            <ul>
              {useCases.map((useCase) => (
                <li
                  className={cn(
                    'flex mb-3 text-xs md:text-sm md:mb-3',
                    className
                  )}
                  key={useCase.title}
                >
                  <Link
                    className={cn(
                      'font-normal text-neutral-400 hover:underline',
                      className
                    )}
                    href={useCase.href}
                  >
                    {useCase.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* ELLEE LMS */}
          <li className={cn('mb-8 md:w-auto md:mb0')}>
            <h2
              className={cn(
                'text-neutral-400 text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest',
                className
              )}
            >
              ELLEE LMS
            </h2>
            <ul>
              {elleeLMS.map((elleeLMSlink) => (
                <li
                  className={cn(
                    'flex mb-3 text-xs md:text-sm md:mb-3',
                    className
                  )}
                  key={elleeLMSlink.title}
                >
                  <Link
                    className={cn(
                      'font-normal text-neutral-400 hover:underline',
                      className
                    )}
                    href={elleeLMSlink.href}
                  >
                    {elleeLMSlink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* CONTACT */}
          <li className={cn('mb-8 md:w-auto md:mb0')}>
            <h2
              className={cn(
                'text-neutral-400 text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest',
                className
              )}
            >
              CONTACT
            </h2>

            <ul>
              <li
                className={cn(
                  'flex mb-3 text-xs md:text-sm md:mb-3',
                  className
                )}
              >
                <ContactEmail />
              </li>
              <li
                className={cn(
                  'flex gap-3 mt-8 text-neutral-400',
                  className
                )}
              >
                <a
                  aria-label='Twitter'
                  href='https://twitter.com/ellee_lms'
                  target='_blank'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    role='img'
                    className={cn(
                      'w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white',
                      className
                    )}
                  >
                    <path d='M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231 5.45-6.231h.002zm-1.16 17.52h1.832L7.045 4.126H5.078L17.044 19.77z'></path>
                  </svg>
                </a>
                <a
                  aria-label='LinkedIn'
                  href='https://www.linkedin.com/showcase/ellee-lms'
                  target='_blank'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    class='w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white'
                  >
                    <path d='M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0zM7.12 20.452H3.558V8.995H7.12v11.457zM5.34 7.434a2.064 2.064 0 110-4.125 2.063 2.063 0 010 4.125zm15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286z'></path>
                  </svg>
                </a>
              </li>
            </ul>
          </li>
          {/* SOCIAL MEDIA */}
        </ul>
      </nav>

      <div
        className={cn(
          'flex text-xs md:text-sm  justify-between flex-col md:flex-row pt-6 md:mt-12 pb-12 border-neutral-800 border-t',
          className
        )}
      >
        <span className={cn('text-neutral-400', className)}>
          © 2023{' '}
          <a
            href='https://ellee.org'
            target='_blank'
            className={cn('hover:underline', className)}
          >
            Ellee™ LMS
          </a>
          . All Rights Reserved.
        </span>
        <span
          className={cn('mt-4 md:mt-0 text-neutral-400', className)}
        >
          <Link
            href='/about-us'
            className={cn('text-neutral-400 font-normal', className)}
          >
            About
          </Link>{' '}
          &{' '}
          <Link
            href='/privacy-policy'
            className={cn('text-neutral-400 font-normal', className)}
          >
            Privacy Policy
          </Link>
        </span>
      </div>
    </footer>
  );
}

// https://www.linkedin.com/showcase/ellee-lms
// https://twitter.com/ellee_lms
