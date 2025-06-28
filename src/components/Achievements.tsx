import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Zap, Target, Code, Coffee, Rocket, Terminal } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  date: string;
  category: string;
  unlocked: boolean;
  codeSnippet: string;
}

const Achievements: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'Code Wizard',
      description: 'Completed 100+ projects with clean, maintainable code',
      icon: Code,
      date: '2024',
      category: 'coding',
      unlocked: true,
      codeSnippet: 'if (projects.length > 100 && code.quality === "clean") { unlock("Code Wizard"); }'
    },
    {
      id: 2,
      title: 'Open Source Hero',
      description: 'Contributed to 50+ open source repositories',
      icon: Star,
      date: '2023',
      category: 'community',
      unlocked: true,
      codeSnippet: 'for repo in open_source_repos: contribute() # 50+ contributions'
    },
    {
      id: 3,
      title: 'Hackathon Champion',
      description: 'Won 1st place in TechFest 2023 hackathon',
      icon: Trophy,
      date: '2023',
      category: 'competition',
      unlocked: true,
      codeSnippet: 'hackathon.result === "1st_place" ? achievement.unlock() : keep_coding();'
    },
    {
      id: 4,
      title: 'Full Stack Master',
      description: 'Mastered both frontend and backend technologies',
      icon: Target,
      date: '2023',
      category: 'skill',
      unlocked: true,
      codeSnippet: 'const skills = [...frontend, ...backend]; // Full Stack Achieved'
    },
    {
      id: 5,
      title: 'Speed Demon',
      description: 'Optimized app performance by 300%',
      icon: Zap,
      date: '2024',
      category: 'performance',
      unlocked: true,
      codeSnippet: 'performance.improvement >= 300 && achievement.unlock("Speed Demon");'
    },
    {
      id: 6,
      title: 'Innovation Award',
      description: 'Received company innovation award for AI implementation',
      icon: Award,
      date: '2024',
      category: 'recognition',
      unlocked: true,
      codeSnippet: 'if (innovation.includes("AI") && impact > threshold) award.grant();'
    }
  ];

  const categories = [
    { id: 'all', label: 'achievements.all()', icon: Trophy },
    { id: 'coding', label: 'coding_achievements[]', icon: Code },
    { id: 'community', label: 'community.contributions', icon: Star },
    { id: 'competition', label: 'competitions.won', icon: Trophy },
    { id: 'skill', label: 'skills.mastered', icon: Target },
    { id: 'recognition', label: 'awards.received', icon: Award }
  ];

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;

  return (
    <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-github-text mb-4 font-mono"
          >
            <span className="text-github-warning">class</span>
            <span className="text-github-text"> TrophyCabinet </span>
            <span className="text-github-text">{'{'}</span>
            <br />
            <span className="text-github-muted ml-4">// Milestones in development journey</span>
            <br />
            <span className="text-github-text">{'}'}</span>
          </motion.h2>
          <div className="bg-github-surface border border-github-border rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center space-x-2 mb-2">
              <Terminal className="w-4 h-4 text-github-accent" />
              <span className="text-github-muted">Achievement System Initialized</span>
            </div>
            <p className="text-github-text">
              <span className="text-github-success">✓</span> Tracking career milestones and accomplishments
            </p>
          </div>
        </div>

        {/* Progress Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-github-surface border border-github-border rounded-lg p-6 mb-8"
        >
          <div className="font-mono text-sm mb-4">
            <div className="text-github-muted">// Progress Summary</div>
            <div className="text-github-text">
              <span className="text-github-warning">const</span> progress = {'{'}
              <br />
              <span className="ml-4">unlocked: <span className="text-github-accent">{unlockedCount}</span>,</span>
              <br />
              <span className="ml-4">total: <span className="text-github-accent">{totalCount}</span>,</span>
              <br />
              <span className="ml-4">percentage: <span className="text-github-accent">{Math.round((unlockedCount / totalCount) * 100)}%</span></span>
              <br />
              {'};'}
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-github-accent font-mono">{unlockedCount}/{totalCount}</div>
              <div className="text-sm text-github-muted font-mono">unlocked</div>
            </div>
            <div className="w-32 bg-github-bg rounded-full h-3">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${(unlockedCount / totalCount) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="bg-github-accent h-3 rounded-full"
              />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-github-success font-mono">{Math.round((unlockedCount / totalCount) * 100)}%</div>
              <div className="text-sm text-github-muted font-mono">complete</div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors font-mono ${
                  selectedCategory === category.id
                    ? 'bg-github-accent text-white'
                    : 'bg-github-surface text-github-muted hover:text-github-text border border-github-border hover:border-github-accent/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement, index) => {
            const Icon = achievement.icon;
            
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-github-surface border border-github-border rounded-lg p-6"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-full bg-github-accent/10">
                      <Icon className="w-6 h-6 text-github-accent" />
                    </div>
                    <span className="text-xs text-github-muted font-mono bg-github-bg px-2 py-1 rounded">
                      {achievement.date}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-github-text font-mono">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-github-muted text-sm mb-4 flex-1">
                    {achievement.description}
                  </p>

                  {/* Code snippet */}
                  <div className="bg-github-bg border border-github-border rounded-lg p-3 font-mono text-xs">
                    <div className="text-github-muted mb-1">// Achievement Logic</div>
                    <div className="text-github-text break-all">
                      {achievement.codeSnippet}
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-github-muted font-mono">
                      category: "{achievement.category}"
                    </span>
                    {achievement.unlocked && (
                      <span className="text-xs text-github-success font-mono bg-github-success/10 px-2 py-1 rounded">
                        ✓ UNLOCKED
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;