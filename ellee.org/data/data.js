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

// 1  2     4     6  7  8     10
// 11    13 14 15    17 18    20
// 21 22 23    25 26 27    29 30
//    32    34 35 36    38 39 40
// 41    43 44 45 46 47    49
// 51   53 54 55 56 57 58 59 60

export const learningPatterns = [
  {
    number: 12,
    title: 'Repeat after me',
    description:
      'Repeat after me is a general pattern of instruction that allows for a teacher or instructor to have the student repeat exactly the same actions (or words) as the teacher. This pattern can be used by repeating something said, by repeating a note in music or scale, it can be typing out a pattern. Anything that allows for the student to mimic and duplicate exactly the teacher fits under this learning pattern.',
    summary:
      'True understanding comes after being able to duplicate exactly what the words or actions are.',
    link: '/repeat-after-me',
  },
  {
    number: 5,
    title: 'Look at it closely',
    description:
      'Look at it closely is a pattern that some individuals naturally engage in. Objects, tools, locations, in short anything related to the subject being studied can and should be observed by the student. This teaching pattern insists that a student look closely at the object, let\'s say, a "paintbrush", and note every observable charactertic that they can. Things like weight, size, color, feel, etc.',
    summary:
      'Any object a student will be in contact or using should be looked at closely',
    link: '/look-at-it-closely',
  },
  {
    number: 24,
    title: 'Talking heads',
    description:
      'Scripted by the instructor to mimic real life scenarios, the student is taught to handle situations by "talking heads". The student responds to one or more talking heads until they can expertly respond using the material or subject being taught. The teacher scripts different responses back to the student to ensure the student gains the complete understanding.',
    summary:
      "Practicing a scenario and it's possible outcomes when it's safe is better than learning something only as a theory.",
    link: '/talking-heads',
  },
  {
    number: 9,
    title: 'Prove it right or wrong',
    description:
      'A student will sometimes encounter data or information that seems unbelievable to them in some way. Rather than argue with the student, the teacher has the student argue how that data can be that way and then argue how it could not be that way. This pattern is continued back and forth, until the student is convinced one way or the other. This learning pattern can be used to have students learn key concepts that may seem unusual in practice.',
    summary:
      "It's never a good idea to be left with uncertainty when studying, in this way, a student can be confident about what they have learned.",
    link: '/prove-it-right-prove-it-wrong',
  },
  {
    number: 42,
    title: 'Compare and Contrast',
    description:
      'Compare and contrast has the student look at two concepts, texts, pictures, music, poem, etc., and describe how they are similar or the same, and then how they are different to each other. Back and forth. The goal of this pattern is to help the student understand there are differences needing difference responses. This training pattern helps increase the students ability to observe and react.',
    summary:
      'Competence is often defined by how an individual treats each person or object as a unique entity.',
    link: '/compare-and-contrast',
  },
  {
    number: 37,
    title: 'Sequence it',
    description:
      'Give the student every step of the process or procedure and they need to put them in sequence. Then enter in arbirtrary steps and check to see if the student really knows the exact steps. And finally, remove a step or two randomly and have the student sequence it and add in the missing steps. The goal is total memorization of the sequence necessary perfectly to accomplish the stated goal.',
    summary:
      'A procedure or process must be followed rote most of the time, otherwise the results are unexpected.',
    link: '/sequence-it',
  },
  {
    number: 16,
    title: 'What is false',
    description:
      'Solve hang ups and disagreements with the subject proactively by declaring upfront common false ideas, lies or misconcepts. Provide the false idea and then provide the true idea. Provide context for the true idea and prove it with indesputable evidence. Show lots of examples of the true idea in action. The student is asked to provide their own examples of how the true data is solved. ',
    summary:
      'False ideas and lies are a foundational barrier to learning; with empirically demonstrated truth one can understand fully.',
    link: '/what-is-false',
  },
  {
    number: 50,
    title: 'Learn the words first',
    description:
      'Teachers and instructors ensure they are understood by listing and defining the specialized or technical words related to the subject before the section where the words are first used. Definitions and examples help the student to get a clear idea of the word. The students make up their own sentences that show they understand the new definition. Once all the pre-section definitions are understood, the student continues onto explanation of the subject.',
    summary:
      'Every subject has specialized words related and defined for that subject, and with these learned first, this allows comprehension of what is being taught.',
    link: '/learn-the-words-first',
  },
  {
    number: 31,
    title: 'A walk through',
    description:
      'Show the student the overall picture by explaining key principle or basic steps a to z. Have the student walk through each step (or key principle) and get a general feel and understanding how and where things fit in the sequence of things. The student is simply asked to read or study about the overall broad concepts, and then asked to explain the overview in their own words broadly. This is followed by a deeper or expanded view of the subjects.',
    summary:
      'Without a general concept of each part, students cannot relate deeper information out of context.',
    link: '/a-walk-through',
  },
  {
    number: 28,
    title: 'Explain it to someone',
    description:
      'Previously prepared topics are given to the student to explain to another person who may not be familiar with the subject. The student must explain the concept or topic in such a way as to get the other person to understand it as well. By communication a student can remove any mental complexities associated with the subject. Most often a true understanding leads to direct and simple explanations that anyone can understand.',
    summary:
      'Communicating clearly about the subject to someone else shows an understanding of the material.',
    link: '/explain-it-to-someone',
  },
  {
    number: 33,
    title: 'Perform and report',
    description:
      'The student is asked to demonstrate or present the skill being learned to a friend. This could be cutting their hair, singing a song, coding a program or making a sales pitch. The friend grades the demonstration or presentation based on a checklist of criteria providing by the teacher. It\'s a question of, "Did the student do it?". This step is repeated with the same friend or another until the student can execute the intended activity flawlessly.',
    summary:
      "It's not enough to deal only in theory, a student must practice and perform the activity being taught.",
    link: '/perform-and-report',
  },
  {
    number: 19,
    title: 'Concept associations',
    description:
      'Here the teacher asks the students to associated certain object or concepts to buckets. The buckets could be steps in a sequence, parts the combine together or anything which function as part of a whole. The student is made to practice until they can accurately associate the pieces with the correct overall labels or buckets. This can apply to concepts such as categories of art as it can apply to actual pieces of a machine that go together.',
    summary:
      'Knowing which pieces go together and which pieces are disrelated ensure accurate and confident execution.',
    link: '/concept-associations',
  },
  {
    number: 48,
    title: 'Make a problem',
    description:
      'The student is asked to create a problem within the sphere of the topic or subject, and then using what they have learned, solve their problem. For example, a salesperson may dream up customer objections and then figure out themselves how to resolve them. Another example, a baker may dream up a missing ingredient and then figure out how to replace it. The key is to have the student repeat this until they feel comfortable posing as well as solving problems within the subject context.',
    summary:
      'Complete understanding of any topic involves being able to dream up problems within that subject and then solving them.',
    link: '/make-a-problem',
  },
  {
    number: 3,
    title: 'Good judgement',
    description:
      'The instructor provides two more relatively complex scenarios and possible actions (or responses) regarding the section just studied. The learner reviews each of the scenarios and possibilities. The learner must determine which of the provided scenarios is the best course of action and what is the expected outcome of each of the provided scenarios. In this way, the instructor gives real scenarios that the student can learn from and develop more judgement.',
    summary:
      'An individual has to develop judgement through actual experience and learning how to think about the subject.',
    link: '/good-judgement',
  },
  {
    number: 52,
    title: 'Break it into parts',
    description:
      'The student is given a seemingly complex task or situation. They are ask to first, isolate each of the parts that comprise the task. Afterwards, the second step is to analyse more closely each step and determine when in relation to the other parts it should get resolved. For example, the task of putting together a pile of motor parts. The student would isolate each of the parts as individual pieces and then start organizing them. Another example, is what individuals often do with puzzles. They may focus on borders first and then color groups or textures.',
    summary:
      'Problems and confusions, no matter how large, can be resolved by looking at each of the parts individually.',
    link: '/break-it-into-parts',
  },
];
