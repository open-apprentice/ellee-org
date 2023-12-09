import { cn } from '@/lib/utils';
import { learningPatterns } from '@/data/data';
import LearningPatternCard from '@/components/LearningPatternCard';
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/(Call to actions)/CallToAction';
import { H2, P, Section, Main } from '@/components/HTMLTags';

// fix vercel error for Footer, copy and paste new Footer component
// Hero Image
// Gradients and spotlight
// Button Design and special effects
// Call to Action Design
// Letter gradient
// corner card gradients

// finish adding button
// create radial gradient https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient
// Craft the spotlight for the cards and other elements https://cruip.com/how-to-create-a-spotlight-card-hover-effect-with-tailwind-css/#create-a-reusable-spotlight-component-for-nextjs https://www.julienthibeaut.xyz/blog/create-modern-spotlight-effect-with-react-css

export default function LearningPatternsPage({ className }) {
  return (
    <Main>
      <PageHeader
        mainTitle={'Learning Patterns'}
        subTitle={
          'Over 50 individually unique Learning Patterns to help you teach your subject exactly as you would in real life. '
        }
      />
      <Section>
        <H2>What is a Learning Pattern?</H2>

        <P>
          We can define a <strong>Learning Pattern</strong> as a
          recognizable and repeatable series of actions that teachers,
          educators, parents or anyone teaching another has the
          learner to do. Ellee takes these patterns and makes them
          available in composable content sections that anyone can use
          to ensure students learn using the most successful teaching
          practices.
        </P>
      </Section>

      <Section>
        <H2>A few (of many) Learning Patterns</H2>
        <P>
          Selected from over 50 different available components, these
          show common and often unrecognized patterns. We didn't event
          most of these patterns. We observed top teachers from all
          types of discplines.
        </P>
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
