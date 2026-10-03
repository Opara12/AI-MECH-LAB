import { TutorMessage, TutorContext } from '../types/tutor';

export const generateTutorResponse = async (
  prompt: string,
  context: TutorContext,
  apiKey?: string,
  apiProvider?: string
): Promise<TutorMessage> => {
  // If an external API key is provided, a real HTTP request could be made here
  // For frontend standalone/mock mode, we return pedagogically authentic, context-aware responses
  await new Promise((resolve) => setTimeout(resolve, 600)); // Realistic thinking latency

  const normalizedPrompt = prompt.toLowerCase().trim();
  const title = context.lessonTitle || 'AI Fundamentals';
  const lessonId = context.lessonId || '';

  let responseText = '';
  let followUps: string[] = [
    'Can you give me an engineering example?',
    'Quiz me on this concept.',
    'How do I implement this in Python?'
  ];
  let codeBlock: { language: string; code: string } | undefined = undefined;

  // Check preset triggers
  if (normalizedPrompt.includes('simple terms') || normalizedPrompt.includes('like i\'m 14') || normalizedPrompt.includes('explain simply')) {
    if (lessonId.includes('1-1')) {
      responseText = `Imagine a set of Russian nesting dolls:\\n\\n1. **AI (The Big Doll)** is any computer doing smart things — even an old 1990s chess game programmed with strict rules.\\n2. **Machine Learning (The Middle Doll)** is when you stop writing rules and instead show the computer 10,000 examples so it spots the pattern itself.\\n3. **Deep Learning (The Smallest Doll)** is machine learning done with giant layers of digital brain cells (neural networks), great for photos and voice.\\n\\nEvery Deep Learning system is ML. Every ML system is AI. But not all AI learns!`;
      followUps = ['Why does explainability matter in engineering?', 'What is a defect detection camera?', 'Quiz me on this topic.'];
    } else if (lessonId.includes('1-2')) {
      responseText = `Think about your car:\\n- **Reactive maintenance:** You drive until the tire explodes on the highway. (Dangerous and expensive!)\\n- **Scheduled maintenance:** You replace tires every 6 months even if they look brand new. (Wastes money!)\\n- **Predictive maintenance (AI):** Sensors listen to the tire vibration and warn you: *"The left rear tire has 2 weeks of tread left before failure."*\\n\\nAI analyzes live sensor data to fix machines at the perfect moment.`;
      followUps = ['How does Airbus use generative design?', 'Tell me about BMW factory computer vision.', 'Quiz me on this topic.'];
    } else if (lessonId.includes('1-3')) {
      responseText = `AI doesn't have common sense — it's like a student who memorizes test answers without understanding the subject.\\n\\nIf you train a model to recognize wolves, but all your wolf photos were taken in the snow, the AI might conclude **"White background = Wolf"**! When you show it a dog on snow, it fails.\\n\\nIn engineering, if our training data is skewed or has bad sensors, the AI will repeat that mistake with high confidence.`;
      followUps = ['What is the Amazon resume scandal?', 'How does the EU AI Act regulate this?', 'Quiz me on this topic.'];
    } else if (lessonId.includes('2-2')) {
      responseText = `Python lists are like loose papers in a messy binder — each number is stored wherever there's empty space in memory.\\n\\n**NumPy arrays** are like an egg carton: every number is packed side-by-side in computer memory. Because they sit together, the computer can do math on all 100,000 numbers in one giant gulp (vectorization) instead of counting them one by one!`;
      followUps = ['Show me how to convert Celsius to Fahrenheit.', 'What does array.shape mean?', 'Quiz me on NumPy.'];
    } else if (lessonId.includes('3-1')) {
      responseText = `A **vector** is just a list of numbers that describes a physical state in the real world. For example, for a robotic arm: [Joint Angle, Speed, Motor Current].\\n\\nA **matrix** is just a stack of those vectors, like a spreadsheet table where every row is a moment in time and every column is a different sensor channel.`;
      followUps = ['What is a dot product in simple terms?', 'Why do matrix dimensions have to match?', 'Quiz me on linear algebra.'];
    } else if (lessonId.includes('4-2')) {
      responseText = `**Regression** is when you ask the computer: *"How much?"* or *"What number?"*\\n\\nFor example:\\n- "What will the motor temperature be at 85% load?" -> **76.4°C**\\n- "How many miles of battery life are left?" -> **42.8 miles**\\n\\nBecause the answer can be any number along a smooth slider, you are doing regression. The model simply draws the best-fitting line through your past data points.`;
      followUps = ['How does it differ from classification?', 'What is Mean Squared Error?', 'Show me code for LinearRegression.'];
    } else if (lessonId.includes('4-3')) {
      responseText = `**Classification** is when you ask the computer: *"Which bucket does this belong to?"*\\n\\nInstead of a continuous number, you want a discrete label:\\n- Is this welded joint **PASS** or **FAIL**?\\n- Is this bearing **HEALTHY** or **WORN**?\\n\\nThe model calculates a probability (e.g. 92% worn) and draws a decision boundary separating good parts from bad parts.`;
      followUps = ['Why is 99% accuracy sometimes deceptive?', 'What is logistic regression?', 'Quiz me on classification.'];
    } else if (lessonId.includes('4-4')) {
      responseText = `In this Capstone, you take one set of sensor readings — **[Hours Run, Workload %, Vibration]** — and answer TWO questions at once:\\n\\n1. **Regression:** What temperature is the motor running at? (e.g. 76.4°C)\\n2. **Classification:** Will it break down within 30 days? (e.g. 89% risk)\\n\\nThen, you use your human engineering brain to sanity check: does an 89% risk make physical sense given the high vibration?`;
      followUps = ['Show me the Scikit-Learn code.', 'Why do domain sanity checks matter?', 'Give me a hardware challenge.'];
    } else {
      responseText = `In simple terms for **${title}**:\\n\\nWe focus on moving from abstract theory to physical engineering reality. Instead of treating AI as a magical black box, we look at the exact mathematics and sensor signals that allow machines to detect wear, optimize shapes, and make reliable decisions.`;
    }
  } else if (normalizedPrompt.includes('example') || normalizedPrompt.includes('practical')) {
    if (lessonId.includes('1-2') || lessonId.includes('1-1')) {
      responseText = `Here is a real engineering case study from **Rolls-Royce Trent 1000 aircraft engines**:\\n\\nEach engine streams gigabytes of vibration, blade pressure, and fuel flow telemetry via satellite to the operations center mid-flight. When the predictive maintenance model detects high-frequency bearing harmonics indicating micro-spalling, maintenance technicians and replacement parts are dispatched to the gate before the plane has even landed.\\n\\nThis saves airlines millions of dollars compared to an unexpected engine failure causing stranded passengers.`;
      followUps = ['What sensors are used for vibration?', 'How does Siemens use Senseye?', 'Quiz me on predictive maintenance.'];
    } else if (lessonId.includes('4-4') || lessonId.includes('4-2')) {
      responseText = `Here is the practical Python code for the **Industrial Motor Temperature Predictor**:\\n\\nWe train a LinearRegression model on historical sensor telemetry:`;
      codeBlock = {
        language: 'python',
        code: `from sklearn.linear_model import LinearRegression\\nimport numpy as np\\n\\n# Features: [runtime_hrs, load_pct, vibration]\\nX = np.array([[200, 50, 1.5], [400, 70, 3.2], [600, 85, 5.8]])\\ny_temp = np.array([58.0, 67.5, 76.2])\\n\\nmodel = LinearRegression().fit(X, y_temp)\\n\\n# Predict for an active factory motor\\nnew_reading = np.array([[550, 80, 4.9]])\\npred_c = model.predict(new_reading)[0]\\nprint(f"Predicted Spindle Temp: {pred_c:.1f}°C")`
      };
      followUps = ['How do we evaluate the prediction error?', 'What happens if vibration spikes to 10 mm/s?', 'Can we add failure probability?'];
    } else {
      responseText = `Here is a concrete example from **${title}**:\\n\\nIn industrial manufacturing, when monitoring electric motors, we collect tri-axial vibration (mm/s) and stator temperature (°C). By standardizing these features using NumPy: \`z = (x - mean) / std\`, we ensure that temperature (0-100°C) does not mathematically dwarf vibration readings (0-10 mm/s) during gradient optimization.`;
      followUps = ['Show me the code for this.', 'Explain why standardization works.', 'Quiz me on this topic.'];
    }
  } else if (normalizedPrompt.includes('quiz me') || normalizedPrompt.includes('test me')) {
    responseText = `Here is a quick check for **${title}**:\\n\\n**Question:** A defect-detection model achieves 99.2% accuracy on its test set. However, 99% of all parts produced by the factory are defect-free, and the model simply predicts "NORMAL" for every single item.\\n\\n**Why is this model considered a failure in an engineering context?**\\n\\nThink about what happens to the 1% of defective parts that slip through to customers, and reply with your reasoning!`;
    followUps = ['Show me the answer and explanation.', 'Explain the class imbalance trap.', 'Give me another question.'];
  } else if (normalizedPrompt.includes('why is this important') || normalizedPrompt.includes('why does this matter')) {
    responseText = `Understanding **${title}** is crucial because in robotics and mechatronics, AI decisions interact with physical hardware. A false alarm might unnecessarily halt a multi-million-dollar automotive assembly line; a missed bearing defect might cause a catastrophic spindle seizure. By mastering both the statistical models and the physical sensor telemetry, you build systems that are safe, reliable, and explainable.`;
    followUps = ['What are the safety standards for this?', 'How do I start building a project?', 'Quiz me on this concept.'];
  } else if (normalizedPrompt.includes('project')) {
    responseText = `Here is a practical project you can build today in **AI Mech Lab**:\\n\\n**The Smart Motor Telemetry Hub**\\n- **Hardware:** ESP32 microcontroller + MPU-6050 accelerometer + DS18B20 temperature probe mounted to a DC test motor.\\n- **Firmware:** Read vibration acceleration at 200 Hz and stream rolling RMS vibration and temperature over Wi-Fi.\\n- **AI Model:** Run the dual Scikit-Learn pipeline from Topic 4.4 on your computer to forecast operating temperature and trigger red alert LED flags when failure probability exceeds 80%.`;
    followUps = ['Where can I get the verified hardware kit?', 'Show me the ESP32 connection pinout.', 'Take me to the Project Lab.'];
  } else {
    responseText = `You're currently exploring **${title}** in the AI Mech Lab curriculum.\\n\\nIn this module, we bridge fundamental computer science with real mechatronics. Whether you're debugging NumPy array shapes, evaluating class imbalance in defect detection, or preparing for the industrial capstone, let me know what you'd like to explore next!`;
    followUps = [
      'Explain this in simple terms.',
      'Give me a practical engineering example.',
      'Quiz me on this topic.',
      'Give me a coding exercise.'
    ];
  }

  return {
    id: 'tutor_' + Date.now(),
    sender: 'tutor',
    text: responseText,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    suggestedFollowUps: followUps,
    codeBlock
  };
};
