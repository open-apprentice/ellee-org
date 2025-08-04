import { cn } from '@/lib/utils';
import { features } from '@/app/(Ellee LMS)/ellee-lms/general-features/data';
import LearningPatternCard from '@/components/LearningPatternCard';
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/(Call to actions)/CallToAction';
import { Section, Main, HR } from '@/components/HTMLTags';
import SectionHeading from '@/components/SectionHeading';
import CenteredText from '@/components/CenteredText';

import {
  CardWithBullets,
  SingleCardWithBullets,
} from '@/components/CardWithBullets';
import Image from 'next/image';

export default function GeneralFeaturesPage({ className }) {
  return (
    <Main>
      <PageHeader
        className={cn(
          'flex flex-col-reverse md:flex-row md:items-center'
        )}
        mainTitle={'General Features'}
        subTitle={
          "All the administration features you've come to expect in a modern LMS. These are the boring parts simply needed to administer any type of learning activity. These general features support your teaching, rather than governing the teaching experience or limiting what you can do."
        }
      >
        {' '}
        <Image
          src='/images/general-features.png'
          width={640}
          height={427}
          quality={80}
          alt=''
        />
      </PageHeader>

      <CenteredText className={cn('mb-10')}>
        <strong>Don't pay extra for basic features.</strong> You can
        only deliver a great teaching experience if you have what you
        need.
      </CenteredText>

      <SectionHeading
        title='Ellee ships with standard features'
        description='Ellee ships with the following admin features to give you the freedom to focus on teaching and creating the best content.'
        label='Ellee LMS Features'
      />

      <Section className={cn('mb-10')}>
        <ul
          className={cn(
            'grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-10',
            className
          )}
        >
          {features.map((feature) => {
            return (
              <CardWithBullets
                key={feature.id}
                label={feature.label}
                title={feature.title}
                subtitle={feature.subtitle}
                bulletPoints={feature.bulletPoints}
                link={feature.link}
              />
            );
          })}{' '}
        </ul>
      </Section>

      {/* accessible, integration, open source, private/public */}

      <Section className='flex mb-10'>
        <div className='hidden lg:flex items-center justify-center flex-1'>
          <div className='max-w-md text-center'>
            <Image
              src='/images/general-features-2.png'
              width={640}
              height={427}
              quality={80}
              alt=''
            />
          </div>
        </div>

        <div className='w-full bg-gray-10 lg:w-1/2 flex items-center justify-center'>
          <div className='max-w-md w-full'>
            <div className='text-neutral-500'>
              <SingleCardWithBullets
                label={'Built in features'}
                title={'Additional Built-in features'}
                bulletPoints={[
                  'Accessibility focused',
                  'Student privacy in the DNA',
                  'Desktop App',
                  'Plugin Ecosystem',
                  'Granular data and analytics',
                  'And much, much more...',
                ]}
                link={''}
              />
            </div>
          </div>
        </div>
      </Section>

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
    </Main>
  );
}
