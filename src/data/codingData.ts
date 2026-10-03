import { CodingChallenge } from '../types/coding';

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
    expectedOutput: `Alarms: 3\nAverage: 45.1`,
    hints: [
      'Inside the loop, add `val` to `total_sum` using `total_sum += val`.',
      'Use `if val > threshold:` to increment `alarm_count`.',
      'Divide `total_sum` by `len(readings)` to get the average.'
    ],
    testCases: [
      {
        name: 'Alarm Count & Average Verification',
        expectedOutput: 'Alarms: 3\nAverage: 45.1'
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
    expectedOutput: `Mean F: 158.3\nStd F: 6.2`,
    hints: [
      'NumPy allows direct arithmetic: `arr_f = arr_c * 1.8 + 32`',
      'Use `.mean()` and `.std()` methods on the NumPy array.'
    ],
    testCases: [
      {
        name: 'Vectorized Mean & Std Check',
        expectedOutput: 'Mean F: 158.3\nStd F: 6.2'
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
    expectedOutput: `Z-Scores: [-0.91, -0.27, -0.54, 2.29, -0.18, -0.45]\nNormalized Mean: 0.0\nNormalized Std: 1.0`,
    hints: [
      'Standardization formula is `(array - array.mean()) / array.std()`',
      'A standardized distribution always has mean 0 and standard deviation 1.'
    ],
    testCases: [
      {
        name: 'Z-score normalization validation',
        expectedOutput: 'Normalized Mean: 0.0\nNormalized Std: 1.0'
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
    expectedOutput: `Learned Slope: 0.57\nPredicted Temp at 85% load: 76.9°C`,
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
    expectedOutput: `Prediction: FAULTY\nFailure Probability: 91.4%`,
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
    expectedOutput: `Forecast Temp: 76.5°C\n30-Day Risk: 89.1%\nDomain Sanity Check Passed: True`,
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
