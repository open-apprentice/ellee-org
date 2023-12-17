import * as React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { GreyFooterLogo } from '../Logo';
import { useCases, elleeLMS } from '@/components/menus/data';
import ContactEmail from '@/data/ContactEmail';
import { SocialMediaIcons } from '@/data/SocialIcons';
import { ModeToggle } from '../ModeToggle';

export default function Footer({ className }) {
  return (
    <footer
      className={cn(
        'container pt-12 md:pt-20 md:pb-20  items-center mx-auto max-w-screen-xl md:px-12 md:py-8 text-neutral-800 dark:text-neutral-400',
        className
      )}
    >
      <nav>
        <ul
          className={cn(
            'grid grid-cols-2 gap-y-2 gap-x-10 md:gap-10 xl:gap-0 md:grid-cols-3 lg:grid-cols-4 xl:justify-between xl:flex xl:flex-wrap',
            className
          )}
        >
          {/* ELLEE LOGO */}
          <li
            className={cn(
              'mb-8 md:w-auto md:mb0 md:order-last lg:order-first'
            )}
          >
            <div className={cn('mb-6 sm:mb-0', className)}>
              <GreyFooterLogo width={180} height={'auto'} />
            </div>
          </li>

          {/* USE CASES */}
          <li className={cn('mb-8 md:w-auto md:mb0')}>
            <h2
              className={cn(
                'text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest',
                className
              )}
            >
              USE CASES
            </h2>
            <ul>
              {useCases.map((useCase) => (
                <li
                  className={cn(
                    'flex mb-3 text-xs md:text-sm md:mb-3 ',
                    className
                  )}
                  key={useCase.title}
                >
                  <Link
                    className={cn(
                      'font-normal hover:underline',
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
                'text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest',
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
                      'font-normal hover:underline',
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

          {/* CONTACT & ABOUT */}
          <li className={cn('mb-8 md:w-auto md:mb0')}>
            <h2
              className={cn(
                'text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest',
                className
              )}
            >
              CONTACT & ABOUT
            </h2>

            <ul>
              <li
                className={cn(
                  'flex mb-3 text-xs md:text-sm md:mb-3 ',
                  className
                )}
              >
                <Link
                  className={cn(
                    'font-normal  hover:underline',
                    className
                  )}
                  href='/about-us'
                >
                  About us
                </Link>
              </li>
              <li
                className={cn(
                  'flex mb-3 text-xs md:text-sm md:mb-3 ',
                  className
                )}
              >
                <ContactEmail
                  className={cn(
                    'text-neutral-800 dark:text-neutral-400',
                    className
                  )}
                />
              </li>
            </ul>
            <ul className={cn('flex gap-4 items-center', className)}>
              <SocialMediaIcons />
              <li>
                <ModeToggle />
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div
        className={cn(
          'flex text-xs md:text-sm  justify-between flex-col md:flex-row pt-6 md:mt-12 pb-12 border-neutral-800 border-t',
          className
        )}
      >
        <span>
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
        <span className={cn('mt-4 md:mt-0 ', className)}>
          <Link
            href='/terms-of-use'
            className={cn('font-normal hover:underline', className)}
          >
            Terms of Use
          </Link>{' '}
          &{' '}
          <Link
            href='/privacy-policy'
            className={cn(' font-normal hover:underline', className)}
          >
            Privacy Policy
          </Link>
        </span>
      </div>
    </footer>
  );
}
