import { cn } from '@/lib/utils';

import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/(Call to actions)/CallToAction';
import { Section, Main, HR } from '@/components/HTMLTags';
import SectionHeading from '@/components/SectionHeading';
import CenteredText from '@/components/CenteredText';
import ContentSwitcher from '@/components/ContentSwitcher';

import {
  CardWithBullets,
  SingleCardWithBullets,
} from '@/components/CardWithBullets';
import Image from 'next/image';

export default function AdaptiveContent({ className }) {
  return (
    <Main
      className={cn(
        'container pt-12 md:pt-20 md:pb-20  items-center mx-auto max-w-screen-xl md:px-12 md:py-8 ',
        className
      )}
    >
      <PageHeader
        className={cn(
          'flex flex-col-reverse md:flex-row md:items-center mb-5'
        )}
        mainTitle={'Adaptive Content'}
        subTitle={
          "You wouldn't teach a three year old child in the same way as you teach an adult. That seems obvious. And an expert learning the latest updates, wouldn't need to relearn all the basics, right? Why do some websites teach with videos, and other with text or images? What about you — video or text? Adaptive content allows the concepts we're teaching to be presented to the learner in the best way for them as individual and unique learners."
        }
      >
        {' '}
        <Image
          src='/images/adaptive-content.png'
          width={580}
          height={387}
          quality={80}
          alt=''
        />
      </PageHeader>
      <CenteredText className={cn('mb-10')}>
        Apaptive content already happens when changing the language to
        french because our reader is french. Adaptive content is also
        changing the text to match geography.{' '}
        <strong>Adaptive Content can be so much more</strong>.
      </CenteredText>
      <SectionHeading
        title='Ellee Introduces Adaptive Content'
        description='Adaptive Content allows content creators, educational authors, and others the ability to simply create content within Ellee that fits each of their target audiences. It is like writing once and having content adapt and have potentially hundreds of tailor specific versions. It is one page, one website URL which adapts to the user.'
        label='Explaining Adaptive Content'
      />{' '}
      <Section className='flex mb-10'>
        <div className='hidden lg:flex items-center justify-center flex-1'>
          <div className='max-w-md text-center'>
            <Image
              src='/images/adaptive-content-2.png'
              width={640}
              height={462}
              quality={80}
              alt=''
            />
          </div>
        </div>

        <div className='w-full bg-gray-10 lg:w-1/2 flex items-center justify-center'>
          <div className='max-w-md w-full'>
            <div className='text-neutral-500'>
              <SingleCardWithBullets
                label={'Adaptive Content examples'}
                title={'How do we adapt content?'}
                bulletPoints={[
                  'Know your subject, well',
                  'Know your audience',
                  'Have a feedback loop',
                  'Publish and then study results',
                  '100% comprehension is the goal',
                ]}
                link={''}
              />
            </div>
          </div>
        </div>
      </Section>
      <ContentSwitcher
        option1={'Restaurant Chef'}
        option2={'Professor of Economics'}
        option3={'Single Mom'}
      />
      <SectionHeading
        className={cn('mb-10')}
        title='Ellee is OpenSource under GPL v.3'
        description='We believe being open source is a feature. We allow the hard work to be available to anyone. Our core mission includes democratizing education. We believe having an open code base that anyone can inspect is part of gaining adoption and usage. Anyone is free to use Ellee to teach any subject without limits privately or commerically.'
        subsection='However, individuals may not package or wrap Ellee as a service unless they are closely following the guidelines contained in the GPL v.3 license.'
        label='OpenSource as a feature'
      />
      <HR className={cn('mt-10')} />
      <Section>
        <CallToAction />
      </Section>
      <h1>Adaptive Content</h1>
      <p>
        My book is written for business professionals
        <br /> In tech
        <br /> In fintech <br /> In as Programmers
      </p>
    </Main>
  );
}
