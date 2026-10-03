import { Quiz } from '../types/quiz';

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
        question: 'What is a key difference between Siemens\' adaptive soldering process and simple post-production defect inspection?',
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
        question: 'Why did Amazon\'s historical resume screening algorithm penalize female applicants?',
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
        question: 'What is the output of the following Python code?\nval = 42\nval = 45\nprint(val)',
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
        explanation: 'A continuous prediction is judged by how far off it lands on average across the dataset. A forecast of 76.4°C against an actual 76.0°C is off by 0.4°C, not \"wrong\".',
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
          'Because a trivial model that simply predicts \"Healthy\" for every part achieves 99% accuracy while missing 100% of defective parts',
          'Because machines only understand binary 0 and 1',
          'Because factory managers do not like high numbers'
        ],
        correctAnswerIndex: 1,
        explanation: 'This is the class imbalance trap. When defects are rare, naive accuracy hides complete operational failure. Precision, recall, and confusion matrices must be used.',
        hint: 'What happens if the model predicts \'good\' every single time?'
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
