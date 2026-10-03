import React, { useState } from 'react';
import { Quiz, QuizQuestion } from '../../types/quiz';
import { useLearning } from '../../context/LearningContext';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Award,
  Sparkles,
  X,
  Lightbulb
} from 'lucide-react';
import { ProgressBar } from '../common/ProgressBar';

interface QuizModalProps {
  quiz: Quiz;
  onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ quiz, onClose }) => {
  const { recordQuizScore, showToast } = useLearning();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQ: QuizQuestion = quiz.questions[currentIdx];
  const totalQuestions = quiz.questions.length;
  const isSelected = selectedAnswers[currentIdx] !== undefined;

  const handleSelectOption = (optIdx: number) => {
    if (showExplanation) return; // Prevent changing after revealing
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIdx]: optIdx
    }));
  };

  const handleCheckAnswer = () => {
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx((prev) => prev + 1);
      setShowExplanation(false);
    } else {
      // Finish Quiz
      let correctCount = 0;
      quiz.questions.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.correctAnswerIndex) {
          correctCount++;
        }
      });
      const finalScore = Math.round((correctCount / totalQuestions) * 100);
      recordQuizScore(quiz.id, finalScore);
      setIsSubmitted(true);
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setIsSubmitted(false);
    setShowExplanation(false);
  };

  // Score calculation
  let correctCount = 0;
  quiz.questions.forEach((q, idx) => {
    if (selectedAnswers[idx] === q.correctAnswerIndex) {
      correctCount++;
    }
  });
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);
  const isPassed = scorePercent >= quiz.passingScore;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800/80 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-cyan-950 px-2 py-0.5 font-mono text-[10px] font-bold text-cyan-400 border border-cyan-800/40">
                TOPIC ASSESSMENT
              </span>
              <h3 className="font-semibold text-base sm:text-lg text-white">{quiz.title}</h3>
            </div>
            <p className="mt-1 text-xs text-slate-400">{quiz.description}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-900 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {!isSubmitted ? (
          /* Question Mode */
          <div className="mt-6 space-y-6">
            {/* Progress Bar & Question Counter */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>
                  Question <strong className="text-cyan-400">{currentIdx + 1}</strong> of {totalQuestions}
                </span>
                <span>{Math.round(((currentIdx + 1) / totalQuestions) * 100)}%</span>
              </div>
              <ProgressBar progress={((currentIdx + 1) / totalQuestions) * 100} showPercentage={false} size="sm" />
            </div>

            {/* Question Text */}
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4">
              <h4 className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed">
                {currentQ.question}
              </h4>
            </div>

            {/* Options List */}
            <div className="space-y-2.5">
              {currentQ.options.map((option, optIdx) => {
                const isChosen = selectedAnswers[currentIdx] === optIdx;
                const isCorrect = currentQ.correctAnswerIndex === optIdx;

                let btnStyle = 'border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-850 hover:border-slate-700';

                if (showExplanation) {
                  if (isCorrect) {
                    btnStyle = 'border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold ring-1 ring-emerald-500/50';
                  } else if (isChosen && !isCorrect) {
                    btnStyle = 'border-rose-500 bg-rose-950/40 text-rose-200';
                  }
                } else if (isChosen) {
                  btnStyle = 'border-cyan-500 bg-cyan-950/40 text-cyan-200 font-semibold ring-1 ring-cyan-500/50';
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`flex w-full items-center justify-between rounded-xl border p-3.5 text-left text-xs sm:text-sm transition-all ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 font-mono text-xs font-bold text-slate-300">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{option}</span>
                    </div>
                    {showExplanation && (
                      <div>
                        {isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-400" />}
                        {isChosen && !isCorrect && <XCircle className="h-5 w-5 text-rose-400" />}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation Callout (Revealed) */}
            {showExplanation && (
              <div className="rounded-2xl border border-cyan-800/50 bg-cyan-950/20 p-4 text-xs animate-in fade-in duration-200">
                <div className="flex items-center gap-2 font-mono font-bold text-cyan-400">
                  <Lightbulb className="h-4 w-4" />
                  <span>Technical Explanation:</span>
                </div>
                <p className="mt-1.5 text-slate-300 leading-relaxed">{currentQ.explanation}</p>
              </div>
            )}

            {/* Navigation / Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-[11px] font-mono text-slate-500">
                Passing Grade: {quiz.passingScore}%
              </span>

              <div className="flex items-center gap-3">
                {!showExplanation ? (
                  <button
                    onClick={handleCheckAnswer}
                    disabled={!isSelected}
                    className="flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg hover:bg-cyan-500 disabled:opacity-40 transition-all font-mono"
                  >
                    <span>Check Answer</span>
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-500 px-5 py-2.5 text-xs font-semibold text-white shadow-lg hover:from-cyan-500 hover:to-emerald-400 transition-all font-mono"
                  >
                    <span>{currentIdx < totalQuestions - 1 ? 'Next Question' : 'View Results'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Results View */
          <div className="mt-6 space-y-6 text-center py-4">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-cyan-600 to-emerald-500 shadow-xl shadow-cyan-500/20 ring-4 ring-cyan-500/20">
              <Award className="h-10 w-10 text-white" />
            </div>

            <div>
              <span className="rounded-full bg-slate-900 border border-slate-800 px-3 py-1 font-mono text-xs text-slate-400">
                ASSESSMENT COMPLETE
              </span>
              <h3 className="mt-3 text-2xl font-bold text-white font-mono">
                Your Score: {correctCount} / {totalQuestions} ({scorePercent}%)
              </h3>
              <p className="mt-2 text-xs text-slate-400 max-w-md mx-auto">
                {isPassed
                  ? '🎉 Outstanding! You demonstrated clear technical mastery of these concepts.'
                  : 'Review the questions below and retake the quiz to solidify the technical nuances.'}
              </p>
            </div>

            {/* Breakdown */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 text-left max-h-60 overflow-y-auto space-y-3">
              <h5 className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Question Review
              </h5>
              {quiz.questions.map((q, idx) => {
                const wasCorrect = selectedAnswers[idx] === q.correctAnswerIndex;
                return (
                  <div
                    key={q.id}
                    className={`rounded-xl border p-3 text-xs ${
                      wasCorrect
                        ? 'border-emerald-800/40 bg-emerald-950/20 text-emerald-200'
                        : 'border-rose-800/40 bg-rose-950/20 text-rose-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-medium text-slate-200">{q.question}</span>
                      {wasCorrect ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 ml-2" />
                      ) : (
                        <XCircle className="h-4 w-4 text-rose-400 shrink-0 ml-2" />
                      )}
                    </div>
                    {!wasCorrect && (
                      <p className="mt-1 text-[11px] text-slate-400">
                        <strong className="text-emerald-400">Correct Answer:</strong>{' '}
                        {q.options[q.correctAnswerIndex]}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Final Action Buttons */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={handleRetake}
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition-colors font-mono"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Retake Quiz</span>
              </button>
              <button
                onClick={onClose}
                className="flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-2.5 text-xs font-semibold text-white shadow-lg hover:bg-cyan-500 transition-colors font-mono"
              >
                <span>Back to Lesson</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
