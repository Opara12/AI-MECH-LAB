import { Project } from '../types/project';

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
        codeSnippet: 'import pandas as pd\ndf = pd.read_csv("motor_telemetry.csv")\nX = df[["runtime_hrs", "load_pct", "vibration"]]',
        expectedOutcome: 'Clean feature matrix X of shape (N, 3) ready for modeling.'
      },
      {
        stepNumber: 2,
        title: 'Train Continuous Regression Model',
        description: 'Fit LinearRegression() to estimate steady-state motor operating temperature based on workload and mechanical friction.',
        codeSnippet: 'from sklearn.linear_model import LinearRegression\ntemp_model = LinearRegression().fit(X, df["temperature"])',
        expectedOutcome: 'Trained model with R^2 > 0.92 estimating operating temperatures within +/- 1.2°C.'
      },
      {
        stepNumber: 3,
        title: 'Train Probabilistic Failure Classifier',
        description: 'Train LogisticRegression() to output the calibrated probability of catastrophic bearing or stator breakdown within 30 days.',
        codeSnippet: 'from sklearn.linear_model import LogisticRegression\nfail_model = LogisticRegression().fit(X, df["failed_within_30d"])',
        expectedOutcome: 'Classifier outputting risk probability between 0.0% and 100%.'
      },
      {
        stepNumber: 4,
        title: 'Deploy Operator Decision Interface & Sanity Checks',
        description: 'Combine both predictions into a unified health score and validate against physical laws (e.g. verifying that high vibration correlates with elevated friction).',
        codeSnippet: 'pred_temp = temp_model.predict(new_motor)\npred_prob = fail_model.predict_proba(new_motor)[:, 1]',
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
