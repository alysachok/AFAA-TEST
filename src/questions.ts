export interface Question {
  id: number;
  text: string;
  options: string[];
  correctOption: number;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "What is the benefit of a Pre-choreographed group fitness method?",
    options: [
      "All class details are pre-determined by outside organization or individual",
      "Allows outlet for creative energy",
      "Ability to combine consistency and variety",
    ],
    correctOption: 0, // "All class details are pre-determined by outside organization or individual"
  },
  {
    id: 2,
    text: "What is the benefit of a Freestyle group fitness method?",
    options: [
      "All class details are pre-determined by outside organization or individual",
      "Allows outlet for creative energy",
      "Ability to combine consistency and variety",
    ],
    correctOption: 1, // "Allows outlet for creative energy"
  },
  {
    id: 3,
    text: "What is the benefit of a Pre-designed group fitness method?",
    options: [
      "All class details are pre-determined by outside organization or individual",
      "Allows outlet for creative energy",
      "Ability to combine consistency and variety",
    ],
    correctOption: 2, // "Ability to combine consistency and variety"
  },
  {
    id: 4,
    text: "True or False? A Group Fitness Instructor can provide nutrition advice.",
    options: ["True", "False"],
    correctOption: 1, // False
  },
  {
    id: 5,
    text: "True or False? A Group Fitness Instructor can answer questions about the workout.",
    options: ["True", "False"],
    correctOption: 0, // True
  },
  {
    id: 6,
    text: "True or False? A Group Fitness Instructor can complete observational, postural, or movement assessments in order to recommend modifications.",
    options: ["True", "False"],
    correctOption: 0, // True
  },
  {
    id: 7,
    text: "True or False? A Group Fitness Instructor can diagnose and treat an exercise injury.",
    options: ["True", "False"],
    correctOption: 1, // False
  },
  {
    id: 8,
    text: "True or False? A Group Fitness Instructor can provide individualized workout plans.",
    options: ["True", "False"],
    correctOption: 0, // True
  },
  {
    id: 9,
    text: "True or False? A Group Fitness Instructor can provide modifications for fitness level or ability.",
    options: ["True", "False"],
    correctOption: 0, // True
  },
  {
    id: 10,
    text: "What does 'Superior' mean in anatomical terms?",
    options: [
      "Toward the bottom part of the body or closer to the feet",
      "Closer to the center of the body",
      "Above a landmark or closer to the head",
      "Farther from the midline of the body",
    ],
    correctOption: 2,
  },
  {
    id: 11,
    text: "What does 'Inferior' mean in anatomical terms?",
    options: [
      "Toward the bottom part of the body or closer to the feet",
      "Toward the midline of the body",
      "On the opposite side of the body",
      "Above a landmark or closer to the head",
    ],
    correctOption: 0,
  },
  {
    id: 12,
    text: "What does 'Proximal' mean in anatomical terms?",
    options: [
      "Closer to the center of the body",
      "Farther from the midline of the body",
      "On the opposite side of the body",
      "Farther from the center of the body or a landmark",
    ],
    correctOption: 3,
  },
  {
    id: 13,
    text: "What does 'Distal' mean in anatomical terms?",
    options: [
      "Closer to the center of the body",
      "Toward the midline of the body",
      "Farther from the center of the body or a landmark",
      "Above a landmark or closer to the head",
    ],
    correctOption: 2,
  },
  {
    id: 14,
    text: "What does 'Medial' mean in anatomical terms?",
    options: [
      "Farther from the midline of the body",
      "Toward the midline of the body",
      "Closer to the center of the body",
      "On the opposite side of the body",
    ],
    correctOption: 1,
  },
  {
    id: 15,
    text: "What does 'Lateral' mean in anatomical terms?",
    options: [
      "Toward the midline of the body",
      "Farther from the midline of the body",
      "Above a landmark or closer to the head",
      "Closer to the center of the body",
    ],
    correctOption: 1,
  },
  {
    id: 16,
    text: "What does 'Contralateral' mean in anatomical terms?",
    options: [
      "On the same side of the body",
      "Toward the midline of the body",
      "On the opposite side of the body",
      "Farther from the center of the body",
    ],
    correctOption: 2,
  },
  {
    id: 17,
    text: "What does 'Ipsilateral' mean in anatomical terms?",
    options: [
      "On the opposite side of the body",
      "Farther from the midline of the body",
      "Toward the bottom part of the body or closer to the feet",
      "On the same side of the body",
    ],
    correctOption: 3,
  },
  {
    id: 18,
    text: "Which system do aerobic and anaerobic metabolism correspond to?",
    options: ["Nervous System", "Muscular System", "Skeletal System"],
    correctOption: 1, // Muscular System
  },
  {
    id: 19,
    text: "Which system do neurons correspond to?",
    options: ["Nervous System", "Muscular System", "Skeletal System"],
    correctOption: 0, // Nervous System
  },
  {
    id: 20,
    text: "Which system do ligaments and tendons correspond to?",
    options: ["Nervous System", "Muscular System", "Skeletal System"],
    correctOption: 2, // Skeletal System
  },
  {
    id: 21,
    text: "Which system does blood production correspond to?",
    options: ["Nervous System", "Muscular System", "Skeletal System"],
    correctOption: 2, // Skeletal System
  },
  {
    id: 22,
    text: "What uses glucose to create ATP?",
    options: ["Glycolysis", "Adenosine Triphosphate", "Metabolism"],
    correctOption: 0, // Glycolysis
  },
  {
    id: 23,
    text: "What are energy storage and transfer units within the cells of the body?",
    options: ["Glycolysis", "Adenosine Triphosphate", "Metabolism"],
    correctOption: 1, // Adenosine Triphosphate
  },
  {
    id: 24,
    text: "What is the sum of biochemical reactions that occur in the body that are required for life?",
    options: ["Glycolysis", "Adenosine Triphosphate", "Metabolism"],
    correctOption: 2, // Metabolism
  },
  {
    id: 25,
    text: "Which system do type 1 and type 2 fibers correspond to?",
    options: ["Nervous System", "Muscular System", "Skeletal System"],
    correctOption: 1,
  },
  {
    id: 26,
    text: "Which system does the CNS correspond to?",
    options: ["Nervous System", "Muscular System", "Skeletal System"],
    correctOption: 0,
  },
  {
    id: 27,
    text: "Which system protects the organs?",
    options: ["Nervous System", "Muscular System", "Skeletal System"],
    correctOption: 2,
  },
  {
    id: 28,
    text: "Which system do mechanoreceptors correspond to?",
    options: ["Nervous System", "Muscular System", "Skeletal System"],
    correctOption: 0,
  },
  {
    id: 29,
    text: "Which system is the framework for the body?",
    options: ["Nervous System", "Muscular System", "Skeletal System"],
    correctOption: 2,
  },
  {
    id: 30,
    text: "Which principle states that the Human Movement System adapts to the demands imposed by physical activity?",
    options: [
      "General Adaptation Syndrome",
      "The Principle of Specificity",
      "The Overload Principle",
    ],
    correctOption: 0, // General Adaptation Syndrome
  },
  {
    id: 31,
    text: "Which principle involves the Human Movement System adapting and changing in response to specific types of exercises applied?",
    options: [
      "General Adaptation Syndrome",
      "The Principle of Specificity",
      "The Overload Principle",
    ],
    correctOption: 1, // The Principle of Specificity
  },
  {
    id: 32,
    text: "Which principle states that an exercise stimulus must be applied at an intensity greater than the system is accustomed to receiving to create physiological changes?",
    options: [
      "General Adaptation Syndrome",
      "The Principle of Specificity",
      "The Overload Principle",
    ],
    correctOption: 2, // The Overload Principle
  },
  {
    id: 33,
    text: "What is the correct order of the phases in General Adaptation Syndrome?",
    options: [
      "Adaptation, Alarm, Exhaustion",
      "Alarm, Adaptation, Exhaustion",
      "Exhaustion, Alarm, Adaptation",
    ],
    correctOption: 1, // Alarm, Adaptation, Exhaustion
  },
  {
    id: 34,
    text: "Which phase in General Adaptation Syndrome involves the body's initial reaction to stress?",
    options: ["Alarm", "Adaptation", "Exhaustion"],
    correctOption: 0, // Alarm
  },
  {
    id: 35,
    text: "Which phase in General Adaptation Syndrome involves the body adapting to stress for improved performance?",
    options: ["Alarm", "Adaptation", "Exhaustion"],
    correctOption: 1, // Adaptation
  },
  {
    id: 36,
    text: "Which phase in General Adaptation Syndrome occurs when prolonged stress leads to the breakdown of the body's systems?",
    options: ["Alarm", "Adaptation", "Exhaustion"],
    correctOption: 2, // Exhaustion
  },
  {
    id: 37,
    text: "Which system do synovial joints correspond to?",
    options: ["Nervous System", "Muscular System", "Skeletal System"],
    correctOption: 2, // Skeletal System
  },
  {
    id: 38,
    text: "Which method is described as a technique used to express/validate how hard a participant feels they are working during exercise?",
    options: [
      "Rate of Perceived Exertion (RPE)",
      "Talk Test",
      "Dyspnea Scale",
      "Observation",
    ],
    correctOption: 0, // Rate of Perceived Exertion (RPE)
  },
  {
    id: 39,
    text: "Which method is a self-evaluation of intensity associated with the ability to talk while exercising?",
    options: [
      "Rate of Perceived Exertion (RPE)",
      "Talk Test",
      "Dyspnea Scale",
      "Observation",
    ],
    correctOption: 1, // Talk Test
  },
  {
    id: 40,
    text: "Which method uses a subjective scale representing how participants perceive difficulty in terms of breathing?",
    options: [
      "Rate of Perceived Exertion (RPE)",
      "Talk Test",
      "Dyspnea Scale",
      "Observation",
    ],
    correctOption: 2, // Dyspnea Scale
  },
  {
    id: 41,
    text: "Which method involves the instructor watching for physical signs of overexertion?",
    options: [
      "Rate of Perceived Exertion (RPE)",
      "Talk Test",
      "Dyspnea Scale",
      "Observation",
    ],
    correctOption: 3, // Observation
  },
  {
    id: 42,
    text: "Which of the following exercis are more appropriate for a strength and resistance class? Select the 1 that apply.",
    options: ["Squat Jumps", "Push Ups", "Sprints", "Warrior 1", "Attacks"],
    correctOption: 1, // Push Ups
  },
  {
    id: 43,
    text: "At what intensity will participants perform a 3-minute recovery interval before transitioning into a 1-minute interval of 76-85% of the HRmax?",
    options: ["45-55%", "55-65%", "65-75%", "86-95%"],
    correctOption: 2, // 65-75%
  },
];
