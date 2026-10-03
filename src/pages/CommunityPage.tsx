import React, { useState } from 'react';
import { useLearning } from '../context/LearningContext';
import {
  Users,
  MessageSquare,
  ThumbsUp,
  Share2,
  Tag,
  Search,
  Sparkles,
  Cpu,
  ArrowRight
} from 'lucide-react';

export const CommunityPage: React.FC = () => {
  const { showToast } = useLearning();
  const [searchTerm, setSearchTerm] = useState('');

  const discussions = [
    {
      id: 'd1',
      title: 'Sampling rate for MPU6050 vibration analysis on induction motors?',
      author: 'Marcus Vance',
      role: 'Mechatronics Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&q=80',
      time: '3 hours ago',
      tags: ['Hardware', 'MPU6050', 'Predictive Maintenance'],
      content: 'In Module 4 Topic 4.4 we calculate RMS vibration. What is the recommended minimum sampling frequency for catching ball-bearing defect pass frequencies (BPFO/BPFI)? I found 1000 Hz via I2C FIFO works reliably without dropping samples on the ESP32.',
      upvotes: 24,
      replies: 8
    },
    {
      id: 'd2',
      title: 'Avoiding the class imbalance trap in optical defect vision models',
      author: 'Sarah Lin',
      role: 'Computer Vision Engineer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&q=80',
      time: '1 day ago',
      tags: ['Computer Vision', 'Defect Inspection', 'Class Imbalance'],
      content: 'Following up on Topic 1.3 & 4.3: when only 0.5% of stamped chassis have micro-cracks, standard CrossEntropy loss resulted in the model predicting Normal 100% of the time. We used Focal Loss and oversampling, which brought recall up to 96%!',
      upvotes: 38,
      replies: 12
    },
    {
      id: 'd3',
      title: '3D printed generative bracket results after SIMP optimization',
      author: 'Liam Chen',
      role: 'Aerospace Student',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&q=80',
      time: '2 days ago',
      tags: ['Generative Design', 'FEA', '3D Printing'],
      content: 'Inspired by the Airbus partition wall case study in Module 1 Topic 1.2! Successfully printed the aerospace seatbelt bracket in PETG. Reduced weight by 42% while retaining 2.5x safety factor in mechanical stress tests.',
      upvotes: 56,
      replies: 15
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
            PEER COLLABORATION
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Engineering Community
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Discuss sensor filtering, edge AI pipelines, hardware interfacing, and share project results.
          </p>
        </div>

        <button
          onClick={() => showToast('Discussion Forum', 'New discussion thread creation modal opened.', 'info')}
          className="rounded-2xl bg-cyan-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg hover:bg-cyan-500 transition-colors font-mono"
        >
          + Start Discussion
        </button>
      </div>

      {/* Discussions Feed */}
      <div className="space-y-5">
        {discussions.map((d) => (
          <div
            key={d.id}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 space-y-4 hover:border-cyan-500/40 transition-colors shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={d.avatar}
                  alt={d.author}
                  className="h-10 w-10 rounded-xl object-cover ring-1 ring-slate-700"
                />
                <div>
                  <h4 className="font-bold text-xs text-white">{d.author}</h4>
                  <p className="text-[10px] text-cyan-400 font-mono">{d.role} • {d.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {d.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="rounded-md bg-slate-800 px-2 py-0.5 font-mono text-[9px] text-slate-400 border border-slate-700/60"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-base font-bold text-white leading-snug">{d.title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{d.content}</p>

            <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => showToast('Upvoted!', 'Thank you for supporting community contributors.', 'success')}
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <ThumbsUp className="h-4 w-4" />
                  <span>{d.upvotes}</span>
                </button>
                <div className="flex items-center gap-1.5">
                  <MessageSquare className="h-4 w-4" />
                  <span>{d.replies} Replies</span>
                </div>
              </div>

              <button
                onClick={() => showToast('Thread Link Copied', 'Share link copied to clipboard.', 'info')}
                className="hover:text-cyan-400 transition-colors flex items-center gap-1"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
