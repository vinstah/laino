// 20 Additional Physics Assessment Questions for Quest Learning Platform

export const additionalPhysicsQuestions = [
  // Simple Machines & Forces
  {
    questTitle: "Pulley Power Workshop",
    question: "Sarah is using a pulley system to lift a 20-pound box. If she uses a fixed pulley, how much force does she need to apply?",
    type: 'multiple-choice' as const,
    options: ['10 pounds', '20 pounds', '40 pounds', '5 pounds'],
    correctAnswer: 1,
    explanation: 'A fixed pulley changes the direction of force but not the amount. Sarah still needs to apply 20 pounds of force to lift the 20-pound box.',
    difficulty: 'Beginner',
    tags: ['pulleys', 'simple-machines', 'force']
  },

  {
    questTitle: "Inclined Plane Adventure",
    question: "Which ramp would require LESS force to push the same box to the top?",
    type: 'multiple-choice' as const,
    options: ['A steep, short ramp', 'A gentle, long ramp', 'Both require the same force', 'It depends on the box weight'],
    correctAnswer: 1,
    explanation: 'A longer, gentler ramp requires less force because you trade distance for force. The work done is the same, but the force needed is reduced.',
    difficulty: 'Beginner',
    tags: ['inclined-plane', 'force', 'work']
  },

  // Motion & Speed
  {
    questTitle: "Race Track Physics",
    question: "A race car travels 240 meters in 8 seconds. What is its average speed?",
    type: 'text-input' as const,
    correctAnswer: "30",
    explanation: 'Speed = Distance ÷ Time. So 240 meters ÷ 8 seconds = 30 meters per second.',
    difficulty: 'Intermediate',
    tags: ['speed', 'motion', 'calculation']
  },

  {
    questTitle: "Playground Physics",
    question: "Drag the arrows to show the direction of force and motion when a child slides down a slide.",
    type: 'drag-drop' as const,
    correctAnswer: 2,
    explanation: 'Gravity pulls the child downward, while friction opposes the motion. The net force causes the child to accelerate down the slide.',
    difficulty: 'Beginner',
    tags: ['forces', 'gravity', 'friction', 'motion']
  },

  // Energy & Work
  {
    questTitle: "Energy Transformation Station",
    question: "When you pedal a bicycle, what type of energy transformation occurs?",
    type: 'multiple-choice' as const,
    options: [
      'Chemical energy → Kinetic energy',
      'Potential energy → Chemical energy',
      'Kinetic energy → Potential energy',
      'Thermal energy → Chemical energy'
    ],
    correctAnswer: 0,
    explanation: 'Your body converts chemical energy from food into kinetic energy (motion) as you pedal the bicycle.',
    difficulty: 'Intermediate',
    tags: ['energy', 'transformation', 'kinetic', 'chemical']
  },

  {
    questTitle: "Roller Coaster Engineer",
    question: "At which point does a roller coaster have the MOST potential energy?",
    type: 'multiple-choice' as const,
    options: ['At the bottom of the first hill', 'At the top of the highest hill', 'In the middle of a loop', 'At the station'],
    correctAnswer: 1,
    explanation: 'Potential energy depends on height. The highest point gives the roller coaster the most potential energy, which converts to kinetic energy as it goes downhill.',
    difficulty: 'Beginner',
    tags: ['potential-energy', 'height', 'energy-conversion']
  },

  // Sound & Waves
  {
    questTitle: "Sound Detective",
    question: "Why do you see lightning before you hear thunder?",
    type: 'multiple-choice' as const,
    options: [
      'Light travels faster than sound',
      'Sound travels faster than light',
      'Lightning is closer than thunder',
      'Your eyes work faster than your ears'
    ],
    correctAnswer: 0,
    explanation: 'Light travels at about 300,000,000 meters per second, while sound travels at only about 340 meters per second through air.',
    difficulty: 'Intermediate',
    tags: ['sound', 'light', 'speed', 'waves']
  },

  {
    questTitle: "Musical Instruments Lab",
    question: "What happens to the pitch of a guitar string when you make it tighter?",
    type: 'multiple-choice' as const,
    options: ['The pitch gets lower', 'The pitch gets higher', 'The pitch stays the same', 'The string breaks'],
    correctAnswer: 1,
    explanation: 'Tighter strings vibrate faster, creating higher frequency sound waves, which we hear as higher pitch.',
    difficulty: 'Beginner',
    tags: ['sound', 'frequency', 'pitch', 'vibration']
  },

  // Light & Optics
  {
    questTitle: "Mirror Magic",
    question: "If you stand 2 meters away from a flat mirror, how far away does your reflection appear to be?",
    type: 'text-input' as const,
    correctAnswer: "4",
    explanation: 'Your reflection appears to be the same distance behind the mirror as you are in front of it. So 2 meters + 2 meters = 4 meters total distance from you to your reflection.',
    difficulty: 'Intermediate',
    tags: ['reflection', 'mirrors', 'optics']
  },

  {
    questTitle: "Rainbow Science",
    question: "What causes a rainbow to appear in the sky?",
    type: 'multiple-choice' as const,
    options: [
      'Sunlight reflecting off clouds',
      'Sunlight being split into colors by water droplets',
      'Different colored clouds mixing together',
      'The sun changing colors'
    ],
    correctAnswer: 1,
    explanation: 'Water droplets in the air act like tiny prisms, splitting white sunlight into its component colors (red, orange, yellow, green, blue, indigo, violet).',
    difficulty: 'Intermediate',
    tags: ['light', 'refraction', 'spectrum', 'optics']
  },

  // Magnetism & Electricity
  {
    questTitle: "Magnetic Mystery",
    question: "Which materials will be attracted to a magnet?",
    type: 'multiple-choice' as const,
    options: ['Paper clips and aluminum cans', 'Iron nails and steel screws', 'Plastic toys and wooden blocks', 'Glass marbles and rubber balls'],
    correctAnswer: 1,
    explanation: 'Magnets attract ferromagnetic materials like iron, steel, nickel, and cobalt. Aluminum, while a metal, is not magnetic.',
    difficulty: 'Beginner',
    tags: ['magnetism', 'materials', 'attraction']
  },

  {
    questTitle: "Circuit Builder",
    question: "What happens when you remove one bulb from a series circuit with three light bulbs?",
    type: 'multiple-choice' as const,
    options: [
      'The other two bulbs get brighter',
      'The other two bulbs go out',
      'The other two bulbs stay the same',
      'Only one bulb goes out'
    ],
    correctAnswer: 1,
    explanation: 'In a series circuit, electricity flows through one path. If you break the path by removing one bulb, no electricity can flow, so all bulbs go out.',
    difficulty: 'Intermediate',
    tags: ['circuits', 'electricity', 'series']
  },

  // Heat & Temperature
  {
    questTitle: "Thermal Transfer Lab",
    question: "You put a metal spoon in hot soup. Why does the handle get warm?",
    type: 'multiple-choice' as const,
    options: ['Heat travels through the metal by conduction', 'Heat travels through the air by convection', 'Heat travels by radiation', 'The spoon creates its own heat'],
    correctAnswer: 0,
    explanation: 'Conduction is heat transfer through direct contact. The metal spoon conducts heat from the hot soup to the cooler handle.',
    difficulty: 'Beginner',
    tags: ['heat', 'conduction', 'thermal-transfer']
  },

  {
    questTitle: "State Changes Challenge",
    question: "What happens to water molecules when water freezes into ice?",
    type: 'multiple-choice' as const,
    options: [
      'They move faster and spread apart',
      'They move slower and get closer together',
      'They disappear completely',
      'They change into different molecules'
    ],
    correctAnswer: 1,
    explanation: 'When water freezes, the molecules slow down and arrange themselves in a rigid crystal structure, forming solid ice.',
    difficulty: 'Intermediate',
    tags: ['states-of-matter', 'molecules', 'phase-change']
  },

  // Pressure & Fluids
  {
    questTitle: "Underwater Explorer",
    question: "Why do your ears pop when you dive deep in a swimming pool?",
    type: 'multiple-choice' as const,
    options: [
      'The water is too cold',
      'Water pressure increases with depth',
      'You hold your breath too long',
      'The chlorine affects your ears'
    ],
    correctAnswer: 1,
    explanation: 'Water pressure increases as you go deeper because of the weight of the water above you pressing down.',
    difficulty: 'Intermediate',
    tags: ['pressure', 'fluids', 'depth']
  },

  {
    questTitle: "Floating and Sinking",
    question: "A large wooden block floats, but a small metal coin sinks. Why?",
    type: 'multiple-choice' as const,
    options: [
      'Size determines floating',
      'Density determines floating',
      'Color determines floating',
      'Age determines floating'
    ],
    correctAnswer: 1,
    explanation: 'Objects float or sink based on density. Wood is less dense than water (floats), while metal is denser than water (sinks).',
    difficulty: 'Beginner',
    tags: ['density', 'buoyancy', 'floating']
  },

  // Gravity & Space
  {
    questTitle: "Space Station Science",
    question: "Why do astronauts float in the International Space Station?",
    type: 'multiple-choice' as const,
    options: [
      'There is no gravity in space',
      'They are constantly falling toward Earth',
      'The space station has anti-gravity',
      'They wear special floating suits'
    ],
    correctAnswer: 1,
    explanation: 'Astronauts are in continuous free fall around Earth. They and the space station are falling at the same rate, creating the sensation of weightlessness.',
    difficulty: 'Advanced',
    tags: ['gravity', 'orbit', 'weightlessness', 'space']
  },

  {
    questTitle: "Planetary Physics",
    question: "If you could jump on the Moon, you would jump _____ than on Earth.",
    type: 'multiple-choice' as const,
    options: ['much lower', 'about the same height', 'much higher', 'you cannot jump on the Moon'],
    correctAnswer: 2,
    explanation: 'The Moon has about 1/6th the gravity of Earth, so you would jump much higher and fall more slowly.',
    difficulty: 'Intermediate',
    tags: ['gravity', 'moon', 'planetary-science']
  },

  // Wave Motion
  {
    questTitle: "Wave Pool Investigation",
    question: "What happens to wave speed when waves move from deep water to shallow water?",
    type: 'multiple-choice' as const,
    options: ['Waves speed up', 'Waves slow down', 'Wave speed stays the same', 'Waves stop completely'],
    correctAnswer: 1,
    explanation: 'Waves slow down in shallow water because the ocean floor interferes with the circular motion of water particles.',
    difficulty: 'Advanced',
    tags: ['waves', 'wave-speed', 'shallow-water']
  },

  {
    questTitle: "Earthquake Simulator",
    question: "Draw the path seismic waves would take from an earthquake epicenter to three different cities.",
    type: 'drawing' as const,
    correctAnswer: "radial-pattern",
    explanation: 'Seismic waves spread out in all directions from the earthquake epicenter, like ripples in a pond, reaching different locations at different times based on distance.',
    difficulty: 'Advanced',
    tags: ['seismic-waves', 'earthquakes', 'wave-propagation']
  }
];

// Helper function to organize questions by difficulty and topic
export const organizePhysicsQuestions = () => {
  const byDifficulty = {
    Beginner: additionalPhysicsQuestions.filter(q => q.difficulty === 'Beginner'),
    Intermediate: additionalPhysicsQuestions.filter(q => q.difficulty === 'Intermediate'),
    Advanced: additionalPhysicsQuestions.filter(q => q.difficulty === 'Advanced')
  };

  const byTopic = {
    'Simple Machines': additionalPhysicsQuestions.filter(q => 
      q.tags.some(tag => ['pulleys', 'inclined-plane', 'simple-machines'].includes(tag))
    ),
    'Motion & Forces': additionalPhysicsQuestions.filter(q => 
      q.tags.some(tag => ['speed', 'motion', 'forces', 'gravity'].includes(tag))
    ),
    'Energy': additionalPhysicsQuestions.filter(q => 
      q.tags.some(tag => ['energy', 'kinetic', 'potential-energy'].includes(tag))
    ),
    'Waves & Sound': additionalPhysicsQuestions.filter(q => 
      q.tags.some(tag => ['sound', 'waves', 'frequency', 'seismic-waves'].includes(tag))
    ),
    'Light & Optics': additionalPhysicsQuestions.filter(q => 
      q.tags.some(tag => ['light', 'reflection', 'optics', 'refraction'].includes(tag))
    ),
    'Electricity & Magnetism': additionalPhysicsQuestions.filter(q => 
      q.tags.some(tag => ['magnetism', 'circuits', 'electricity'].includes(tag))
    ),
    'Heat & Matter': additionalPhysicsQuestions.filter(q => 
      q.tags.some(tag => ['heat', 'thermal-transfer', 'states-of-matter'].includes(tag))
    ),
    'Fluids & Pressure': additionalPhysicsQuestions.filter(q => 
      q.tags.some(tag => ['pressure', 'fluids', 'density', 'buoyancy'].includes(tag))
    ),
    'Space & Gravity': additionalPhysicsQuestions.filter(q => 
      q.tags.some(tag => ['gravity', 'space', 'orbit', 'planetary-science'].includes(tag))
    )
  };

  return { byDifficulty, byTopic };
};