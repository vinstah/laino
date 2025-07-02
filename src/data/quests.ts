// Additional quests designed specifically for neurodivergent learners
// Building on the existing Quest interface structure

export const additionalQuests: Quest[] = [
  // MATHEMATICS - Building on fractions
  {
    id: 'math-fractions-advanced',
    title: 'The Great Fraction Bakery Challenge',
    description: 'Help Chef Luna run her bakery by adding and subtracting fractions with different denominators!',
    subject: 'mathematics',
    difficulty: 'Intermediate',
    duration: 20,
    type: 'Interactive',
    learningObjectives: [
      'Add and subtract fractions with different denominators',
      'Find equivalent fractions',
      'Apply fraction operations to real-world scenarios'
    ],
    prerequisites: ['math-fractions-intro'],
    adaptations: {
      visual: true,
      auditory: true,
      kinesthetic: true,
      adhd: true,
      autism: true,
      dyslexia: true
    },
    content: {
      introduction: 'Chef Luna needs your help! Customers are ordering custom cakes that require precise fraction measurements. Can you help her get the recipes just right?',
      steps: [
        {
          title: 'The Recipe Mixer',
          content: 'A customer wants 1/2 cup of flour plus 1/4 cup more. Use the visual fraction bars to combine them!',
          media: 'fraction-bars-animation.svg',
          interaction: 'drag-fraction-bars'
        },
        {
          title: 'Inventory Check',
          content: 'We have 3/4 cup of sugar but need to use 1/3 cup. How much will be left? Use the measuring cups to find out!',
          interaction: 'virtual-measuring-cups'
        },
        {
          title: 'Customer Orders',
          content: 'Multiple customers have placed orders. Calculate the total ingredients needed using your fraction skills!',
          interaction: 'order-calculator'
        }
      ],
      assessment: {
        questions: [
          {
            question: 'What is 1/2 + 1/4?',
            type: 'drag-drop',
            correctAnswer: '3/4',
            explanation: 'To add fractions, we need the same denominator. 1/2 = 2/4, so 2/4 + 1/4 = 3/4'
          },
          {
            question: 'If you have 5/6 cups of chocolate chips and use 1/3 cup, how much is left?',
            type: 'multiple-choice',
            options: ['1/2 cup', '1/3 cup', '2/6 cup', '1/6 cup'],
            correctAnswer: 0,
            explanation: '5/6 - 1/3 = 5/6 - 2/6 = 3/6 = 1/2 cup remains'
          }
        ]
      }
    },
    tags: ['fractions', 'addition', 'subtraction', 'real-world', 'cooking'],
    createdAt: '2024-01-23T10:00:00Z',
    updatedAt: '2024-01-23T10:00:00Z',
    status: 'published'
  },

  // MATHEMATICS - Geometry for visual learners
  {
    id: 'math-geometry-shapes',
    title: 'Shape Detective City',
    description: 'Explore the city and identify shapes in buildings, signs, and objects all around you!',
    subject: 'mathematics',
    difficulty: 'Beginner',
    duration: 15,
    type: 'Interactive',
    learningObjectives: [
      'Identify basic 2D shapes in real-world contexts',
      'Count sides, angles, and vertices',
      'Recognize shape patterns and symmetry'
    ],
    prerequisites: ['basic-counting'],
    adaptations: {
      visual: true,
      auditory: true,
      kinesthetic: true,
      adhd: true,
      autism: true,
      dyslexia: false
    },
    content: {
      introduction: 'Welcome to Shape Detective City! Your mission is to find and identify shapes hidden throughout the city. Use your detective skills to spot circles, squares, triangles, and more!',
      steps: [
        {
          title: 'Downtown Discovery',
          content: 'Look at the city skyline. Can you spot the rectangular windows, circular clock, and triangular rooftops?',
          media: 'city-skyline-interactive.svg',
          interaction: 'click-to-identify-shapes'
        },
        {
          title: 'Park Patterns',
          content: 'The city park has interesting shape patterns. Trace the shapes with your finger to help remember them!',
          interaction: 'finger-tracing-shapes'
        },
        {
          title: 'Building Your Own City',
          content: 'Now create your own building using different shapes. Drag and drop shapes to build something amazing!',
          interaction: 'shape-building-tool'
        }
      ],
      assessment: {
        questions: [
          {
            question: 'How many sides does a triangle have?',
            type: 'multiple-choice',
            options: ['2', '3', '4', '5'],
            correctAnswer: 1,
            explanation: 'A triangle always has exactly 3 sides and 3 angles.'
          },
          {
            question: 'Draw a square by connecting the dots',
            type: 'drawing',
            correctAnswer: 'square-pattern',
            explanation: 'Great job! A square has 4 equal sides and 4 right angles.'
          }
        ]
      }
    },
    tags: ['geometry', 'shapes', 'visual-spatial', 'pattern-recognition'],
    createdAt: '2024-01-23T11:00:00Z',
    updatedAt: '2024-01-23T11:00:00Z',
    status: 'published'
  },

  // LANGUAGE ARTS - Vocabulary building
  {
    id: 'lang-vocabulary-adventure',
    title: 'Word Wizard\'s Enchanted Dictionary',
    description: 'Join the Word Wizard on a magical journey to collect and master new vocabulary words!',
    subject: 'language-arts',
    difficulty: 'Beginner',
    duration: 18,
    type: 'Interactive',
    learningObjectives: [
      'Learn new vocabulary words in context',
      'Use context clues to determine word meanings',
      'Practice using new words in sentences'
    ],
    prerequisites: ['basic-reading'],
    adaptations: {
      visual: true,
      auditory: true,
      kinesthetic: false,
      adhd: true,
      autism: true,
      dyslexia: true
    },
    content: {
      introduction: 'The Word Wizard has lost magical words from his enchanted dictionary! Help him find them by learning their meanings and using them in the right context.',
      steps: [
        {
          title: 'The Missing Words',
          content: 'Each magical word has a special meaning. Read the story and use picture clues to understand what each word means.',
          media: 'magical-story-with-images.svg',
          interaction: 'word-meaning-matcher'
        },
        {
          title: 'Context Clue Detective',
          content: 'Use the clues in the sentences to figure out what the mystery words mean. The other words will help you!',
          interaction: 'context-clue-puzzle'
        },
        {
          title: 'Word Spell Creation',
          content: 'Create your own magical sentences using the new vocabulary words. Make the Word Wizard proud!',
          interaction: 'sentence-builder'
        }
      ],
      assessment: {
        questions: [
          {
            question: 'What does "enormous" mean in this sentence: "The enormous elephant could barely fit through the tiny door"?',
            type: 'multiple-choice',
            options: ['very small', 'very big', 'very fast', 'very slow'],
            correctAnswer: 1,
            explanation: 'The context clue "could barely fit through the tiny door" tells us the elephant is very big!'
          },
          {
            question: 'Use the word "magnificent" in a sentence about a castle',
            type: 'text-input',
            correctAnswer: 'open-ended',
            explanation: 'Magnificent means wonderful or impressive. Great job using it to describe something grand!'
          }
        ]
      }
    },
    tags: ['vocabulary', 'context-clues', 'reading-comprehension', 'fantasy'],
    createdAt: '2024-01-23T12:00:00Z',
    updatedAt: '2024-01-23T12:00:00Z',
    status: 'published'
  },

  // SOCIAL STUDIES - Community helpers
  {
    id: 'social-community-helpers',
    title: 'Hometown Heroes Adventure',
    description: 'Meet the amazing people who help keep our community safe, healthy, and running smoothly!',
    subject: 'social-studies',
    difficulty: 'Beginner',
    duration: 22,
    type: 'Interactive',
    learningObjectives: [
      'Identify different community helpers and their roles',
      'Understand how community members work together',
      'Recognize the importance of various jobs in society'
    ],
    prerequisites: ['basic-social-awareness'],
    adaptations: {
      visual: true,
      auditory: true,
      kinesthetic: true,
      adhd: true,
      autism: true,
      dyslexia: false
    },
    content: {
      introduction: 'Welcome to Hometown! Every day, special people called community helpers work hard to keep everyone safe and happy. Let\'s meet them and learn about their important jobs!',
      steps: [
        {
          title: 'Emergency Heroes',
          content: 'Meet firefighter Sam and police officer Maria. They keep us safe! Click on their equipment to learn what each tool does.',
          media: 'community-helpers-interactive.svg',
          interaction: 'click-and-learn-tools'
        },
        {
          title: 'Helping Hands Hospital',
          content: 'Dr. Johnson and Nurse Alex help people feel better. Match the medical tools to their uses!',
          interaction: 'medical-tools-matching'
        },
        {
          title: 'Community Helper Parade',
          content: 'Organize the community helper parade! Put each helper in the right order and learn about their special vehicles.',
          interaction: 'parade-organization'
        }
      ],
      assessment: {
        questions: [
          {
            question: 'Who would you call if there was a fire?',
            type: 'multiple-choice',
            options: ['Doctor', 'Firefighter', 'Teacher', 'Mail carrier'],
            correctAnswer: 1,
            explanation: 'Firefighters are specially trained to put out fires and keep people safe during emergencies.'
          },
          {
            question: 'Match each community helper to their workplace',
            type: 'drag-drop',
            correctAnswer: 'correct-matches',
            explanation: 'Each community helper has a special place where they do their important work!'
          }
        ]
      }
    },
    tags: ['community', 'social-studies', 'careers', 'helping-others'],
    createdAt: '2024-01-23T13:00:00Z',
    updatedAt: '2024-01-23T13:00:00Z',
    status: 'published'
  },

  // SCIENCE - Weather patterns (building on plant growth)
  {
    id: 'science-weather-detective',
    title: 'Weather Detective Academy',
    description: 'Become a weather detective and learn to predict and understand different weather patterns!',
    subject: 'science',
    difficulty: 'Intermediate',
    duration: 25,
    type: 'Interactive',
    learningObjectives: [
      'Identify different types of weather patterns',
      'Understand how weather affects daily life',
      'Learn to read basic weather instruments'
    ],
    prerequisites: ['basic-observation-skills', 'science-plant-growth'],
    adaptations: {
      visual: true,
      auditory: true,
      kinesthetic: true,
      adhd: true,
      autism: true,
      dyslexia: false
    },
    content: {
      introduction: 'Welcome to Weather Detective Academy! You\'ll learn to observe, predict, and understand weather patterns that affect our daily lives and the world around us.',
      steps: [
        {
          title: 'Weather Station Setup',
          content: 'Set up your virtual weather station with thermometer, rain gauge, and wind vane. Learn what each instrument measures!',
          media: 'weather-instruments.svg',
          interaction: 'instrument-setup'
        },
        {
          title: 'Cloud Detective',
          content: 'Different clouds tell us different things about upcoming weather. Identify cumulus, stratus, and cirrus clouds!',
          interaction: 'cloud-identification'
        },
        {
          title: 'Weather Pattern Prediction',
          content: 'Use your detective skills to predict tomorrow\'s weather based on today\'s observations. Make your forecast!',
          interaction: 'weather-prediction-game'
        }
      ],
      assessment: {
        questions: [
          {
            question: 'What type of clouds are fluffy and white like cotton balls?',
            type: 'multiple-choice',
            options: ['Stratus', 'Cumulus', 'Cirrus', 'Nimbus'],
            correctAnswer: 1,
            explanation: 'Cumulus clouds are puffy and white, often seen on sunny days. They look like cotton balls in the sky!'
          },
          {
            question: 'Drag the weather symbols to match the correct weather conditions',
            type: 'drag-drop',
            correctAnswer: 'symbol-matches',
            explanation: 'Weather symbols help meteorologists quickly communicate different weather conditions!'
          }
        ]
      }
    },
    tags: ['weather', 'observation', 'prediction', 'earth-science'],
    createdAt: '2024-01-23T14:00:00Z',
    updatedAt: '2024-01-23T14:00:00Z',
    status: 'published'
  },

  // EXECUTIVE FUNCTION - Time management
  {
    id: 'exec-time-master',
    title: 'Time Master\'s Daily Quest',
    description: 'Learn to manage time effectively and build daily routines that work for you!',
    subject: 'executive-function',
    difficulty: 'Beginner',
    duration: 20,
    type: 'Interactive',
    learningObjectives: [
      'Understand time concepts and duration',
      'Learn to estimate time for activities',
      'Build effective daily routines'
    ],
    prerequisites: ['basic-time-concepts'],
    adaptations: {
      visual: true,
      auditory: true,
      kinesthetic: true,
      adhd: true,
      autism: true,
      dyslexia: false
    },
    content: {
      introduction: 'Meet Timer the Time Master! He\'ll teach you how to become a time expert and create routines that help you succeed every day.',
      steps: [
        {
          title: 'Time Estimation Challenge',
          content: 'How long does it take to brush your teeth? Get dressed? Practice estimating time for daily activities!',
          media: 'daily-activities-timer.svg',
          interaction: 'time-estimation-game'
        },
        {
          title: 'Routine Builder',
          content: 'Create your perfect morning routine! Drag activities in the right order and set time limits for each.',
          interaction: 'routine-builder-tool'
        },
        {
          title: 'Time Trouble Solver',
          content: 'Help other students solve time management problems. What strategies would you suggest?',
          interaction: 'problem-solving-scenarios'
        }
      ],
      assessment: {
        questions: [
          {
            question: 'About how long should it take to eat breakfast?',
            type: 'multiple-choice',
            options: ['5 minutes', '15 minutes', '45 minutes', '2 hours'],
            correctAnswer: 1,
            explanation: 'Most people need about 15 minutes to eat a healthy breakfast without rushing!'
          },
          {
            question: 'Put these morning activities in a logical order',
            type: 'drag-drop',
            correctAnswer: 'logical-sequence',
            explanation: 'Great job! Having a routine helps us remember what to do and when to do it.'
          }
        ]
      }
    },
    tags: ['time-management', 'executive-function', 'routines', 'daily-living'],
    createdAt: '2024-01-23T15:00:00Z',
    updatedAt: '2024-01-23T15:00:00Z',
    status: 'published'
  },

  // SENSORY REGULATION - Advanced quest
  {
    id: 'sensory-regulation-toolkit',
    title: 'The Sensory Superhero Training Camp',
    description: 'Discover your sensory superpowers and learn strategies to feel calm, focused, and ready to learn!',
    subject: 'sensory-regulation',
    difficulty: 'Intermediate',
    duration: 30,
    type: 'Interactive',
    learningObjectives: [
      'Identify personal sensory preferences and needs',
      'Learn self-regulation strategies',
      'Practice using sensory tools effectively'
    ],
    prerequisites: ['basic-emotional-awareness'],
    adaptations: {
      visual: true,
      auditory: true,
      kinesthetic: true,
      adhd: true,
      autism: true,
      dyslexia: false
    },
    content: {
      introduction: 'Welcome to Sensory Superhero Training Camp! Every superhero has unique sensory powers. Let\'s discover yours and learn how to use them to feel your best!',
      steps: [
        {
          title: 'Sensory Power Assessment',
          content: 'Discover your sensory superpowers! Do you have super hearing, amazing vision, or incredible touch sensitivity?',
          media: 'sensory-powers-wheel.svg',
          interaction: 'sensory-preference-quiz'
        },
        {
          title: 'Superhero Toolkit',
          content: 'Build your personal sensory toolkit. Try different tools and strategies to see what helps you feel calm and focused.',
          interaction: 'sensory-tool-tryout'
        },
        {
          title: 'Mission Control',
          content: 'Practice using your sensory strategies in different situations. Every superhero needs to know when to use their powers!',
          interaction: 'scenario-strategy-practice'
        }
      ],
      assessment: {
        questions: [
          {
            question: 'When you feel overwhelmed by noise, which strategy might help?',
            type: 'multiple-choice',
            options: ['Noise-canceling headphones', 'Bright lights', 'Loud music', 'Running around'],
            correctAnswer: 0,
            explanation: 'Noise-canceling headphones can help reduce overwhelming sounds and help you feel calmer.'
          },
          {
            question: 'Match each sensory tool to when it might be most helpful',
            type: 'drag-drop',
            correctAnswer: 'tool-situation-matches',
            explanation: 'Different sensory tools work best in different situations. You\'re learning to be your own sensory superhero!'
          }
        ]
      }
    },
    tags: ['sensory-regulation', 'self-awareness', 'coping-strategies', 'autism-support'],
    createdAt: '2024-01-23T16:00:00Z',
    updatedAt: '2024-01-23T16:00:00Z',
    status: 'published'
  }
];

// Additional achievements for the new quest types
export const additionalAchievements: Achievement[] = [
  {
    id: 'fraction-baker',
    title: 'Master Baker',
    description: 'Successfully completed advanced fraction operations in the bakery challenge',
    icon: 'chef-hat',
    category: 'academic',
    requirements: {
      type: 'quests_completed',
      value: 1,
      subject: 'mathematics'
    },
    points: 400,
    rarity: 'rare'
  },
  {
    id: 'shape-detective',
    title: 'Shape Detective',
    description: 'Identified 50 shapes in various environments',
    icon: 'detective',
    category: 'academic',
    requirements: {
      type: 'quests_completed',
      value: 3,
      subject: 'mathematics'
    },
    points: 350,
    rarity: 'common'
  },
  {
    id: 'word-wizard',
    title: 'Word Wizard',
    description: 'Mastered 25 new vocabulary words',
    icon: 'magic-wand',
    category: 'academic',
    requirements: {
      type: 'quests_completed',
      value: 5,
      subject: 'language-arts'
    },
    points: 450,
    rarity: 'rare'
  },
  {
    id: 'community-champion',
    title: 'Community Champion',
    description: 'Learned about 10 different community helpers',
    icon: 'heart-hands',
    category: 'academic',
    requirements: {
      type: 'quests_completed',
      value: 1,
      subject: 'social-studies'
    },
    points: 300,
    rarity: 'common'
  },
  {
    id: 'weather-predictor',
    title: 'Weather Predictor',
    description: 'Successfully predicted weather patterns for 5 consecutive days',
    icon: 'cloud-sun',
    category: 'academic',
    requirements: {
      type: 'quests_completed',
      value: 1,
      subject: 'science'
    },
    points: 500,
    rarity: 'epic'
  },
  {
    id: 'time-master',
    title: 'Time Master',
    description: 'Developed and maintained a successful daily routine for 2 weeks',
    icon: 'clock',
    category: 'persistence',
    requirements: {
      type: 'streak_days',
      value: 14
    },
    points: 600,
    rarity: 'epic'
  },
  {
    id: 'sensory-superhero',
    title: 'Sensory Superhero',
    description: 'Discovered personal sensory strategies and used them effectively',
    icon: 'superhero-mask',
    category: 'creativity',
    requirements: {
      type: 'quests_completed',
      value: 1,
      subject: 'sensory-regulation'
    },
    points: 550,
    rarity: 'legendary'
  }
];

// Quest progression pathways for neurodivergent learners
export const learningPathways = {
  'mathematics-foundation': [
    'math-fractions-intro',
    'math-geometry-shapes', 
    'math-fractions-advanced'
  ],
  'language-arts-foundation': [
    'lang-vocabulary-adventure',
    'lang-story-elements'
  ],
  'science-explorer': [
    'science-plant-growth',
    'science-weather-detective'
  ],
  'executive-function-skills': [
    'exec-time-master',
    'sensory-regulation-toolkit'
  ],
  'social-awareness': [
    'social-community-helpers'
  ]
};