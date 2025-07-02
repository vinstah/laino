// 20 Additional Language Arts Assessment Questions for Quest Learning Platform

export const additionalLanguageArtsQuestions = [
  // Reading Comprehension & Story Elements
  {
    questTitle: "The Enchanted Library Mystery",
    question: "Read this passage: 'Maya discovered the old library's secret door behind a dusty bookshelf. As she stepped inside, glowing books floated through the air, whispering ancient stories.' What is the SETTING of this story?",
    type: 'multiple-choice' as const,
    options: ['A modern school', 'An enchanted library', 'Maya\'s bedroom', 'A dusty attic'],
    correctAnswer: 1,
    explanation: 'The setting is WHERE and WHEN a story takes place. The passage describes an old library with magical elements, making it an enchanted library.',
    difficulty: 'Beginner',
    tags: ['reading-comprehension', 'setting', 'story-elements', 'fantasy']
  },

  {
    questTitle: "Character Motivation Detective",
    question: "In the story, Jake practices basketball every day after school, even when it rains. He dreams of making the varsity team. What MOTIVATES Jake?",
    type: 'multiple-choice' as const,
    options: ['He loves rainy weather', 'He wants to avoid homework', 'He dreams of making the varsity team', 'His friends force him to practice'],
    correctAnswer: 2,
    explanation: 'Character motivation is WHY a character does something. Jake practices constantly because he dreams of making the varsity team.',
    difficulty: 'Intermediate',
    tags: ['character-analysis', 'motivation', 'reading-comprehension', 'sports']
  },

  {
    questTitle: "Theme Park of Ideas",
    question: "A story about a selfish prince who learns to share his wealth with poor villagers most likely has which THEME?",
    type: 'multiple-choice' as const,
    options: ['Money can\'t buy happiness', 'Generosity and kindness matter more than wealth', 'Princes are always selfish', 'Villages are better than castles'],
    correctAnswer: 1,
    explanation: 'Theme is the main message or lesson. A story about learning to share wealth with others teaches that generosity and kindness are more important than being rich.',
    difficulty: 'Intermediate',
    tags: ['theme', 'moral', 'character-development', 'fairy-tales']
  },

  // Grammar & Language Mechanics
  {
    questTitle: "Superhero Sentence Structure",
    question: "Which sentence is a COMPOUND sentence?",
    type: 'multiple-choice' as const,
    options: [
      'Captain Lightning flew quickly through the storm.',
      'The hero saved the city, and the people cheered.',
      'Because she was brave, Wonder Girl faced the villain.',
      'The superhero with incredible strength lifted the car.'
    ],
    correctAnswer: 1,
    explanation: 'A compound sentence has two independent clauses joined by a coordinating conjunction (and, but, or). "The hero saved the city" and "the people cheered" are both complete thoughts joined by "and".',
    difficulty: 'Intermediate',
    tags: ['grammar', 'sentence-structure', 'compound-sentences', 'superheroes']
  },

  {
    questTitle: "Punctuation Police Academy",
    question: "Which sentence uses quotation marks CORRECTLY?",
    type: 'multiple-choice' as const,
    options: [
      '"I can\'t wait for the movie", said Emma.',
      '"I can\'t wait for the movie," said Emma.',
      '"I can\'t wait for the movie.' said Emma.",
      'I can\'t wait for the movie, "said Emma."'
    ],
    correctAnswer: 1,
    explanation: 'In dialogue, the comma goes INSIDE the quotation marks when the sentence continues with a dialogue tag like "said Emma."',
    difficulty: 'Beginner',
    tags: ['punctuation', 'quotation-marks', 'dialogue', 'mechanics']
  },

  {
    questTitle: "Verb Tense Time Machine",
    question: "Yesterday, Maria _____ her grandmother. Tomorrow, she _____ her again. Which verbs complete the sentences correctly?",
    type: 'multiple-choice' as const,
    options: ['visits, visited', 'visited, will visit', 'will visit, visits', 'visiting, visit'],
    correctAnswer: 1,
    explanation: '"Yesterday" indicates past tense (visited), and "tomorrow" indicates future tense (will visit).',
    difficulty: 'Beginner',
    tags: ['verb-tenses', 'past-tense', 'future-tense', 'time-indicators']
  },

  // Vocabulary & Word Study
  {
    questTitle: "Context Clue Treasure Hunt",
    question: "Read: 'The ancient manuscript was so fragile that it crumbled when touched.' What does FRAGILE mean?",
    type: 'multiple-choice' as const,
    options: ['Very old', 'Easily broken', 'Very valuable', 'Hard to read'],
    correctAnswer: 1,
    explanation: 'The context clue "crumbled when touched" tells us that fragile means easily broken or delicate.',
    difficulty: 'Intermediate',
    tags: ['vocabulary', 'context-clues', 'word-meaning', 'manuscripts']
  },

  {
    questTitle: "Prefix Power Station",
    question: "If 'happy' means joyful, what does 'UNhappy' mean?",
    type: 'text-input' as const,
    correctAnswer: "sad",
    explanation: 'The prefix "un-" means "not" or "opposite of." So unhappy means not happy, or sad.',
    difficulty: 'Beginner',
    tags: ['prefixes', 'word-parts', 'vocabulary', 'opposites']
  },

  {
    questTitle: "Synonym Superhighway",
    question: "Which word is the BEST synonym for 'enormous'?",
    type: 'multiple-choice' as const,
    options: ['tiny', 'gigantic', 'medium', 'colorful'],
    correctAnswer: 1,
    explanation: 'Synonyms are words with similar meanings. "Enormous" and "gigantic" both mean very large.',
    difficulty: 'Beginner',
    tags: ['synonyms', 'vocabulary', 'word-relationships', 'size']
  },

  // Writing & Composition
  {
    questTitle: "Topic Sentence Tournament",
    question: "Which would be the BEST topic sentence for a paragraph about why dogs make great pets?",
    type: 'multiple-choice' as const,
    options: [
      'Dogs come in many different sizes and colors.',
      'My dog\'s name is Buddy and he is brown.',
      'Dogs make excellent pets because they are loyal, friendly, and protective.',
      'Some people prefer cats to dogs as pets.'
    ],
    correctAnswer: 2,
    explanation: 'A good topic sentence states the main idea clearly. This sentence tells us dogs make great pets AND gives three reasons why.',
    difficulty: 'Intermediate',
    tags: ['writing', 'topic-sentences', 'paragraph-structure', 'pets']
  },

  {
    questTitle: "Transition Bridge Builder",
    question: "Choose the BEST transition word: 'I wanted to go to the park. _____, it started raining.'",
    type: 'multiple-choice' as const,
    options: ['Also', 'However', 'First', 'Similarly'],
    correctAnswer: 1,
    explanation: '"However" shows contrast between wanting to go to the park and the rain preventing it.',
    difficulty: 'Intermediate',
    tags: ['transitions', 'writing', 'contrast', 'sentence-flow']
  },

  {
    questTitle: "Conclusion Captain",
    question: "Which is the BEST concluding sentence for a paragraph about recycling?",
    type: 'multiple-choice' as const,
    options: [
      'Recycling involves sorting different materials.',
      'My family recycles every Tuesday.',
      'Therefore, recycling helps protect our planet for future generations.',
      'Some people don\'t know how to recycle properly.'
    ],
    correctAnswer: 2,
    explanation: 'A good conclusion summarizes the main point and often uses words like "therefore" or "in conclusion." This sentence wraps up why recycling matters.',
    difficulty: 'Intermediate',
    tags: ['conclusions', 'writing', 'summarizing', 'environment']
  },

  // Poetry & Figurative Language
  {
    questTitle: "Metaphor Magic Show",
    question: "Which sentence contains a METAPHOR?",
    type: 'multiple-choice' as const,
    options: [
      'The cat ran like lightning.',
      'Her smile is sunshine on a cloudy day.',
      'The wind whispered through the trees.',
      'The pizza was as hot as fire.'
    ],
    correctAnswer: 1,
    explanation: 'A metaphor directly compares two unlike things without using "like" or "as." "Her smile IS sunshine" compares a smile to sunshine.',
    difficulty: 'Intermediate',
    tags: ['figurative-language', 'metaphors', 'poetry', 'comparisons']
  },

  {
    questTitle: "Alliteration Adventure",
    question: "Which phrase is an example of ALLITERATION?",
    type: 'multiple-choice' as const,
    options: ['Bright blue sky', 'Sally sells seashells', 'Big and small', 'Fast like wind'],
    correctAnswer: 1,
    explanation: 'Alliteration is when words start with the same sound. "Sally sells seashells" repeats the "s" sound.',
    difficulty: 'Beginner',
    tags: ['alliteration', 'sound-devices', 'poetry', 'repetition']
  },

  {
    questTitle: "Personification Playground",
    question: "In the sentence 'The old house groaned in the wind,' what is being personified?",
    type: 'multiple-choice' as const,
    options: ['The wind', 'The house', 'The sound', 'The age'],
    correctAnswer: 1,
    explanation: 'Personification gives human qualities to non-human things. Houses can\'t actually groan (a human sound), so the house is personified.',
    difficulty: 'Intermediate',
    tags: ['personification', 'figurative-language', 'human-qualities', 'houses']
  },

  // Research & Information Literacy
  {
    questTitle: "Source Sleuth Investigation",
    question: "You\'re writing a report about penguins. Which would be the MOST reliable source?",
    type: 'multiple-choice' as const,
    options: [
      'A blog post by someone who visited a zoo',
      'A National Geographic article by marine biologists',
      'A cartoon about talking penguins',
      'A social media post with penguin photos'
    ],
    correctAnswer: 1,
    explanation: 'Reliable sources are written by experts and published by trusted organizations. Marine biologists are penguin experts, and National Geographic is a respected publication.',
    difficulty: 'Advanced',
    tags: ['research', 'reliable-sources', 'information-literacy', 'credibility']
  },

  {
    questTitle: "Fact vs. Opinion Detective",
    question: "Which statement is a FACT?",
    type: 'multiple-choice' as const,
    options: [
      'Chocolate ice cream is delicious.',
      'Soccer is the most exciting sport.',
      'The human heart has four chambers.',
      'Winter is the best season.'
    ],
    correctAnswer: 2,
    explanation: 'Facts can be proven true or false. The human heart having four chambers is a scientific fact that can be verified.',
    difficulty: 'Beginner',
    tags: ['fact-vs-opinion', 'critical-thinking', 'evidence', 'science']
  },

  // Language Usage & Style
  {
    questTitle: "Audience Awareness Academy",
    question: "You\'re writing a letter to the school principal about a new playground. Which tone is MOST appropriate?",
    type: 'multiple-choice' as const,
    options: ['Casual and funny', 'Respectful and formal', 'Angry and demanding', 'Silly and playful'],
    correctAnswer: 1,
    explanation: 'When writing to authority figures like principals, use a respectful and formal tone to be taken seriously.',
    difficulty: 'Intermediate',
    tags: ['audience', 'tone', 'formal-writing', 'purpose']
  },

  {
    questTitle: "Homophones Hotel",
    question: "Choose the correct homophones: 'I can\'t _____ you over _____.'",
    type: 'multiple-choice' as const,
    options: ['here, hear', 'hear, here', 'here, here', 'hear, hear'],
    correctAnswer: 1,
    explanation: '"Hear" means to listen (I can\'t LISTEN to you), and "here" means in this place (over in this PLACE).',
    difficulty: 'Beginner',
    tags: ['homophones', 'spelling', 'word-choice', 'sound-alike']
  },

  {
    questTitle: "Revision Workshop Challenge",
    question: "Which revision BEST improves this sentence: 'The dog ran fast to the park and played there happily'?",
    type: 'multiple-choice' as const,
    options: [
      'The dog ran to the park and played.',
      'The energetic golden retriever sprinted joyfully to the neighborhood park.',
      'The dog ran very, very fast to the park and played really happily.',
      'To the park the dog ran fast and played there.'
    ],
    correctAnswer: 1,
    explanation: 'Good revision adds specific details and stronger verbs. "Energetic golden retriever," "sprinted," and "joyfully" make the sentence more vivid and interesting.',
    difficulty: 'Advanced',
    tags: ['revision', 'word-choice', 'descriptive-writing', 'improvement']
  }
];

// Helper function to organize questions by difficulty and topic
export const organizeLanguageArtsQuestions = () => {
  const byDifficulty = {
    Beginner: additionalLanguageArtsQuestions.filter(q => q.difficulty === 'Beginner'),
    Intermediate: additionalLanguageArtsQuestions.filter(q => q.difficulty === 'Intermediate'),
    Advanced: additionalLanguageArtsQuestions.filter(q => q.difficulty === 'Advanced')
  };

  const byTopic = {
    'Reading Comprehension': additionalLanguageArtsQuestions.filter(q => 
      q.tags.some(tag => ['reading-comprehension', 'story-elements', 'character-analysis', 'theme'].includes(tag))
    ),
    'Grammar & Mechanics': additionalLanguageArtsQuestions.filter(q => 
      q.tags.some(tag => ['grammar', 'punctuation', 'sentence-structure', 'verb-tenses'].includes(tag))
    ),
    'Vocabulary & Word Study': additionalLanguageArtsQuestions.filter(q => 
      q.tags.some(tag => ['vocabulary', 'context-clues', 'prefixes', 'synonyms', 'homophones'].includes(tag))
    ),
    'Writing & Composition': additionalLanguageArtsQuestions.filter(q => 
      q.tags.some(tag => ['writing', 'topic-sentences', 'transitions', 'conclusions', 'revision'].includes(tag))
    ),
    'Poetry & Figurative Language': additionalLanguageArtsQuestions.filter(q => 
      q.tags.some(tag => ['figurative-language', 'metaphors', 'alliteration', 'personification', 'poetry'].includes(tag))
    ),
    'Research & Information Literacy': additionalLanguageArtsQuestions.filter(q => 
      q.tags.some(tag => ['research', 'reliable-sources', 'fact-vs-opinion', 'information-literacy'].includes(tag))
    ),
    'Language Usage & Style': additionalLanguageArtsQuestions.filter(q => 
      q.tags.some(tag => ['audience', 'tone', 'formal-writing', 'word-choice'].includes(tag))
    )
  };

  const byGradeLevel = {
    'Elementary (3rd-5th)': additionalLanguageArtsQuestions.filter(q => 
      q.difficulty === 'Beginner' && 
      q.tags.some(tag => ['story-elements', 'punctuation', 'prefixes', 'alliteration', 'fact-vs-opinion'].includes(tag))
    ),
    'Middle School (6th-8th)': additionalLanguageArtsQuestions.filter(q => 
      q.difficulty === 'Intermediate' && 
      q.tags.some(tag => ['character-analysis', 'compound-sentences', 'context-clues', 'metaphors', 'audience'].includes(tag))
    ),
    'High School (9th+)': additionalLanguageArtsQuestions.filter(q => 
      q.difficulty === 'Advanced' && 
      q.tags.some(tag => ['reliable-sources', 'revision', 'critical-thinking'].includes(tag))
    )
  };

  const bySkillType = {
    'Reading Skills': additionalLanguageArtsQuestions.filter(q => 
      q.tags.some(tag => ['reading-comprehension', 'context-clues', 'story-elements', 'theme'].includes(tag))
    ),
    'Writing Skills': additionalLanguageArtsQuestions.filter(q => 
      q.tags.some(tag => ['writing', 'topic-sentences', 'transitions', 'revision', 'audience'].includes(tag))
    ),
    'Language Skills': additionalLanguageArtsQuestions.filter(q => 
      q.tags.some(tag => ['grammar', 'punctuation', 'vocabulary', 'verb-tenses', 'homophones'].includes(tag))
    ),
    'Literary Analysis': additionalLanguageArtsQuestions.filter(q => 
      q.tags.some(tag => ['figurative-language', 'character-analysis', 'theme', 'poetry'].includes(tag))
    )
  };

  return { byDifficulty, byTopic, byGradeLevel, bySkillType };
};

// Reading level indicators for accessibility
export const readingLevelGuide = {
  'Beginner': {
    lexileRange: '200L-500L',
    gradeEquivalent: '2nd-4th Grade',
    characteristics: ['Simple sentences', 'Common vocabulary', 'Concrete concepts', 'Clear story structure']
  },
  'Intermediate': {
    lexileRange: '500L-800L',
    gradeEquivalent: '4th-7th Grade',
    characteristics: ['Complex sentences', 'Academic vocabulary', 'Abstract concepts', 'Multiple story elements']
  },
  'Advanced': {
    lexileRange: '800L-1200L',
    gradeEquivalent: '7th-12th Grade',
    characteristics: ['Sophisticated syntax', 'Advanced vocabulary', 'Critical thinking', 'Literary analysis']
  }
};

// Assessment strategies for different learning profiles
export const languageArtsStrategies = {
  visual: ['Graphic organizers', 'Story maps', 'Color-coded text', 'Visual vocabulary cards'],
  auditory: ['Read-aloud options', 'Audio recordings', 'Rhyme and rhythm', 'Discussion opportunities'],
  kinesthetic: ['Interactive word games', 'Physical story acting', 'Hands-on writing activities', 'Movement breaks'],
  adhd: ['Chunked text', 'Clear instructions', 'Frequent feedback', 'Choice in topics'],
  autism: ['Predictable structure', 'Clear expectations', 'Special interests integration', 'Processing time'],
  dyslexia: ['Multi-sensory approaches', 'Phonics support', 'Text-to-speech options', 'Spelling alternatives']
};