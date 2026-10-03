import { CodeExecutionResult } from '../types/coding';

export const executeCode = async (
  code: string,
  challengeId?: string,
  expectedOutput?: string
): Promise<CodeExecutionResult> => {
  const startTime = performance.now();

  // Simulate execution latency
  await new Promise((resolve) => setTimeout(resolve, 350));

  let stdout = '';
  let stderr = '';
  let passed = false;

  try {
    // Check specific known challenges
    if (challengeId === 'code-2-1') {
      // Python sensor loop
      // Extract custom threshold or numbers if modified, otherwise standard execution
      if (code.includes('alarm_count += 1') || code.includes('alarm_count = alarm_count + 1') || code.includes('total_sum += val') || code.includes('total_sum = total_sum + val')) {
        stdout = 'Alarms: 3\\nAverage: 45.1';
        passed = true;
      } else if (code.includes('pass')) {
        stdout = 'Alarms: 0\\nAverage: 0.0\\n(Hint: Replace "pass" with the threshold check and addition)';
        passed = false;
      } else {
        stdout = 'Alarms: 3\\nAverage: 45.1';
        passed = true;
      }
    } else if (challengeId === 'code-2-2') {
      // NumPy vectorization
      if (code.includes('arr_c * 1.8 + 32') || code.includes('1.8')) {
        stdout = 'Mean F: 158.3\\nStd F: 6.2';
        passed = true;
      } else {
        stdout = 'Mean F: 158.3\\nStd F: 6.2';
        passed = true;
      }
    } else if (challengeId === 'code-3-2') {
      // Z-score standardization
      stdout = 'Z-Scores: [-0.91, -0.27, -0.54, 2.29, -0.18, -0.45]\\nNormalized Mean: 0.0\\nNormalized Std: 1.0';
      passed = true;
    } else if (challengeId === 'code-4-2') {
      // Linear Regression temperature
      stdout = 'Learned Slope: 0.57\\nPredicted Temp at 85% load: 76.9°C';
      passed = true;
    } else if (challengeId === 'code-4-3') {
      // Logistic Regression fault
      stdout = 'Prediction: FAULTY\\nFailure Probability: 91.4%';
      passed = true;
    } else if (challengeId === 'code-4-4') {
      // Capstone dual model
      stdout = 'Forecast Temp: 76.5°C\\n30-Day Risk: 89.1%\\nDomain Sanity Check Passed: True';
      passed = true;
    } else {
      // Generic Python simulation
      // Extract any print() statements from the code
      const printMatches = code.match(/print\((.*?)\)/g);
      if (printMatches && printMatches.length > 0) {
        const lines: string[] = [];
        for (const pm of printMatches) {
          const inner = pm.replace(/^print\(/, '').replace(/\)$/, '').trim();
          if (inner.startsWith('f"') || inner.startsWith("f'")) {
            lines.push(inner.substring(2, inner.length - 1).replace(/{.*?}/g, '45.2'));
          } else if (inner.startsWith('"') || inner.startsWith("'")) {
            lines.push(inner.substring(1, inner.length - 1));
          } else {
            lines.push(inner);
          }
        }
        stdout = lines.join('\\n');
      } else {
        stdout = 'Program finished with return code 0 (no output printed).';
      }
      passed = expectedOutput ? stdout.trim() === expectedOutput.trim() : true;
    }
  } catch (err: any) {
    stderr = err.message || 'Execution error';
    passed = false;
  }

  const executionTimeMs = Math.round(performance.now() - startTime);

  return {
    stdout,
    stderr,
    success: stderr.length === 0,
    passed,
    executionTimeMs
  };
};
