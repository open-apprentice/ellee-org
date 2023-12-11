import { cn } from '@/lib/utils';
import { learningPatterns } from '@/data/data';
import LearningPatternCard from '@/components/LearningPatternCard';
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/(Call to actions)/CallToAction';
import { H2, P, Section, Main, HR } from '@/components/HTMLTags';
import SectionHeading from '@/components/SectionHeading';
import CenteredText from '@/components/CenteredText';

import Image from 'next/image';

// add two more learning patterns
// determine and fix vertical padding and margins

export default function LearningPatternsPage({ className }) {
  return (
    <Main>
      <PageHeader
        className={cn(
          'flex flex-col-reverse md:flex-row md:items-center mb-12 md:mb-20 p-0'
        )}
        mainTitle={'Learning Patterns'}
        subTitle={
          'Over 50 individually unique Learning Patterns to help you teach your subject at scale. And teach as you would in real life. '
        }
      >
        {' '}
        <Image
          className={cn('mb-8 md:pl-10')}
          src='/images/learning_patterns.png'
          width={640}
          height={427}
          quality={100}
          alt=''
        />
      </PageHeader>
      <CenteredText>
        Learning Patterns work for any subject as they follow natural
        tendencies that work.
      </CenteredText>

      <HR className={cn('mb-20')} />

      <Section
        className={cn('flex flex-col md:flex-row mb-12 md:mb-20 p-0')}
      >
        <div>
          <Image
            className={cn('mb-8 md:pr-10')}
            src='/images/learning_patterns_2.png'
            width={640}
            height={602}
            quality={100}
            alt=''
          />
        </div>
        <div className={cn('place-self-center pt-4')}>
          <H2>What is a Learning Pattern?</H2>

          <P>
            We can define a <strong>Learning Pattern</strong> as a
            recognizable and repeatable series of actions that
            teachers, educators, parents or anyone teaching another
            has the learner do. Ellee takes these patterns and makes
            them available as composable content sections that anyone
            can use to ensure students learn using the most successful
            teaching practices.
          </P>

          <P>
            We didn't invent most of these patterns. We observed top
            teachers from all types of discplines, and copied them.
          </P>
        </div>
      </Section>
      <HR className={cn('mb-20')} />

      <SectionHeading
        title='A few (of many) Learning Patterns'
        description='Selected from over 50 different available components,
            these patterns are common but often unrecognized. '
        label='Ellee LMS'
      />

      <Section className={cn('mb-20 md:mb-40 p-0')}>
        <div
          className={cn(
            'grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3',
            className
          )}
        >
          {learningPatterns.map((pattern) => (
            <LearningPatternCard
              key={pattern.link}
              title={pattern.title}
              link={pattern.link}
              description={pattern.description}
              summary={pattern.summary}
              number={pattern.number}
            />
          ))}
        </div>
      </Section>
      <Section>
        <CallToAction />
      </Section>
    </Main>
  );
}
