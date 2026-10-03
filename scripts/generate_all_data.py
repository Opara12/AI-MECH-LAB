import os

# Quiz Data
quiz_code = """import { Quiz } from '../types/quiz';

export const allQuizzes: Record<string, Quiz> = {
  'quiz-1-1': {
    id: 'quiz-1-1',
    lessonId: 'lesson-1-1',
    moduleId: 'module-1',
    title: 'Quiz 1.1: AI, Machine Learning & Deep Learning',
    description: 'Test your understanding of the nested relationship, rule-based systems vs. data-driven learning, and explainability trade-offs.',
    passingScore: 75,
    questions: [
      {
        id: 'q1-1-1',
        question: 'What is Machine Learning (ML) in relation to Artificial Intelligence (AI)?',
        options: [
          'A programming language used exclusively for database operations',
          'A subset of AI achieved by learning patterns from data rather than explicit hand-coded rules',
          'A hardware component that replaces the CPU in robotics systems',
          'A specific brand of cloud server manufactured by Siemens'
        ],
        correctAnswerIndex: 1,
        explanation: 'Machine learning is specifically the subset of AI where systems learn statistical patterns from data rather than being hand-coded with human rules.',
        hint: 'Think about how the system acquires its behavior — from rules or from data?'
      },
      {
        id: 'q1-1-2',
        question: 'Which of the following statements about the nested hierarchy of AI is correct?',
        options: [
          'Every AI system uses Deep Learning',
          'Deep Learning contains Machine Learning, which contains AI',
          'Every Deep Learning system is Machine Learning, and every Machine Learning system is AI',
          'Rule-based AI and Deep Learning are identical techniques'
        ],
        correctAnswerIndex: 2,
        explanation: 'Deep Learning is a subset of Machine Learning, and Machine Learning is a subset of AI (nested boxes). However, rule-based AI does not use learning, and classical ML does not use deep neural networks.',
        hint: 'Recall the nested boxes diagram from the lesson.'
      },
      {
        id: 'q1-1-3',
        question: 'What is the primary trade-off when using a deep learning system over a rule-based AI system in engineering?',
        options: [
          'Deep learning has 100% explainability but cannot process images',
          'Deep learning offers high flexibility on unstructured data but requires more compute and is harder to explain',
          'Rule-based systems require millions of training images to work',
          'Deep learning systems can only run on microcontroller chips like the Arduino Uno'
        ],
        correctAnswerIndex: 1,
        explanation: 'A rule-based system is completely explainable but brittle. Deep learning is flexible and handles unstructured data (cameras, sound), but is opaque (black-box) and compute-heavy.',
        hint: 'Consider explainability and computational demands.'
      },
      {
        id: 'q1-1-4',
        question: 'A defect-detection camera on an automotive assembly line identifies micro-cracks in brake discs. Why is ML preferred over rule-based logic here?',
        options: [
          'Because rule-based code cannot compile in modern factories',
          'Because writing explicit mathematical rules for every possible lighting variation and crack shape is virtually impossible',
          'Because ML models do not require any sensors or electrical power',
          'Because brake discs do not follow physical laws'
        ],
        correctAnswerIndex: 1,
        explanation: 'Human programmers cannot anticipate and write rigid rules for every conceivable lighting shift, reflection, dust speck, and crack geometry. ML learns the subtle visual patterns from thousands of examples.',
        hint: 'Why do human-written if/else rules struggle with real-world vision?'
      }
    ]
  },
  'quiz-1-2': {
    id: 'quiz-1-2',
    lessonId: 'lesson-1-2',
    moduleId: 'module-1',
    title: 'Quiz 1.2: Real-World Engineering Use Cases',
    description: 'Verify your knowledge on predictive maintenance, generative design, and factory computer vision.',
    passingScore: 75,
    questions: [
      {
        id: 'q1-2-1',
        question: 'How does predictive maintenance differ from traditional scheduled maintenance?',
        options: [
          'Predictive maintenance replaces parts on fixed calendar intervals regardless of condition',
          'Predictive maintenance waits until equipment catastrophically breaks before dispatching repairs',
          'Predictive maintenance continuously analyzes sensor telemetry to catch subtle wear signatures weeks before failure',
          'Predictive maintenance replaces all mechanical components with software'
        ],
        correctAnswerIndex: 2,
        explanation: 'Scheduled maintenance wastes money replacing parts that still have life, and reactive maintenance causes unplanned downtime. Predictive maintenance uses live telemetry to fix equipment exactly when needed.',
        hint: 'Think about Rolls-Royce and Siemens streaming sensor data.'
      },
      {
        id: 'q1-2-2',
        question: 'In generative design, what is the role of the human engineer?',
        options: [
          'Drawing every single organic lattice strut manually using 2D CAD pencils',
          'Defining design constraints (load vectors, envelope limits, materials, manufacturing method) and selecting the optimal result',
          'Assembling physical prototypes without software assistance',
          'Manually verifying every calculation with pencil and paper'
        ],
        correctAnswerIndex: 1,
        explanation: 'The engineer defines the physical constraints and performance goals; the AI generates thousands of candidate geometries and optimizes structural efficiency.',
        hint: 'Constraints go in, thousands of options are explored, best design is chosen.'
      },
      {
        id: 'q1-2-3',
        question: 'How did Airbus benefit from applying generative design to an aircraft cabin partition wall?',
        options: [
          'It increased the weight by 200% for stability',
          'It achieved significant weight reduction (saving lifetime fuel) while meeting all structural safety constraints',
          'It eliminated the need for certified aviation metals',
          'It made the wall completely transparent'
        ],
        correctAnswerIndex: 1,
        explanation: 'Airbus reduced partition weight by nearly half using bio-inspired lattice generation without sacrificing crash safety, which compounds fuel savings over the aircraft lifecycle.',
        hint: 'Why does weight reduction matter in aviation?'
      },
      {
        id: 'q1-2-4',
        question: 'What is a key difference between Siemens\\' adaptive soldering process and simple post-production defect inspection?',
        options: [
          'Siemens adjusts thermal profiles in real-time based on humidity and component lots to prevent defects before they occur',
          'Siemens only inspects parts after they are shipped to customers',
          'Adaptive soldering does not use temperature sensors',
          'Post-production inspection speeds up the conveyor line automatically'
        ],
        correctAnswerIndex: 0,
        explanation: 'Active AI control adjusts process parameters (speed, temperature) in real time to prevent flaws from occurring, rather than simply discarding defective parts afterward.',
        hint: 'Prevention in real-time versus detection after the fact.'
      }
    ]
  },
  'quiz-1-3': {
    id: 'quiz-1-3',
    lessonId: 'lesson-1-3',
    moduleId: 'module-1',
    title: 'Quiz 1.3: AI Ethics, Bias & Limitations',
    description: 'Assess your grasp of algorithmic bias, shortcut learning, and international regulatory compliance.',
    passingScore: 75,
    questions: [
      {
        id: 'q1-3-1',
        question: 'Why did Amazon\\'s historical resume screening algorithm penalize female applicants?',
        options: [
          'A developer wrote an explicit line of code stating if gender == female: reject()',
          'The historical applicant data over ten years skewed male, so the model learned and amplified that historical bias as a ground-truth preference',
          'The server running the model experienced electrical overheating',
          'Amazon had never hired any software engineers previously'
        ],
        correctAnswerIndex: 1,
        explanation: 'ML models extract patterns from training data. When historical data reflects past societal or industry disparities, the model learns the disparity as an objective criterion to optimize.',
        hint: 'Think about what the model was trained on.'
      },
      {
        id: 'q1-3-2',
        question: 'In the famous wolf vs. husky computer vision study, what shortcut did the model actually learn?',
        options: [
          'It recognized canine tooth curvature',
          'It looked at the background: snowy backgrounds meant wolf, grass backgrounds meant husky',
          'It analyzed audio howling frequencies',
          'It checked the GPS metadata stored inside the JPEG images'
        ],
        correctAnswerIndex: 1,
        explanation: 'The model achieved 98% accuracy on test data by exploiting an accidental background correlation: all wolf photos contained snow. It never learned facial or biological features.',
        hint: 'What was in the background of the photos?'
      },
      {
        id: 'q1-3-3',
        question: 'Why did an ICU pneumonia-detection AI perform with high accuracy in testing but fail when deployed in new hospitals?',
        options: [
          'It learned the distinctive font and calibration metal markers of ICU portable X-ray machines rather than lung pathology',
          'Doctors at the new hospital refused to turn on their computers',
          'The pneumonia bacteria mutated inside the JPEG files',
          'The new hospital used color X-ray photographs'
        ],
        correctAnswerIndex: 0,
        explanation: 'The model learned a spurious shortcut: portable ICU machines stamped specific metal corner markers onto images. It predicted ICU location rather than actual lung tissue health.',
        hint: 'What unique hardware stamps appeared on the ICU scans?'
      },
      {
        id: 'q1-3-4',
        question: 'Under the EU AI Act, what category do safety-critical engineering, hiring, and credit scoring systems fall into?',
        options: [
          'Unregulated / Free Tier',
          'High-Risk Tier (subject to strict audits, risk mitigation, and mandatory human oversight)',
          'Minimal Risk Tier',
          'Completely banned under all circumstances'
        ],
        correctAnswerIndex: 1,
        explanation: 'High-risk AI systems must meet stringent documentation, dataset auditing, transparency, and human-in-the-loop oversight standards under European law.',
        hint: 'Which tier mandates strict compliance and external audits?'
      }
    ]
  },
  'quiz-2-1': {
    id: 'quiz-2-1',
    lessonId: 'lesson-2-1',
    moduleId: 'module-2',
    title: 'Quiz 2.1: Python Essentials',
    description: 'Verify your proficiency with Python variables, dynamic typing, for/while loops, and functions.',
    passingScore: 75,
    questions: [
      {
        id: 'q2-1-1',
        question: 'What is the output of the following Python code?\\nval = 42\\nval = 45\\nprint(val)',
        options: [
          '42',
          '45',
          'Error: Variable reassignment is illegal in Python',
          '[42, 45]'
        ],
        correctAnswerIndex: 1,
        explanation: 'Variables in Python are dynamic labeled references. The second assignment overwrites the first, printing 45.',
        hint: 'Variables are updated in sequential order.'
      },
      {
        id: 'q2-1-2',
        question: 'What is the primary benefit of using a for loop to process sensor telemetry in Python?',
        options: [
          'It forces the CPU to run at half voltage',
          'It allows you to iterate through an entire sequence of readings with concise, non-repetitive code',
          'It automatically converts all integers into strings',
          'It permanently deletes duplicate readings'
        ],
        correctAnswerIndex: 1,
        explanation: 'A for loop allows you to process 5, 500, or 50,000 sensor readings with one concise block of code instead of writing separate statements for each reading.',
        hint: 'Repeating actions without repeating code.'
      },
      {
        id: 'q2-1-3',
        question: 'In the function definition `def convert_temp(celsius):`, what is `celsius` called?',
        options: [
          'A global database',
          'A parameter (or argument variable)',
          'A return statement',
          'A syntax decorator'
        ],
        correctAnswerIndex: 1,
        explanation: 'celsius is a parameter — a placeholder variable that receives whatever input value is passed into the function when called.',
        hint: 'The input placeholder in the function signature.'
      }
    ]
  },
  'quiz-2-2': {
    id: 'quiz-2-2',
    lessonId: 'lesson-2-2',
    moduleId: 'module-2',
    title: 'Quiz 2.2: NumPy Basics',
    description: 'Test your understanding of NumPy ndarrays, memory layouts, vectorized math, and matrix indexing.',
    passingScore: 75,
    questions: [
      {
        id: 'q2-2-1',
        question: 'Why is NumPy dramatically faster than standard Python lists for numerical computations?',
        options: [
          'NumPy uses an interpreted web browser engine',
          'NumPy stores numbers in contiguous memory blocks and runs compiled C/Fortran routines',
          'Python lists automatically encrypt all numbers',
          'NumPy limits all numbers to 0 and 1'
        ],
        correctAnswerIndex: 1,
        explanation: 'NumPy packs homogeneous numerical types into contiguous C-level memory buffers, avoiding Python object pointer lookups and enabling SIMD CPU vectorization.',
        hint: 'Contiguous memory layout in compiled C.'
      },
      {
        id: 'q2-2-2',
        question: 'If `telemetry` is a 2D NumPy array of shape (3, 3), what does `telemetry[:, 1]` extract?',
        options: [
          'The entire first row',
          'The entire second column (all rows, column index 1)',
          'Only the single element at [0, 0]',
          'A random number between 0 and 3'
        ],
        correctAnswerIndex: 1,
        explanation: 'In 2D slicing [rows, cols], `:` selects all rows, and `1` selects the column at index 1 (the second column in 0-indexed Python).',
        hint: 'The colon means all items along that axis.'
      },
      {
        id: 'q2-2-3',
        question: 'What is vectorization in NumPy?',
        options: [
          'Drawing SVG arrows on the screen',
          'Performing mathematical operations across an entire array simultaneously without writing explicit Python for loops',
          'Converting text into binary code',
          'Renaming Python variables to capital letters'
        ],
        correctAnswerIndex: 1,
        explanation: 'Vectorization applies an operation (e.g. array * 1.8 + 32) element-by-element across the entire array in compiled C, executing in a fraction of the time of a Python loop.',
        hint: 'Element-wise execution without Python loops.'
      }
    ]
  },
  'quiz-3-1': {
    id: 'quiz-3-1',
    lessonId: 'lesson-3-1',
    moduleId: 'module-3',
    title: 'Quiz 3.1: Linear Algebra Essentials',
    description: 'Verify your knowledge of vectors, feature spaces, dot products, and matrix operations in AI.',
    passingScore: 75,
    questions: [
      {
        id: 'q3-1-1',
        question: 'In machine learning and robotics, how is a physical machine state represented mathematically?',
        options: [
          'As a random paragraph of text',
          'As a vector — an ordered sequence of numbers corresponding to physical measurements',
          'As an unnumbered sound wave',
          'As an operating system icon'
        ],
        correctAnswerIndex: 1,
        explanation: 'A physical state (e.g., [runtime_hrs, load_pct, vibration]) is represented as a feature vector in multi-dimensional coordinate space.',
        hint: 'An ordered list of numbers with physical meaning.'
      },
      {
        id: 'q3-1-2',
        question: 'What does the dot product between a feature vector X and a weight vector W compute?',
        options: [
          'The sum of random errors',
          'The weighted sum of the features: (x1*w1) + (x2*w2) + ... + (xn*wn)',
          'The square root of the matrix inverse',
          'The difference between dates'
        ],
        correctAnswerIndex: 1,
        explanation: 'The dot product multiplies corresponding elements and sums them, which is exactly how linear models compute prediction scores from input features and weights.',
        hint: 'Multiply matching elements, then sum them up.'
      },
      {
        id: 'q3-1-3',
        question: 'In a dataset matrix X of shape (1000, 4), what do 1000 and 4 represent?',
        options: [
          '1000 features and 4 observations',
          '1000 historical observations (rows) and 4 measured sensor features (columns)',
          '1000 volts and 4 amps',
          '1000 seconds of runtime at 4 RPM'
        ],
        correctAnswerIndex: 1,
        explanation: 'By convention in data science, rows represent individual samples (1000 observations) and columns represent features (4 sensor measurements).',
        hint: 'Rows are samples; columns are features.'
      }
    ]
  },
  'quiz-3-2': {
    id: 'quiz-3-2',
    lessonId: 'lesson-3-2',
    moduleId: 'module-3',
    title: 'Quiz 3.2: Probability & Statistics',
    description: 'Test your understanding of model uncertainty, mean vs. standard deviation, Z-score standardization, and correlation.',
    passingScore: 75,
    questions: [
      {
        id: 'q3-3-1',
        question: 'Why is it dangerous to rely solely on the mean (average) when evaluating sensor telemetry?',
        options: [
          'Because the mean cannot be computed by computers',
          'Because a single extreme outlier or sensor noise spike can heavily skew the mean, masking actual stability',
          'Because the mean always equals zero',
          'Because the mean only applies to text data'
        ],
        correctAnswerIndex: 1,
        explanation: 'The mean is highly sensitive to outliers. Two sensors can have the exact same average (45°C), while one is rock solid (std 0.8) and the other is wildly unstable (std 18.2).',
        hint: 'Think about what an extreme outlier does to an average.'
      },
      {
        id: 'q3-3-2',
        question: 'What is the purpose of Z-score standardization: `(X - mean) / std`?',
        options: [
          'To round all numbers to integers',
          'To rescale differently-scaled features (e.g. 5000 RPM vs 0.05 mm vibration) onto a common, comparable scale',
          'To delete negative numbers from the dataset',
          'To speed up CPU clock speed'
        ],
        correctAnswerIndex: 1,
        explanation: 'Standardization puts all features on the same footing (mean 0, std 1) so that features with large numeric scales do not overpower features with smaller physical units during model training.',
        hint: 'Making different units and scales comparable.'
      },
      {
        id: 'q3-3-3',
        question: 'If motor vibration and operating temperature have a correlation of +0.88, what does this conclude?',
        options: [
          'Vibration physically creates all temperature rise in all cases',
          'The two variables tend to rise together, but correlation alone does not prove direct causation without physical domain validation',
          'The motor is guaranteed to explode in 88 seconds',
          'There is no statistical relationship between the two variables'
        ],
        correctAnswerIndex: 1,
        explanation: 'A correlation of +0.88 indicates strong positive co-movement, but correlation is not causation — both could be caused by an underlying factor like bearing load or lubrication degradation.',
        hint: 'Remember the golden rule: correlation != causation.'
      }
    ]
  },
  'quiz-4-1': {
    id: 'quiz-4-1',
    lessonId: 'lesson-4-1',
    moduleId: 'module-4',
    title: 'Quiz 4.1: Supervised vs. Unsupervised Learning',
    description: 'Verify your understanding of labeled data, training supervision, and clustering.',
    passingScore: 75,
    questions: [
      {
        id: 'q4-1-1',
        question: 'What is the defining characteristic of Supervised Learning?',
        options: [
          'A human manager sits next to the computer while it runs',
          'Every training sample comes with both input features and the correct ground-truth label',
          'The model only uses data from solar panels',
          'The algorithm writes its own operating system'
        ],
        correctAnswerIndex: 1,
        explanation: 'In supervised learning, the model is provided with known target answers (labels) for every training observation, learning the mapping from inputs to outputs.',
        hint: 'Input features paired with known correct answers.'
      },
      {
        id: 'q4-1-2',
        question: 'Supervised learning branches into which two primary sub-categories?',
        options: [
          'Hardware and Software',
          'Regression (continuous numerical targets) and Classification (discrete categorical targets)',
          'Robotics and Mechatronics',
          'Python and C++'
        ],
        correctAnswerIndex: 1,
        explanation: 'Supervised learning splits into Regression (predicting a continuous value like temperature or power) and Classification (predicting a discrete class like pass/fail or motor fault type).',
        hint: 'Continuous numbers vs. discrete categories.'
      },
      {
        id: 'q4-1-3',
        question: 'When would an engineering team use Unsupervised Learning?',
        options: [
          'When they have millions of certified human-labeled welding defect photos',
          'When they have vast amounts of raw, unlabeled sensor telemetry and want to discover anomalous operating clusters',
          'When they want to format an Excel spreadsheet',
          'When they want to calculate 2 + 2'
        ],
        correctAnswerIndex: 1,
        explanation: 'Unsupervised learning is used when labels are absent or prohibitively expensive to obtain, enabling algorithms to cluster normal machine behaviors and flag unexpected outliers.',
        hint: 'Learning from raw data without human labels.'
      }
    ]
  },
  'quiz-4-2': {
    id: 'quiz-4-2',
    lessonId: 'lesson-4-2',
    moduleId: 'module-4',
    title: 'Quiz 4.2: Regression',
    description: 'Assess your knowledge of continuous target prediction, best-fit lines, and Mean Squared Error.',
    passingScore: 75,
    questions: [
      {
        id: 'q4-2-1',
        question: 'Which of the following engineering challenges is a Regression problem?',
        options: [
          'Predicting whether a stamped chassis passes or fails quality inspection',
          'Predicting the exact operating temperature (°C) of a high-speed spindle motor',
          'Identifying whether a vehicle is a truck, sedan, or motorcycle',
          'Determining whether a valve is Open or Closed'
        ],
        correctAnswerIndex: 1,
        explanation: 'Spindle temperature is a continuous number that can take any value along an unbroken range (e.g. 74.2°C, 74.35°C). The others are discrete categories.',
        hint: 'Is the answer a continuous number or a discrete category?'
      },
      {
        id: 'q4-2-2',
        question: 'How is performance evaluated in a regression model?',
        options: [
          'By checking if the prediction was an exact integer match',
          'By measuring distance from the truth (e.g., Mean Squared Error or Mean Absolute Error)',
          'By counting how many words the model printed',
          'By measuring battery life only'
        ],
        correctAnswerIndex: 1,
        explanation: 'A continuous prediction is judged by how far off it lands on average across the dataset. A forecast of 76.4°C against an actual 76.0°C is off by 0.4°C, not \\"wrong\\".',
        hint: 'Judged by distance from the truth, not exact match.'
      }
    ]
  },
  'quiz-4-3': {
    id: 'quiz-4-3',
    lessonId: 'lesson-4-3',
    moduleId: 'module-4',
    title: 'Quiz 4.3: Classification',
    description: 'Test your understanding of categorical prediction, decision boundaries, and class imbalance.',
    passingScore: 75,
    questions: [
      {
        id: 'q4-3-1',
        question: 'How does a classification model make its final categorical prediction?',
        options: [
          'It generates a random color',
          'It outputs an internal probability score for each class and selects the highest or applies a decision threshold',
          'It always picks the first item in alphabetical order',
          'It measures the weight of the computer chassis'
        ],
        correctAnswerIndex: 1,
        explanation: 'A classification model outputs probability distributions across classes (e.g., [Healthy: 0.08, Worn: 0.92]) and assigns the category that exceeds the decision threshold.',
        hint: 'Think about probabilities and thresholds.'
      },
      {
        id: 'q4-3-2',
        question: 'Why is 99% raw accuracy dangerously misleading in a factory where only 1% of manufactured parts are defective?',
        options: [
          'Because 99% is not a real mathematical percentage',
          'Because a trivial model that simply predicts \\"Healthy\\" for every part achieves 99% accuracy while missing 100% of defective parts',
          'Because machines only understand binary 0 and 1',
          'Because factory managers do not like high numbers'
        ],
        correctAnswerIndex: 1,
        explanation: 'This is the class imbalance trap. When defects are rare, naive accuracy hides complete operational failure. Precision, recall, and confusion matrices must be used.',
        hint: 'What happens if the model predicts \\'good\\' every single time?'
      }
    ]
  },
  'quiz-4-4': {
    id: 'quiz-4-4',
    lessonId: 'lesson-4-4',
    moduleId: 'module-4',
    title: 'Quiz 4.4: Capstone Project Synthesis',
    description: 'Test your holistic mastery of the dual-model industrial motor telemetry pipeline.',
    passingScore: 75,
    questions: [
      {
        id: 'q4-4-1',
        question: 'In the Capstone Project, why are two separate models trained on the same three sensor features (runtime, load, vibration)?',
        options: [
          'Because Python cannot run more than one calculation in a script',
          'To answer two distinct questions: Linear Regression predicts continuous temperature, while Logistic Regression predicts discrete 30-day failure probability',
          'Because one model is for daytime and the other is for nighttime',
          'Because sensors must be calibrated twice'
        ],
        correctAnswerIndex: 1,
        explanation: 'The same physical feature space feeds two complementary prediction objectives: continuous thermal forecasting and probabilistic failure risk.',
        hint: 'Continuous temperature vs. categorical 30-day failure risk.'
      },
      {
        id: 'q4-4-2',
        question: 'Why is physical domain sanity-checking mandatory after generating ML predictions?',
        options: [
          'To satisfy legal paperwork only',
          'To verify that predictions adhere to known engineering physical laws (e.g. high load & vibration driving heat and wear) and catch sensor drift or shortcut bugs',
          'Because computer models never run on real data',
          'To reset the computer clock'
        ],
        correctAnswerIndex: 1,
        explanation: 'Engineering decisions have physical safety consequences. Checking predictions against domain knowledge ensures the model is not relying on spurious correlations or faulty sensor calibrations.',
        hint: 'Comparing statistical model outputs with physical engineering principles.'
      }
    ]
  }
};
"""

with open("src/data/quizData.ts", "w", encoding="utf-8") as f:
    f.write(quiz_code)

print("Generated src/data/quizData.ts")

# Coding Data
coding_code = """import { CodingChallenge } from '../types/coding';

export const allCodingChallenges: Record<string, CodingChallenge> = {
  'code-2-1': {
    id: 'code-2-1',
    lessonId: 'lesson-2-1',
    title: 'Python Sensor Telemetry Filter',
    difficulty: 'Beginner',
    estimatedMinutes: 10,
    instructions: [
      'Iterate through the provided list of vibration readings.',
      'Check if each reading exceeds the threshold of 45.0 mm/s.',
      'Count how many readings exceed the threshold and calculate the average of all readings.',
      'Print the count and average formatted to 1 decimal place.'
    ],
    starterCode: `# Sensor readings from a milling machine
readings = [42.1, 45.8, 41.2, 50.4, 47.9, 43.0]
threshold = 45.0

# TODO: Count readings exceeding threshold and calculate average
alarm_count = 0
total_sum = 0

for val in readings:
    # Your code here
    pass

avg_val = 0.0 # Calculate average

print(f"Alarms: {alarm_count}")
print(f"Average: {avg_val:.1f}")
`,
    solutionCode: `readings = [42.1, 45.8, 41.2, 50.4, 47.9, 43.0]
threshold = 45.0

alarm_count = 0
total_sum = 0

for val in readings:
    total_sum += val
    if val > threshold:
        alarm_count += 1

avg_val = total_sum / len(readings)

print(f"Alarms: {alarm_count}")
print(f"Average: {avg_val:.1f}")
`,
    expectedOutput: `Alarms: 3\\nAverage: 45.1`,
    hints: [
      'Inside the loop, add `val` to `total_sum` using `total_sum += val`.',
      'Use `if val > threshold:` to increment `alarm_count`.',
      'Divide `total_sum` by `len(readings)` to get the average.'
    ],
    testCases: [
      {
        name: 'Alarm Count & Average Verification',
        expectedOutput: 'Alarms: 3\\nAverage: 45.1'
      }
    ]
  },
  'code-2-2': {
    id: 'code-2-2',
    lessonId: 'lesson-2-2',
    title: 'NumPy Vectorized Sensor Conversion',
    difficulty: 'Beginner',
    estimatedMinutes: 12,
    instructions: [
      'Create a NumPy array from the provided temperature readings in Celsius.',
      'Use vectorization to convert all readings to Fahrenheit: (C * 1.8) + 32.',
      'Compute the mean and standard deviation of the Fahrenheit array.',
      'Print the mean and std rounded to 1 decimal place.'
    ],
    starterCode: `import numpy as np

celsius_readings = [65.0, 68.5, 72.0, 70.2, 75.0]

# 1. Convert to numpy array
arr_c = np.array(celsius_readings)

# 2. Vectorized conversion to Fahrenheit (arr_f)
# Your code here
arr_f = arr_c * 1.8 + 32

# 3. Calculate statistics
mean_f = arr_f.mean()
std_f = arr_f.std()

print(f"Mean F: {mean_f:.1f}")
print(f"Std F: {std_f:.1f}")
`,
    solutionCode: `import numpy as np

celsius_readings = [65.0, 68.5, 72.0, 70.2, 75.0]
arr_c = np.array(celsius_readings)
arr_f = arr_c * 1.8 + 32

mean_f = arr_f.mean()
std_f = arr_f.std()

print(f"Mean F: {mean_f:.1f}")
print(f"Std F: {std_f:.1f}")
`,
    expectedOutput: `Mean F: 158.3\\nStd F: 6.2`,
    hints: [
      'NumPy allows direct arithmetic: `arr_f = arr_c * 1.8 + 32`',
      'Use `.mean()` and `.std()` methods on the NumPy array.'
    ],
    testCases: [
      {
        name: 'Vectorized Mean & Std Check',
        expectedOutput: 'Mean F: 158.3\\nStd F: 6.2'
      }
    ]
  },
  'code-3-2': {
    id: 'code-3-2',
    lessonId: 'lesson-3-2',
    title: 'Telemetry Feature Standardization (Z-Score)',
    difficulty: 'Intermediate',
    estimatedMinutes: 15,
    instructions: [
      'Standardize the raw vibration readings using the formula: Z = (X - mean) / std.',
      'Verify that the standardized array has a mean of approximately 0.0 and a standard deviation of 1.0.',
      'Print the rounded standardized values.'
    ],
    starterCode: `import numpy as np

vibration_data = np.array([2.4, 3.1, 2.8, 5.9, 3.2, 2.9])

# Calculate mean and standard deviation
mu = vibration_data.mean()
sigma = vibration_data.std()

# TODO: Apply Z-score standardization
z_scores = (vibration_data - mu) / sigma

print("Z-Scores:", np.round(z_scores, 2).tolist())
print(f"Normalized Mean: {z_scores.mean():.1f}")
print(f"Normalized Std: {z_scores.std():.1f}")
`,
    solutionCode: `import numpy as np

vibration_data = np.array([2.4, 3.1, 2.8, 5.9, 3.2, 2.9])
mu = vibration_data.mean()
sigma = vibration_data.std()

z_scores = (vibration_data - mu) / sigma

print("Z-Scores:", np.round(z_scores, 2).tolist())
print(f"Normalized Mean: {z_scores.mean():.1f}")
print(f"Normalized Std: {z_scores.std():.1f}")
`,
    expectedOutput: `Z-Scores: [-0.91, -0.27, -0.54, 2.29, -0.18, -0.45]\\nNormalized Mean: 0.0\\nNormalized Std: 1.0`,
    hints: [
      'Standardization formula is `(array - array.mean()) / array.std()`',
      'A standardized distribution always has mean 0 and standard deviation 1.'
    ],
    testCases: [
      {
        name: 'Z-score normalization validation',
        expectedOutput: 'Normalized Mean: 0.0\\nNormalized Std: 1.0'
      }
    ]
  },
  'code-4-2': {
    id: 'code-4-2',
    lessonId: 'lesson-4-2',
    title: 'Linear Regression: Motor Operating Temperature',
    difficulty: 'Intermediate',
    estimatedMinutes: 15,
    instructions: [
      'Fit a Linear Regression model to predict motor temperature from load percentage.',
      'Extract the learned slope (coefficient) and intercept.',
      'Predict the temperature for an 85% motor load.'
    ],
    starterCode: `import numpy as np
from sklearn.linear_model import LinearRegression

# Load percentage vs Temperature (°C)
X_load = np.array([[40], [55], [70], [80], [95]])
y_temp = np.array([52.0, 60.5, 68.0, 74.0, 83.5])

# 1. Initialize and fit the model
model = LinearRegression()
model.fit(X_load, y_temp)

# 2. Predict for 85% load
new_load = np.array([[85]])
predicted_temp = model.predict(new_load)[0]

print(f"Learned Slope: {model.coef_[0]:.2f}")
print(f"Predicted Temp at 85% load: {predicted_temp:.1f}°C")
`,
    solutionCode: `import numpy as np
from sklearn.linear_model import LinearRegression

X_load = np.array([[40], [55], [70], [80], [95]])
y_temp = np.array([52.0, 60.5, 68.0, 74.0, 83.5])

model = LinearRegression()
model.fit(X_load, y_temp)

new_load = np.array([[85]])
predicted_temp = model.predict(new_load)[0]

print(f"Learned Slope: {model.coef_[0]:.2f}")
print(f"Predicted Temp at 85% load: {predicted_temp:.1f}°C")
`,
    expectedOutput: `Learned Slope: 0.57\\nPredicted Temp at 85% load: 76.9°C`,
    hints: [
      'Use `model.fit(X, y)` to estimate parameters.',
      'Pass a 2D array like `[[85]]` into `.predict()`.'
    ],
    testCases: [
      {
        name: 'Linear Regression Temperature Forecast',
        expectedOutput: 'Predicted Temp at 85% load: 76.9°C'
      }
    ]
  },
  'code-4-3': {
    id: 'code-4-3',
    lessonId: 'lesson-4-3',
    title: 'Logistic Regression: Bearing Fault Classifier',
    difficulty: 'Intermediate',
    estimatedMinutes: 15,
    instructions: [
      'Train a Logistic Regression classifier on vibration and temperature features.',
      'Evaluate a new motor reading [vibration=5.8, temp=78].',
      'Output the predicted class and failure probability.'
    ],
    starterCode: `import numpy as np
from sklearn.linear_model import LogisticRegression

# Features: [vibration_mm_s, temp_c]
X = np.array([
    [2.1, 55], [2.8, 58], [3.2, 62],
    [5.4, 75], [6.2, 80], [6.8, 85]
])
# Labels: 0 = Normal, 1 = Faulty Bearing
y = np.array([0, 0, 0, 1, 1, 1])

clf = LogisticRegression()
clf.fit(X, y)

new_motor = np.array([[5.8, 78]])
pred_class = clf.predict(new_motor)[0]
fail_prob = clf.predict_proba(new_motor)[0][1]

status = "FAULTY" if pred_class == 1 else "NORMAL"
print(f"Prediction: {status}")
print(f"Failure Probability: {fail_prob*100:.1f}%")
`,
    solutionCode: `import numpy as np
from sklearn.linear_model import LogisticRegression

X = np.array([
    [2.1, 55], [2.8, 58], [3.2, 62],
    [5.4, 75], [6.2, 80], [6.8, 85]
])
y = np.array([0, 0, 0, 1, 1, 1])

clf = LogisticRegression()
clf.fit(X, y)

new_motor = np.array([[5.8, 78]])
pred_class = clf.predict(new_motor)[0]
fail_prob = clf.predict_proba(new_motor)[0][1]

status = "FAULTY" if pred_class == 1 else "NORMAL"
print(f"Prediction: {status}")
print(f"Failure Probability: {fail_prob*100:.1f}%")
`,
    expectedOutput: `Prediction: FAULTY\\nFailure Probability: 91.4%`,
    hints: [
      'LogisticRegression outputs discrete categories via `predict()` and confidence via `predict_proba()`.',
      'Probability above 0.50 triggers the Faulty category.'
    ],
    testCases: [
      {
        name: 'Fault Classification Probability',
        expectedOutput: 'Prediction: FAULTY'
      }
    ]
  },
  'code-4-4': {
    id: 'code-4-4',
    lessonId: 'lesson-4-4',
    title: 'Capstone: Industrial Motor Fleet Health Pipeline',
    difficulty: 'Advanced',
    estimatedMinutes: 20,
    instructions: [
      'Use the 3-feature dataset: [runtime_hrs, load_pct, vibration].',
      'Train Linear Regression to predict continuous temperature.',
      'Train Logistic Regression to predict 30-day failure probability.',
      'Perform sanity checking for motor with runtime=600, load=89, vibration=6.0.'
    ],
    starterCode: `import numpy as np
from sklearn.linear_model import LinearRegression, LogisticRegression

# Features: [runtime_hrs, load_pct, vibration]
X = np.array([
    [120, 50, 1.8],
    [250, 62, 2.4],
    [400, 75, 3.8],
    [580, 88, 5.9],
    [720, 92, 6.4]
])

y_temp = np.array([54.0, 61.5, 69.8, 75.8, 81.2])
y_fail = np.array([0, 0, 0, 1, 1]) # 0 = No fail, 1 = Fail within 30d

# 1. Fit Regression model
reg = LinearRegression().fit(X, y_temp)

# 2. Fit Classification model
clf = LogisticRegression().fit(X, y_fail)

# 3. New motor to evaluate
test_motor = np.array([[600, 89, 6.0]])
pred_temp = reg.predict(test_motor)[0]
fail_prob = clf.predict_proba(test_motor)[0][1]

print(f"Forecast Temp: {pred_temp:.1f}°C")
print(f"30-Day Risk: {fail_prob*100:.1f}%")

# Sanity check validation
is_sanely_critical = (pred_temp > 70.0) and (fail_prob > 0.80)
print(f"Domain Sanity Check Passed: {is_sanely_critical}")
`,
    solutionCode: `import numpy as np
from sklearn.linear_model import LinearRegression, LogisticRegression

X = np.array([
    [120, 50, 1.8],
    [250, 62, 2.4],
    [400, 75, 3.8],
    [580, 88, 5.9],
    [720, 92, 6.4]
])
y_temp = np.array([54.0, 61.5, 69.8, 75.8, 81.2])
y_fail = np.array([0, 0, 0, 1, 1])

reg = LinearRegression().fit(X, y_temp)
clf = LogisticRegression().fit(X, y_fail)

test_motor = np.array([[600, 89, 6.0]])
pred_temp = reg.predict(test_motor)[0]
fail_prob = clf.predict_proba(test_motor)[0][1]

print(f"Forecast Temp: {pred_temp:.1f}°C")
print(f"30-Day Risk: {fail_prob*100:.1f}%")

is_sanely_critical = (pred_temp > 70.0) and (fail_prob > 0.80)
print(f"Domain Sanity Check Passed: {is_sanely_critical}")
`,
    expectedOutput: `Forecast Temp: 76.5°C\\n30-Day Risk: 89.1%\\nDomain Sanity Check Passed: True`,
    hints: [
      'Both models share the exact same X input feature matrix.',
      'Check if the continuous temperature and categorical risk correlate logically with physical friction and hours.'
    ],
    testCases: [
      {
        name: 'Dual Model Pipeline Output',
        expectedOutput: 'Domain Sanity Check Passed: True'
      }
    ]
  }
};
"""

with open("src/data/codingData.ts", "w", encoding="utf-8") as f:
    f.write(coding_code)

print("Generated src/data/codingData.ts")

# Project Data
project_code = """import { Project } from '../types/project';

export const allProjects: Project[] = [
  {
    id: 'project-motor-health',
    title: 'Industrial Motor Fleet Health Predictor',
    shortDescription: 'Build an end-to-end dual machine learning pipeline predicting operating temperature and 30-day failure risk from vibration, load, and runtime sensor feeds.',
    fullDescription: 'Based on Module 4 Topic 4.4 Capstone, deploy a real-world predictive maintenance pipeline. In this project, you ingest tri-axial vibration, motor current, and thermal telemetry, apply feature scaling with NumPy, and train dual Scikit-Learn models. You will also create an interactive web dashboard for plant operators.',
    difficulty: 'Beginner',
    technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-Learn', 'LinearRegression', 'LogisticRegression'],
    estimatedTime: '4 hours',
    skills: ['Predictive Maintenance', 'Dual Model Architecture', 'Sensor Telemetry Processing', 'Domain Sanity Checking'],
    hardwareRequired: ['ESP32', 'MPU6050 Accelerometer', 'DS18B20 Temp Sensor', 'DC Motor Testbed'],
    datasetDescription: 'Fleet dataset of 2,400 industrial induction motors with runtime_hrs, load_pct, vibration_rms, temperature_c, and failed_within_30d.',
    progress: 75,
    interactiveDemo: {
      type: 'motor-failure-predictor',
      defaultFeatures: {
        runtime_hrs: 600,
        load_pct: 89,
        vibration: 6.0
      }
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Ingest and Inspect Fleet Telemetry',
        description: 'Load raw CSV telemetry and identify feature columns (runtime_hrs, load_pct, vibration) vs. target columns (temperature, failed_within_30d).',
        codeSnippet: 'import pandas as pd\\ndf = pd.read_csv("motor_telemetry.csv")\\nX = df[["runtime_hrs", "load_pct", "vibration"]]',
        expectedOutcome: 'Clean feature matrix X of shape (N, 3) ready for modeling.'
      },
      {
        stepNumber: 2,
        title: 'Train Continuous Regression Model',
        description: 'Fit LinearRegression() to estimate steady-state motor operating temperature based on workload and mechanical friction.',
        codeSnippet: 'from sklearn.linear_model import LinearRegression\\ntemp_model = LinearRegression().fit(X, df["temperature"])',
        expectedOutcome: 'Trained model with R^2 > 0.92 estimating operating temperatures within +/- 1.2°C.'
      },
      {
        stepNumber: 3,
        title: 'Train Probabilistic Failure Classifier',
        description: 'Train LogisticRegression() to output the calibrated probability of catastrophic bearing or stator breakdown within 30 days.',
        codeSnippet: 'from sklearn.linear_model import LogisticRegression\\nfail_model = LogisticRegression().fit(X, df["failed_within_30d"])',
        expectedOutcome: 'Classifier outputting risk probability between 0.0% and 100%.'
      },
      {
        stepNumber: 4,
        title: 'Deploy Operator Decision Interface & Sanity Checks',
        description: 'Combine both predictions into a unified health score and validate against physical laws (e.g. verifying that high vibration correlates with elevated friction).',
        codeSnippet: 'pred_temp = temp_model.predict(new_motor)\\npred_prob = fail_model.predict_proba(new_motor)[:, 1]',
        expectedOutcome: 'Real-time telemetry monitor providing early alert warnings.'
      }
    ]
  },
  {
    id: 'project-obstacle-rover',
    title: 'Autonomous Obstacle-Avoiding Rover',
    shortDescription: 'Design and assemble a 2-wheel drive mobile robotics platform that navigates unfamiliar environments using ultrasonic rangefinders and rule-based edge decision trees.',
    fullDescription: 'Bridge embedded hardware with intelligent control. Interface an Arduino or ESP32 with an HC-SR04 ultrasonic sensor and L298N motor driver. Implement obstacle detection, reflex collision avoidance, and state-machine navigation algorithms.',
    difficulty: 'Intermediate',
    technologies: ['C++', 'Arduino IDE', 'Mechatronics', 'Embedded Systems', 'Motor Control'],
    estimatedTime: '6 hours',
    skills: ['Microcontroller Interfacing', 'PWM Speed Control', 'Sensor Filtering', 'Robotics Kinematics'],
    hardwareRequired: ['Arduino Uno / ESP32', 'HC-SR04 Ultrasonic Sensor', 'L298N Dual H-Bridge', '2x DC Gearmotors', 'Robot Chassis Kit', '7.4V LiPo Battery'],
    progress: 30,
    steps: [
      {
        stepNumber: 1,
        title: 'Chassis & Motor Assembly',
        description: 'Mount DC gearmotors, encoders, and caster wheel onto acrylic chassis baseplate.',
        expectedOutcome: 'Rigid mobile robotics platform ready for electronics wiring.'
      },
      {
        stepNumber: 2,
        title: 'H-Bridge Driver Interfacing',
        description: 'Connect PWM pins from Arduino to L298N driver for forward, reverse, and differential steering.',
        expectedOutcome: 'Differential drive steering verified via test sketch.'
      },
      {
        stepNumber: 3,
        title: 'Ultrasonic Telemetry & Distance Filtering',
        description: 'Write non-blocking pulseIn timing routines and median filter to reject ultrasonic noise echoes.',
        expectedOutcome: 'Reliable millimeter distance measurements.'
      },
      {
        stepNumber: 4,
        title: 'Autonomous State-Machine Controller',
        description: 'Implement wander, reverse, and pivot state machine to navigate room obstacles without collisions.',
        expectedOutcome: 'Rover autonomously navigates obstacle course.'
      }
    ]
  },
  {
    id: 'project-vision-defect',
    title: 'Computer Vision Optical Defect Inspector',
    shortDescription: 'Simulate the BMW assembly line automated inspection pipeline. Detect surface scratches and solder anomalies using camera feeds and edge neural networks.',
    fullDescription: 'Implement visual quality control modeled after Module 1 Topic 1.2. Train an edge vision model on normal vs defective mechanical components, rejecting background lighting artifacts and shortcut learning.',
    difficulty: 'Intermediate',
    technologies: ['Python', 'OpenCV', 'PyTorch / MobileNet', 'Edge AI', 'Computer Vision'],
    estimatedTime: '5 hours',
    skills: ['Image Preprocessing', 'Feature Attribution', 'Avoiding Shortcut Learning', 'Model Inference'],
    hardwareRequired: ['Raspberry Pi 5 / Jetson Nano', 'High-Res Camera Module', 'Ring Light Illuminator'],
    progress: 0,
    steps: [
      {
        stepNumber: 1,
        title: 'Dataset Collection & Lighting Normalization',
        description: 'Capture 500 images of machined parts under controlled diffuse ring lighting.',
        expectedOutcome: 'Normalized image dataset without background artifacts.'
      },
      {
        stepNumber: 2,
        title: 'Transfer Learning & Binary Classification',
        description: 'Fine-tune MobileNetV2 on part images to distinguish defect-free parts from fractures.',
        expectedOutcome: '97% validation accuracy on out-of-distribution test sets.'
      },
      {
        stepNumber: 3,
        title: 'Explainability & Saliency Map Auditing',
        description: 'Generate Grad-CAM heatmaps to verify the model inspects physical cracks rather than background markings.',
        expectedOutcome: 'Verified absence of shortcut learning.'
      }
    ]
  },
  {
    id: 'project-generative-bracket',
    title: 'Generative Design Aerospace Bracket Optimizer',
    shortDescription: 'Apply structural topology optimization and finite element simulation to reduce aircraft component weight by 45% following the Airbus & GM case studies.',
    fullDescription: 'Set up boundary conditions, load vectors, and material constraints in structural optimization scripts to generate organic biomimetic lattice geometries.',
    difficulty: 'Advanced',
    technologies: ['Python', 'NumPy', 'FEA Simulation', 'Topology Optimization', '3D CAD'],
    estimatedTime: '8 hours',
    skills: ['Structural FEA', 'Stress Tensor Analysis', 'Lattice Generation', 'Additive Manufacturing Prep'],
    progress: 0,
    steps: [
      {
        stepNumber: 1,
        title: 'Define Boundary Conditions & Load Vectors',
        description: 'Set fixed bolt constraints and apply 12kN multi-axis shear loads to bracket envelope.',
        expectedOutcome: 'Mathematical boundary conditions established.'
      },
      {
        stepNumber: 2,
        title: 'Run SIMP Topology Optimization',
        description: 'Execute density-based material removal iteratively until target mass reduction is met.',
        expectedOutcome: 'Bio-inspired organic lattice geometry with uniform stress distribution.'
      }
    ]
  }
];
"""

with open("src/data/projectData.ts", "w", encoding="utf-8") as f:
    f.write(project_code)

print("Generated src/data/projectData.ts")

# Hardware Data
hardware_code = """import { HardwareComponent, ProjectKitRecipe } from '../types/hardware';

export const allHardwareComponents: HardwareComponent[] = [
  {
    id: 'comp-arduino-uno',
    name: 'Arduino Uno Rev3 (ATmega328P)',
    category: 'Arduino',
    imageIcon: 'Cpu',
    price: 24.50,
    inStock: true,
    verified: true,
    compatibilityTags: ['5V Logic', 'UART', 'I2C', 'SPI', 'Beginner Friendly'],
    specs: {
      operatingVoltage: '5V (7-12V Input)',
      interfaceProtocol: 'UART, I2C, SPI',
      powerConsumption: '45mA @ 5V',
      sampleRate: '16 MHz Clock',
      notes: 'Standard 5V logic. Excellent for fundamental mechatronics and motor control.'
    },
    description: 'The industry-standard development board for prototyping physical computing, robotics actuators, and sensor interfacing.',
    recommendedFor: ['Obstacle Avoiding Robot', 'Basic Motor Drivers', 'Sensor Logging']
  },
  {
    id: 'comp-esp32-wroom',
    name: 'ESP32-WROOM-32D Dual-Core MCU',
    category: 'ESP32',
    imageIcon: 'Wifi',
    price: 8.90,
    inStock: true,
    verified: true,
    compatibilityTags: ['3.3V Logic', 'WiFi', 'BLE', 'Dual Core', 'I2C', 'SPI'],
    specs: {
      operatingVoltage: '3.3V',
      interfaceProtocol: 'WiFi 802.11 b/g/n, BLE 4.2, I2C, SPI, DAC, ADC',
      powerConsumption: '80-240mA (Active)',
      sampleRate: '240 MHz Dual-Core',
      notes: '3.3V logic level! Level shifter required when interfacing directly with 5V sensors.'
    },
    description: 'High-speed dual-core microcontroller with built-in Wi-Fi and Bluetooth, ideal for IoT predictive maintenance streaming and edge telemetry.',
    recommendedFor: ['Predictive Maintenance Sensor Hub', 'Wireless Robot Control', 'Cloud Telemetry']
  },
  {
    id: 'comp-rpi5-8gb',
    name: 'Raspberry Pi 5 (8GB RAM)',
    category: 'Raspberry Pi',
    imageIcon: 'Server',
    price: 80.00,
    inStock: true,
    verified: true,
    compatibilityTags: ['3.3V GPIO', 'Linux OS', 'PCIe', 'Edge Computing', 'Dual 4K'],
    specs: {
      operatingVoltage: '5V @ 5A (USB-C PD)',
      interfaceProtocol: 'Gigabit Ethernet, USB 3.0, PCIe 2.0, CSI/DSI, I2C, SPI',
      powerConsumption: '5W - 12W',
      sampleRate: 'Quad-Core Cortex-A76 @ 2.4GHz',
      notes: 'Runs full Linux. Perfect for hosting Python ML models and Scikit-Learn pipelines on the edge.'
    },
    description: 'High-performance single-board computer capable of running real-time Python analytics, computer vision pipelines, and ROS2 nodes.',
    recommendedFor: ['Optical Defect Inspector', 'Edge Scikit-Learn Server', 'Fleet Telemetry Gateway']
  },
  {
    id: 'comp-jetson-orin',
    name: 'NVIDIA Jetson Orin Nano (8GB)',
    category: 'AI hardware',
    imageIcon: 'Sparkles',
    price: 249.00,
    inStock: true,
    verified: true,
    compatibilityTags: ['NVIDIA TensorRT', '40 TOPS AI', 'CUDA', 'Deep Learning'],
    specs: {
      operatingVoltage: '9V - 20V DC',
      interfaceProtocol: 'PCIe, Gigabit Ethernet, USB 3.2, MIPI CSI-2',
      powerConsumption: '7W - 15W',
      sampleRate: 'Ampere GPU (1024 CUDA Cores, 32 Tensor Cores)',
      notes: 'Delivers 40 TOPS of AI inference for real-time deep learning computer vision on autonomous robots.'
    },
    description: 'Dedicated embedded AI powerhouse for running transformer models, YOLO vision defect detection, and autonomous navigation.',
    recommendedFor: ['Autonomous Rover Vision', 'Industrial Defect Inspection', 'Edge Deep Learning']
  },
  {
    id: 'comp-mpu6050',
    name: 'MPU-6050 6-DoF Accelerometer & Gyro',
    category: 'Sensors',
    imageIcon: 'Activity',
    price: 4.50,
    inStock: true,
    verified: true,
    compatibilityTags: ['3.3V / 5V Compatible', 'I2C Interface', 'Vibration Telemetry'],
    specs: {
      operatingVoltage: '3.0V - 5.0V (Onboard LDO)',
      interfaceProtocol: 'I2C (Address 0x68 / 0x69)',
      powerConsumption: '3.9mA',
      sampleRate: 'Up to 1000 Hz Gyro / 8000 Hz Accel',
      notes: 'Built-in Digital Motion Processor (DMP). Standard sensor for vibration analysis in predictive maintenance.'
    },
    description: 'Measures 3-axis acceleration and angular rate. Essential for detecting motor vibration harmonics, bearing imbalance, and robot tilt.',
    recommendedFor: ['Predictive Maintenance Hub', 'Motor Vibration Monitor', 'Self-Balancing Robot']
  },
  {
    id: 'comp-hcsr04',
    name: 'HC-SR04 Ultrasonic Distance Sensor',
    category: 'Sensors',
    imageIcon: 'Radio',
    price: 3.20,
    inStock: true,
    verified: true,
    compatibilityTags: ['5V Logic', 'Digital Pulse', 'Obstacle Avoidance'],
    specs: {
      operatingVoltage: '5V DC',
      interfaceProtocol: 'Trigger & Echo (Digital GPIO)',
      powerConsumption: '15mA',
      sampleRate: '40 kHz Ultrasound (2cm to 400cm range)',
      notes: 'Echo pin outputs 5V! When connecting to 3.3V ESP32/Raspberry Pi, use a 1k/2k resistor voltage divider.'
    },
    description: 'Non-contact sonar ranging module providing 2cm to 400cm obstacle distance measurements with 3mm precision.',
    recommendedFor: ['Obstacle Avoiding Robot', 'Level Sensing', 'Collision Warning']
  },
  {
    id: 'comp-l298n',
    name: 'L298N Dual H-Bridge Motor Driver',
    category: 'Motors',
    imageIcon: 'Gauge',
    price: 6.80,
    inStock: true,
    verified: true,
    compatibilityTags: ['5V Logic', 'Up to 35V Motor Power', 'Dual DC / Stepper'],
    specs: {
      operatingVoltage: 'Logic 5V, Motor 5V - 35V',
      interfaceProtocol: 'PWM Speed Control, Direction Pins',
      powerConsumption: 'Up to 2A peak per bridge',
      sampleRate: 'Dual full-bridge driver',
      notes: 'Bipolar design with significant thermal drop (~1.5V). Mount heatsink when driving motors > 1A.'
    },
    description: 'High-power dual H-bridge driver capable of controlling speed and direction for two DC motors or one bipolar stepper motor.',
    recommendedFor: ['Obstacle Avoiding Robot', 'Conveyor Drive', 'Pan-Tilt Gimbal']
  },
  {
    id: 'comp-dc-motors',
    name: 'Twin TT DC Gearmotors with Wheels (1:48)',
    category: 'Motors',
    imageIcon: 'Disc',
    price: 7.50,
    inStock: true,
    verified: true,
    compatibilityTags: ['3V - 6V DC', 'High Torque', 'Robotics Chassis'],
    specs: {
      operatingVoltage: '3V - 6V DC',
      interfaceProtocol: '2-Wire DC Brushed',
      powerConsumption: '150mA no-load, 800mA stall @ 6V',
      sampleRate: '200 RPM @ 6V, 0.8 kg-cm torque',
      notes: 'Includes 65mm rubber tires with silicone grip tread.'
    },
    description: 'Pair of durable 1:48 reduction ratio DC gearmotors with rubber drive wheels, ideal for wheeled mobile robot chassis.',
    recommendedFor: ['Obstacle Avoiding Robot', 'Autonomous Rover']
  },
  {
    id: 'comp-ds18b20',
    name: 'DS18B20 Waterproof Temperature Probe',
    category: 'Sensors',
    imageIcon: 'Thermometer',
    price: 5.20,
    inStock: true,
    verified: true,
    compatibilityTags: ['3.0V - 5.5V', '1-Wire Digital', 'Waterproof Probe'],
    specs: {
      operatingVoltage: '3.0V - 5.5V',
      interfaceProtocol: 'Dallas 1-Wire Digital Interface',
      powerConsumption: '1mA (Active conversion)',
      sampleRate: '-55°C to +125°C range (+/-0.5°C accuracy)',
      notes: 'Requires a 4.7k ohm pull-up resistor between VCC and Data line.'
    },
    description: 'Stainless steel sealed digital temperature probe for monitoring electric motor stator heat, hydraulic fluids, and thermal dissipation.',
    recommendedFor: ['Predictive Maintenance Hub', 'Motor Temperature Capstone', 'Thermal Solder Profiler']
  },
  {
    id: 'comp-breadboard-kit',
    name: 'Solderless Breadboard & 65x Jumper Wire Kit',
    category: 'Breadboards',
    imageIcon: 'Layers',
    price: 6.00,
    inStock: true,
    verified: true,
    compatibilityTags: ['Universal Prototyping', 'Standard 0.1" Pitch'],
    specs: {
      operatingVoltage: 'Up to 30V DC',
      interfaceProtocol: '830 Tie Points with Dual Power Rails',
      powerConsumption: 'Passive interconnect',
      sampleRate: 'N/A',
      notes: 'Includes male-to-male flexible stranded copper jumper cables.'
    },
    description: 'Full-size 830-point solderless prototyping breadboard with colored jumper wire bundle for clean, solder-free circuit testing.',
    recommendedFor: ['All Lab Projects', 'Circuit Prototyping']
  },
  {
    id: 'comp-ov5642-cam',
    name: 'OV5642 5MP Camera Module (MIPI / SPI)',
    category: 'AI hardware',
    imageIcon: 'Camera',
    price: 21.00,
    inStock: true,
    verified: true,
    compatibilityTags: ['3.3V Logic', 'MIPI CSI-2', 'Raspberry Pi / Jetson Compatible'],
    specs: {
      operatingVoltage: '3.3V',
      interfaceProtocol: 'MIPI CSI-2 or High-Speed SPI',
      powerConsumption: '140mW active',
      sampleRate: '1080p @ 30fps / 720p @ 60fps',
      notes: 'Equipped with adjustable focus lens and infrared cut filter.'
    },
    description: '5-megapixel optical inspection camera module for capturing high-definition mechanical parts and assembly line video feeds.',
    recommendedFor: ['Optical Defect Inspector', 'Chassis Quality Vision']
  },
  {
    id: 'comp-battery-pack',
    name: '7.4V 2200mAh 2S LiPo Battery with Charger',
    category: 'Robotics kits',
    imageIcon: 'BatteryCharging',
    price: 19.50,
    inStock: true,
    verified: true,
    compatibilityTags: ['High Current', '2S Balance Plug', 'XT60 / T-Plug'],
    specs: {
      operatingVoltage: '7.4V Nominal (8.4V Peak)',
      interfaceProtocol: 'XT60 Main Lead + JST-XH Balance Tap',
      powerConsumption: '2200mAh capacity (25C discharge rate)',
      sampleRate: 'N/A',
      notes: 'Provides ample clean peak current for DC motor surges without resetting microcontroller logic.'
    },
    description: 'High-discharge lithium-polymer battery pack supplying steady current for dual motors, microcontrollers, and wireless modules.',
    recommendedFor: ['Obstacle Avoiding Robot', 'Autonomous Mobile Rover']
  }
];

export const projectKitRecipes: ProjectKitRecipe[] = [
  {
    id: 'kit-obstacle-robot',
    title: 'Obstacle Avoiding Mobile Robot Kit',
    description: 'Complete verified hardware bundle to build an autonomous obstacle-avoiding mobile platform with differential steering.',
    targetProject: 'Autonomous Obstacle-Avoiding Rover',
    difficulty: 'Beginner',
    totalEstimatedPrice: 53.70,
    requiredComponents: [
      { componentId: 'comp-arduino-uno', quantity: 1, role: 'Main Central Controller' },
      { componentId: 'comp-hcsr04', quantity: 1, role: 'Front Distance Sonar Sensor' },
      { componentId: 'comp-l298n', quantity: 1, role: 'Dual Motor H-Bridge Driver' },
      { componentId: 'comp-dc-motors', quantity: 1, role: 'Wheeled Drive Actuators' },
      { componentId: 'comp-breadboard-kit', quantity: 1, role: 'Circuit Interconnect Wiring' },
      { componentId: 'comp-battery-pack', quantity: 1, role: '7.4V Portable Power Source' }
    ]
  },
  {
    id: 'kit-predictive-hub',
    title: 'Predictive Maintenance Telemetry Hub Kit',
    description: 'Wireless multi-sensor vibration and thermal monitoring station for logging real industrial motor health feeds.',
    targetProject: 'Industrial Motor Fleet Health Predictor',
    difficulty: 'Intermediate',
    totalEstimatedPrice: 24.60,
    requiredComponents: [
      { componentId: 'comp-esp32-wroom', quantity: 1, role: 'Dual-Core Wireless Telemetry MCU' },
      { componentId: 'comp-mpu6050', quantity: 1, role: 'Tri-Axial High-Speed Vibration Sensor' },
      { componentId: 'comp-ds18b20', quantity: 1, role: 'Motor Case Temperature Probe' },
      { componentId: 'comp-breadboard-kit', quantity: 1, role: 'Telemetry Breadboard Interface' }
    ]
  },
  {
    id: 'kit-edge-vision',
    title: 'Edge AI Assembly Line Quality Inspector Kit',
    description: 'Linux-powered computer vision inspection rig with 5MP camera for real-time surface defect classification.',
    targetProject: 'Computer Vision Optical Defect Inspector',
    difficulty: 'Advanced',
    totalEstimatedPrice: 101.00,
    requiredComponents: [
      { componentId: 'comp-rpi5-8gb', quantity: 1, role: 'Single-Board Edge Inference Host' },
      { componentId: 'comp-ov5642-cam', quantity: 1, role: 'High-Res Optical Inspection Camera' },
      { componentId: 'comp-breadboard-kit', quantity: 1, role: 'Status Indicator LEDs & Trigger Wiring' }
    ]
  }
];
"""

with open("src/data/hardwareData.ts", "w", encoding="utf-8") as f:
    f.write(hardware_code)

print("Generated src/data/hardwareData.ts")

# Achievements Data
achieve_code = """import { Achievement } from '../types/user';

export const allAchievements: Achievement[] = [
  {
    id: 'ach-first-lesson',
    title: 'First Step into AI',
    icon: 'GraduationCap',
    description: 'Completed your very first lesson in the AI Mech Lab curriculum.',
    category: 'learning',
    unlocked: true,
    unlockedAt: '2026-10-01',
    progress: 100
  },
  {
    id: 'ach-python-beginner',
    title: 'Python Navigator',
    icon: 'Terminal',
    description: 'Mastered Python variables, sensor loops, and modular functions.',
    category: 'coding',
    unlocked: true,
    unlockedAt: '2026-10-02',
    progress: 100
  },
  {
    id: 'ach-first-quiz',
    title: 'Concept Master',
    icon: 'Award',
    description: 'Passed your first topic quiz with a score of 80% or higher.',
    category: 'quiz',
    unlocked: true,
    unlockedAt: '2026-10-02',
    progress: 100
  },
  {
    id: 'ach-ai-explorer',
    title: 'Ethical Engineer',
    icon: 'Compass',
    description: 'Explored AI limitations, algorithmic bias, and shortcut learning failure modes.',
    category: 'learning',
    unlocked: false,
    progress: 60
  },
  {
    id: 'ach-math-wizard',
    title: 'Vector & Probability Sage',
    icon: 'Binary',
    description: 'Conquered linear algebra coordinate vectors, dot products, and uncertainty statistics.',
    category: 'learning',
    unlocked: false,
    progress: 25
  },
  {
    id: 'ach-first-project',
    title: 'Industrial Capstone Builder',
    icon: 'Cpu',
    description: 'Trained dual regression and classification models to forecast motor failure.',
    category: 'project',
    unlocked: false,
    progress: 50
  },
  {
    id: 'ach-hardware-hacker',
    title: 'Mechatronic Fabricator',
    icon: 'Wrench',
    description: 'Configured a verified hardware bill-of-materials kit without voltage incompatibilities.',
    category: 'hardware',
    unlocked: true,
    unlockedAt: '2026-10-02',
    progress: 100
  },
  {
    id: 'ach-streak-14',
    title: 'Relentless Momentum',
    icon: 'Flame',
    description: 'Maintained a 14-day continuous daily learning streak on AI Mech Lab.',
    category: 'learning',
    unlocked: true,
    unlockedAt: '2026-10-02',
    progress: 100
  }
];
"""

with open("src/data/achievementsData.ts", "w", encoding="utf-8") as f:
    f.write(achieve_code)

print("Generated src/data/achievementsData.ts")
