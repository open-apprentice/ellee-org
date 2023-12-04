import Image from 'next/image';
import lightLogo from './ellee-logo-w.png';
import darkLogo from './ellee-logo-b.png';
import greyLogo from './ellee-elephant-grey-footer.png';
import lightSquareLogo from './ellee-elephant-white-sq.png';
import darkSquareLogo from './ellee-elephant-black-sq.png';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Logo = ({
  width = 'auto',
  height = '40',
  className,
}) => {
  return (
    <Link href='/'>
      <Image
        priority
        src={darkLogo}
        width={width}
        height={height}
        alt='Ellee LMS logo'
        className={cn('block dark:hidden', className)}
      />
      <Image
        priority
        src={lightLogo}
        width={width}
        height={height}
        alt='Ellee LMS logo'
        className={cn('hidden dark:block', className)}
      />
    </Link>
  );
};

export const ELogo = ({
  width = 'auto',
  height = '40',
  className,
}) => {
  return (
    <Link href='/'>
      <Image
        priority
        src={darkSquareLogo}
        width={width}
        height={height}
        alt='Ellee LMS logo'
        className={cn('block dark:hidden', className)}
      />
      <Image
        priority
        src={lightSquareLogo}
        width={width}
        height={height}
        alt='Ellee LMS logo'
        className={cn('hidden dark:block', className)}
      />
    </Link>
  );
};

export const GreyFooterLogo = ({
  width = 'auto',
  height = '40',
  className,
}) => {
  return (
    <Link href='/'>
      <Image
        priority
        src={greyLogo}
        width={width}
        height={height}
        alt='Ellee LMS logo'
        className={cn('block dark:hidden', className)}
      />
      <Image
        priority
        src={greyLogo}
        width={width}
        height={height}
        alt='Ellee LMS logo'
        className={cn('hidden dark:block', className)}
      />
    </Link>
  );
};
