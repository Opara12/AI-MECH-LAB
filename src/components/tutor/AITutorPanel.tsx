import React, { useState, useRef, useEffect } from 'react';
import { useLearning } from '../../context/LearningContext';
import { generateTutorResponse } from '../../services/aiTutorService';
import { TutorMessage } from '../../types/tutor';
import {
  Sparkles,
  Send,
  RotateCcw,
  Bot,
  User,
  ChevronRight,
  Code,
  Terminal,
  HelpCircle,
  Lightbulb,
  BookOpen
} from 'lucide-react';

interface AITutorPanelProps {
  embedded?: boolean;
}

export const AITutorPanel: React.FC<AITutorPanelProps> = ({ embedded = false }) => {
  const { activeLesson, activeModule, userProfile } = useLearning();
  const [messages, setMessages] = useState<TutorMessage[]>([
    {
      id: 'init-1',
      sender: 'tutor',
      text: `Hello ${userProfile.name}! I am your **AI Mech Lab Tutor**. I'm actively monitoring your progress in **${activeLesson.topicNumber} ${activeLesson.title}**.\\n\\nAsk me to simplify a formula, generate Python sensor code, or test your comprehension with an engineering challenge!`,
      timestamp: 'Now',
      suggestedFollowUps: [
        'Explain this in simple terms.',
        'Give me an example.',
        'Quiz me on this topic.',
        'Why is this important?'
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Update greeting when lesson changes
  useEffect(() => {
    setMessages((prev) => [
      ...prev,
      {
        id: 'ctx-' + Date.now(),
        sender: 'tutor',
        text: `Switched context to **${activeLesson.topicNumber}: ${activeLesson.title}**. What would you like to explore here?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedFollowUps: [
          'Explain this in simple terms.',
          'Give me an example.',
          'Quiz me on this topic.',
          'Give me a practical project.'
        ]
      }
    ]);
  }, [activeLesson.id]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: TutorMessage = {
      id: 'user_' + Date.now(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const tutorReply = await generateTutorResponse(
        text,
        {
          lessonId: activeLesson.id,
          lessonTitle: `${activeLesson.topicNumber} ${activeLesson.title}`,
          moduleTitle: activeModule.title
        },
        userProfile.apiKeySet ? 'custom_key' : undefined,
        userProfile.apiKeyProvider
      );
      setMessages((prev) => [...prev, tutorReply]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        {
          id: 'err_' + Date.now(),
          sender: 'tutor',
          text: 'Encountered a momentary connection pause. Please try again!',
          timestamp: 'Just now'
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const presetPrompts = [
    'Explain this in simple terms.',
    'Give me an example.',
    "Explain this like I'm 14.",
    'Quiz me on this topic.',
    'Why is this important?',
    'Give me a practical project.'
  ];

  return (
    <div
      className={`flex flex-col rounded-2xl border border-slate-800 bg-slate-950/90 shadow-2xl backdrop-blur-xl ${
        embedded ? 'h-[calc(100vh-140px)] min-h-[580px]' : 'h-[calc(100vh-180px)] min-h-[640px]'
      }`}
    >
      {/* Tutor Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/70 p-3.5 px-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-600 to-emerald-500 shadow-md shadow-cyan-500/20">
            <Bot className="h-4 w-4 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-semibold text-xs text-white">AI Mech Tutor</h4>
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            </div>
            <p className="text-[10px] text-cyan-400 font-mono truncate max-w-[190px]">
              Topic {activeLesson.topicNumber} Active Context
            </p>
          </div>
        </div>

        <button
          onClick={() =>
            setMessages([
              {
                id: 'reset',
                sender: 'tutor',
                text: `Chat cleared. Ready for your questions on **${activeLesson.title}**!`,
                timestamp: 'Now',
                suggestedFollowUps: ['Explain this in simple terms.', 'Give me an example.']
              }
            ])
          }
          className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          title="Reset Conversation"
        >
          <RotateCcw className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Preset Prompts Quick Bar */}
      <div className="border-b border-slate-800/60 bg-slate-900/30 px-3 py-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 w-max">
          {presetPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              disabled={isTyping}
              className="rounded-full border border-cyan-800/40 bg-cyan-950/40 px-2.5 py-1 text-[11px] font-mono text-cyan-300 hover:bg-cyan-900/50 hover:border-cyan-500 transition-colors shrink-0 disabled:opacity-50"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Messages Thread */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'tutor' && (
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-950 border border-cyan-700/50 text-cyan-300">
                <Bot className="h-3.5 w-3.5" />
              </div>
            )}

            <div
              className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-cyan-600 text-white rounded-tr-sm font-medium'
                  : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-sm'
              }`}
            >
              {/* Message text with bold / bullet parsing */}
              <div className="space-y-1.5">
                {msg.text.split('\\n').map((paragraph, pIdx) => {
                  if (!paragraph.trim()) return <div key={pIdx} className="h-1" />;
                  return (
                    <p key={pIdx}>
                      {paragraph.split('**').map((chunk, cIdx) =>
                        cIdx % 2 === 1 ? (
                          <strong key={cIdx} className="font-semibold text-white">
                            {chunk}
                          </strong>
                        ) : (
                          chunk
                        )
                      )}
                    </p>
                  );
                })}
              </div>

              {/* Code Snippet in Tutor Response */}
              {msg.codeBlock && (
                <div className="mt-3 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 p-3 font-mono text-[11px] text-cyan-300">
                  <div className="text-[10px] uppercase text-slate-500 pb-1 border-b border-slate-800/80 mb-2">
                    {msg.codeBlock.language} Snippet
                  </div>
                  <pre className="overflow-x-auto whitespace-pre">
                    {msg.codeBlock.code.replace(/\\n/g, '\n')}
                  </pre>
                </div>
              )}

              {/* Follow-up suggestions */}
              {msg.suggestedFollowUps && msg.suggestedFollowUps.length > 0 && (
                <div className="mt-3 pt-2.5 border-t border-slate-800/80 space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono block">SUGGESTED NEXT STEPS:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {msg.suggestedFollowUps.map((fu, fIdx) => (
                      <button
                        key={fIdx}
                        onClick={() => handleSendMessage(fu)}
                        className="rounded-lg bg-slate-800/80 hover:bg-slate-700 px-2 py-0.5 text-[10px] text-cyan-300 transition-colors text-left"
                      >
                        → {fu}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <span className="mt-1 block text-right text-[9px] text-slate-500 font-mono">
                {msg.timestamp}
              </span>
            </div>

            {msg.sender === 'user' && (
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
                <User className="h-3.5 w-3.5" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 items-center text-slate-400">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-950 border border-cyan-700/50 text-cyan-300">
              <Bot className="h-3.5 w-3.5 animate-spin" />
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-2.5 text-xs text-slate-400 flex items-center gap-1.5 font-mono">
              <span className="animate-pulse">Analyzing engineering context</span>
              <span className="flex gap-1">
                <span className="h-1 w-1 rounded-full bg-cyan-400 animate-bounce"></span>
                <span className="h-1 w-1 rounded-full bg-cyan-400 animate-bounce delay-100"></span>
                <span className="h-1 w-1 rounded-full bg-cyan-400 animate-bounce delay-200"></span>
              </span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(inputValue);
        }}
        className="border-t border-slate-800 bg-slate-900/60 p-3"
      >
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`Ask about ${activeLesson.title}...`}
            className="flex-1 rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 font-mono transition-all"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-600 to-emerald-500 text-white shadow-md hover:from-cyan-500 hover:to-emerald-400 disabled:opacity-40 transition-all shrink-0"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
};
