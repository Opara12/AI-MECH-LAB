export interface TestCase {
  name: string;
  inputDescription?: string;
  expectedOutput: string;
}

export interface CodingChallenge {
  id: string;
  lessonId: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedMinutes: number;
  instructions: string[];
  starterCode: string;
  solutionCode: string;
  expectedOutput: string;
  hints: string[];
  testCases: TestCase[];
}

export interface CodeExecutionResult {
  stdout: string;
  stderr: string;
  success: boolean;
  passed: boolean;
  executionTimeMs: number;
}
