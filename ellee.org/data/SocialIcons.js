import { cn } from '@/lib/utils';

export const TwitterIcon = ({ className }) => {
  return (
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
  );
};

export const LinkedInIcon = ({ className }) => {
  return (
    <a
      aria-label='LinkedIn'
      href='https://www.linkedin.com/showcase/ellee-lms'
      target='_blank'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        className={cn(
          'w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white',
          className
        )}
      >
        <path d='M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0zM7.12 20.452H3.558V8.995H7.12v11.457zM5.34 7.434a2.064 2.064 0 110-4.125 2.063 2.063 0 010 4.125zm15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286z'></path>
      </svg>
    </a>
  );
};

export const SocialMediaIcons = ({ className }) => {
  return (
    <>
      <TwitterIcon />
      <LinkedInIcon />
    </>
  );
};
