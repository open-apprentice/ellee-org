import { cn } from '@/lib/utils';
import { learningPatterns } from './data';
import LearningPatternCard from '@/components/LearningPatternCard';
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/(Call to actions)/CallToAction';
import { H2, P, Section, Main, HR } from '@/components/HTMLTags';
import SectionHeading from '@/components/SectionHeading';
import CenteredText from '@/components/CenteredText';
import TagLabel from '@/components/TagLabel';

import Image from 'next/image';

export default function LearningPatternsPage({ className }) {
  return (
    <Main>
      <PageHeader
        className={cn(
          'flex flex-col-reverse md:flex-row md:items-center mb-5 md:mb-10'
        )}
        mainTitle={'Learning Patterns'}
        subTitle={
          'Over 50 individually unique Learning Patterns to help you teach your subject at scale. And teach as you would in real life. '
        }
      >
        {' '}
        <Image
          src='/images/learning_patterns.png'
          width={640}
          height={427}
          quality={80}
          alt=''
        />
      </PageHeader>

      <CenteredText className={cn('mb-10 md:mb-10')}>
        Learning Patterns work for any subject as they follow natural
        tendencies that work.
      </CenteredText>

      <div className={cn('flex justify-center ', className)}>
        <TagLabel label='Learning Patterns' />
      </div>

      <Section
        className={cn('flex flex-col md:flex-row mb-5 md:mb-10')}
      >
        <div className={cn('pb-5 md:pb-10')}>
          <Image
            className={cn('md:pr-10')}
            src='/images/learning_patterns_2.png'
            width={640}
            height={602}
            quality={80}
            alt=''
          />
        </div>

        <div className={cn('place-self-center md:pb-10')}>
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

      <HR className={cn('mb-10 md:mb-20')} />

      <SectionHeading
        title='A few (of many) Learning Patterns'
        description='Selected from over 50 different available components,
            these patterns are common but often unrecognized. '
        label='Ellee LMS'
      />

      <Section className={cn('mb-10 md:mb-20 ')}>
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

      <HR />

      <Section>
        <CallToAction />
      </Section>
    </Main>
  );
}
