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
    title: 'Modular Knowledge',
    href: '/ellee-lms',
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

export const learningPatterns = [
  {
    title: 'Repeat after me',
    description:
      'Repeat after me is a general pattern of instruction that allows for a teacher or instructor to have the student repeat exactly the same actions (or words) as the teacher. This pattern can be used by repeating something said, by repeating a note in music or scale, it can be typing out a pattern. Anything that allows for the student to mimic and duplicate exactly the teacher fits under this learning pattern.',
    summary:
      'True understanding comes after being able to duplicate exactly what the words or actions are.',
    link: '/repeat-after-me',
  },
  {
    title: 'Look at it closely',
    description:
      'Look at it closely is a pattern that some individuals naturally engage in. Objects, tools, locations, in short anything related to the subject being studied can and should be observed by the student. This teaching pattern insists that a student look closely at the object, let\'s say, a "paintbrush", and note every observable charactertic that they can. Things like weight, size, color, feel, etc.',
    summary:
      'Any object a student will be in contact or using should be looked at closely',
    link: '/look-at-it-closely',
  },
  {
    title: 'Talking heads',
    description:
      'Scripted by the instructor to mimic real life scenarios, the student is taught to handle situations by "talking heads". The student responds to one or more talking heads until they can expertly respond using the material or subject being taught. The teacher scripts different responses back to the student to ensure the student gains the complete understanding.',
    summary:
      "Practicing a scenario and it's possible outcomes when it's safe is better than learning something only as a theory.",
    link: '/talking-heads',
  },
  {
    title: 'Prove it right, prove it wrong',
    description:
      'A student will sometimes encounter data or information that seems unbelievable to them in some way. Rather than argue with the student, the teacher has the student argue how that data can be that way and then argue how it could not be that way. This pattern is continued back and forth, until the student is convinced one way or the other. This learning pattern can be used to have students learn key concepts that may seem unusual to practice.',
    summary:
      "It's never a good idea to be left with uncertainty when studying, in this way, a student can be confident about what they have learned.",
    link: 'prove-it-right-prove-it-wrong',
  },
];
