import { cn } from '@/lib/utils';
import { learningPatterns } from '@/data/data';
import LearningPatternCard from '@/components/LearningPatternCard';

export default function Home({ className }) {
  return (
    <main
      className={cn(
        'container pt-12 md:pt-20 md:pb-20  items-center mx-auto max-w-screen-xl md:px-12 md:py-8 ',
        className
      )}
    >
      <h1>Learning Patterns</h1>

      {learningPatterns.map((pattern) => (
        <LearningPatternCard
          key={pattern.link}
          title={pattern.title}
          link={pattern.link}
          description={pattern.description}
          summary={pattern.summary}
        />
      ))}
    </main>
  );
}

// Revise the card to look good
// Find or create photos for each learning pattern
// ADD ALL THE DATA FOLDER
// Create individual pages for each learning pattern
