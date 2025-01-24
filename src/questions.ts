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
  {
    id: 44,
    text: "Which muscle type is more aerobic, slower to reach maximal contraction, and resistant to fatigue?",
    options: [
      "Type I (slow twitch)",
      "Type II (fast twitch)",
      "Cardiac muscle",
      "Smooth muscle",
    ],
    correctOption: 0, // Type I (slow twitch)
  },
  {
    id: 45,
    text: "What is the primary function of ligaments in the skeletal system?",
    options: [
      "Connect muscle to bone",
      "Connect bone to bone",
      "Store calcium",
      "Produce blood cells",
    ],
    correctOption: 1, // Connect bone to bone
  },
  {
    id: 46,
    text: "Which plane of motion divides the body into left and right halves and involves forward-backward movements?",
    options: [
      "Frontal plane",
      "Transverse plane",
      "Sagittal plane",
      "Oblique plane",
    ],
    correctOption: 2, // Sagittal plane
  },
  {
    id: 47,
    text: "What is the role of the sinoatrial (SA) node in the heart?",
    options: [
      "Pumps oxygenated blood to the body",
      "Receives oxygenated blood from the lungs",
      "Acts as the heart's pacemaker",
      "Distributes blood to the atria",
    ],
    correctOption: 2, // Acts as the heart's pacemaker
  },
  {
    id: 48,
    text: "What principle states that the body adapts specifically to the type of stimulus placed on it?",
    options: [
      "Overload principle",
      "SAID principle",
      "Reciprocal inhibition",
      "General adaptation syndrome",
    ],
    correctOption: 1, // SAID principle
  },
  {
    id: 49,
    text: "What is the primary benefit of using self-myofascial release (SMR) techniques?",
    options: [
      "Increase blood pressure",
      "Improve bone density",
      "Achieve muscle relaxation",
      "Increase heart rate",
    ],
    correctOption: 2, // Achieve muscle relaxation
  },
  {
    id: 50,
    text: "What is the recommended intensity for participants recovering from a stroke during exercise?",
    options: ["40-60% HRmax", "50-80% HRmax", "60-85% HRmax", "70-90% HRmax"],
    correctOption: 1, // 50-80% HRmax
  },
  {
    id: 51,
    text: "What is the purpose of monitoring exercise intensity using the talk test?",
    options: [
      "Determine blood pressure",
      "Self-evaluate ability to talk while exercising",
      "Assess heart rate variability",
      "Measure oxygen saturation levels",
    ],
    correctOption: 1, // Self-evaluate ability to talk while exercising
  },
  {
    id: 52,
    text: "Which nutrient provides the most calories per gram?",
    options: ["Carbohydrates", "Protein", "Fat", "Water"],
    correctOption: 2, // Fat
  },
  {
    id: 53,
    text: "Which of the following is a characteristic of a pre-choreographed group fitness class format?",
    options: [
      "Instructor has complete freedom over choreography",
      "Allows for varying intensity levels",
      "Has a consistent theme or brand",
      "Requires minimal participant interaction",
    ],
    correctOption: 2, // Has a consistent theme or brand
  },
  {
    id: 54,
    text: "What should be the primary consideration when designing a group fitness class for older adults?",
    options: [
      "Incorporating high-intensity interval training",
      "Progressing toward free sitting or standing exercises",
      "Focusing on maximal strength development",
      "Avoiding the use of equipment",
    ],
    correctOption: 1, // Progressing toward free sitting or standing exercises
  },
  {
    id: 55,
    text: "What is the primary purpose of the overload principle in resistance training?",
    options: [
      "Ensure muscle relaxation",
      "Prevent overtraining",
      "Increase physiological adaptations",
      "Reduce muscle soreness",
    ],
    correctOption: 2, // Increase physiological adaptations
  },
  {
    id: 56,
    text: "Which muscle is primarily responsible for knee extension during the upward phase of a squat?",
    options: ["Hamstrings", "Quadriceps", "Gastrocnemius", "Gluteus maximus"],
    correctOption: 1, // Quadriceps
  },
  {
    id: 57,
    text: "Which cue type is best for reminding participants of proper breathing technique?",
    options: ["Directional", "Respiration", "Motivational", "Alignment"],
    correctOption: 1, // Respiration
  },
  {
    id: 58,
    text: "Which system is responsible for coordinating activity across the body and responding to sensory input?",
    options: [
      "Muscular system",
      "Nervous system",
      "Skeletal system",
      "Cardiorespiratory system",
    ],
    correctOption: 1, // Nervous system
  },
  {
    id: 59,
    text: "What type of joint allows movement in all three planes of motion?",
    options: [
      "Hinge joint",
      "Gliding joint",
      "Ball-and-socket joint",
      "Pivot joint",
    ],
    correctOption: 2, // Ball-and-socket joint
  },
  {
    id: 60,
    text: "Which plane divides the body into front and back halves, allowing side-to-side movements?",
    options: [
      "Sagittal plane",
      "Transverse plane",
      "Frontal plane",
      "Horizontal plane",
    ],
    correctOption: 2, // Frontal plane
  },
  {
    id: 61,
    text: "Which muscle is considered part of the movement system of the core?",
    options: [
      "Rectus abdominis",
      "Transverse abdominis",
      "Multifidus",
      "Pelvic floor muscles",
    ],
    correctOption: 0, // Rectus abdominis
  },
  {
    id: 62,
    text: "What is the term for a muscle contraction where tension develops as the muscle lengthens?",
    options: ["Concentric", "Eccentric", "Isometric", "Isokinetic"],
    correctOption: 1, // Eccentric
  },
  {
    id: 63,
    text: "Which principle states that the body adapts specifically to the type of stress placed on it?",
    options: [
      "Overload principle",
      "General Adaptation Syndrome",
      "SAID principle",
      "Length-tension relationship",
    ],
    correctOption: 2, // SAID principle
  },
  {
    id: 64,
    text: "What is the recommended range for heart rate during Zone 2 cardio training?",
    options: ["50-60% HRmax", "65-75% HRmax", "76-85% HRmax", "86-95% HRmax"],
    correctOption: 2, // 76-85% HRmax
  },
  {
    id: 65,
    text: "What is the primary benefit of dynamic stretching in movement preparation?",
    options: [
      "Improves strength",
      "Increases static flexibility",
      "Enhances neuromuscular control",
      "Builds endurance",
    ],
    correctOption: 2, // Enhances neuromuscular control
  },
  {
    id: 66,
    text: "Which energy system is primarily used for activities lasting up to 10-15 seconds?",
    options: [
      "Glycolysis",
      "ATP-PC system",
      "Oxidative system",
      "Lactic acid system",
    ],
    correctOption: 1, // ATP-PC system
  },
  {
    id: 67,
    text: "What is the role of the diaphragm during inspiration?",
    options: [
      "Elevates the ribs",
      "Contracts to increase thoracic cavity volume",
      "Relaxes to reduce thoracic cavity volume",
      "Contracts to force air out of the lungs",
    ],
    correctOption: 1, // Contracts to increase thoracic cavity volume
  },
  {
    id: 68,
    text: "Which term describes the bending of a joint, decreasing the angle between two bones?",
    options: ["Extension", "Flexion", "Abduction", "Adduction"],
    correctOption: 1, // Flexion
  },
  {
    id: 69,
    text: "Which chronic condition requires monitoring of blood glucose levels during exercise?",
    options: ["Hypertension", "Arthritis", "Diabetes", "Osteoporosis"],
    correctOption: 2, // Diabetes
  },
  {
    id: 70,
    text: "Which group fitness format alternates high-intensity work with recovery periods?",
    options: ["Strength training", "HIIT/interval", "Yoga", "Boot camp"],
    correctOption: 1, // HIIT/interval
  },
  {
    id: 71,
    text: "What is the primary purpose of SMART goals in class design?",
    options: [
      "To measure progress and set realistic expectations",
      "To challenge participants with unattainable goals",
      "To determine equipment needs for the class",
      "To create freestyle choreography",
    ],
    correctOption: 0, // To measure progress and set realistic expectations
  },
  {
    id: 72,
    text: "What is a benefit of incorporating music into group fitness classes?",
    options: [
      "Increases physical difficulty",
      "Distracts from fatigue and improves efficiency",
      "Eliminates the need for cueing",
      "Allows participants to train without supervision",
    ],
    correctOption: 1, // Distracts from fatigue and improves efficiency
  },
  {
    id: 73,
    text: "Which cue type provides specific body alignment instructions?",
    options: ["Directional", "Alignment", "Motivational", "Numerical"],
    correctOption: 1, // Alignment
  },
  {
    id: 74,
    text: "What should instructors monitor to ensure participants exercise at the appropriate intensity?",
    options: [
      "Heart rate response",
      "Sweat production",
      "Posture alignment",
      "Room temperature",
    ],
    correctOption: 0, // Heart rate response
  },
  {
    id: 75,
    text: "What is the most mobile type of joint in the body?",
    options: [
      "Hinge joint",
      "Ball-and-socket joint",
      "Pivot joint",
      "Gliding joint",
    ],
    correctOption: 1, // Ball-and-socket joint
  },
  {
    id: 76,
    text: "Which group fitness format is characterized by slow, controlled movements focusing on balance and breathing?",
    options: ["Boot camp", "Mind-body", "HIIT", "Resistance training"],
    correctOption: 1, // Mind-body
  },
  {
    id: 77,
    text: "Which participant arrangement allows an instructor to view all participants at once?",
    options: ["Row", "Staggered", "Circle", "Circuit"],
    correctOption: 1, // Staggered
  },
  {
    id: 78,
    text: "What is a common symptom of dehydration during exercise?",
    options: [
      "Rapid sweating",
      "Confusion",
      "Normal heart rate",
      "Increased energy",
    ],
    correctOption: 1, // Confusion
  },
  {
    id: 79,
    text: "What principle states that exercise stimuli must exceed usual demands to create physiological change?",
    options: [
      "SAID principle",
      "Overload principle",
      "Length-tension relationship",
      "General adaptation syndrome",
    ],
    correctOption: 1, // Overload principle
  },
  {
    id: 80,
    text: "Which muscle group is primarily targeted during a lunge?",
    options: ["Hamstrings", "Quadriceps", "Calves", "Abdominals"],
    correctOption: 1, // Quadriceps
  },
  {
    id: 81,
    text: "Which environmental factor has the greatest effect on the body’s ability to dissipate heat?",
    options: ["Temperature", "Humidity", "Altitude", "Wind speed"],
    correctOption: 1, // Humidity
  },
  {
    id: 82,
    text: "What is the primary purpose of self-myofascial release (SMR)?",
    options: [
      "Build muscle strength",
      "Promote relaxation and release tension in muscles",
      "Improve aerobic capacity",
      "Enhance speed and power",
    ],
    correctOption: 1, // Promote relaxation and release tension in muscles
  },
  {
    id: 83,
    text: "What is an example of a SMART goal for a group fitness class?",
    options: [
      "Help participants lose weight quickly",
      "Improve balance through 10 minutes of practice over 8 weeks",
      "Increase strength without measurable objectives",
      "Ensure participants feel challenged",
    ],
    correctOption: 1, // Improve balance through 10 minutes of practice over 8 weeks
  },
  {
    id: 84,
    text: "What is the recommended intensity for pregnant participants during group fitness?",
    options: [
      "High intensity",
      "Light to moderate",
      "No exercise",
      "Maximum effort",
    ],
    correctOption: 1, // Light to moderate
  },
  {
    id: 85,
    text: "Which muscle contraction involves the muscle lengthening under tension?",
    options: ["Concentric", "Eccentric", "Isometric", "Explosive"],
    correctOption: 1, // Eccentric
  },
  {
    id: 86,
    text: "Which type of stretching is characterized by active movement and full range of motion?",
    options: ["Static", "Dynamic", "Ballistic", "Passive"],
    correctOption: 1, // Dynamic
  },
  {
    id: 87,
    text: "Which chronic condition would benefit most from low-impact exercise to avoid joint stress?",
    options: ["Diabetes", "Osteoporosis", "Hypertension", "Arthritis"],
    correctOption: 3, // Arthritis
  },
  {
    id: 88,
    text: "What is the purpose of the talk test during exercise?",
    options: [
      "Evaluate cardiovascular endurance",
      "Determine flexibility",
      "Assess heart rate recovery",
      "Measure oxygen levels",
    ],
    correctOption: 0, // Evaluate cardiovascular endurance
  },
  {
    id: 89,
    text: "What is the primary purpose of active stretching?",
    options: [
      "Relax the antagonist muscle",
      "Improve muscle strength",
      "Enhance power production",
      "Support joint mobility",
    ],
    correctOption: 0, // Relax the antagonist muscle
  },
  {
    id: 90,
    text: "What is the recommended water intake for men per day?",
    options: ["2.7 L", "3.7 L", "4.5 L", "2.0 L"],
    correctOption: 1, // 3.7 L
  },
  {
    id: 91,
    text: "Which fitness format uses exercises like burpees and shuffles as part of its main workout?",
    options: ["Yoga", "HIIT", "Pilates", "Strength training"],
    correctOption: 1, // HIIT
  },
  {
    id: 92,
    text: "What is a major benefit of resistance training for older adults?",
    options: [
      "Improved flexibility",
      "Enhanced bone density",
      "Reduced body weight",
      "Increased heart rate",
    ],
    correctOption: 1, // Enhanced bone density
  },
  {
    id: 93,
    text: "Which muscle group assists in stabilizing the core during plank exercises?",
    options: [
      "Gluteus maximus",
      "Pectoralis major",
      "Transverse abdominis",
      "Biceps femoris",
    ],
    correctOption: 2, // Transverse abdominis
  },
  {
    id: 94,
    text: "What is the main function of the pectoralis major?",
    options: [
      "Elbow flexion",
      "Shoulder adduction and flexion",
      "Knee extension",
      "Spinal rotation",
    ],
    correctOption: 1, // Shoulder adduction and flexion
  },
  {
    id: 95,
    text: "Which population should avoid exercises in the supine position after the first trimester?",
    options: [
      "Older adults",
      "Pregnant participants",
      "Youth",
      "Participants with arthritis",
    ],
    correctOption: 1, // Pregnant participants
  },
  {
    id: 96,
    text: "What is the term for the body’s ability to maintain equilibrium while stationary or moving?",
    options: ["Agility", "Balance", "Coordination", "Flexibility"],
    correctOption: 1, // Balance
  },
  {
    id: 97,
    text: "What is the purpose of bracing during core exercises?",
    options: [
      "Isolate abdominal muscles",
      "Stabilize the lumbar spine",
      "Enhance leg strength",
      "Reduce heart rate",
    ],
    correctOption: 1, // Stabilize the lumbar spine
  },
  {
    id: 98,
    text: "Which factor is most important when selecting music for a group fitness class?",
    options: [
      "Genre preferences",
      "Participant demographics",
      "Volume level",
      "Instructor preference",
    ],
    correctOption: 1, // Participant demographics
  },
  {
    id: 99,
    text: "What type of lever system is most common in the human body?",
    options: ["First-class", "Second-class", "Third-class", "Fourth-class"],
    correctOption: 2, // Third-class
  },
  {
    id: 100,
    text: "Which is an example of a lower body stabilization exercise?",
    options: ["Single-leg squat", "Lateral lunge", "Deadlift", "Leg press"],
    correctOption: 0, // Single-leg squat
  },
  {
    id: 101,
    text: "What is the main benefit of including plyometric training in a fitness program?",
    options: [
      "Improved cardiovascular endurance",
      "Increased muscle power",
      "Enhanced flexibility",
      "Reduced recovery time",
    ],
    correctOption: 1, // Increased muscle power
  },
  {
    id: 102,
    text: "What is the key characteristic of an eccentric muscle action?",
    options: [
      "The muscle shortens",
      "The muscle maintains constant length",
      "The muscle lengthens",
      "The muscle relaxes",
    ],
    correctOption: 2, // The muscle lengthens
  },
  {
    id: 103,
    text: "What is the primary goal of the cool-down phase in a group fitness class?",
    options: [
      "Increase intensity",
      "Enhance focus",
      "Lower heart rate gradually",
      "Maximize calorie burn",
    ],
    correctOption: 2, // Lower heart rate gradually
  },
  {
    id: 104,
    text: "What is the purpose of using dynamic balance exercises?",
    options: [
      "Improve bone density",
      "Enhance coordination during movement",
      "Increase flexibility",
      "Develop muscular hypertrophy",
    ],
    correctOption: 1, // Enhance coordination during movement
  },
  {
    id: 105,
    text: "Which fitness principle emphasizes rest and recovery to prevent overtraining?",
    options: [
      "Overload principle",
      "General adaptation syndrome",
      "SAID principle",
      "Periodization",
    ],
    correctOption: 3, // Periodization
  },
  {
    id: 106,
    text: "Which acute variable affects the intensity of resistance training?",
    options: [
      "Volume",
      "Rest interval",
      "Training frequency",
      "Repetition tempo",
    ],
    correctOption: 3, // Repetition tempo
  },
  {
    id: 107,
    text: "What is a recommended exercise for improving stability in older adults?",
    options: ["Seated row", "Single-leg balance", "Chest press", "Burpees"],
    correctOption: 1, // Single-leg balance
  },
  {
    id: 108,
    text: "What is a sign of overexertion during group fitness?",
    options: [
      "Increased sweating",
      "Rapid breathing and dizziness",
      "Stable heart rate",
      "Steady energy levels",
    ],
    correctOption: 1, // Rapid breathing and dizziness
  },
  {
    id: 109,
    text: "Which group fitness format focuses on functional movements and teamwork?",
    options: ["Yoga", "Boot camp", "Pilates", "HIIT"],
    correctOption: 1, // Boot camp
  },
  {
    id: 110,
    text: "Which chronic condition benefits from resistance training to enhance bone density?",
    options: ["Hypertension", "Arthritis", "Osteoporosis", "Diabetes"],
    correctOption: 2, // Osteoporosis
  },
  {
    id: 111,
    text: "What is the purpose of utilizing interval training in a fitness program?",
    options: [
      "Build flexibility",
      "Improve cardiovascular efficiency",
      "Reduce muscle soreness",
      "Increase joint mobility",
    ],
    correctOption: 1, // Improve cardiovascular efficiency
  },
  {
    id: 112,
    text: "Which cue is most effective for promoting proper body alignment during squats?",
    options: [
      "Keep your chest lifted",
      "Jump higher",
      "Breathe faster",
      "Focus on speed",
    ],
    correctOption: 0, // Keep your chest lifted
  },
  {
    id: 113,
    text: "What is a key consideration for participants with hypertension during group fitness classes?",
    options: [
      "Avoid heavy lifting",
      "Perform plyometric movements",
      "Focus on high-intensity intervals",
      "Skip warm-up",
    ],
    correctOption: 0, // Avoid heavy lifting
  },
  {
    id: 114,
    text: "Which stretching technique is characterized by holding a position for 30 seconds to improve flexibility?",
    options: [
      "Dynamic stretching",
      "Ballistic stretching",
      "Static stretching",
      "Active stretching",
    ],
    correctOption: 2, // Static stretching
  },
  {
    id: 115,
    text: "What is the primary function of the transverse abdominis muscle?",
    options: [
      "Extend the spine",
      "Support core stability",
      "Flex the hips",
      "Rotate the shoulders",
    ],
    correctOption: 1, // Support core stability
  },
  {
    id: 116,
    text: "What is a benefit of conducting a proper cool-down session?",
    options: [
      "Increase heart rate",
      "Prevent dizziness and promote recovery",
      "Enhance muscle hypertrophy",
      "Maximize calorie burn",
    ],
    correctOption: 1, // Prevent dizziness and promote recovery
  },
  {
    id: 117,
    text: "What is the role of the latissimus dorsi muscle?",
    options: [
      "Shoulder extension and adduction",
      "Elbow flexion",
      "Knee extension",
      "Spinal flexion",
    ],
    correctOption: 0, // Shoulder extension and adduction
  },
  {
    id: 118,
    text: "Which fitness principle involves progressively increasing intensity to promote adaptations?",
    options: [
      "SAID principle",
      "General adaptation syndrome",
      "Overload principle",
      "Reciprocal inhibition",
    ],
    correctOption: 2, // Overload principle
  },
  {
    id: 119,
    text: "Which exercise is most effective for improving lower-body power?",
    options: ["Step-ups", "Squat jumps", "Hamstring curls", "Calf raises"],
    correctOption: 1, // Squat jumps
  },
  {
    id: 120,
    text: "What is the recommended frequency for flexibility training?",
    options: [
      "Once a week",
      "2-3 times per week",
      "Every other week",
      "5-7 times per week",
    ],
    correctOption: 3, // 5-7 times per week
  },
  {
    id: 121,
    text: "What is the main purpose of core stabilization exercises?",
    options: [
      "Enhance muscle size",
      "Improve balance and coordination",
      "Build endurance",
      "Increase joint mobility",
    ],
    correctOption: 1, // Improve balance and coordination
  },
  {
    id: 122,
    text: "Which muscle group is targeted during bent-over rows?",
    options: [
      "Latissimus dorsi",
      "Quadriceps",
      "Pectoralis major",
      "Gastrocnemius",
    ],
    correctOption: 0, // Latissimus dorsi
  },
  {
    id: 123,
    text: "What is a common symptom of overtraining syndrome?",
    options: [
      "Improved energy levels",
      "Persistent fatigue",
      "Enhanced recovery time",
      "Reduced muscle mass",
    ],
    correctOption: 1, // Persistent fatigue
  },
  {
    id: 124,
    text: "Which group fitness format includes static and dynamic stretching for recovery?",
    options: ["Boot camp", "HIIT", "Yoga", "Strength training"],
    correctOption: 2, // Yoga
  },
  {
    id: 125,
    text: "What is the recommended duration for cardiovascular endurance training per session?",
    options: [
      "10-15 minutes",
      "20-60 minutes",
      "5-10 minutes",
      "Over 60 minutes",
    ],
    correctOption: 1, // 20-60 minutes
  },
  {
    id: 126,
    text: "Which joint movement occurs in the sagittal plane?",
    options: [
      "Shoulder abduction",
      "Knee flexion",
      "Hip adduction",
      "Ankle inversion",
    ],
    correctOption: 1, // Knee flexion
  },
  {
    id: 127,
    text: "What is the primary goal of balance training?",
    options: [
      "Enhance cardiovascular endurance",
      "Improve stability and coordination",
      "Increase muscle hypertrophy",
      "Enhance agility",
    ],
    correctOption: 1, // Improve stability and coordination
  },
  {
    id: 128,
    text: "Which condition may benefit from resistance training to improve bone mineral density?",
    options: ["Hypertension", "Osteoporosis", "Diabetes", "Arthritis"],
    correctOption: 1, // Osteoporosis
  },
  {
    id: 129,
    text: "Which cue type emphasizes participant motivation?",
    options: [
      "Alignment cues",
      "Respiration cues",
      "Motivational cues",
      "Directional cues",
    ],
    correctOption: 2, // Motivational cues
  },
  {
    id: 130,
    text: "What is a key benefit of resistance training?",
    options: [
      "Improves flexibility",
      "Increases muscle strength",
      "Reduces body temperature",
      "Improves digestion",
    ],
    correctOption: 1, // Increases muscle strength
  },
  {
    id: 131,
    text: "What is the primary function of the hamstring muscle group?",
    options: [
      "Knee extension",
      "Knee flexion",
      "Hip abduction",
      "Hip adduction",
    ],
    correctOption: 1, // Knee flexion
  },
  {
    id: 132,
    text: "Which acute variable determines the number of repetitions in a set?",
    options: ["Intensity", "Volume", "Frequency", "Rest interval"],
    correctOption: 1, // Volume
  },
  {
    id: 133,
    text: "Which joint action is involved in a lateral arm raise?",
    options: [
      "Shoulder abduction",
      "Shoulder adduction",
      "Elbow flexion",
      "Elbow extension",
    ],
    correctOption: 0, // Shoulder abduction
  },
  {
    id: 134,
    text: "What is a characteristic of Type I muscle fibers?",
    options: [
      "High fatigue resistance",
      "Low aerobic capacity",
      "High power output",
      "Fast contraction speed",
    ],
    correctOption: 0, // High fatigue resistance
  },
  {
    id: 135,
    text: "Which participant arrangement is best for small spaces?",
    options: ["Circle", "Row", "Staggered", "Circuit"],
    correctOption: 2, // Staggered
  },
  {
    id: 136,
    text: "What is the purpose of plyometric training?",
    options: [
      "Improve cardiovascular fitness",
      "Increase power and explosiveness",
      "Enhance flexibility",
      "Reduce fatigue",
    ],
    correctOption: 1, // Increase power and explosiveness
  },
  {
    id: 137,
    text: "Which exercise is an example of a proprioceptive challenge?",
    options: [
      "Walking on a treadmill",
      "Single-leg balance on a foam pad",
      "Bench press",
      "Lunges on a flat surface",
    ],
    correctOption: 1, // Single-leg balance on a foam pad
  },
  {
    id: 138,
    text: "What is a recommended intensity range for beginner participants in resistance training?",
    options: ["10-20% 1RM", "30-40% 1RM", "50-70% 1RM", "80-90% 1RM"],
    correctOption: 2, // 50-70% 1RM
  },
  {
    id: 139,
    text: "What is the primary focus of dynamic stretching?",
    options: [
      "Improve static flexibility",
      "Enhance joint mobility",
      "Increase muscle hypertrophy",
      "Reduce cardiovascular strain",
    ],
    correctOption: 1, // Enhance joint mobility
  },
  {
    id: 140,
    text: "Which exercise primarily targets the gastrocnemius muscle?",
    options: ["Calf raises", "Leg curls", "Deadlifts", "Leg press"],
    correctOption: 0, // Calf raises
  },
  {
    id: 141,
    text: "What is a key characteristic of the oxidative energy system?",
    options: [
      "Anaerobic process",
      "Uses oxygen for energy",
      "Short-duration activities",
      "High power output",
    ],
    correctOption: 1, // Uses oxygen for energy
  },
  {
    id: 142,
    text: "Which muscle group is strengthened during push-ups?",
    options: ["Quadriceps", "Pectoralis major", "Hamstrings", "Gastrocnemius"],
    correctOption: 1, // Pectoralis major
  },
  {
    id: 143,
    text: "What is a safety consideration for group fitness in hot environments?",
    options: [
      "Minimize rest periods",
      "Increase intensity",
      "Ensure adequate hydration",
      "Use heavy resistance",
    ],
    correctOption: 2, // Ensure adequate hydration
  },
  {
    id: 144,
    text: "Which phase of the General Adaptation Syndrome involves adaptation to training stress?",
    options: ["Alarm", "Resistance", "Exhaustion", "Recovery"],
    correctOption: 1, // Resistance
  },
  {
    id: 145,
    text: "What is a benefit of participant-centered cueing?",
    options: [
      "Focuses on instructor’s expertise",
      "Encourages self-improvement",
      "Eliminates need for modifications",
      "Increases class complexity",
    ],
    correctOption: 1, // Encourages self-improvement
  },
  {
    id: 146,
    text: "What is the purpose of a fitness instructor’s pre-class preparation?",
    options: [
      "Enhance personal workout",
      "Engage in freestyle choreography",
      "Ensure a safe and effective class environment",
      "Increase participant energy levels",
    ],
    correctOption: 2, // Ensure a safe and effective class environment
  },
  {
    id: 147,
    text: "Which chronic condition benefits most from chair-based resistance exercises?",
    options: ["Arthritis", "Diabetes", "Hypertension", "Youth participants"],
    correctOption: 0, // Arthritis
  },
  {
    id: 148,
    text: "What is the recommended cool-down duration for most group fitness classes?",
    options: ["2-5 minutes", "5-10 minutes", "10-15 minutes", "15-20 minutes"],
    correctOption: 1, // 5-10 minutes
  },
  {
    id: 149,
    text: "Which muscle action occurs during the upward phase of a squat?",
    options: ["Concentric", "Eccentric", "Isometric", "Static"],
    correctOption: 0, // Concentric
  },
  {
    id: 150,
    text: "Which guideline is most important for participants recovering from a stroke?",
    options: [
      "Focus on high-intensity intervals",
      "Incorporate balance and movement patterns",
      "Eliminate warm-up phases",
      "Reduce exercise frequency",
    ],
    correctOption: 1, // Incorporate balance and movement patterns
  },
  {
    id: 151,
    text: "Which mental health benefit is most commonly associated with regular exercise?",
    options: [
      "Increased stress levels",
      "Improved focus and reduced anxiety",
      "Reduced flexibility",
      "Decreased energy levels",
    ],
    correctOption: 1, // Improved focus and reduced anxiety
  },
  {
    id: 152,
    text: "What is a key consideration when designing an exercise program for pre- and postnatal participants?",
    options: [
      "Avoid exercises in a supine position after the first trimester",
      "Focus on high-intensity interval training",
      "Encourage heavy lifting",
      "Eliminate core stability exercises",
    ],
    correctOption: 0, // Avoid exercises in a supine position after the first trimester
  },
  {
    id: 153,
    text: "Which physiological response is most likely to occur at high altitudes?",
    options: [
      "Increased oxygen availability",
      "Decreased heart rate",
      "Increased respiratory rate",
      "Reduced energy expenditure",
    ],
    correctOption: 2, // Increased respiratory rate
  },
  {
    id: 154,
    text: "What adaptation occurs in muscles during consistent resistance training?",
    options: [
      "Increased joint laxity",
      "Decreased neuromuscular control",
      "Increased muscle hypertrophy",
      "Reduced strength gains",
    ],
    correctOption: 2, // Increased muscle hypertrophy
  },
  {
    id: 155,
    text: "Which exercise modification would best accommodate an older adult with arthritis?",
    options: [
      "High-impact exercises",
      "Pain-free range of motion exercises",
      "Extended static stretches",
      "Plyometric drills",
    ],
    correctOption: 1, // Pain-free range of motion exercises
  },
  {
    id: 156,
    text: "Which environmental condition poses the greatest risk for dehydration during exercise?",
    options: [
      "High altitude",
      "Low humidity",
      "High heat and humidity",
      "Cold temperatures",
    ],
    correctOption: 2, // High heat and humidity
  },
  {
    id: 157,
    text: "What is the primary goal of mind-body group fitness formats such as yoga?",
    options: [
      "Enhance aerobic capacity",
      "Improve power output",
      "Develop mental focus and flexibility",
      "Increase muscle hypertrophy",
    ],
    correctOption: 2, // Develop mental focus and flexibility
  },
  {
    id: 158,
    text: "Which nutrient plays the largest role in muscle recovery and repair?",
    options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
    correctOption: 1, // Proteins
  },
  {
    id: 159,
    text: "What should participants recovering from heat exhaustion focus on during exercise?",
    options: [
      "Maximal effort exercises",
      "High-impact activities",
      "Hydration and moderate intensity",
      "Extended recovery periods",
    ],
    correctOption: 2, // Hydration and moderate intensity
  },
  {
    id: 160,
    text: "Which flexibility technique involves active movement through a full range of motion?",
    options: [
      "Static stretching",
      "Dynamic stretching",
      "Ballistic stretching",
      "Passive stretching",
    ],
    correctOption: 1, // Dynamic stretching
  },
  {
    id: 161,
    text: "What does the length-tension relationship describe?",
    options: [
      "The optimal muscle length for maximum force production",
      "The relationship between joint angle and muscle fatigue",
      "The amount of tension in muscles during rest",
      "The time it takes for muscles to recover after stretching",
    ],
    correctOption: 0, // The optimal muscle length for maximum force production
  },
  {
    id: 162,
    text: "How does the length-tension relationship affect muscle performance?",
    options: [
      "A muscle generates the most force when it is too short",
      "A muscle generates the most force when it is too long",
      "A muscle generates the most force when it is at its optimal length",
      "Muscle length does not affect force production",
    ],
    correctOption: 2, // A muscle generates the most force when it is at its optimal length
  },
  {
    id: 163,
    text: "What happens when a muscle is too short or too long?",
    options: [
      "It can produce the maximum force",
      "It cannot produce as much force",
      "It relaxes completely",
      "It generates continuous tension",
    ],
    correctOption: 1, // It cannot produce as much force
  },
  {
    id: 164,
    text: "What is the definition of a force-couple relationship?",
    options: [
      "When muscles lengthen under tension",
      "When muscles work together to produce movement",
      "The ability of a muscle to generate force at varying lengths",
      "The relationship between agonist and antagonist muscles",
    ],
    correctOption: 1, // When muscles work together to produce movement
  },
  {
    id: 165,
    text: "Which muscles work in a force-couple relationship to perform upward rotation of the scapula?",
    options: [
      "Upper trapezius, lower trapezius, serratus anterior",
      "Deltoids, pectoralis major, latissimus dorsi",
      "Biceps brachii, brachialis, brachioradialis",
      "Gluteus maximus, hamstrings, quadriceps",
    ],
    correctOption: 0, // Upper trapezius, lower trapezius, serratus anterior
  },
  {
    id: 166,
    text: "Which action is an example of a force-couple relationship?",
    options: [
      "Contraction of the biceps during a curl",
      "Anterior pelvic tilt caused by the hip flexors and erector spinae",
      "Knee extension by the quadriceps",
      "Spinal rotation caused by the rectus abdominis",
    ],
    correctOption: 1, // Anterior pelvic tilt caused by the hip flexors and erector spinae
  },
  {
    id: 167,
    text: "How do force-couple relationships contribute to efficient human movement?",
    options: [
      "By isolating individual muscle groups during movement",
      "By reducing the need for stabilization",
      "By creating joint motion through the coordinated activation of multiple muscles",
      "By limiting the range of motion",
    ],
    correctOption: 2, // By creating joint motion through the coordinated activation of multiple muscles
  },
  {
    id: 168,
    text: "Which muscle groups work in a force-couple relationship to perform posterior pelvic tilt?",
    options: [
      "Hamstrings and rectus abdominis",
      "Quadriceps and gluteus maximus",
      "Erector spinae and hip flexors",
      "Adductors and abductors",
    ],
    correctOption: 0, // Hamstrings and rectus abdominis
  },
  {
    id: 169,
    text: "Which muscles demonstrate reciprocal inhibition during a bicep curl?",
    options: [
      "Biceps as the agonist and triceps as the antagonist",
      "Triceps as the agonist and biceps as the antagonist",
      "Deltoids as the agonist and pectorals as the antagonist",
      "Hamstrings as the agonist and quadriceps as the antagonist",
    ],
    correctOption: 0, // Biceps as the agonist and triceps as the antagonist
  },
  {
    id: 170,
    text: "How does reciprocal inhibition contribute to functional movement?",
    options: [
      "It prevents overuse injuries by limiting joint range of motion",
      "It allows efficient movement by relaxing the opposing muscle during contraction",
      "It stabilizes joints during high-intensity exercises",
      "It enhances muscle strength by activating both agonist and antagonist muscles",
    ],
    correctOption: 1, // It allows efficient movement by relaxing the opposing muscle during contraction
  },
  {
    id: 171,
    text: "What happens to the antagonist muscle during reciprocal inhibition?",
    options: [
      "It remains contracted alongside the agonist",
      "It relaxes to allow movement",
      "It stabilizes the joint by generating tension",
      "It prevents further movement by contracting",
    ],
    correctOption: 1, // It relaxes to allow movement
  },
  {
    id: 172,
    text: "Which of the following scenarios represents the opposite of reciprocal inhibition?",
    options: [
      "Simultaneous contraction of agonist and antagonist muscles",
      "Agonist contraction and antagonist relaxation",
      "Relaxation of both agonist and antagonist muscles",
      "Antagonist contraction only",
    ],
    correctOption: 0, // Simultaneous contraction of agonist and antagonist muscles
  },
  {
    id: 173,
    text: "What is a practical application of reciprocal inhibition in fitness training?",
    options: [
      "Using it during dynamic stretching to increase range of motion",
      "Performing isometric exercises to stabilize joints",
      "Increasing muscle activation by contracting both agonist and antagonist",
      "Maintaining static postures to enhance flexibility",
    ],
    correctOption: 0, // Using it during dynamic stretching to increase range of motion
  },
  {
    id: 174,
    text: "What is the primary function of the Central Nervous System (CNS)?",
    options: [
      "Transmit signals between different parts of the body",
      "Control voluntary and involuntary actions of the body",
      "Coordinate activity of body parts through the brain and spinal cord",
      "Regulate the release of hormones",
    ],
    correctOption: 2, // Coordinate activity of body parts through the brain and spinal cord
  },
  {
    id: 175,
    text: "What does the Peripheral Nervous System (PNS) consist of?",
    options: [
      "Brain and spinal cord",
      "Cranial nerves, spinal nerves, and sensory receptors",
      "Muscles and bones",
      "Cardiovascular and respiratory systems",
    ],
    correctOption: 1, // Cranial nerves, spinal nerves, and sensory receptors
  },
  {
    id: 176,
    text: "What role does the Peripheral Nervous System (PNS) play in the body?",
    options: [
      "Processes sensory input and initiates motor output",
      "Regulates emotions and mood",
      "Stores information and memories",
      "Produces energy for muscle contractions",
    ],
    correctOption: 0, // Processes sensory input and initiates motor output
  },
  {
    id: 178,
    text: "What does proprioception refer to?",
    options: [
      "Awareness of balance and posture",
      "Awareness and perception of body position and limb movements",
      "Muscle relaxation and tension changes",
      "Joint stability during movement",
    ],
    correctOption: 1, // Awareness and perception of body position and limb movements
  },
  {
    id: 179,
    text: "What is the function of muscle spindles?",
    options: [
      "Sensitive to changes in muscular length and rate of length change",
      "Monitor joint position and stability",
      "Regulate heart rate during exercise",
      "Prevent muscle contraction during stretching",
    ],
    correctOption: 0, // Sensitive to changes in muscular length and rate of length change
  },
  {
    id: 180,
    text: "What role do Golgi tendon organs play in human movement?",
    options: [
      "Initiate rapid muscle contractions",
      "Sensitive to changes in muscular tension and rate of tension change",
      "Detect balance and posture",
      "Control heart rate during exercise",
    ],
    correctOption: 1, // Sensitive to changes in muscular tension and rate of tension change
  },
  {
    id: 181,
    text: "How do muscle spindles and Golgi tendon organs work together during stretching?",
    options: [
      "Both relax the muscle to allow a greater range of motion",
      "Muscle spindles detect length changes, while Golgi tendon organs prevent excessive tension",
      "Both detect muscular fatigue during exercise",
      "Golgi tendon organs initiate stretching, and muscle spindles prevent movement",
    ],
    correctOption: 1, // Muscle spindles detect length changes, while Golgi tendon organs prevent excessive tension
  },
  {
    id: 182,
    text: "What is the basic unit of muscle contraction?",
    options: ["Myofibril", "Sarcomere", "Fascia", "Actin"],
    correctOption: 1, // Sarcomere
  },
  {
    id: 183,
    text: "Which protein helps muscles contract?",
    options: ["Myosin", "Actin", "Fascia", "Blood vessels"],
    correctOption: 0, // Myosin
  },
  {
    id: 184,
    text: "What does the fascia do in muscles?",
    options: [
      "Protects and separates muscles",
      "Helps muscles contract",
      "Delivers oxygen",
      "Produces energy",
    ],
    correctOption: 0, // Protects and separates muscles
  },
  {
    id: 185,
    text: "What does muscle extensibility refer to?",
    options: [
      "The ability to stretch or lengthen",
      "The ability to return to its original shape",
      "The ability to respond to a stimulus",
      "The ability to produce tension",
    ],
    correctOption: 0, // The ability to stretch or lengthen
  },
  {
    id: 186,
    text: "What is the definition of muscle elasticity?",
    options: [
      "The ability to stretch or lengthen",
      "The ability to return to its original shape",
      "The ability to respond to a stimulus",
      "The ability to produce tension",
    ],
    correctOption: 1, // The ability to return to its original shape
  },
  {
    id: 187,
    text: "What does muscle irritability mean?",
    options: [
      "The ability to stretch or lengthen",
      "The ability to return to its original shape",
      "The ability to respond to a stimulus",
      "The ability to produce tension",
    ],
    correctOption: 2, // The ability to respond to a stimulus
  },
  {
    id: 188,
    text: "What does the ability to develop tension in muscles refer to?",
    options: [
      "The ability to stretch or lengthen",
      "The ability to return to its original shape",
      "The ability to respond to a stimulus",
      "The ability to produce force",
    ],
    correctOption: 3, // The ability to produce force
  },
  {
    id: 189,
    text: "Which activity is best suited for Type 1 muscle fibers?",
    options: [
      "Sprinting",
      "Powerlifting",
      "Marathon running",
      "High-intensity interval training",
    ],
    correctOption: 2, // Marathon running
  },
  {
    id: 190,
    text: "Which activity is best suited for Type 2 muscle fibers?",
    options: [
      "Long-distance swimming",
      "Weightlifting",
      "Cycling for endurance",
      "Walking",
    ],
    correctOption: 1, // Weightlifting
  },
  {
    id: 193,
    text: "What is the primary function of the skeletal system?",
    options: [
      "To regulate blood pressure",
      "To provide a framework for structure and movement",
      "To transport nutrients in the body",
      "To store fat and protein",
    ],
    correctOption: 1, // To provide a framework for structure and movement
  },
  {
    id: 194,
    text: "What role do bones play in relation to muscles?",
    options: [
      "Bones produce muscular contractions",
      "Bones act as a resting ground for muscles",
      "Bones provide oxygen for muscles",
      "Bones eliminate muscle waste",
    ],
    correctOption: 1, // Bones act as a resting ground for muscles
  },
  {
    id: 195,
    text: "What are the connective tissue junctions formed by bones called?",
    options: ["Tendons", "Ligaments", "Joints", "Fascia"],
    correctOption: 2, // Joints
  },
  {
    id: 196,
    text: "How does regular exercise affect bone health?",
    options: [
      "It decreases bone density",
      "It increases bone strength and density",
      "It eliminates connective tissues in joints",
      "It has no effect on bones",
    ],
    correctOption: 1, // It increases bone strength and density
  },
  {
    id: 197,
    text: "What does the axial skeleton include?",
    options: [
      "Upper and lower extremities, shoulder, and pelvic girdles",
      "Skull, rib cage, and vertebral column",
      "Hands, feet, and pelvic girdles",
      "Shoulders, arms, and legs",
    ],
    correctOption: 1, // Skull, rib cage, and vertebral column
  },
  {
    id: 198,
    text: "What is included in the appendicular skeleton?",
    options: [
      "Skull, rib cage, and vertebral column",
      "Upper and lower extremities, shoulder, and pelvic girdles",
      "Hands, feet, and skull",
      "Rib cage, vertebral column, and pelvis",
    ],
    correctOption: 1, // Upper and lower extremities, shoulder, and pelvic girdles
  },
  {
    id: 199,
    text: "Which skeletal system division is responsible for protecting vital organs?",
    options: [
      "Axial skeleton",
      "Appendicular skeleton",
      "Muscular system",
      "Nervous system",
    ],
    correctOption: 0, // Axial skeleton
  },
  {
    id: 200,
    text: "What is the primary function of the appendicular skeleton?",
    options: [
      "To protect internal organs",
      "To support movement",
      "To produce blood cells",
      "To store calcium",
    ],
    correctOption: 1, // To support movement
  },
  {
    id: 201,
    text: "What is a characteristic of fibrous joints?",
    options: [
      "Freely movable",
      "Semi-movable",
      "Immovable",
      "Flexible and elastic",
    ],
    correctOption: 2, // Immovable
  },
  {
    id: 202,
    text: "What is a characteristic of cartilaginous joints?",
    options: [
      "Immovable",
      "Semi-movable",
      "Freely movable",
      "Rigid and inflexible",
    ],
    correctOption: 1, // Semi-movable
  },
  {
    id: 203,
    text: "What is a characteristic of synovial joints?",
    options: [
      "Immovable",
      "Semi-movable",
      "Freely movable",
      "Connected by cartilage",
    ],
    correctOption: 2, // Freely movable
  },
  {
    id: 204,
    text: "Which type of joint allows the greatest range of motion?",
    options: ["Fibrous", "Cartilaginous", "Synovial", "Elastic"],
    correctOption: 2, // Synovial
  },
  {
    id: 205,
    text: "Which type of joint is found in the skull?",
    options: ["Fibrous", "Cartilaginous", "Synovial", "Elastic"],
    correctOption: 0, // Fibrous
  },
  {
    id: 206,
    text: "Where are cartilaginous joints commonly found?",
    options: [
      "In the skull",
      "Between vertebrae",
      "In the shoulder",
      "In the wrist",
    ],
    correctOption: 1, // Between vertebrae
  },
  {
    id: 207,
    text: "What is an example of a synovial joint?",
    options: [
      "Sutures in the skull",
      "Vertebral discs",
      "Hip joint",
      "Growth plates",
    ],
    correctOption: 2, // Hip joint
  },
  {
    id: 208,
    text: "What is the primary function of tendons?",
    options: [
      "Connect bone to bone",
      "Connect muscle to bone",
      "Protect the bone surface",
      "Allow flexibility in joints",
    ],
    correctOption: 1, // Connect muscle to bone
  },
  {
    id: 209,
    text: "What is the primary function of ligaments?",
    options: [
      "Connect muscle to bone",
      "Connect bone to bone",
      "Generate movement in joints",
      "Provide blood supply to muscles",
    ],
    correctOption: 1, // Connect bone to bone
  },
  {
    id: 210,
    text: "Where are tendons typically found?",
    options: [
      "Between bones at a joint",
      "At the ends of muscles attaching to bones",
      "Covering the surface of bones",
      "Between cartilage and bone",
    ],
    correctOption: 1, // At the ends of muscles attaching to bones
  },
  {
    id: 211,
    text: "What is a common characteristic of ligaments?",
    options: [
      "They are elastic and provide stability to joints",
      "They are flexible and connect muscles to bones",
      "They produce movement in muscles",
      "They generate energy for contraction",
    ],
    correctOption: 0, // They are elastic and provide stability to joints
  },
  {
    id: 212,
    text: "Which structure is responsible for joint stability?",
    options: ["Tendons", "Ligaments", "Cartilage", "Muscles"],
    correctOption: 1, // Ligaments
  },
  {
    id: 213,
    text: "What injury occurs when a tendon is overstretched or torn?",
    options: ["Sprain", "Strain", "Fracture", "Dislocation"],
    correctOption: 1, // Strain
  },
  {
    id: 214,
    text: "What injury occurs when a ligament is overstretched or torn?",
    options: ["Sprain", "Strain", "Fracture", "Dislocation"],
    correctOption: 0, // Sprain
  },
  {
    id: 215,
    text: "How many vertebrae are in the cervical spine?",
    options: ["5", "7", "12", "4"],
    correctOption: 1, // 7
  },
  {
    id: 216,
    text: "Which part of the spine connects to the ribcage?",
    options: ["Cervical spine", "Thoracic spine", "Lumbar spine", "Sacrum"],
    correctOption: 1, // Thoracic spine
  },
  {
    id: 217,
    text: "What is the primary function of the lumbar spine?",
    options: [
      "Protect the spinal cord",
      "Support the weight of the body",
      "Connect the ribs to the pelvis",
      "Facilitate neck movement",
    ],
    correctOption: 1, // Support the weight of the body
  },
  {
    id: 218,
    text: "Which part of the spine consists of fused vertebrae?",
    options: [
      "Thoracic spine",
      "Cervical spine",
      "Sacrum and coccyx",
      "Lumbar spine",
    ],
    correctOption: 2, // Sacrum and coccyx
  },
  {
    id: 219,
    text: "What is the total number of vertebrae in the thoracic spine?",
    options: ["7", "12", "5", "4"],
    correctOption: 1, // 12
  },
  {
    id: 220,
    text: "Which part of the spine allows for the most movement of the head?",
    options: ["Cervical spine", "Thoracic spine", "Lumbar spine", "Sacrum"],
    correctOption: 0, // Cervical spine
  },
  {
    id: 221,
    text: "What is the function of the coccyx?",
    options: [
      "Protect the heart and lungs",
      "Support the weight of the upper body",
      "Provide attachment for muscles and ligaments",
      "Facilitate rotation of the spine",
    ],
    correctOption: 2, // Provide attachment for muscles and ligaments
  },
  {
    id: 222,
    text: "Which region of the spine is most prone to injury from heavy lifting?",
    options: ["Cervical spine", "Thoracic spine", "Lumbar spine", "Sacrum"],
    correctOption: 2, // Lumbar spine
  },
  {
    id: 223,
    text: "How many vertebrae are fused in the sacrum?",
    options: ["3", "4", "5", "6"],
    correctOption: 2, // 5
  },
  {
    id: 224,
    text: "What is the role of the thoracic spine in relation to the ribcage?",
    options: [
      "Allows for flexible movement",
      "Connects the ribs to the sternum",
      "Provides stability and protection for vital organs",
      "Facilitates head rotation",
    ],
    correctOption: 2, // Provides stability and protection for vital organs
  },
  {
    id: 225,
    text: "What is Kinetic Chain Dysfunction?",
    options: [
      "An alignment of the body's structures for optimal movement",
      "A disruption in the body's interconnected systems that can lead to compensations and problems",
      "A process where muscles work together to produce efficient movement",
      "A healthy posture characterized by a neutral spine",
    ],
    correctOption: 1, // A disruption in the body's interconnected systems that can lead to compensations and problems
  },
  {
    id: 226,
    text: "What characterizes Lordosis in the human spine?",
    options: [
      "An excessive outward curve of the upper back",
      "A lateral curvature of the spine",
      "An excessive inward curve of the lower back",
      "A balanced and neutral spine alignment",
    ],
    correctOption: 2, // An excessive inward curve of the lower back
  },
  {
    id: 227,
    text: "What are common symptoms of Lordosis?",
    options: [
      "Hump in the upper back, fatigue, and stiffness",
      "Uneven shoulder blades and leaning to one side",
      "Back pain, mobility issues, and a gap in the lower back when lying down",
      "Decreased flexibility and muscle tightness",
    ],
    correctOption: 2, // Back pain, mobility issues, and a gap in the lower back when lying down
  },
  {
    id: 228,
    text: "What characterizes Kyphosis in the human spine?",
    options: [
      "An excessive inward curve of the lower back",
      "An excessive outward curve of the upper back",
      "A lateral curvature of the spine",
      "A straightened and rigid spine",
    ],
    correctOption: 1, // An excessive outward curve of the upper back
  },
  {
    id: 229,
    text: "What are common symptoms of Kyphosis?",
    options: [
      "Lower back pain and issues lying flat",
      "Hump in the upper back, fatigue, and stiffness",
      "Uneven shoulder blades and a tilted posture",
      "Restricted hip mobility and tight hamstrings",
    ],
    correctOption: 1, // Hump in the upper back, fatigue, and stiffness
  },
  {
    id: 230,
    text: "What characterizes Scoliosis in the human spine?",
    options: [
      "An excessive outward curve of the upper back",
      "An excessive inward curve of the lower back",
      "A lateral curvature of the spine",
      "A neutral and balanced alignment",
    ],
    correctOption: 2, // A lateral curvature of the spine
  },
  {
    id: 231,
    text: "What are common symptoms of Scoliosis?",
    options: [
      "Hump in the upper back and stiffness",
      "Lower back pain and difficulty lying flat",
      "Uneven shoulder blades, hips, or waist and leaning to one side",
      "Tightness in the lower back and pelvis",
    ],
    correctOption: 2, // Uneven shoulder blades, hips, or waist and leaning to one side
  },
  {
    id: 232,
    text: "How can Kinetic Chain Dysfunction impact the body?",
    options: [
      "It enhances flexibility and mobility",
      "It causes a chain reaction that may lead to problems in other parts of the Human Movement System",
      "It ensures proper joint alignment and stability",
      "It decreases the risk of injury during physical activity",
    ],
    correctOption: 1, // It causes a chain reaction that may lead to problems in other parts of the Human Movement System
  },
  {
    id: 233,
    text: "Which posture type is characterized by a neutral spine alignment?",
    options: ["Lordosis", "Kyphosis", "Scoliosis", "Healthy posture"],
    correctOption: 3, // Healthy posture
  },
  {
    id: 234,
    text: "What is the primary cause of problems resulting from Kinetic Chain Dysfunction?",
    options: [
      "Unilateral movements and strength imbalances",
      "Poor coordination between agonist and antagonist muscles",
      "Interconnected structures of the body causing compensations when one area becomes dysfunctional",
      "Excessive muscle activation during physical activity",
    ],
    correctOption: 2, // Interconnected structures of the body causing compensations when one area becomes dysfunctional
  },
  {
    id: 235,
    text: "What is a primary effect of Kinetic Chain Dysfunction?",
    options: [
      "Improved muscle flexibility and strength",
      "Enhanced neuromuscular efficiency",
      "Disruption of communication within the body's systems",
      "Increased stability and balance",
    ],
    correctOption: 2, // Disruption of communication within the body's systems
  },
  {
    id: 236,
    text: "How does Kinetic Chain Dysfunction affect muscle length and tension?",
    options: [
      "It maintains optimal muscle length and tension",
      "It changes the length and tension of muscles, leading to imbalances",
      "It decreases muscle activation entirely",
      "It ensures proper recruitment of muscle fibers",
    ],
    correctOption: 1, // It changes the length and tension of muscles, leading to imbalances
  },
  {
    id: 237,
    text: "What is a common result of Kinetic Chain Dysfunction?",
    options: [
      "Improved range of motion",
      "Reduced risk of injury",
      "Pain and injury",
      "Enhanced joint stability",
    ],
    correctOption: 2, // Pain and injury
  },
  {
    id: 238,
    text: "What characterizes an overactive muscle?",
    options: [
      "Weak and not being recruited properly",
      "Overly tense or tight during movement",
      "Completely inactive during movement",
      "Only activated during isometric contractions",
    ],
    correctOption: 1, // Overly tense or tight during movement
  },
  {
    id: 239,
    text: "What characterizes an underactive muscle?",
    options: [
      "Overly tense or tight during movement",
      "Strong and highly responsive",
      "Weak and not being recruited properly",
      "Shortened and inflexible",
    ],
    correctOption: 2, // Weak and not being recruited properly
  },
  {
    id: 240,
    text: "Which of the following best describes how Kinetic Chain Dysfunction impacts movement?",
    options: [
      "It improves coordination between muscle groups",
      "It disrupts communication, leading to inefficient movement patterns",
      "It reduces tension and improves flexibility",
      "It prevents imbalances in muscle recruitment",
    ],
    correctOption: 1, // It disrupts communication, leading to inefficient movement patterns
  },
  {
    id: 241,
    text: "What happens when communication within the body's systems is disrupted due to Kinetic Chain Dysfunction?",
    options: [
      "Muscles work together efficiently",
      "Joint stability and mobility are optimized",
      "The body compensates, often leading to further dysfunction",
      "Neuromuscular control is enhanced",
    ],
    correctOption: 2, // The body compensates, often leading to further dysfunction
  },
  {
    id: 242,
    text: "What can occur when an underactive muscle is not properly recruited?",
    options: [
      "Other muscles compensate, leading to overuse and potential injury",
      "The muscle becomes stronger over time",
      "Muscle tension and flexibility improve",
      "Joint mobility is optimized",
    ],
    correctOption: 0, // Other muscles compensate, leading to overuse and potential injury
  },
  {
    id: 243,
    text: "What is a key cause of pain associated with Kinetic Chain Dysfunction?",
    options: [
      "Proper alignment of the kinetic chain",
      "Underactive and overactive muscles leading to imbalances",
      "Increased flexibility of ligaments",
      "Decreased range of motion",
    ],
    correctOption: 1, // Underactive and overactive muscles leading to imbalances
  },
  {
    id: 244,
    text: "Which term refers to a muscle being overly tense or tight during movement?",
    options: [
      "Underactive muscle",
      "Overactive muscle",
      "Inactive muscle",
      "Relaxed muscle",
    ],
    correctOption: 1, // Overactive muscle
  },
  {
    id: 245,
    text: "Which of the following is a contributor to Kinetic Chain Dysfunction?",
    options: [
      "Switching shoulders while carrying a backpack",
      "Holding a phone to the same ear each time",
      "Using proper ergonomics while working",
      "Wearing flat shoes with arch support",
    ],
    correctOption: 1, // Holding a phone to the same ear each time
  },
  {
    id: 246,
    text: "How can wearing high-heeled shoes contribute to Kinetic Chain Dysfunction?",
    options: [
      "By improving stability",
      "By altering posture and increasing stress on the lower back and knees",
      "By enhancing ankle mobility",
      "By evenly distributing weight across the body",
    ],
    correctOption: 1, // By altering posture and increasing stress on the lower back and knees
  },
  {
    id: 247,
    text: "What is the primary purpose of the cardiorespiratory system?",
    options: [
      "To provide oxygen and nutrients to the body and remove waste products",
      "To control body temperature",
      "To facilitate muscle contractions",
      "To regulate blood sugar levels",
    ],
    correctOption: 0, // To provide oxygen and nutrients to the body and remove waste products
  },
  {
    id: 248,
    text: "Which two systems make up the cardiorespiratory system?",
    options: [
      "Cardiovascular and muscular systems",
      "Cardiovascular and respiratory systems",
      "Skeletal and respiratory systems",
      "Nervous and cardiovascular systems",
    ],
    correctOption: 1, // Cardiovascular and respiratory systems
  },
  {
    id: 249,
    text: "What role does the cardiovascular system play in the cardiorespiratory system?",
    options: [
      "Facilitates breathing by controlling lung function",
      "Transports oxygen, nutrients, and waste products through blood circulation",
      "Regulates the temperature of the body",
      "Maintains the posture and stability of the body",
    ],
    correctOption: 1, // Transports oxygen, nutrients, and waste products through blood circulation
  },
  {
    id: 250,
    text: "What is the function of the respiratory system within the cardiorespiratory system?",
    options: [
      "Filters blood and removes toxins",
      "Facilitates the exchange of oxygen and carbon dioxide in the lungs",
      "Distributes nutrients to muscles",
      "Generates electrical impulses to regulate heartbeat",
    ],
    correctOption: 1, // Facilitates the exchange of oxygen and carbon dioxide in the lungs
  },
  {
    id: 251,
    text: "What components make up the cardiovascular system within the cardiorespiratory system?",
    options: [
      "Lungs and respiratory passages",
      "Heart, blood vessels, and blood",
      "Brain, spinal cord, and nerves",
      "Bones, muscles, and tendons",
    ],
    correctOption: 1, // Heart, blood vessels, and blood
  },
  {
    id: 252,
    text: "What is the function of respiratory passages in the cardiorespiratory system?",
    options: [
      "Transport blood throughout the body",
      "Collect and transport oxygen",
      "Pump oxygenated blood from the heart",
      "Store oxygen for later use",
    ],
    correctOption: 1, // Collect and transport oxygen
  },
  {
    id: 253,
    text: "Which organ is responsible for the exchange of oxygen and carbon dioxide in the cardiorespiratory system?",
    options: ["Heart", "Lungs", "Blood vessels", "Liver"],
    correctOption: 1, // Lungs
  },
  {
    id: 254,
    text: "How do the cardiovascular and respiratory systems work together in the cardiorespiratory system?",
    options: [
      "The respiratory system supplies oxygen, while the cardiovascular system transports it through the body",
      "The cardiovascular system removes waste, while the respiratory system provides nutrients",
      "The cardiovascular system stores oxygen, and the respiratory system releases it",
      "The respiratory system pumps blood, while the cardiovascular system filters it",
    ],
    correctOption: 0, // The respiratory system supplies oxygen, while the cardiovascular system transports it through the body
  },
  {
    id: 255,
    text: "What is the function of the atrium in the heart?",
    options: [
      "Pumps blood out to the body",
      "Gathers blood coming to the heart",
      "Filters oxygen from the blood",
      "Regulates the heartbeat",
    ],
    correctOption: 1, // Gathers blood coming to the heart
  },
  {
    id: 256,
    text: "Which part of the heart pumps blood out to the body?",
    options: ["Atrium", "Ventricle", "Pulmonary valve", "Aortic valve"],
    correctOption: 1, // Ventricle
  },
  {
    id: 257,
    text: "What is the role of arteries in the cardiovascular system?",
    options: [
      "Transport blood away from the heart",
      "Transport blood back to the heart",
      "Gather blood entering the heart",
      "Pump blood to the lungs",
    ],
    correctOption: 0, // Transport blood away from the heart
  },
  {
    id: 258,
    text: "What is the function of veins in the cardiovascular system?",
    options: [
      "Transport blood away from the heart",
      "Transport blood back to the heart",
      "Oxygenate the blood",
      "Regulate the heartbeat",
    ],
    correctOption: 1, // Transport blood back to the heart
  },
  {
    id: 259,
    text: "Which valve in the heart prevents backflow of blood into the right atrium?",
    options: [
      "Mitral valve",
      "Pulmonary valve",
      "Aortic valve",
      "Tricuspid valve",
    ],
    correctOption: 3, // Tricuspid valve
  },
  {
    id: 260,
    text: "What does cardiac output (Q) represent?",
    options: [
      "The amount of blood pumped by the heart in one contraction",
      "The product of heart rate and stroke volume, measuring heart performance",
      "The rate at which the heart beats, measured in bpm",
      "The amount of oxygen transported in the blood",
    ],
    correctOption: 1, // The product of heart rate and stroke volume, measuring heart performance
  },
  {
    id: 261,
    text: "How is cardiac output calculated?",
    options: [
      "Heart rate divided by stroke volume",
      "Stroke volume multiplied by respiratory rate",
      "Heart rate multiplied by stroke volume",
      "Heart rate divided by respiratory rate",
    ],
    correctOption: 2, // Heart rate multiplied by stroke volume
  },
  {
    id: 262,
    text: "What is stroke volume (SV)?",
    options: [
      "The rate at which the heart beats per minute",
      "The amount of blood pumped out of the heart with each contraction",
      "The amount of blood transported through the arteries",
      "The pressure exerted by blood on vessel walls",
    ],
    correctOption: 1, // The amount of blood pumped out of the heart with each contraction
  },
  {
    id: 263,
    text: "What does heart rate (HR) measure?",
    options: [
      "The volume of blood pumped per contraction",
      "The number of beats per minute (bpm) of the heart",
      "The pressure of blood in the arteries",
      "The oxygen saturation in the blood",
    ],
    correctOption: 1, // The number of beats per minute (bpm) of the heart
  },
  {
    id: 264,
    text: "Which of the following factors directly influence cardiac output?",
    options: [
      "Heart rate and blood pressure",
      "Stroke volume and oxygen saturation",
      "Heart rate and stroke volume",
      "Stroke volume and arterial pressure",
    ],
    correctOption: 2, // Heart rate and stroke volume
  },
  {
    id: 265,
    text: "What is one of the key transportation functions of blood?",
    options: [
      "Regulating body temperature",
      "Transporting oxygen and nutrients to tissues",
      "Protecting against diseases and sickness",
      "Maintaining acid-base balance",
    ],
    correctOption: 1, // Transporting oxygen and nutrients to tissues
  },
  {
    id: 266,
    text: "Which function of blood involves regulating body temperature?",
    options: ["Transportation", "Regulation", "Protection", "Clotting"],
    correctOption: 1, // Regulation
  },
  {
    id: 267,
    text: "How does blood protect the body?",
    options: [
      "By transporting waste products from tissues",
      "By maintaining heat throughout the body",
      "By clotting to prevent excessive bleeding",
      "By carrying hormones to tissues",
    ],
    correctOption: 2, // By clotting to prevent excessive bleeding
  },
  {
    id: 268,
    text: "Which blood mechanism carries heat throughout the body?",
    options: ["Protection", "Regulation", "Transportation", "Immunity"],
    correctOption: 2, // Transportation
  },
  {
    id: 269,
    text: "What specialized immune cells in blood help fight diseases and sickness?",
    options: [
      "Oxygen cells",
      "Hormonal cells",
      "Immune cells",
      "Clotting cells",
    ],
    correctOption: 2, // Immune cells
  },
  {
    id: 270,
    text: "What is the primary function of the alveoli in the respiratory system?",
    options: [
      "Transporting carbon dioxide out of the lungs",
      "Exchanging oxygen and carbon dioxide with the bloodstream",
      "Moving air through the trachea",
      "Supporting the diaphragm during breathing",
    ],
    correctOption: 1, // Exchanging oxygen and carbon dioxide with the bloodstream
  },
  {
    id: 271,
    text: "What role does the diaphragm play in the respiratory system?",
    options: [
      "It filters air entering the lungs",
      "It pushes carbon dioxide out of the bloodstream",
      "It contracts to pull air into the lungs",
      "It prevents air from entering the alveoli",
    ],
    correctOption: 2, // It contracts to pull air into the lungs
  },
  {
    id: 272,
    text: "Which part of the respiratory system is responsible for moving air into the lungs?",
    options: ["Alveoli", "Trachea", "Intercostal muscles", "Heart"],
    correctOption: 1, // Trachea
  },
  {
    id: 273,
    text: "How do the lungs remove carbon dioxide from the body?",
    options: [
      "By contracting the diaphragm",
      "By exchanging carbon dioxide with oxygen in the alveoli",
      "By pushing carbon dioxide into the bloodstream",
      "By filtering air through the trachea",
    ],
    correctOption: 1, // By exchanging carbon dioxide with oxygen in the alveoli
  },
  {
    id: 274,
    text: "Which structures connect the trachea to the lungs?",
    options: ["Diaphragm", "Alveoli", "Bronchi", "Ribs"],
    correctOption: 2, // Bronchi
  },
  {
    id: 275,
    text: "What is the main goal of integrated fitness?",
    options: [
      "To focus on one component of exercise",
      "To combine all exercise components for higher levels of function",
      "To specialize in flexibility training",
      "To minimize the variety in fitness routines",
    ],
    correctOption: 1, // To combine all exercise components for higher levels of function
  },
  {
    id: 276,
    text: "What is the primary focus of plyometric exercises?",
    options: [
      "Improving slow and steady movements",
      "Enhancing flexibility through static stretching",
      "Quick, powerful movements using eccentric and concentric contractions",
      "Building endurance with low-intensity exercises",
    ],
    correctOption: 2, // Quick, powerful movements using eccentric and concentric contractions
  },
  {
    id: 277,
    text: "What is the primary goal of aerobic training?",
    options: [
      "Alternating between high-intensity and rest periods",
      "Keeping the heart rate in a targeted percentage of Max HR",
      "Building muscle mass through resistance exercises",
      "Improving explosive power and speed",
    ],
    correctOption: 1, // Keeping the heart rate in a targeted percentage of Max HR
  },
  {
    id: 278,
    text: "Which statement best describes anaerobic training?",
    options: [
      "It focuses on keeping the heart rate within the aerobic zone",
      "It involves steady-state exercise for long durations",
      "It alternates between intense exertion and lighter periods of rest",
      "It relies on oxygen to supply energy for muscle activity",
    ],
    correctOption: 2, // It alternates between intense exertion and lighter periods of rest
  },
  {
    id: 277,
    text: "What is the primary goal of aerobic training?",
    options: [
      "Alternating between high-intensity and rest periods",
      "Keeping the heart rate in a targeted percentage of Max HR",
      "Building muscle mass through resistance exercises",
      "Improving explosive power and speed",
    ],
    correctOption: 1, // Keeping the heart rate in a targeted percentage of Max HR
  },
  {
    id: 278,
    text: "Which statement best describes anaerobic training?",
    options: [
      "It focuses on keeping the heart rate within the aerobic zone",
      "It involves steady-state exercise for long durations",
      "It alternates between intense exertion and lighter periods of rest",
      "It relies on oxygen to supply energy for muscle activity",
    ],
    correctOption: 2, // It alternates between intense exertion and lighter periods of rest
  },
  {
    id: 283,
    text: "What does the SAID principle stand for in Specificity Training?",
    options: [
      "Strength, Adaptation, Intensity, Development",
      "Specific Adaptation to Imposed Demands",
      "Speed, Agility, Intensity, Duration",
      "Specific Adaptation to Increased Discipline",
    ],
    correctOption: 1, // Specific Adaptation to Imposed Demands
  },
  {
    id: 284,
    text: "According to Specificity Training, what determines the physiological outcome of exercise?",
    options: [
      "The diet followed by the participant",
      "The type of exercise stimulus placed on the body",
      "The amount of rest taken between exercises",
      "The overall physical condition of the participant",
    ],
    correctOption: 1, // The type of exercise stimulus placed on the body
  },
  {
    id: 285,
    text: "Which of the following is an example of Specificity Training?",
    options: [
      "A sprinter focusing on long-distance running to improve speed",
      "A weightlifter practicing heavy squats to improve leg strength",
      "A yoga practitioner switching to high-intensity interval training",
      "A swimmer engaging in unrelated endurance exercises",
    ],
    correctOption: 1, // A weightlifter practicing heavy squats to improve leg strength
  },
  {
    id: 286,
    text: "How does Specificity Training benefit athletic performance?",
    options: [
      "It ensures balanced development of all muscle groups",
      "It improves overall fitness through random exercises",
      "It tailors training to achieve specific goals and outcomes",
      "It minimizes the risk of injury by avoiding repetitive movements",
    ],
    correctOption: 2, // It tailors training to achieve specific goals and outcomes
  },
  {
    id: 287,
    text: "What are acute variables in exercise programming?",
    options: [
      "Components that dictate the overall duration of a fitness program",
      "Components that specify how each exercise is to be performed",
      "The long-term adaptations resulting from consistent training",
      "The fixed structure of exercise sessions that cannot be modified",
    ],
    correctOption: 1, // Components that specify how each exercise is to be performed
  },
  {
    id: 288,
    text: "Which of the following is NOT an example of an acute variable?",
    options: [
      "Repetitions",
      "Rest periods",
      "Training volume",
      "Dietary intake",
    ],
    correctOption: 3, // Dietary intake
  },
  {
    id: 289,
    text: "How can manipulating acute variables affect an exercise program?",
    options: [
      "It changes the exercise entirely",
      "It helps achieve the desired results through tailored adjustments",
      "It prevents any improvement in performance",
      "It standardizes the exercises for all participants",
    ],
    correctOption: 1, // It helps achieve the desired results through tailored adjustments
  },
  {
    id: 290,
    text: "What is the primary purpose of adjusting exercise tempo in acute variables?",
    options: [
      "To increase the number of exercises performed in a session",
      "To control the pace and intensity of muscle engagement",
      "To reduce the total training volume",
      "To increase rest periods between exercises",
    ],
    correctOption: 1, // To control the pace and intensity of muscle engagement
  },
  {
    id: 291,
    text: "Which acute variable primarily influences the intensity of an exercise?",
    options: [
      "Repetitions",
      "Load and intensity",
      "Rest periods",
      "Exercise selection",
    ],
    correctOption: 1, // Load and intensity
  },
  {
    id: 292,
    text: "What does training volume represent in a workout program?",
    options: [
      "The total amount of weight lifted during an exercise",
      "The number of repetitions multiplied by the number of sets performed",
      "The intensity of the exercise measured in percentage",
      "The duration of the workout session",
    ],
    correctOption: 1, // The number of repetitions multiplied by the number of sets performed
  },
  {
    id: 293,
    text: "If a workout consists of 4 sets of 12 repetitions, what is the training volume?",
    options: ["16", "48", "24", "36"],
    correctOption: 3, // 48
  },
  {
    id: 294,
    text: "What does exercise tempo refer to in fitness training?",
    options: [
      "The number of repetitions performed in a set",
      "The speed at which each repetition is performed",
      "The total time taken to complete a workout",
      "The time spent resting between sets",
    ],
    correctOption: 1, // The speed at which each repetition is performed
  },
  {
    id: 295,
    text: "What is the primary benefit of using a slow exercise tempo (e.g., 4-2-1)?",
    options: [
      "Increasing maximal strength and power",
      "Improving endurance and motor control",
      "Maximizing the number of repetitions performed",
      "Reducing the intensity of the workout",
    ],
    correctOption: 1, // Improving endurance and motor control
  },
  {
    id: 296,
    text: "How does exercise tempo impact training goals?",
    options: [
      "It determines the number of exercises in a program",
      "It helps achieve specific adaptations like strength, power, or endurance",
      "It increases the amount of weight lifted in each set",
      "It reduces the need for warm-up exercises",
    ],
    correctOption: 1, // It helps achieve specific adaptations like strength, power, or endurance
  },
  {
    id: 297,
    text: "Which resistance training adaptation requires the least number of repetitions?",
    options: ["Endurance", "Strength", "Hypertrophy", "Power"],
    correctOption: 1, // Strength
  },
  {
    id: 298,
    text: "Which resistance training adaptation trains with the most repetitions?",
    options: ["Power", "Hypertrophy", "Endurance", "Strength"],
    correctOption: 2, // Endurance
  },
  {
    id: 299,
    text: "Which resistance training adaptation should a new exerciser incorporate first?",
    options: ["Hypertrophy", "Power", "Endurance", "Strength"],
    correctOption: 2, // Endurance
  },
  {
    id: 300,
    text: "If performing an AMRAP (as many reps as possible), what resistance training adaptation is being focused on?",
    options: ["Strength", "Hypertrophy", "Endurance", "Power"],
    correctOption: 2, // Endurance
  },
  {
    id: 301,
    text: "What is the recommended rest period for endurance training?",
    options: ["20–40 seconds", "60 seconds", "3–5 minutes", "10–20 seconds"],
    correctOption: 0, // 20–40 seconds
  },
  {
    id: 302,
    text: "How long should you rest between sets when training for hypertrophy or strength?",
    options: ["20–40 seconds", "60 seconds", "3–5 minutes", "40–60 seconds"],
    correctOption: 1, // 60 seconds
  },
  {
    id: 303,
    text: "What is the rest period required for maximum recovery in power training?",
    options: ["20–30 seconds", "40–60 seconds", "3–5 minutes", "1–2 minutes"],
    correctOption: 2, // 3–5 minutes
  },
  {
    id: 304,
    text: "What percentage of recovery is achieved with a 60-second rest period?",
    options: ["50%", "75%", "85–90%", "100%"],
    correctOption: 2, // 85–90%
  },
  {
    id: 305,
    text: "How much rest provides 100% recovery between sets?",
    options: ["20–30 seconds", "40–60 seconds", "60 seconds", "3–5 minutes"],
    correctOption: 3, // 3–5 minutes
  },
];
