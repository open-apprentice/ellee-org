import {
  BookOpenText,
  BookA,
  Newspaper,
  PodcastIcon,
  BookMarkedIcon,
  Grid3X3Icon,
  KeyIcon,
  ArrowDown01,
  BookOpenCheck,
} from 'lucide-react';

import Image from 'next/image';

export const useCases = [
  {
    title: 'Teach a Course',
    href: '/use-cases/teach-a-course',
    description: 'A course covers an individual subject completely.',
    icon: <BookMarkedIcon />,
  },
  {
    title: 'Teach a Class',
    href: '/use-cases/teach-a-class',
    description:
      'A class teaches multiple students learning a subject together',
    icon: <BookA />,
  },
  {
    title: 'Teach a Book',
    href: '/use-cases/teach-a-book',
    description: 'A book is written to be learned, not just read.',
    icon: <BookOpenText />,
  },
  {
    title: 'Teach a Podcast',
    href: '/use-cases/teach-a-podcast',
    description:
      'A podcast is heard but often benefits with additional visual context.',
    icon: <PodcastIcon />,
  },
  {
    title: 'Teach a Post',
    href: '/use-cases/teach-a-post',
    description:
      'A post or article is a singular published document.',
    icon: <Newspaper />,
  },
];

export const elleeLMS = [
  {
    title: 'Knowledge Reused',
    href: '/ellee-lms/knowledge-reused',
    description:
      "Allows to document knowledge once; then share everywhere to any other teacher. Teach only the part you're expert at.",
    icon: <BookOpenCheck />,
  },
  {
    title: 'Adaptive Content',
    href: '/ellee-lms/adaptive-content',
    description:
      'Adaptive Content morphs the content to match the student intelligently to speed up progress.',
    icon: <ArrowDown01 />,
  },
  {
    title: 'Learning Patterns',
    href: '/ellee-lms/learning-patterns',
    description:
      'Dozens of learning patterns available to teach your content exactly the right way.',
    icon: <Grid3X3Icon />,
  },
  {
    title: 'General Features',
    href: '/ellee-lms/general-features',
    description: 'Ellee has all the features you expect from an LMS',
    icon: <KeyIcon />,
  },
];
