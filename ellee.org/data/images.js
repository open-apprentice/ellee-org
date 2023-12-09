import Image from 'next/image';

export const TalkingHeads = () => {
  return (
    <Image
      priority
      src='/images/talking-heads.jpg'
      width={365}
      height={130}
      alt='Young student practicing on computer'
      // className={cn('block dark:hidden', className)}
    />
  );
};
