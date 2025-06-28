import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, GitFork, ExternalLink, Github, X, Eye, Terminal } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  watchers: number;
  updated: string;
  topics: string[];
  demo?: string;
  github: string;
  isPrivate: boolean;
}

const PinnedRepos: React.FC = () => {
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);

  const repositories: Repository[] = [
    {
      id: 1,
      name: "portfolio-website",
      description: "My personal portfolio website built with React, TypeScript, and Framer Motion",
      language: "TypeScript",
      stars: 42,
      forks: 8,
      watchers: 15,
      updated: "2 days ago",
      topics: ["react", "typescript", "portfolio", "framer-motion"],
      demo: "https://hassan-portfolio.netlify.app",
      github: "https://github.com/hassan/portfolio",
      isPrivate: false
    },
    {
      id: 2,
      name: "task-management-app",
      description: "A comprehensive task management application with real-time collaboration",
      language: "JavaScript",
      stars: 28,
      forks: 12,
      watchers: 22,
      updated: "1 week ago",
      topics: ["react", "nodejs", "mongodb", "websockets"],
      demo: "https://taskflow-app.netlify.app",
      github: "https://github.com/hassan/taskflow",
      isPrivate: false
    },
    {
      id: 3,
      name: "weather-dashboard",
      description: "Beautiful weather dashboard with forecasts and interactive maps",
      language: "Vue",
      stars: 35,
      forks: 6,
      watchers: 18,
      updated: "3 days ago",
      topics: ["vue", "api", "weather", "dashboard"],
      demo: "https://weather-dash.netlify.app",
      github: "https://github.com/hassan/weather-dashboard",
      isPrivate: false
    },
    {
      id: 4,
      name: "ai-chat-assistant",
      description: "AI-powered chat assistant with natural language processing capabilities",
      language: "Python",
      stars: 67,
      forks: 23,
      watchers: 45,
      updated: "5 days ago",
      topics: ["ai", "nlp", "chatbot", "machine-learning"],
      demo: "https://ai-assistant-demo.herokuapp.com",
      github: "https://github.com/hassan/ai-chat",
      isPrivate: false
    },
    {
      id: 5,
      name: "blockchain-explorer",
      description: "Ethereum blockchain explorer with transaction tracking and analytics",
      language: "TypeScript",
      stars: 51,
      forks: 15,
      watchers: 32,
      updated: "1 week ago",
      topics: ["blockchain", "ethereum", "web3", "analytics"],
      demo: "https://eth-explorer.netlify.app",
      github: "https://github.com/hassan/blockchain-explorer",
      isPrivate: false
    },
    {
      id: 6,
      name: "mobile-fitness-app",
      description: "Cross-platform fitness tracking app with workout plans and progress monitoring",
      language: "Dart",
      stars: 39,
      forks: 11,
      watchers: 28,
      updated: "4 days ago",
      topics: ["flutter", "mobile", "fitness", "health"],
      demo: "https://play.google.com/store/apps/fitness-tracker",
      github: "https://github.com/hassan/fitness-app",
      isPrivate: false
    }
  ];

  const getLanguageColor = (language: string): string => {
    const colors: { [key: string]: string } = {
      TypeScript: '#3178c6',
      JavaScript: '#f1e05a',
      Vue: '#4fc08d',
      Python: '#3572a5',
      Dart: '#00b4ab',
    };
    return colors[language] || '#8b949e';
  };

  return (
    <section id="repositories" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-github-text mb-4 font-mono"
          >
            <span className="text-github-muted">// </span>
            <span className="text-github-warning">SELECT</span>
            <span className="text-github-text"> * </span>
            <span className="text-github-warning">FROM</span>
            <span className="text-github-text"> pinned_repositories;</span>
          </motion.h2>
          <div className="bg-github-surface border border-github-border rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center space-x-2 mb-2">
              <Terminal className="w-4 h-4 text-github-accent" />
              <span className="text-github-muted">Query Results</span>
            </div>
            <p className="text-github-text">
              <span className="text-github-success">6 rows</span> returned • Featured projects showcasing development skills
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repositories.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-github-surface border border-github-border rounded-lg p-4 hover:border-github-muted/50 transition-colors cursor-pointer"
              onClick={() => setSelectedRepo(repo)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <h3 className="text-github-accent font-semibold hover:underline font-mono">
                    {repo.name}
                  </h3>
                  {repo.isPrivate && (
                    <span className="px-2 py-0.5 text-xs border border-github-border rounded-full text-github-muted font-mono">
                      private
                    </span>
                  )}
                </div>
                <div className="flex space-x-2">
                  <a
                    href={repo.github}
                    onClick={(e) => e.stopPropagation()}
                    className="text-github-muted hover:text-github-text transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {repo.demo && (
                    <a
                      href={repo.demo}
                      onClick={(e) => e.stopPropagation()}
                      className="text-github-muted hover:text-github-text transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-github-muted text-sm mb-4 line-clamp-2 font-mono">
                <span className="text-github-warning">"</span>
                {repo.description}
                <span className="text-github-warning">"</span>
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-1 bg-github-accent/10 text-github-accent text-xs rounded-full font-mono"
                  >
                    #{topic}
                  </span>
                ))}
                {repo.topics.length > 3 && (
                  <span className="px-2 py-1 text-github-muted text-xs font-mono">
                    +{repo.topics.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-github-muted font-mono">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: getLanguageColor(repo.language) }}
                    />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitFork className="w-3 h-3" />
                    <span>{repo.forks}</span>
                  </div>
                </div>
                <span>updated {repo.updated}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedRepo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedRepo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-github-surface border border-github-border rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-github-accent mb-2 font-mono">
                        class {selectedRepo.name.split('-').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join('')} {'{'}
                      </h3>
                      <p className="text-github-muted font-mono text-sm ml-4">
                        <span className="text-github-warning">//</span> {selectedRepo.description}
                      </p>
                      <div className="font-mono text-sm text-github-text ml-4 mt-2">{'}'}</div>
                    </div>
                    <button
                      onClick={() => setSelectedRepo(null)}
                      className="text-github-muted hover:text-github-text transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="bg-github-bg border border-github-border rounded-lg p-4 mb-6 font-mono text-sm">
                    <div className="text-github-muted mb-2">// Technologies used</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedRepo.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 bg-github-accent/10 text-github-accent text-sm rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-github-border">
                    <div className="flex items-center space-x-6 text-sm text-github-muted font-mono">
                      <div className="flex items-center space-x-1">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getLanguageColor(selectedRepo.language) }}
                        />
                        <span>{selectedRepo.language}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{selectedRepo.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="w-4 h-4" />
                        <span>{selectedRepo.forks}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{selectedRepo.watchers}</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <a
                        href={selectedRepo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 border border-github-border rounded-lg hover:bg-github-border/20 transition-colors text-sm font-mono"
                      >
                        <Github className="w-4 h-4" />
                        <span>git clone</span>
                      </a>
                      {selectedRepo.demo && (
                        <a
                          href={selectedRepo.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-github-accent text-white rounded-lg hover:bg-github-accent/90 transition-colors text-sm font-mono"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>npm start</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PinnedRepos;