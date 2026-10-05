export const aiFundamentalsCourse = {
  id: "ai-fundamentals",
  title: "AI Fundamentals",
  headline: "Learn AI. Build Systems. Create the Future.",
  track: "Beginner Track",
  level: "Beginner",
  estimatedHours: 20,
  totalLessons: 11,
  totalModules: 4,
  description: "An intelligent learning platform curriculum that helps students move from understanding technology to actually building with it. Explore core AI theory, Python programming, vector math, supervised learning, and real-world mechatronics applications including industrial motor failure forecasting.",
  learningObjectives: [
    "Master the nested definitions of Artificial Intelligence, Machine Learning, and Deep Learning",
    "Understand engineering use cases: predictive maintenance, generative design, and factory automation",
    "Examine real-world AI failure modes: algorithmic bias, spurious shortcuts (wolf vs. husky, ICU corner markers), and international regulatory tiers",
    "Write clean Python code for sensor telemetry handling using variables, loops, and custom functions",
    "Perform high-speed vectorized operations, multi-dimensional array slicing, and aggregations with NumPy",
    "Apply linear algebra foundations: sensor vectors, matrices, dot products, and transformation weights",
    "Quantify uncertainty using probability distributions, mean, standard deviation, and correlation",
    "Distinguish between supervised and unsupervised learning algorithms",
    "Build continuous regression models and discrete classification models with Scikit-Learn",
    "Complete an end-to-end industrial capstone: predict motor operating temperatures and 30-day failure probabilities from sensor streams"
  ],
  requirements: [
    "No prior AI or machine learning experience required",
    "Basic familiarity with computers and curiosity about engineering and robotics",
    "All code exercises and simulators run directly in your browser"
  ],
  skillsGained: [
    "AI & Deep Learning Fundamentals",
    "Sensor Telemetry Analysis",
    "Python for Mechatronics",
    "NumPy Vectorization",
    "Linear Algebra for Machine Learning",
    "Statistical Modeling & Uncertainty",
    "Scikit-Learn Regression & Classification",
    "Industrial Predictive Maintenance"
  ],
  instructors: [
    {
      name: "Dr. Elena Vance",
      role: "Robotics & AI Systems Lead",
      organization: "AI Mech Lab Research",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
      bio: "Former senior perception engineer working on autonomous mobile robots and industrial sensor fusion. Dedicated to making mechatronic AI intuitive and accessible."
    },
    {
      name: "Marcus Thorne",
      role: "Mechatronics & Embedded Systems Architect",
      organization: "AI Mech Lab Hardware Lab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
      bio: "Hardware engineer with 12+ years deploying predictive maintenance vibration monitors and edge AI systems in aerospace and advanced manufacturing."
    }
  ],
  modules: [
    {
      id: "module-1",
      moduleNumber: 1,
      title: "Introduction to AI & Engineering Concepts",
      description: "Demystify artificial intelligence, distinguish machine learning from deep learning, inspect real-world manufacturing deployments, and analyze algorithmic bias and safety limitations.",
      badge: "Core Concepts",
      progress: 67,
      lessons: [
        {
          id: "lesson-1-1",
          moduleId: "module-1",
          topicNumber: "1.1",
          title: "What is AI, ML, and Deep Learning?",
          subtitle: "The Nested Hierarchy and Explainability Trade-Off",
          durationMinutes: 18,
          summary: "Before building anything, understand the precise technical definitions: AI as the broad goal category, ML as pattern learning from data, and Deep Learning as multi-layered neural networks.",
          learningObjectives: [
            "Define Artificial Intelligence, Machine Learning, and Deep Learning with precision",
            "Contrast hand-crafted rule-based logic with empirical data-driven learning",
            "Evaluate the trade-off between explainability, computing cost, and problem complexity",
            "Identify where deep learning excels (unstructured vision, audio, sensor streams) vs. where classical rules shine"
          ],
          quizId: "quiz-1-1",
          completed: true,
          sections: [
            {
              id: "sec-1-1-1",
              heading: "The Problem with Ambiguous Terminology",
              content: [
                `If you've spent any time around the word "AI" lately, you've probably heard it used to mean about five different things depending on who's talking. A marketer uses it to mean "smart software." A researcher uses it to mean something much narrower. Before you build anything, you need these terms pinned down precisely.`,
                'Artificial Intelligence (AI) is the broadest term. It refers to any system that performs tasks which would normally require human intelligence \u2014 recognizing a face, understanding a sentence, deciding where to move a robotic arm. AI is the goal category, not a specific technique. A simple chess-playing program from the 1990s that follows hand-coded rules is technically AI. So is a modern system that writes essays. They achieve "intelligent behavior" through completely different means.'
              ],
              diagram: {
                type: "nested-ai",
                title: "Nested Architecture of AI",
                description: "AI encompasses rule-based algorithms and Machine Learning; Machine Learning encompasses statistical models and multi-layered Deep Learning neural networks."
              }
            },
            {
              id: "sec-1-1-2",
              heading: "Machine Learning & Deep Learning: The Data Shift",
              content: [
                `Machine Learning (ML) is a subset of AI \u2014 specifically, AI achieved by learning patterns from data rather than being explicitly programmed with rules. Instead of a human writing out "if the sensor reads above X, do Y," you give the system a large number of examples, and it works out the pattern itself. This shift is what made modern AI possible: rules written by humans don't scale to the complexity of real-world problems like image recognition or language, but patterns learned from thousands or millions of examples can.`,
                'Deep Learning (DL) is a subset of ML \u2014 specifically, ML done using a structure called a neural network, loosely inspired by how neurons connect in a brain. "Deep" refers to having many layers of these connected units stacked on top of each other. Deep learning powers modern computer vision, large language models, and autonomous driving perception.'
              ],
              callout: {
                type: "engineering",
                title: "The Golden Rule of AI Subsets",
                text: "Every deep learning system is machine learning. Every machine learning system is AI. But not every AI system uses machine learning (e.g. A* pathfinding or rule engines), and not every ML system uses deep learning (e.g. Linear Regression, Random Forests)."
              }
            },
            {
              id: "sec-1-1-3",
              heading: "Why This Distinction Matters in Engineering",
              content: [
                `If someone tells you "we're adding AI to this product," that sentence alone tells you almost nothing about how it works, how much data it needs, or how predictable its behavior will be. Those things depend entirely on which box you are actually in.`,
                "A rule-based AI system is predictable and explainable \u2014 you can point to the exact line of logic that produced a decision. But it's brittle: it only handles situations the programmer thought of in advance.",
                "A machine learning system is more flexible and can handle situations no one explicitly anticipated \u2014 but it needs training data, and its decisions are harder to fully audit.",
                "A deep learning system is the most powerful for complex unstructured data (cameras, acoustics, LiDAR), but requires the most compute and is often a black box."
              ],
              diagram: {
                type: "rule-vs-ml",
                title: "Rule-Based Logic vs. Pattern Learning",
                description: "Rule-based systems take Rules + Data to produce Answers. Machine Learning takes Data + Answers to produce Rules (a Model)."
              },
              keyTakeaways: [
                "AI = The goal of performing tasks requiring human-like intelligence",
                "ML = Achieving AI by learning statistical patterns from data instead of hardcoded rules",
                "DL = Neural networks with many layers for high-dimensional, unstructured data",
                "Explainability vs. Flexibility is a fundamental engineering trade-off"
              ]
            }
          ]
        },
        {
          id: "lesson-1-2",
          moduleId: "module-1",
          topicNumber: "1.2",
          title: "Real-World Engineering Use Cases",
          subtitle: "Predictive Maintenance, Generative Design & Industrial Automation",
          durationMinutes: 22,
          summary: "Inspect how machine learning transforms physical engineering across Siemens Senseye, Rolls-Royce jet engine telemetry, Airbus generative cabin partitions, and BMW factory computer vision.",
          learningObjectives: [
            "Analyze predictive maintenance architectures over reactive and scheduled approaches",
            "Understand generative design constraints and structural part consolidation",
            "Examine closed-loop industrial automation and real-time computer vision quality inspection",
            "Classify engineering problems into forecasting, design exploration, or real-time process control"
          ],
          quizId: "quiz-1-2",
          completed: true,
          sections: [
            {
              id: "sec-1-2-1",
              heading: "Predictive Maintenance: Listening to Machines",
              content: [
                "The old way to maintain equipment is either reactive (fix it when it breaks) or scheduled (replace it on a fixed calendar, whether it needs it or not). Both waste money \u2014 reactive maintenance means catastrophic unplanned downtime, and scheduled maintenance replaces parts that still had useful life left.",
                'Predictive maintenance uses machine learning: sensors continuously stream vibration, temperature, pressure, and power data off a machine. The model learns what "normal" operation looks like, catching subtle degradation weeks before a human inspector or simple threshold alarm would notice.'
              ],
              callout: {
                type: "engineering",
                title: "Industry Evidence: Rolls-Royce Jet Engines",
                text: "Rolls-Royce aircraft engines stream thousands of parameters per flight back to ground control. If abnormal blade vibration is detected mid-flight across the Atlantic, replacement bearings and technicians are dispatched to the arrival gate before the aircraft even touches down."
              },
              diagram: {
                type: "predictive-maintenance",
                title: "Three Maintenance Paradigms",
                description: "Comparison of Reactive (Break-Fix), Scheduled (Calendar-based), and Predictive (Condition-based AI Telemetry)."
              }
            },
            {
              id: "sec-1-2-2",
              heading: "Generative Design: Exploring Millions of Geometries",
              content: [
                "Generative design flips the traditional CAD process. Instead of an engineer drafting a shape and then running finite element analysis (FEA) to verify stress concentrations, you supply the design constraints \u2014 maximum envelope, mounting points, load vectors, material properties, and manufacturing method (such as 3D metal printing or 5-axis CNC).",
                "The algorithm generates thousands of organic, bio-inspired lattice structures that minimize weight while meeting safety factors.",
                "Airbus applied this to a cabin partition wall, creating a biomimetic structure that reduced weight by 45% without sacrificing crash safety. General Motors redesigned a seatbelt bracket, consolidating eight welded stampings into a single 3D-printed titanium part."
              ],
              diagram: {
                type: "generative-design",
                title: "Generative Design Loop",
                description: "Loads & Envelope Constraints -> Algorithmic Lattice Exploration -> Stress Optimization -> Consolidated Monolithic Part."
              }
            },
            {
              id: "sec-1-2-3",
              heading: "Industrial Automation & Factory Floor AI",
              content: [
                "At BMW assembly plants, deep learning computer vision inspects painted chassis at line speeds. Cameras distinguish between harmless surface dust and micro-cracks or orange-peel defects with superhuman consistency.",
                "At Siemens' electronics manufacturing facility in Amberg, ML models continuously adjust soldering temperatures and line conveyor speeds in real time based on ambient factory humidity and component lot variations.",
                "Foxconn orchestrates digital twins driven by AI to dynamically balance robot arms, AGVs (automated guided vehicles), and conveyor buffers across multi-tier production lines."
              ],
              keyTakeaways: [
                "Predictive maintenance eliminates unplanned downtime by analyzing multi-sensor degradation signatures",
                "Generative design turns computers from drawing tools into structural co-designers",
                "Factory AI moves from passive defect detection to active real-time process parameter control"
              ]
            }
          ]
        },
        {
          id: "lesson-1-3",
          moduleId: "module-1",
          topicNumber: "1.3",
          title: "AI Ethics, Limitations & Failure Modes",
          subtitle: "Algorithmic Bias, Shortcut Learning & Regulatory Frameworks",
          durationMinutes: 25,
          summary: "Examine how machine learning fails: historical dataset bias, shortcut learning (wolf vs. husky, hospital ICU corner stamps), and global regulatory frameworks like the EU AI Act.",
          learningObjectives: [
            "Explain why algorithmic bias is an inherent reflection of training data rather than traditional syntax bugs",
            "Analyze notorious failures: hiring discrimination, judicial risk assessment, and healthcare allocation disparities",
            "Identify shortcut learning where models exploit spurious correlations instead of causal features",
            "Navigate international AI governance frameworks (EU risk tiers, US sector rules, China generative registries)"
          ],
          quizId: "quiz-1-3",
          completed: false,
          sections: [
            {
              id: "sec-1-3-1",
              heading: "Why Bias Is Not a Traditional Software Bug",
              content: [
                "When a rule-based system fails, a programmer typed a flawed condition \u2014 a bug you can locate and fix in code. Machine learning systems fail differently: they are pattern extraction engines. If historical training data contains systemic disparity, the model does not correct it \u2014 it treats the disparity as a ground truth pattern to optimize for.",
                `Amazon's historical resume screening algorithm trained on a decade of tech applications penalized resumes containing the word "women's" (e.g. "women's rugby team captain") or women's college credentials because historical hires skewed male. The algorithm was never explicitly told to discriminate; it simply replicated historical patterns with mathematical precision.`
              ],
              callout: {
                type: "warning",
                title: "High-Stakes Algorithmic Disparities",
                text: "The COMPAS recidivism risk score exhibited severe disparate impact against Black defendants. In healthcare algorithms covering 200 million Americans, using historical healthcare expenditure as a proxy for sickness led to severe under-allocation of care to disadvantaged populations who had historically lacked insurance access."
              }
            },
            {
              id: "sec-1-3-2",
              heading: "Shortcut Learning: When AI Keys Off the Wrong Features",
              content: [
                "A dangerous limitation in machine learning is shortcut learning \u2014 when a model achieves near-perfect test accuracy by latching onto an irrelevant artifact that happens to correlate with labels in that specific dataset.",
                'In a famous study, a computer vision model distinguished wolves from Siberian huskies with 98% accuracy. Feature attribution revealed the model was not looking at ears, snouts, or fur: every wolf photo in the training set had snow in the background, while huskies were photographed on grass. The model had learned "snow = wolf".',
                'Similarly, an ICU pneumonia-detection model achieved stellar laboratory results but failed when tested in new hospitals: it had learned to identify the distinctive metal font and calibration stamps used by portable ICU X-ray machines, essentially predicting "was this patient in the ICU?" rather than analyzing lung tissue pathology.'
              ]
            },
            {
              id: "sec-1-3-3",
              heading: "Global AI Regulation & The Responsible Engineer",
              content: [
                "Three major regulatory paradigms now govern AI deployment: The European Union (EU AI Act) enforces binding risk categories (Unacceptable, High-Risk, Limited, Minimal) with mandatory audits and explainability for critical systems. The United States follows decentralized sector-specific guidelines (NIST, FTC, FAA). China mandates algorithmic registry and security reviews for generative systems.",
                "As an engineer in AI Mech Lab, you must adopt three core habits: 1. Audit what your data actually represents. 2. Rigorously validate against out-of-distribution, unseen environments. 3. Maintain healthy skepticism whenever a model appears suspiciously accurate on initial test sets."
              ],
              keyTakeaways: [
                "Historical data reflects historical disparities; models amplify what they are fed",
                "High test accuracy does not prove a model learned the causal physical mechanism",
                "Shortcut learning is common in sensor data and computer vision",
                "Regulatory compliance requires audits, transparency, and human-in-the-loop oversight"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "module-2",
      moduleNumber: 2,
      title: "Programming Fundamentals for AI",
      description: "Master the Python programming language for mechatronics and AI, then unlock high-speed numerical computing with NumPy ndarrays, vectorization, and multi-dimensional matrices.",
      badge: "Core Tools",
      progress: 50,
      lessons: [
        {
          id: "lesson-2-1",
          moduleId: "module-2",
          topicNumber: "2.1",
          title: "Python Essentials for AI & Mechatronics",
          subtitle: "Variables, Control Flow & Reusable Functions",
          durationMinutes: 20,
          summary: "Master the three fundamental building blocks of AI programming in Python: dynamic variables, loops for sensor streams, and modular functions.",
          learningObjectives: [
            "Store and manipulate integers, floating-point numbers, strings, and booleans",
            "Iterate through telemetry streams using for and while loops without redundant code",
            "Encapsulate data transformations into reusable functions with parameters and return values",
            "Understand dynamic typing and variable re-assignment in mechatronic scripts"
          ],
          quizId: "quiz-2-1",
          codingLabId: "code-2-1",
          completed: true,
          sections: [
            {
              id: "sec-2-1-1",
              heading: "Variables \u2014 Labeled Storage for Telemetry",
              content: [
                "Every AI and mechatronic system in this course is built with Python \u2014 the universal standard for machine learning, scientific computing, and robotics prototyping.",
                "A variable is a name that holds a piece of information so you can use it without retyping. Python automatically infers the data type from the value you provide."
              ],
              codeSnippet: {
                language: "python",
                code: 'sensor_reading = 42\nmotor_name = "servo_1"\nis_active = True\noperating_temp = 68.4\n\n# Variables can be updated dynamically as sensor values change\nsensor_reading = 45\nprint(f"Updated sensor reading: {sensor_reading}")',
                caption: "Declaring and reassigning typed variables in Python"
              }
            },
            {
              id: "sec-2-1-2",
              heading: "Loops \u2014 Processing Streaming Sensor Arrays",
              content: [
                "A huge amount of programming in robotics and AI involves repeating actions across sequential data: checking every reading in a time-series buffer or calculating moving averages.",
                "The for loop moves through each element of a collection sequentially, while the while loop executes as long as a boolean safety condition remains true."
              ],
              codeSnippet: {
                language: "python",
                code: 'sensor_readings = [42, 45, 41, 50, 47]\n\n# Calculate sum and alert on high vibration readings\nfor reading in sensor_readings:\n    if reading > 48:\n        print(f"Warning: Vibration spike detected: {reading} mm/s")\n    else:\n        print(f"Normal reading: {reading}")',
                caption: "Iterating through sensor telemetry with conditional thresholding"
              }
            },
            {
              id: "sec-2-1-3",
              heading: "Functions \u2014 Reusable Engineering Transformers",
              content: [
                "Think of a function as an automated machine: input values (arguments) go into the top, an internal transformation runs, and an output result comes out the bottom.",
                "Functions keep your code modular, readable, and testable when building complex multi-sensor pipelines."
              ],
              codeSnippet: {
                language: "python",
                code: 'def convert_temp(celsius):\n    """Convert Celsius reading to Fahrenheit"""\n    fahrenheit = (celsius * 9 / 5) + 32\n    return fahrenheit\n\nmotor_temp_c = 75.0\nmotor_temp_f = convert_temp(motor_temp_c)\nprint(f"Motor temp: {motor_temp_f}\xB0F")',
                caption: "Encapsulating unit conversion in a clean Python function"
              },
              keyTakeaways: [
                "Variables provide dynamic memory for hardware states and numerical readings",
                "Loops eliminate manual code repetition across streaming datasets",
                "Functions encapsulate logic into reusable, testable engineering modules"
              ]
            }
          ]
        },
        {
          id: "lesson-2-2",
          moduleId: "module-2",
          topicNumber: "2.2",
          title: "NumPy Basics & High-Speed Numerical Computing",
          subtitle: "Vectorized Arrays, Multi-Dimensional Slicing & Aggregations",
          durationMinutes: 24,
          summary: "Discover why standard Python lists are inadequate for AI workloads, and master the ndarray memory structure, vectorized element-wise math, and statistical reductions.",
          learningObjectives: [
            "Contrast standard Python lists with contiguous C-based NumPy ndarrays",
            "Execute vectorized mathematical transformations without explicit loops",
            "Inspect multi-dimensional matrix shapes and access rows/columns via slicing",
            "Calculate statistical aggregations (mean, std, min, max, sum) across sensor axes"
          ],
          quizId: "quiz-2-2",
          codingLabId: "code-2-2",
          completed: false,
          sections: [
            {
              id: "sec-2-2-1",
              heading: "Why NumPy? The Speed of Contiguous C Arrays",
              content: [
                "Standard Python lists store references to arbitrary Python objects scattered throughout computer memory. For 5 numbers, this is negligible. For 100,000 sensor readings per second in a mechatronic feedback loop, it creates crippling memory overhead and pointer indirection.",
                "NumPy introduces the ndarray (N-dimensional array). It packs numbers into contiguous memory blocks in RAM and executes operations in compiled C and Fortran routines, running 50x to 100x faster than pure Python."
              ],
              codeSnippet: {
                language: "python",
                code: 'import numpy as np\n\n# Creating a NumPy ndarray\nreadings = np.array([42, 45, 41, 50, 47])\n\n# Vectorized math: applies to every element simultaneously\nfahrenheit = readings * 1.8 + 32\nprint("Raw Celsius:", readings)\nprint("Vectorized Fahrenheit:", fahrenheit)',
                caption: "Vectorized element-wise transformation without any for loops"
              }
            },
            {
              id: "sec-2-2-2",
              heading: "2D Matrices & Multi-Sensor Telemetry Buffers",
              content: [
                "In robotics, you rarely read a single sensor in isolation. You have multiple sensors (temperature, vibration, current draw) sampled across consecutive time steps.",
                "NumPy represents this as a 2D matrix where rows represent discrete time samples and columns represent physical sensor channels."
              ],
              codeSnippet: {
                language: "python",
                code: '# 3 time steps, 3 sensor channels (temp_c, vib_mm_s, current_a)\ntelemetry = np.array([\n    [65.2, 3.1, 12.4],\n    [67.8, 3.4, 12.8],\n    [71.5, 4.8, 14.1]\n])\n\nprint("Matrix shape:", telemetry.shape) # (3, 3)\nprint("First time step:", telemetry[0, :])\nprint("All vibration readings:", telemetry[:, 1])',
                caption: "2D matrix slicing across temporal rows and sensor columns"
              }
            },
            {
              id: "sec-2-2-3",
              heading: "Core Numerical Reductions: Mean, Std, Min, Max",
              content: [
                "NumPy provides lightning-fast statistical aggregations. You can compute metrics across the entire array or along specific axes (axis=0 computes column averages; axis=1 computes row averages)."
              ],
              codeSnippet: {
                language: "python",
                code: 'vibration_channel = telemetry[:, 1]\n\nprint("Mean vibration:", vibration_channel.mean())\nprint("Max vibration:", vibration_channel.max())\nprint("Std deviation:", vibration_channel.std())',
                caption: "Computing descriptive statistics on sensor channels"
              },
              keyTakeaways: [
                "NumPy ndarrays store numbers contiguously in memory for extreme computational speed",
                "Vectorization executes operations across millions of numbers without Python loops",
                "Understanding array shape (rows, columns) is essential for linear algebra and neural networks",
                "Slicing [rows, cols] enables precise extraction of multi-sensor telemetry channels"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "module-3",
      moduleNumber: 3,
      title: "Mathematics for AI",
      description: "Acquire the two essential mathematical languages of artificial intelligence: linear algebra for structuring and transforming high-dimensional data, and probability & statistics for quantifying physical uncertainty.",
      badge: "Math Foundation",
      progress: 0,
      lessons: [
        {
          id: "lesson-3-1",
          moduleId: "module-3",
          topicNumber: "3.1",
          title: "Linear Algebra Essentials: Vectors & Matrices",
          subtitle: "Coordinate Geometry, Dot Products & Weight Transformations",
          durationMinutes: 22,
          summary: "Learn how machine learning models represent physical states as vectors, structure datasets as matrices, and perform predictions via matrix multiplication.",
          learningObjectives: [
            "Conceptualize vectors as ordered numbers representing physical machine states",
            "Compute dot products to measure directional alignment and feature weighting",
            "Structure engineering datasets as matrices where rows are samples and columns are features",
            "Understand matrix-vector multiplication as combining inputs with learned model parameters"
          ],
          quizId: "quiz-3-1",
          completed: false,
          sections: [
            {
              id: "sec-3-1-1",
              heading: "Vectors \u2014 Lists of Numbers with Physical Meaning",
              content: [
                "You have been using 1D NumPy arrays since the last module; linear algebra makes their mathematical meaning explicit.",
                "A vector is an ordered sequence of numbers with physical and geometric significance. In mechatronics, a vector can describe the instantaneous state of a robotic joint: [angle, angular_velocity, torque], or an industrial motor: [runtime_hrs, load_pct, vibration]."
              ],
              diagram: {
                type: "vector-space",
                title: "Sensor State Vectors in Feature Space",
                description: "A 2D feature vector plotted with vibration along the X-axis and temperature along the Y-axis."
              }
            },
            {
              id: "sec-3-1-2",
              heading: "The Dot Product: Measuring Similarity & Weighting Features",
              content: [
                "The dot product combines two vectors into a single scalar number by multiplying matching elements and summing the products.",
                "In machine learning, the dot product computes the weighted sum: features multiplied by learned weights. If vector A represents sensor readings and vector W represents model sensitivity weights, A \xB7 W calculates the model score."
              ],
              callout: {
                type: "formula",
                title: "The Dot Product Equation",
                text: "A \xB7 W = (a1 * w1) + (a2 * w2) + ... + (an * wn). When normalized, it computes Cosine Similarity."
              },
              codeSnippet: {
                language: "python",
                code: 'import numpy as np\n\nfeatures = np.array([600, 89, 6.0]) # [runtime, load, vib]\nweights  = np.array([0.02, 0.45, 3.2])\n\n# Dot product: weighted sum of features\nprediction_score = np.dot(features, weights)\nprint("Computed prediction score:", prediction_score)',
                caption: "Calculating weighted prediction score via vector dot product"
              }
            },
            {
              id: "sec-3-1-3",
              heading: "Matrices \u2014 Storing Datasets & Linear Transformations",
              content: [
                "A matrix is a 2D grid of numbers. In AI, a dataset is represented as a matrix X of shape (N, D), where N is the number of historical records and D is the number of measured features.",
                "When you train a linear model or pass data through a neural network layer, the fundamental operation is matrix multiplication: X @ W + b. Understanding that matrix dimensions must align (columns of matrix A must equal rows of matrix B) is how you diagnose 90% of model shape errors."
              ],
              keyTakeaways: [
                "Vectors represent physical states or coordinates in high-dimensional feature space",
                "Dot products compute weighted sums and directional similarities",
                "Datasets are matrices where rows = observations and columns = features",
                "Matrix multiplication transforms inputs into predictions via learned weight parameters"
              ]
            }
          ]
        },
        {
          id: "lesson-3-2",
          moduleId: "module-3",
          topicNumber: "3.2",
          title: "Probability & Statistics: Quantifying Uncertainty",
          subtitle: "Distributions, Standard Deviation, Normalization & Correlation",
          durationMinutes: 26,
          summary: "Understand why AI predictions are probabilistic statements rather than absolute certainties, and master data standardization and correlation metrics.",
          learningObjectives: [
            "Interpret model confidence as a probability distribution between 0 and 1",
            "Recognize why outliers distort the mean and how standard deviation measures sensor stability",
            "Perform feature standardization (Z-score normalization) to stabilize gradient descent",
            "Differentiate correlation from causation in engineering failure diagnostics"
          ],
          quizId: "quiz-3-2",
          codingLabId: "code-3-2",
          completed: false,
          sections: [
            {
              id: "sec-3-2-1",
              heading: "Why AI is Fundamentally About Uncertainty",
              content: [
                'When a machine learning model evaluates an image or a sensor log, it does not state a mathematical certainty like 2+2=4. It outputs a probability distribution: "Based on historical data, there is a 94% chance this bearing is degraded and a 6% chance it is healthy."',
                "Probability is a value between 0 (impossible) and 1 (certain). A model with 94% confidence warrants immediate preventative action, whereas a 51% confidence prediction requires further verification before halting a live assembly line."
              ]
            },
            {
              id: "sec-3-2-2",
              heading: "Mean vs. Standard Deviation: Sensor Reliability",
              content: [
                "The mean (average) is helpful, but sensitive to outliers (e.g. an electrical noise spike of 200\xB0C pulls the mean away from typical values).",
                "Standard deviation (std) measures dispersion \u2014 how tightly readings cluster around the mean. Two industrial temperature sensors might both average 45\xB0C: Sensor A oscillates between 44\xB0C and 46\xB0C (std = 0.8), while Sensor B swings wildly between 20\xB0C and 70\xB0C (std = 18.2). Their means are identical, but their reliability is vastly different!"
              ],
              callout: {
                type: "formula",
                title: "Z-Score Feature Standardization",
                text: "Z = (X - \u03BC) / \u03C3. Rescaling features to mean 0 and standard deviation 1 prevents features with large numeric scales (e.g. 5,000 RPM) from overpowering features with small scales (e.g. 0.05 mm vibration)."
              }
            },
            {
              id: "sec-3-2-3",
              heading: "Correlation vs. Causation in Physical Systems",
              content: [
                "Correlation measures the linear relationship between two variables from -1 (perfect inverse) to +1 (perfect positive alignment).",
                "Crucial engineering rule: Correlation does not prove causation! Both variables may be driven by an unmeasured underlying physical cause (e.g. higher ambient summer temperature causing both elevated motor heat and increased bearing lubricant breakdown)."
              ],
              codeSnippet: {
                language: "python",
                code: 'import numpy as np\n\nreadings = np.array([42, 45, 41, 50, 47, 44])\nmean_val = readings.mean()\nstd_val = readings.std()\n\n# Standardization formula\nstandardized = (readings - mean_val) / std_val\nprint(f"Mean: {mean_val:.2f}, Std: {std_val:.2f}")\nprint("Normalized Z-scores:", np.round(standardized, 2))',
                caption: "Standardizing raw sensor telemetry with NumPy"
              },
              keyTakeaways: [
                "AI predictions are probability distributions communicating confidence intervals",
                "Standard deviation reveals sensor noise and mechanical instability masked by the mean",
                "Feature standardization is vital for fair gradient descent and model convergence",
                "Never mistake statistical correlation for physical causation"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "module-4",
      moduleNumber: 4,
      title: "Machine Learning & Capstone Project",
      description: "Master supervised learning paradigms: continuous regression and discrete classification. Then build an end-to-end industrial capstone predicting motor temperatures and failure probabilities.",
      badge: "Applied AI",
      progress: 0,
      lessons: [
        {
          id: "lesson-4-1",
          moduleId: "module-4",
          topicNumber: "4.1",
          title: "Supervised vs. Unsupervised Learning",
          subtitle: "The Labeled Data Fork & Unsupervised Clustering",
          durationMinutes: 20,
          summary: "Navigate the fundamental division in machine learning: learning from labeled ground-truth answers versus discovering hidden patterns and anomalous clusters in unlabeled data.",
          learningObjectives: [
            "Distinguish supervised learning (features + ground-truth labels) from unsupervised learning",
            "Understand the real-world operational cost and difficulty of dataset labeling",
            "Categorize supervised tasks into continuous regression and discrete classification",
            "Identify unsupervised engineering applications such as anomaly detection and dimensionality reduction"
          ],
          quizId: "quiz-4-1",
          completed: false,
          sections: [
            {
              id: "sec-4-1-1",
              heading: "The Big Fork: Labeled Answers vs. Self-Discovery",
              content: [
                "Every machine learning model sits on one side of a primary division: does it learn from labeled ground-truth answers, or does it discover hidden structure on its own?",
                "In supervised learning, each training example consists of input features paired with a known label (e.g., [vibration, temperature, rpm] -> 'Bearing Faulty'). The model learns the mapping function f(X) -> y.",
                "In unsupervised learning, the model receives only input features X without any labels. It discovers natural groupings, clusters, or anomalous deviations without human annotation."
              ]
            },
            {
              id: "sec-4-1-2",
              heading: "The Real Cost of Labels & Unsupervised Applications",
              content: [
                "Labeling industrial data is expensive. To label 50,000 ultrasound weld scans, certified non-destructive testing (NDT) inspectors must examine every scan manually.",
                "Unsupervised algorithms like K-Means clustering or Isolation Forests analyze raw unlabeled telemetry to identify anomalous operational regimes that deviate from the normal cluster, alerting maintenance teams to novel failure modes."
              ],
              callout: {
                type: "engineering",
                title: "The Supervised Sub-Divisions",
                text: "Supervised learning splits into Regression (predicting a continuous number like temperature or pressure) and Classification (predicting a discrete category like Pass/Fail or Fault Type)."
              },
              keyTakeaways: [
                "Supervised learning trains on inputs paired with known ground-truth labels",
                "Unsupervised learning discovers hidden structure, clusters, and anomalies in raw unlabeled data",
                "Supervised learning branches into continuous Regression and categorical Classification"
              ]
            }
          ]
        },
        {
          id: "lesson-4-2",
          moduleId: "module-4",
          topicNumber: "4.2",
          title: "Regression: Predicting Continuous Values",
          subtitle: "Line of Best Fit, Mean Squared Error & Multi-Feature Regression",
          durationMinutes: 24,
          summary: "Explore continuous value prediction using linear regression, the line of best fit, error minimization via MSE, and multi-variable sensor inputs.",
          learningObjectives: [
            "Identify regression problems where the target is a continuous numerical value",
            "Understand the best-fitting line equation y = mx + b and learned weights",
            "Calculate Mean Squared Error (MSE) to quantify distance from truth",
            "Expand from single-variable regression to multi-variable sensor feeds"
          ],
          quizId: "quiz-4-2",
          codingLabId: "code-4-2",
          completed: false,
          sections: [
            {
              id: "sec-4-2-1",
              heading: "What Makes a Problem a Regression Task?",
              content: [
                "The test is simple: can the target answer be any numerical value along a continuous range, including values in between? Predicting how many kilowatts a wind turbine generates, the operating temperature of a hydraulic pump, or braking stopping distance are all regression tasks.",
                "Unlike classification where answers are discrete bins, regression outputs numbers. A prediction of 76.4\xB0C against an actual value of 75.8\xB0C is not wrong \u2014 it is off by an error of 0.6\xB0C."
              ]
            },
            {
              id: "sec-4-2-2",
              heading: "The Line of Best Fit & Error Minimization",
              content: [
                "In 2D, linear regression finds the straight line y = W*X + b that minimizes the average squared distance (Mean Squared Error) between the line and the actual data points.",
                "With multiple features (e.g. runtime hours, load percentage, vibration amplitude), the line becomes a multi-dimensional hyperplane: y = w1*x1 + w2*x2 + w3*x3 + b."
              ],
              codeSnippet: {
                language: "python",
                code: 'from sklearn.linear_model import LinearRegression\nimport numpy as np\n\n# Features: [runtime_hrs, load_pct, vibration]\nX = np.array([[100, 45, 1.2], [300, 70, 3.4], [600, 85, 5.8]])\ny_temp = np.array([55.0, 68.2, 76.4])\n\nmodel = LinearRegression()\nmodel.fit(X, y_temp)\n\n# Predict temperature for a new motor\nnew_motor = np.array([[450, 78, 4.2]])\npred_temp = model.predict(new_motor)\nprint(f"Predicted operating temp: {pred_temp[0]:.2f}\xB0C")',
                caption: "Training a multi-variable linear regression model with Scikit-Learn"
              },
              keyTakeaways: [
                "Regression predicts continuous quantities along an unbroken numerical scale",
                "Models optimize parameters to minimize Mean Squared Error (MSE)",
                "Multi-variable regression combines multiple physical features into one continuous prediction"
              ]
            }
          ]
        },
        {
          id: "lesson-4-3",
          moduleId: "module-4",
          topicNumber: "4.3",
          title: "Classification: Predicting Categories",
          subtitle: "Decision Boundaries, Logistic Regression & Class Imbalance",
          durationMinutes: 24,
          summary: "Master categorical prediction, decision boundary separation, probability thresholds, and critical metrics beyond deceptive raw accuracy.",
          learningObjectives: [
            "Identify classification problems where the target is a discrete, countable category",
            "Distinguish binary classification (pass/fail) from multi-class classification",
            "Understand decision boundaries separating class territories in feature space",
            "Explain why 99% raw accuracy can be disastrously misleading on imbalanced failure datasets"
          ],
          quizId: "quiz-4-3",
          codingLabId: "code-4-3",
          completed: false,
          sections: [
            {
              id: "sec-4-3-1",
              heading: "Predicting Which One, Not How Much",
              content: [
                "Instead of predicting a continuous number, classification predicts which category an observation belongs to. Predicting whether an industrial bearing is 'healthy' or 'worn', whether an automated optical inspection passes or fails, or classifying motor faults into electrical, mechanical, or thermal.",
                "Binary classification has exactly two categories (Yes/No, Defect/Pass). Multi-class classification has three or more mutually exclusive categories."
              ],
              diagram: {
                type: "decision-boundary",
                title: "Decision Boundary in 2D Feature Space",
                description: "A separating line dividing healthy bearing readings from worn bearing readings based on vibration and temperature."
              }
            },
            {
              id: "sec-4-3-2",
              heading: "Probabilities & Decision Boundaries",
              content: [
                "A classification model does not output a label blindly; it calculates a probability score between 0 and 1 using the Sigmoid (Logistic) function. If the probability exceeds a threshold (typically 0.50), it assigns the positive class.",
                "The boundary where the model shifts from one class to another is called the Decision Boundary."
              ],
              codeSnippet: {
                language: "python",
                code: 'from sklearn.linear_model import LogisticRegression\nimport numpy as np\n\nX = np.array([[100, 1.2], [300, 3.4], [600, 5.8], [800, 7.2]])\ny_fail = np.array([0, 0, 1, 1]) # 0 = Normal, 1 = Failed\n\nclf = LogisticRegression()\nclf.fit(X, y_fail)\n\n# Predict probability for new motor\nprobs = clf.predict_proba([[550, 5.2]])\nprint(f"Healthy prob: {probs[0][0]*100:.1f}%, Failure prob: {probs[0][1]*100:.1f}%")',
                caption: "Predicting class probabilities with Logistic Regression"
              }
            },
            {
              id: "sec-4-3-3",
              heading: "The Class Imbalance Trap",
              content: [
                "In industrial manufacturing, 99% of components manufactured are defect-free, and only 1% are defective.",
                "If a naive model simply predicts 'healthy' 100% of the time, its raw accuracy is 99% \u2014 yet it fails at its actual job by missing every single defective part! This is why engineers evaluate Precision, Recall, and Confusion Matrices rather than raw accuracy alone."
              ],
              keyTakeaways: [
                "Classification predicts discrete labels from a countable set",
                "Models compute underlying probabilities and apply decision thresholds",
                "Real-world sensor data has overlapping boundaries; a few misclassifications are expected",
                "Raw accuracy is dangerously misleading on imbalanced anomaly datasets"
              ]
            }
          ]
        },
        {
          id: "lesson-4-4",
          moduleId: "module-4",
          topicNumber: "4.4",
          title: "Predict-Outcome Capstone Project",
          subtitle: "Dual-Model Industrial Motor Fleet Health Pipeline",
          durationMinutes: 30,
          summary: "Synthesize the entire course curriculum: use three physical sensor features to train both a continuous regression model (operating temperature) and a categorical classification model (30-day failure probability), followed by domain sanity checks.",
          learningObjectives: [
            "Construct an end-to-end supervised machine learning pipeline from raw telemetry",
            "Simultaneously train a Linear Regression model and a Logistic Regression model on shared features",
            "Synthesize continuous temperature forecasts with discrete failure probabilities",
            "Conduct physical domain sanity checks before acting on algorithmic predictions"
          ],
          quizId: "quiz-4-4",
          codingLabId: "code-4-4",
          completed: false,
          sections: [
            {
              id: "sec-4-4-1",
              heading: "The Industrial Scenario & Dataset Anatomy",
              content: [
                "You are working with a fleet of industrial motors fitted with continuous telemetry sensors. For every motor, you have three features: runtime_hrs (hours since last service), load_pct (average workload percentage), and vibration (RMS vibration amplitude in mm/s).",
                "From historical records, you have two target ground-truth columns: temperature (continuous \xB0C) and failed_within_30d ('Yes' or 'No').",
                "One shared feature matrix X feeds two independent models: a regression model to forecast operating temperature, and a classification model to assess catastrophic failure risk."
              ],
              diagram: {
                type: "capstone-pipeline",
                title: "Dual-Model Supervised Pipeline",
                description: "Three Features [runtime, load, vibration] split into Linear Regression (Temperature) and Logistic Regression (Failure Probability)."
              }
            },
            {
              id: "sec-4-4-2",
              heading: "Building & Executing Both Models",
              content: [
                "Step 1: Inspect and partition your dataset.",
                "Step 2: Train LinearRegression() to model heat generation as a function of mechanical load, friction, and age.",
                "Step 3: Train LogisticRegression() to estimate the probability of structural or winding failure within 30 days."
              ],
              codeSnippet: {
                language: "python",
                code: 'from sklearn.linear_model import LinearRegression, LogisticRegression\nimport pandas as pd\n\n# 1. Feature matrix and dual targets\nX = df[["runtime_hrs", "load_pct", "vibration"]]\ny_temp = df["temperature"]\ny_fail = df["failed_within_30d"]\n\n# 2. Train regression model\ntemp_model = LinearRegression().fit(X, y_temp)\n\n# 3. Train classification model\nfail_model = LogisticRegression().fit(X, y_fail)\n\n# 4. Evaluate new motor in the field\nnew_motor = [[600, 89, 6.0]]\npred_temp = temp_model.predict(new_motor)[0]\npred_prob = fail_model.predict_proba(new_motor)[0][1]\n\nprint(f"Forecast Temperature: {pred_temp:.1f}\xB0C")\nprint(f"30-Day Failure Probability: {pred_prob*100:.1f}%")',
                caption: "Complete Python capstone execution pipeline"
              }
            },
            {
              id: "sec-4-4-3",
              heading: "Step 5: Physical Domain Sanity-Checking",
              content: [
                "Before dispatching maintenance crews or shutting down an assembly line, hold the model outputs against physical engineering principles.",
                "Does a predicted 76.4\xB0C match the baseline physics where heavy load (89%) and elevated runtime (600 hrs) generate increased thermal dissipation? Does an 89% failure probability align with the mechanical reality that 6.0 mm/s vibration indicates severe rotor unbalance or bearing spalling?",
                "If an algorithmic prediction contradicts physical laws, audit the training data for sensor drift, bad calibrations, or shortcut artifacts before trusting the output."
              ],
              keyTakeaways: [
                "A single feature matrix can feed multiple diverse prediction objectives",
                "Combining continuous regression with probabilistic classification provides holistic equipment health diagnostics",
                "Always sanity-check AI outputs against fundamental physical and mechanical principles",
                "Congratulations on completing the AI Mech Lab Beginner AI Curriculum!"
              ]
            }
          ]
        }
      ]
    }
  ]
};
