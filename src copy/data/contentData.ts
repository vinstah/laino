import { additionalPhysicsQuestions as physicsQuestions } from './physics.ts';
import { additionalMathQuestions as mathQuestions } from './maths.ts';

export interface Quest {
  id: string;
  title: string;
  description: string;
  subject: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: number; // in minutes
  type: 'Interactive' | 'Video' | 'Practice' | 'Assessment';
  learningObjectives: string[];
  prerequisites: string[];
  adaptations: {
    visual: boolean;
    auditory: boolean;
    kinesthetic: boolean;
    adhd: boolean;
    autism: boolean;
    dyslexia: boolean;
  };
  content: {
    introduction: string;
    steps: Array<{
      title: string;
      content: string;
      media?: string;
      interaction?: string;
    }>;
    assessment: {
      questions: Array<{
        question: string;
        type: 'multiple-choice' | 'drag-drop' | 'text-input' | 'drawing';
        options?: string[];
        correctAnswer: string | number;
        explanation: string;
      }>;
    };
  };
  tags: string[];
  createdAt: string;
  updatedAt: string;
  status: 'draft' | 'published' | 'archived';
}

export interface Student {
  id: string;
  name: string;
  age: number;
  grade: string;
  learningProfile: {
    primaryStyle: 'visual' | 'auditory' | 'kinesthetic' | 'mixed';
    accommodations: string[];
    strengths: string[];
    challenges: string[];
  };
  progress: {
    [subjectId: string]: {
      completedQuests: string[];
      currentLevel: number;
      totalPoints: number;
      achievements: string[];
      lastActivity: string;
    };
  };
  preferences: {
    fontSize: 'small' | 'medium' | 'large';
    highContrast: boolean;
    reducedMotion: boolean;
    audioSupport: boolean;
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'academic' | 'persistence' | 'creativity' | 'collaboration';
  requirements: {
    type: 'quests_completed' | 'streak_days' | 'subject_mastery' | 'peer_help';
    value: number;
    subject?: string;
  };
  points: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

// Teacher-Designed Comprehensive Quests
export const mockQuests: Quest[] = [
  // MATHEMATICS QUESTS
  {
    id: 'math-bakery-fractions',
    title: 'The Great Bakery Challenge',
    description: 'Help Maria run her family bakery by measuring ingredients and dividing treats fairly among customers.',
    subject: 'mathematics',
    difficulty: 'Beginner',
    duration: 25,
    type: 'Interactive',
    learningObjectives: [
      'Represent fractions using concrete objects and visual models',
      'Compare fractions with like and unlike denominators',
      'Add and subtract fractions in real-world contexts',
      'Solve word problems involving fractions'
    ],
    prerequisites: ['whole-number-operations', 'basic-division-concepts'],
    adaptations: {
      visual: true,
      auditory: true,
      kinesthetic: true,
      adhd: true,
      autism: true,
      dyslexia: true
    },
    content: {
      introduction: 'Welcome to Maria\'s Bakery! Maria needs your help preparing for the town festival. You\'ll measure ingredients, divide treats fairly, and make sure every customer gets exactly what they ordered.',
      steps: [
        {
          title: 'Morning Prep: Measuring Flour',
          content: 'Maria needs 3/4 cup of flour for her famous cookies, but her measuring cup only shows 1/4 cup marks. Help her figure out how many scoops she needs. Look at the measuring cups on the counter - each one holds 1/4 cup.',
          media: 'measuring-cups-visual.svg',
          interaction: 'drag-measuring-cups'
        },
        {
          title: 'The Birthday Cake Order',
          content: 'Mrs. Johnson ordered a cake for her daughter\'s party. She wants it cut into 8 equal pieces, but only needs 5 pieces today. The rest will be saved for tomorrow. Show how much cake she\'s taking home and how much stays at the bakery.',
          interaction: 'cake-cutting-tool'
        },
        {
          title: 'Cookie Distribution Challenge',
          content: 'Three families ordered cookies: The Smiths want 1/2 dozen, the Browns want 1/3 dozen, and the Garcias want 1/6 dozen. Maria baked 2 dozen cookies total. Help her figure out how many cookies each family gets and how many are left over.',
          interaction: 'cookie-sorting-game'
        },
        {
          title: 'Recipe Scaling',
          content: 'Maria\'s muffin recipe serves 12 people, but she needs to serve 18 people for the festival. Help her figure out how much of each ingredient she needs. The original recipe calls for 2/3 cup of sugar.',
          interaction: 'recipe-calculator'
        },
        {
          title: 'End of Day Inventory',
          content: 'At closing time, help Maria count what\'s left. She started with 4 whole pies and sold 2 1/4 pies. How much pie is left? Use the pie models to show your work.',
          interaction: 'pie-fraction-models'
        }
      ],
      assessment: {
        questions: [
          {
            question: 'If Maria uses 3/4 cup of flour and her measuring cup holds 1/4 cup, how many scoops does she need?',
            type: 'multiple-choice',
            options: ['2 scoops', '3 scoops', '4 scoops', '5 scoops'],
            correctAnswer: 1,
            explanation: 'Since 3/4 = 3 × 1/4, Maria needs 3 scoops of her 1/4 cup measure.'
          },
          {
            question: 'The Smiths ordered 1/2 dozen cookies. How many individual cookies is that?',
            type: 'text-input',
            correctAnswer: '6',
            explanation: 'One dozen = 12 cookies, so 1/2 dozen = 12 ÷ 2 = 6 cookies.'
          },
          {
            question: 'Drag the pie pieces to show how much pie Maria has left after selling 2 1/4 pies from 4 whole pies.',
            type: 'drag-drop',
            correctAnswer: '1 3/4',
            explanation: 'Starting with 4 pies and selling 2 1/4 pies: 4 - 2 1/4 = 1 3/4 pies remaining.'
          }
        ]
      }
    },
    tags: ['fractions', 'real-world-math', 'measurement', 'problem-solving'],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T14:30:00Z',
    status: 'published'
  },

  {
    id: 'math-geometry-playground',
    title: 'Playground Architects',
    description: 'Design the perfect playground by calculating areas, perimeters, and understanding geometric shapes.',
    subject: 'mathematics',
    difficulty: 'Intermediate',
    duration: 30,
    type: 'Interactive',
    learningObjectives: [
      'Calculate area and perimeter of rectangles and squares',
      'Identify and classify geometric shapes by their properties',
      'Apply geometric concepts to solve real-world design problems',
      'Use coordinate grids to plot and design layouts'
    ],
    prerequisites: ['basic-multiplication', 'shape-recognition', 'measurement-units'],
    adaptations: {
      visual: true,
      auditory: false,
      kinesthetic: true,
      adhd: true,
      autism: true,
      dyslexia: false
    },
    content: {
      introduction: 'The city council has hired you as a playground architect! You have a budget and specific space requirements. Your job is to design a safe, fun playground that fits perfectly in the available space.',
      steps: [
        {
          title: 'Understanding the Space',
          content: 'Your playground space is a rectangle that measures 40 feet by 60 feet. First, let\'s calculate the total area you have to work with. Remember: Area = length × width.',
          interaction: 'area-calculator-tool'
        },
        {
          title: 'Safety First: The Fence',
          content: 'The playground needs a fence around the entire perimeter for safety. Calculate how many feet of fencing you\'ll need. Perimeter = 2 × (length + width).',
          interaction: 'perimeter-measurement'
        },
        {
          title: 'Placing the Swing Set',
          content: 'The swing set needs a rectangular safety zone of 15 feet by 20 feet. Where will you place it on your grid? Make sure it fits completely inside the playground boundaries.',
          interaction: 'grid-placement-tool'
        },
        {
          title: 'The Sandbox Design',
          content: 'Design a square sandbox. If each side is 8 feet long, what\'s the area? How does this compare to a rectangular sandbox that\'s 6 feet by 12 feet?',
          interaction: 'shape-comparison-tool'
        },
        {
          title: 'Pathway Planning',
          content: 'Create pathways connecting different playground areas. Your paths should be 3 feet wide. Calculate the area taken up by a straight path from the entrance to the swing set.',
          interaction: 'pathway-designer'
        },
        {
          title: 'Final Budget Check',
          content: 'Each square foot of playground equipment costs $15 to install. Calculate the total cost for your swing set area, sandbox, and pathways.',
          interaction: 'budget-calculator'
        }
      ],
      assessment: {
        questions: [
          {
            question: 'What is the total area of a playground that measures 40 feet by 60 feet?',
            type: 'text-input',
            correctAnswer: '2400',
            explanation: 'Area = length × width = 40 × 60 = 2,400 square feet.'
          },
          {
            question: 'How much fencing is needed for the perimeter of the 40 ft × 60 ft playground?',
            type: 'multiple-choice',
            options: ['100 feet', '200 feet', '180 feet', '240 feet'],
            correctAnswer: 1,
            explanation: 'Perimeter = 2 × (40 + 60) = 2 × 100 = 200 feet of fencing.'
          },
          {
            question: 'Which has a larger area: a square sandbox with 8-foot sides, or a rectangular sandbox that\'s 6 feet by 12 feet?',
            type: 'multiple-choice',
            options: ['Square sandbox', 'Rectangular sandbox', 'They are equal', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'Square: 8 × 8 = 64 sq ft. Rectangle: 6 × 12 = 72 sq ft. The rectangular sandbox is larger.'
          }
        ]
      }
    },
    tags: ['geometry', 'area-perimeter', 'real-world-application', 'design-thinking'],
    createdAt: '2024-01-16T09:00:00Z',
    updatedAt: '2024-01-22T11:15:00Z',
    status: 'published'
  },

  // LANGUAGE ARTS QUESTS
  {
    id: 'lang-mystery-mansion',
    title: 'The Case of Whispering Mansion',
    description: 'Become a detective and solve the mystery while learning about character development, plot structure, and making inferences.',
    subject: 'language-arts',
    difficulty: 'Intermediate',
    duration: 35,
    type: 'Interactive',
    learningObjectives: [
      'Identify character traits through actions and dialogue',
      'Analyze plot structure including exposition, rising action, climax, and resolution',
      'Make inferences using text evidence and prior knowledge',
      'Understand how setting influences mood and atmosphere'
    ],
    prerequisites: ['basic-reading-comprehension', 'vocabulary-level-3'],
    adaptations: {
      visual: true,
      auditory: true,
      kinesthetic: false,
      adhd: true,
      autism: true,
      dyslexia: true
    },
    content: {
      introduction: 'You\'ve been called to investigate strange sounds coming from the old Whispering Mansion. As you explore, you\'ll meet interesting characters, gather clues, and piece together what\'s really happening. Pay attention to details - they\'ll help you solve the mystery!',
      steps: [
        {
          title: 'Arriving at the Mansion',
          content: 'As your car pulls up to Whispering Mansion, you notice the setting details. The mansion sits on a hill, surrounded by gnarled oak trees. Paint peels from the shutters, and one window on the second floor is boarded up. How does this setting make you feel? What mood does it create?',
          interaction: 'mood-atmosphere-selector'
        },
        {
          title: 'Meeting Mrs. Hartwell',
          content: 'The mansion\'s owner, Mrs. Hartwell, greets you at the door. She\'s wringing her hands nervously and keeps glancing toward the staircase. "Thank goodness you\'re here," she says. "The sounds started three nights ago - always around midnight." What can you infer about Mrs. Hartwell\'s character from her actions and words?',
          interaction: 'character-trait-analyzer'
        },
        {
          title: 'The Groundskeeper\'s Story',
          content: 'Old Tom, the groundskeeper, has worked here for 30 years. He leans on his rake and chuckles when you ask about the sounds. "Mansion\'s got its own personality," he says with a wink. "Always has." Compare Tom\'s reaction to Mrs. Hartwell\'s. What does this tell you about each character?',
          interaction: 'character-comparison-chart'
        },
        {
          title: 'Investigating the Library',
          content: 'In the mansion\'s library, you find an old journal. The last entry reads: "The renovation is almost complete. Soon, the mansion will have its voice back." This is a clue! What might this mean? Use the evidence you\'ve gathered so far.',
          interaction: 'inference-maker'
        },
        {
          title: 'The Midnight Discovery',
          content: 'At midnight, you follow the sounds to the attic. There, you discover the mansion\'s old pipe organ being restored by Mrs. Hartwell\'s grandson, who wanted to surprise her. The "mysterious sounds" were him testing the pipes! How does this revelation change your understanding of the story?',
          interaction: 'plot-structure-mapper'
        },
        {
          title: 'Reflecting on the Mystery',
          content: 'Now that you know the truth, think about how the author built suspense. What clues pointed to the real solution? How did the setting contribute to the mysterious atmosphere? What character traits helped you understand each person\'s role in the story?',
          interaction: 'story-analysis-tool'
        }
      ],
      assessment: {
        questions: [
          {
            question: 'Based on Mrs. Hartwell\'s actions (wringing hands, nervous glances), what character trait can you infer?',
            type: 'multiple-choice',
            options: ['Confident', 'Anxious', 'Angry', 'Bored'],
            correctAnswer: 1,
            explanation: 'Her physical actions (wringing hands, nervous glances) are evidence that she feels anxious or worried about the situation.'
          },
          {
            question: 'What part of the plot structure is represented when you discover the grandson in the attic?',
            type: 'multiple-choice',
            options: ['Exposition', 'Rising Action', 'Climax', 'Resolution'],
            correctAnswer: 2,
            explanation: 'The climax is the turning point where the main conflict is revealed - discovering the truth about the mysterious sounds.'
          },
          {
            question: 'Write one inference you can make about why the grandson worked at midnight.',
            type: 'text-input',
            correctAnswer: 'He wanted to keep the restoration a surprise',
            explanation: 'Working at night suggests he was trying to keep his project secret, likely to surprise his grandmother.'
          }
        ]
      }
    },
    tags: ['mystery', 'character-analysis', 'plot-structure', 'inference-skills'],
    createdAt: '2024-01-14T13:30:00Z',
    updatedAt: '2024-01-21T16:45:00Z',
    status: 'published'
  },

  {
    id: 'lang-persuasive-town-hall',
    title: 'Town Hall Debate: Save Our Park',
    description: 'Learn persuasive writing and speaking by preparing for a town hall meeting about converting the local park into a shopping center.',
    subject: 'language-arts',
    difficulty: 'Advanced',
    duration: 40,
    type: 'Interactive',
    learningObjectives: [
      'Identify and use persuasive techniques in writing and speaking',
      'Support arguments with credible evidence and examples',
      'Understand different perspectives on controversial issues',
      'Organize persuasive essays with clear introduction, body, and conclusion'
    ],
    prerequisites: ['paragraph-writing', 'research-skills', 'opinion-vs-fact'],
    adaptations: {
      visual: true,
      auditory: true,
      kinesthetic: true,
      adhd: true,
      autism: false,
      dyslexia: true
    },
    content: {
      introduction: 'The town council is considering selling Riverside Park to developers who want to build a shopping center. As a concerned citizen, you need to prepare a persuasive speech for tonight\'s town hall meeting. Will you argue to save the park or support the development?',
      steps: [
        {
          title: 'Understanding Both Sides',
          content: 'Before taking a position, let\'s examine both perspectives. Supporters of the shopping center argue it will bring jobs and tax revenue. Park advocates say green spaces are essential for community health and wildlife. Read the provided arguments and identify the persuasive techniques each side uses.',
          interaction: 'perspective-analyzer'
        },
        {
          title: 'Choosing Your Position',
          content: 'Now it\'s time to choose your stance. Will you argue to save the park or support the shopping center? Remember, good persuasive writing acknowledges the opposing viewpoint while making a stronger case for your position.',
          interaction: 'position-selector'
        },
        {
          title: 'Gathering Evidence',
          content: 'Strong arguments need solid evidence. Research facts, statistics, expert opinions, and examples that support your position. For the park: environmental benefits, health studies, property values. For the shopping center: economic impact, job creation, tax revenue.',
          interaction: 'evidence-collector'
        },
        {
          title: 'Learning Persuasive Techniques',
          content: 'Effective persuasion uses specific techniques: Emotional appeals (pathos), logical arguments (logos), and credibility (ethos). Practice identifying these in sample speeches, then plan how to use them in your own argument.',
          interaction: 'persuasion-technique-trainer'
        },
        {
          title: 'Organizing Your Speech',
          content: 'Structure your persuasive speech: Hook (attention-grabbing opening), Position statement (clear thesis), Three main arguments with evidence, Address counterarguments, Strong conclusion with call to action.',
          interaction: 'speech-organizer'
        },
        {
          title: 'Practice and Delivery',
          content: 'Practice delivering your speech with confidence. Pay attention to your tone, pace, and body language. Record yourself and listen for clarity and persuasiveness. Remember, how you say something is as important as what you say.',
          interaction: 'speech-practice-tool'
        }
      ],
      assessment: {
        questions: [
          {
            question: 'Which persuasive technique appeals to the audience\'s emotions?',
            type: 'multiple-choice',
            options: ['Logos', 'Pathos', 'Ethos', 'Thesis'],
            correctAnswer: 1,
            explanation: 'Pathos appeals to emotions, while logos uses logic and ethos establishes credibility.'
          },
          {
            question: 'What should come immediately after your hook in a persuasive speech?',
            type: 'multiple-choice',
            options: ['Evidence', 'Conclusion', 'Position statement', 'Counterargument'],
            correctAnswer: 2,
            explanation: 'After grabbing attention with a hook, you should clearly state your position (thesis statement).'
          },
          {
            question: 'Write a hook (opening sentence) for a speech supporting the park. Make it attention-grabbing!',
            type: 'text-input',
            correctAnswer: 'Sample: Imagine your children having nowhere to play except concrete parking lots.',
            explanation: 'A good hook grabs attention through emotion, questions, statistics, or vivid imagery.'
          }
        ]
      }
    },
    tags: ['persuasive-writing', 'public-speaking', 'argumentation', 'civic-engagement'],
    createdAt: '2024-01-17T11:20:00Z',
    updatedAt: '2024-01-23T09:30:00Z',
    status: 'published'
  },

  // SCIENCE QUESTS
  {
    id: 'science-ecosystem-investigation',
    title: 'Backyard Ecosystem Detective',
    description: 'Investigate the complex relationships in a backyard ecosystem by observing, collecting data, and understanding food webs.',
    subject: 'science',
    difficulty: 'Intermediate',
    duration: 45,
    type: 'Interactive',
    learningObjectives: [
      'Identify producers, primary consumers, and secondary consumers in an ecosystem',
      'Understand how energy flows through food chains and food webs',
      'Recognize interdependence among organisms in an ecosystem',
      'Practice scientific observation and data collection methods'
    ],
    prerequisites: ['basic-biology-concepts', 'classification-skills'],
    adaptations: {
      visual: true,
      auditory: true,
      kinesthetic: true,
      adhd: true,
      autism: true,
      dyslexia: false
    },
    content: {
      introduction: 'Welcome to Dr. Chen\'s research team! We\'re studying how all living things in a backyard ecosystem depend on each other. You\'ll use real scientific methods to observe, collect data, and discover the hidden connections that keep this ecosystem healthy.',
      steps: [
        {
          title: 'Setting Up Your Field Study',
          content: 'Every good scientist starts with careful observation. You\'ll study a 2-meter square section of backyard. First, create a detailed map showing all the living and non-living things you observe. Include plants, insects, soil, rocks, and any signs of animal activity.',
          interaction: 'ecosystem-mapping-tool'
        },
        {
          title: 'Identifying the Producers',
          content: 'Producers make their own food using sunlight. In your study area, identify all the plants - from tiny moss to large trees. Measure and record: How many different plant species do you see? Which ones are getting the most sunlight? How might this affect their growth?',
          interaction: 'producer-identification-game'
        },
        {
          title: 'Finding the Primary Consumers',
          content: 'Primary consumers eat plants. Look for evidence: chewed leaves, caterpillars, aphids, or rabbit droppings. Use your magnifying glass to examine leaf damage. What patterns do you see? Which plants show the most signs of being eaten?',
          interaction: 'consumer-evidence-collector'
        },
        {
          title: 'Tracking Secondary Consumers',
          content: 'Secondary consumers eat other animals. You might find spiders in webs, birds hunting insects, or evidence like feathers or small bones. Create a data table recording what you find and where you find it.',
          interaction: 'predator-tracking-tool'
        },
        {
          title: 'Building the Food Web',
          content: 'Now connect the dots! Using your observations, create a food web showing how energy flows from producers to consumers. Draw arrows showing "who eats whom." Remember: energy always flows from the food source to the consumer.',
          interaction: 'food-web-constructor'
        },
        {
          title: 'Testing Ecosystem Balance',
          content: 'What happens if one part of the ecosystem changes? Use the simulation to see what happens if: drought kills half the plants, pesticides eliminate all insects, or a new predator arrives. How do these changes ripple through the food web?',
          interaction: 'ecosystem-balance-simulator'
        },
        {
          title: 'Drawing Scientific Conclusions',
          content: 'Analyze your data like a real scientist. What evidence supports the idea that all organisms in this ecosystem are connected? Write a conclusion explaining how removing just one type of organism could affect the entire ecosystem.',
          interaction: 'scientific-conclusion-writer'
        }
      ],
      assessment: {
        questions: [
          {
            question: 'In a food web, which direction do the arrows point?',
            type: 'multiple-choice',
            options: ['From predator to prey', 'From prey to predator', 'Both directions', 'It doesn\'t matter'],
            correctAnswer: 1,
            explanation: 'Arrows show energy flow - from the organism being eaten to the organism doing the eating.'
          },
          {
            question: 'If all the insects disappeared from your backyard ecosystem, what would most likely happen to the plants?',
            type: 'multiple-choice',
            options: ['Nothing would change', 'Plants would grow better', 'Some plants would grow too much, others might not reproduce', 'All plants would die'],
            correctAnswer: 2,
            explanation: 'Without insects eating them, some plants might overgrow, but plants that depend on insects for pollination couldn\'t reproduce.'
          },
          {
            question: 'List three pieces of evidence you might find that show a secondary consumer lives in your study area.',
            type: 'text-input',
            correctAnswer: 'Spider webs, bird feathers, small animal bones, owl pellets, etc.',
            explanation: 'Secondary consumers leave evidence like webs, feathers, bones, or droppings that show they\'ve been hunting other animals.'
          }
        ]
      }
    },
    tags: ['ecosystems', 'food-webs', 'scientific-method', 'field-study'],
    createdAt: '2024-01-18T14:15:00Z',
    updatedAt: '2024-01-24T10:20:00Z',
    status: 'published'
  },

  {
    id: 'science-chemistry-kitchen',
    title: 'Kitchen Chemistry Lab',
    description: 'Discover chemical reactions happening in your kitchen through safe experiments with everyday ingredients.',
    subject: 'science',
    difficulty: 'Beginner',
    duration: 30,
    type: 'Interactive',
    learningObjectives: [
      'Identify signs of chemical reactions (color change, gas production, temperature change)',
      'Distinguish between physical and chemical changes',
      'Understand that chemical reactions create new substances with different properties',
      'Practice making predictions and recording observations'
    ],
    prerequisites: ['basic-safety-rules', 'observation-skills'],
    adaptations: {
      visual: true,
      auditory: true,
      kinesthetic: true,
      adhd: true,
      autism: true,
      dyslexia: true
    },
    content: {
      introduction: 'Your kitchen is actually a chemistry lab! Today you\'ll discover the amazing chemical reactions that happen when you cook and bake. We\'ll use safe, everyday ingredients to explore how substances can change into something completely new.',
      steps: [
        {
          title: 'Safety First: Kitchen Lab Rules',
          content: 'Before we start experimenting, let\'s review kitchen safety. Always wash your hands, tie back long hair, and never taste anything unless instructed. We\'ll use measuring spoons, clear containers, and common ingredients like baking soda, vinegar, and food coloring.',
          interaction: 'safety-checklist'
        },
        {
          title: 'Experiment 1: The Volcano Reaction',
          content: 'Mix 2 tablespoons of baking soda with a few drops of food coloring in a clear container. Predict what will happen when you add 1/4 cup of vinegar. Now add the vinegar and observe! What do you see, hear, and feel?',
          interaction: 'volcano-experiment-recorder'
        },
        {
          title: 'Understanding What Happened',
          content: 'The bubbling you saw is carbon dioxide gas being produced! When baking soda (sodium bicarbonate) meets vinegar (acetic acid), they react to create new substances: carbon dioxide gas, water, and sodium acetate. This is a chemical reaction because new substances formed.',
          interaction: 'reaction-analyzer'
        },
        {
          title: 'Experiment 2: Color-Changing Milk',
          content: 'Pour milk into a shallow dish and add drops of different food coloring around the edge. Predict what happens when you touch the milk with a cotton swab dipped in dish soap. Try it and record your observations!',
          interaction: 'milk-experiment-tracker'
        },
        {
          title: 'Physical vs. Chemical Changes',
          content: 'The milk experiment shows a physical change - the fat molecules in milk are moving because soap breaks surface tension. Compare this to our volcano reaction (chemical change). What\'s the difference?',
          interaction: 'change-type-classifier'
        },
        {
          title: 'Experiment 3: Invisible Ink',
          content: 'Write a secret message using lemon juice as ink. Let it dry completely - your message disappears! Now carefully hold the paper near a warm (not hot) light bulb. What happens to your invisible message?',
          interaction: 'invisible-ink-revealer'
        },
        {
          title: 'Kitchen Chemistry Everywhere',
          content: 'Chemical reactions happen all around your kitchen! Bread rising (yeast producing gas), apples turning brown (oxidation), and eggs cooking (proteins changing structure). Can you identify which type of change each example represents?',
          interaction: 'kitchen-chemistry-identifier'
        }
      ],
      assessment: {
        questions: [
          {
            question: 'What gas is produced when baking soda reacts with vinegar?',
            type: 'multiple-choice',
            options: ['Oxygen', 'Hydrogen', 'Carbon dioxide', 'Nitrogen'],
            correctAnswer: 2,
            explanation: 'The bubbling you see is carbon dioxide gas, which is produced when the acid in vinegar reacts with baking soda.'
          },
          {
            question: 'Which of these is a sign that a chemical reaction has occurred?',
            type: 'multiple-choice',
            options: ['Ice melting', 'Paper tearing', 'Gas bubbles forming', 'Water evaporating'],
            correctAnswer: 2,
            explanation: 'Gas bubble formation indicates new substances are being created, which is a sign of a chemical reaction.'
          },
          {
            question: 'Explain why the lemon juice message becomes visible when heated.',
            type: 'text-input',
            correctAnswer: 'Heat causes the lemon juice to brown/oxidize, making it visible',
            explanation: 'Lemon juice contains citric acid and sugars that brown when heated, revealing the hidden message through a chemical change.'
          }
        ]
      }
    },
    tags: ['chemistry', 'chemical-reactions', 'kitchen-science', 'hands-on-experiments'],
    createdAt: '2024-01-19T16:45:00Z',
    updatedAt: '2024-01-25T12:30:00Z',
    status: 'published'
  },

  // PHYSICS QUESTS
  {
    id: 'physics-roller-coaster-engineer',
    title: 'Roller Coaster Engineer Challenge',
    description: 'Design and test roller coasters while learning about potential energy, kinetic energy, and forces.',
    subject: 'physics',
    difficulty: 'Advanced',
    duration: 35,
    type: 'Interactive',
    learningObjectives: [
      'Understand the relationship between potential and kinetic energy',
      'Apply conservation of energy principles to real-world scenarios',
      'Analyze how height, speed, and mass affect energy in moving objects',
      'Design solutions using physics principles'
    ],
    prerequisites: ['basic-forces', 'energy-concepts', 'measurement-skills'],
    adaptations: {
      visual: true,
      auditory: false,
      kinesthetic: true,
      adhd: true,
      autism: false,
      dyslexia: false
    },
    content: {
      introduction: 'Welcome to Thunder Peak Amusement Park! As the new roller coaster engineer, you need to design a thrilling but safe ride. You\'ll use physics principles to ensure your coaster has enough energy to complete the track while keeping riders safe.',
      steps: [
        {
          title: 'Understanding Energy Basics',
          content: 'Energy comes in two main forms in roller coasters: Potential energy (stored energy from height) and kinetic energy (energy of motion). A coaster car at the top of a hill has maximum potential energy. As it rolls down, potential energy converts to kinetic energy (speed).',
          interaction: 'energy-visualization-tool'
        },
        {
          title: 'The First Hill Challenge',
          content: 'Your coaster\'s first hill must be the tallest - this gives the car enough potential energy to complete the entire track. If your first hill is 100 feet tall, calculate the potential energy. Use the formula: PE = mass × gravity × height.',
          interaction: 'potential-energy-calculator'
        },
        {
          title: 'Designing the Track Layout',
          content: 'Plan your coaster track with hills, loops, and turns. Remember: each hill after the first must be shorter than the previous one (energy is lost to friction). Design a track where the car has just enough energy to reach each section.',
          interaction: 'track-design-simulator'
        },
        {
          title: 'Testing Energy Conservation',
          content: 'Run your coaster simulation! Watch how energy changes as the car moves. At the top of each hill: maximum potential energy, minimum kinetic energy. At the bottom: minimum potential energy, maximum kinetic energy. Energy is conserved but some is lost to friction.',
          interaction: 'energy-tracking-simulation'
        },
        {
          title: 'The Loop Challenge',
          content: 'Adding a loop requires careful calculation. The car needs enough kinetic energy at the bottom of the loop to maintain contact with the track at the top. If the loop is 30 feet tall, how fast must the car be moving at the bottom?',
          interaction: 'loop-speed-calculator'
        },
        {
          title: 'Safety and G-Forces',
          content: 'Riders experience forces when the coaster changes direction or speed. Sharp turns and sudden drops create high G-forces that can be uncomfortable or dangerous. Modify your design to keep G-forces within safe limits.',
          interaction: 'g-force-analyzer'
        },
        {
          title: 'Final Testing and Optimization',
          content: 'Test your complete coaster design! Does the car have enough energy to complete the track? Are the G-forces safe? Is the ride exciting but not too intense? Make final adjustments to create the perfect coaster.',
          interaction: 'final-coaster-tester'
        }
      ],
      assessment: {
        questions: [
          {
            question: 'When does a roller coaster car have the most potential energy?',
            type: 'multiple-choice',
            options: ['At the bottom of the first hill', 'At the top of the highest hill', 'In the middle of a loop', 'At the end of the ride'],
            correctAnswer: 1,
            explanation: 'Potential energy depends on height, so it\'s greatest at the highest point of the track.'
          },
          {
            question: 'Why must each hill after the first be shorter than the previous one?',
            type: 'multiple-choice',
            options: ['To make the ride more exciting', 'Because energy is lost to friction', 'To slow down the car', 'It\'s just a design choice'],
            correctAnswer: 1,
            explanation: 'Friction converts some mechanical energy to heat, so there\'s less total energy available for each subsequent hill.'
          },
          {
            question: 'If a coaster car has 10,000 J of potential energy at the top of a hill, how much kinetic energy will it have at the bottom (ignoring friction)?',
            type: 'text-input',
            correctAnswer: '10000',
            explanation: 'By conservation of energy, all potential energy converts to kinetic energy (ignoring friction losses).'
          },
          ...physicsQuestions,
        ]
      }
    },
    tags: ['energy', 'physics-design', 'engineering', 'conservation-laws'],
    createdAt: '2024-01-20T13:10:00Z',
    updatedAt: '2024-01-26T15:45:00Z',
    status: 'published'
  }
];

export const mockStudents: Student[] = [
  {
    id: 'student-001',
    name: 'Alex Chen',
    age: 12,
    grade: '7th Grade',
    learningProfile: {
      primaryStyle: 'visual',
      accommodations: ['Extended time for assignments', 'Visual organizers and charts', 'Frequent movement breaks', 'Reduced visual distractions'],
      strengths: ['Pattern recognition in mathematics', 'Spatial reasoning skills', 'Creative problem-solving', 'Strong visual memory'],
      challenges: ['Working memory for multi-step problems', 'Processing verbal instructions quickly', 'Organizing written work']
    },
    progress: {
      mathematics: {
        completedQuests: ['math-bakery-fractions', 'math-geometry-playground'],
        currentLevel: 4,
        totalPoints: 1850,
        achievements: ['fraction-master', 'geometry-explorer', 'persistent-learner'],
        lastActivity: '2024-01-26T15:30:00Z'
      },
      'language-arts': {
        completedQuests: ['lang-mystery-mansion'],
        currentLevel: 3,
        totalPoints: 1200,
        achievements: ['mystery-solver', 'character-analyst'],
        lastActivity: '2024-01-25T10:45:00Z'
      },
      science: {
        completedQuests: ['science-chemistry-kitchen'],
        currentLevel: 2,
        totalPoints: 750,
        achievements: ['kitchen-chemist'],
        lastActivity: '2024-01-24T14:20:00Z'
      }
    },
    preferences: {
      fontSize: 'large',
      highContrast: true,
      reducedMotion: false,
      audioSupport: true
    }
  },
  {
    id: 'student-002',
    name: 'Maya Rodriguez',
    age: 10,
    grade: '5th Grade',
    learningProfile: {
      primaryStyle: 'kinesthetic',
      accommodations: ['Hands-on learning materials', 'Standing desk option', 'Fidget tools during lessons', 'Movement incorporated into learning'],
      strengths: ['Hands-on experimentation', 'Collaborative learning', 'Real-world problem solving', 'Physical demonstrations'],
      challenges: ['Sustained attention to lectures', 'Abstract concepts without concrete examples', 'Traditional paper-and-pencil tasks']
    },
    progress: {
      science: {
        completedQuests: ['science-ecosystem-investigation', 'science-chemistry-kitchen'],
        currentLevel: 5,
        totalPoints: 2100,
        achievements: ['ecosystem-detective', 'chemistry-explorer', 'field-researcher'],
        lastActivity: '2024-01-26T16:15:00Z'
      },
      mathematics: {
        completedQuests: ['math-bakery-fractions'],
        currentLevel: 3,
        totalPoints: 950,
        achievements: ['real-world-mathematician'],
        lastActivity: '2024-01-23T11:30:00Z'
      }
    },
    preferences: {
      fontSize: 'medium',
      highContrast: false,
      reducedMotion: true,
      audioSupport: false
    }
  },
  {
    id: 'student-003',
    name: 'Jordan Kim',
    age: 14,
    grade: '9th Grade',
    learningProfile: {
      primaryStyle: 'auditory',
      accommodations: ['Audio recordings of lessons', 'Verbal processing time', 'Discussion-based learning', 'Text-to-speech tools'],
      strengths: ['Verbal reasoning and discussion', 'Listening comprehension', 'Explaining concepts to others', 'Following oral instructions'],
      challenges: ['Processing visual information quickly', 'Silent reading for extended periods', 'Written expression of ideas']
    },
    progress: {
      'language-arts': {
        completedQuests: ['lang-mystery-mansion', 'lang-persuasive-town-hall'],
        currentLevel: 6,
        totalPoints: 2750,
        achievements: ['debate-champion', 'persuasion-expert', 'critical-thinker'],
        lastActivity: '2024-01-26T13:45:00Z'
      },
      physics: {
        completedQuests: ['physics-roller-coaster-engineer'],
        currentLevel: 4,
        totalPoints: 1600,
        achievements: ['energy-engineer', 'physics-designer'],
        lastActivity: '2024-01-25T09:20:00Z'
      }
    },
    preferences: {
      fontSize: 'medium',
      highContrast: false,
      reducedMotion: false,
      audioSupport: true
    }
  }
];

export const mockAchievements: Achievement[] = [
  {
    id: 'fraction-master',
    title: 'Fraction Master',
    description: 'Successfully completed 5 fraction quests with 85% or higher accuracy',
    icon: '🍕',
    category: 'academic',
    requirements: {
      type: 'quests_completed',
      value: 5,
      subject: 'mathematics'
    },
    points: 500,
    rarity: 'rare'
  },
  {
    id: 'geometry-explorer',
    title: 'Geometry Explorer',
    description: 'Demonstrated mastery of area, perimeter, and geometric shapes',
    icon: '📐',
    category: 'academic',
    requirements: {
      type: 'subject_mastery',
      value: 80,
      subject: 'mathematics'
    },
    points: 600,
    rarity: 'rare'
  },
  {
    id: 'mystery-solver',
    title: 'Mystery Solver',
    description: 'Completed detective-themed reading quests with excellent inference skills',
    icon: '🔍',
    category: 'academic',
    requirements: {
      type: 'quests_completed',
      value: 3,
      subject: 'language-arts'
    },
    points: 400,
    rarity: 'common'
  },
  {
    id: 'ecosystem-detective',
    title: 'Ecosystem Detective',
    description: 'Successfully mapped food webs and identified ecosystem relationships',
    icon: '🌿',
    category: 'academic',
    requirements: {
      type: 'quests_completed',
      value: 2,
      subject: 'science'
    },
    points: 450,
    rarity: 'rare'
  },
  {
    id: 'energy-engineer',
    title: 'Energy Engineer',
    description: 'Applied energy conservation principles to design working solutions',
    icon: '⚡',
    category: 'academic',
    requirements: {
      type: 'quests_completed',
      value: 1,
      subject: 'physics'
    },
    points: 700,
    rarity: 'epic'
  },
  {
    id: 'persistent-learner',
    title: 'Persistent Learner',
    description: 'Maintained consistent learning for 10 consecutive days',
    icon: '🔥',
    category: 'persistence',
    requirements: {
      type: 'streak_days',
      value: 10
    },
    points: 300,
    rarity: 'common'
  },
  {
    id: 'critical-thinker',
    title: 'Critical Thinker',
    description: 'Demonstrated advanced analysis and reasoning skills',
    icon: '🧠',
    category: 'academic',
    requirements: {
      type: 'subject_mastery',
      value: 90,
      subject: 'language-arts'
    },
    points: 800,
    rarity: 'epic'
  }
];

export const mockResearchPapers = [
  {
    id: 'paper-001',
    title: 'Effectiveness of Multi-Sensory Learning Approaches in Mathematics Education for Students with ADHD',
    authors: ['Dr. Sarah Johnson', 'Dr. Michael Chen', 'Dr. Lisa Rodriguez'],
    journal: 'Journal of Educational Psychology',
    year: 2024,
    abstract: 'This randomized controlled trial examined the impact of multi-sensory mathematics instruction on 240 students with ADHD across 12 schools. Results showed significant improvements in mathematical reasoning (p < 0.001) and sustained attention during math tasks (p < 0.01) compared to traditional instruction methods. The study provides evidence for incorporating visual, auditory, and kinesthetic elements in mathematics curricula.',
    downloadUrl: '/research/multisensory-math-adhd-2024.pdf',
    tags: ['ADHD', 'mathematics', 'multi-sensory-learning', 'educational-intervention']
  },
  {
    id: 'paper-002',
    title: 'Digital Storytelling Platforms and Reading Comprehension in Students with Autism Spectrum Disorders',
    authors: ['Dr. Amanda Foster', 'Dr. James Wilson', 'Dr. Maria Santos'],
    journal: 'Computers & Education',
    year: 2023,
    abstract: 'This study investigated how interactive digital storytelling affects reading comprehension in 156 students with autism spectrum disorders. Participants using the interactive platform showed 23% greater improvement in inference-making skills and 18% better character analysis compared to traditional reading instruction. The structured, predictable format of digital stories particularly benefited students with autism.',
    downloadUrl: '/research/digital-storytelling-autism-2023.pdf',
    tags: ['autism', 'reading-comprehension', 'digital-learning', 'storytelling']
  },
  {
    id: 'paper-003',
    title: 'Executive Function Support Tools in Science Education: A Mixed-Methods Study',
    authors: ['Dr. Robert Kim', 'Dr. Jennifer Lee'],
    journal: 'Science Education International',
    year: 2024,
    abstract: 'This mixed-methods study examined how digital executive function supports impact science learning in 89 middle school students with executive function challenges. Tools including visual organizers, step-by-step guides, and progress tracking led to 31% improvement in experimental design skills and 27% better data analysis performance. Qualitative interviews revealed increased confidence and independence in scientific thinking.',
    downloadUrl: '/research/executive-function-science-2024.pdf',
    tags: ['executive-function', 'science-education', 'digital-tools', 'middle-school']
  },
  {
    id: 'paper-004',
    title: 'Universal Design for Learning in Physics: Removing Barriers to Conceptual Understanding',
    authors: ['Dr. Patricia Brown', 'Dr. David Chang', 'Dr. Emily Rodriguez'],
    journal: 'Physical Review Physics Education Research',
    year: 2023,
    abstract: 'This longitudinal study tracked 312 high school students across diverse learning profiles in UDL-designed physics courses. Students with learning differences showed comparable conceptual gains to neurotypical peers when provided multiple means of representation, engagement, and expression. The study demonstrates that inclusive design benefits all learners without compromising academic rigor.',
    downloadUrl: '/research/udl-physics-2023.pdf',
    tags: ['universal-design', 'physics-education', 'inclusive-education', 'conceptual-understanding']
  }
];