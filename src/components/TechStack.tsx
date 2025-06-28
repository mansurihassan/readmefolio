import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Cloud, Code2 } from 'lucide-react';

interface TechItem {
  name: string;
  level: number;
  category: string;
  projects: number;
  years: number;
  description: string;
  color: string;
}

const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const technologies: TechItem[] = [
    {
      name: 'React',
      level: 95,
      category: 'frontend',
      projects: 45,
      years: 4,
      description: 'Advanced React development with hooks, context, and performance optimization',
      color: '#61dafb'
    },
    {
      name: 'TypeScript',
      level: 90,
      category: 'frontend',
      projects: 38,
      years: 3,
      description: 'Strong typing, advanced generics, and enterprise-level TypeScript applications',
      color: '#3178c6'
    },
    {
      name: 'Node.js',
      level: 88,
      category: 'backend',
      projects: 32,
      years: 4,
      description: 'Server-side development, APIs, microservices, and real-time applications',
      color: '#339933'
    },
    {
      name: 'Python',
      level: 85,
      category: 'backend',
      projects: 28,
      years: 5,
      description: 'Web development, data analysis, machine learning, and automation scripts',
      color: '#3776ab'
    },
    {
      name: 'PostgreSQL',
      level: 82,
      category: 'database',
      projects: 25,
      years: 3,
      description: 'Complex queries, performance optimization, and database design',
      color: '#336791'
    },
    {
      name: 'AWS',
      level: 78,
      category: 'cloud',
      projects: 22,
      years: 2,
      description: 'Cloud architecture, serverless functions, and infrastructure as code',
      color: '#ff9900'
    }
  ];

  const categories = [
    { id: 'all', label: 'skills.getAll()', count: technologies.length, icon: Code2 },
    { id: 'frontend', label: 'frontend[]', count: technologies.filter(t => t.category === 'frontend').length, icon: Code2 },
    { id: 'backend', label: 'backend.list()', count: technologies.filter(t => t.category === 'backend').length, icon: Terminal },
    { id: 'database', label: 'SELECT * FROM db', count: technologies.filter(t => t.category === 'database').length, icon: Database },
    { id: 'cloud', label: 'cloud.services', count: technologies.filter(t => t.category === 'cloud').length, icon: Cloud }
  ];

  const filteredTechnologies = selectedCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  const getLanguageSnippet = (tech: TechItem) => {
    switch (tech.category) {
      case 'frontend':
        return `const ${tech.name.toLowerCase()}Skills = ${tech.level}%;`;
      case 'backend':
        return `def ${tech.name.toLowerCase()}_expertise(): return ${tech.level}`;
      case 'database':
        return `SELECT proficiency FROM skills WHERE tech='${tech.name}'; -- ${tech.level}%`;
      case 'cloud':
        return `aws.skills.${tech.name.toLowerCase()} = ${tech.level}%;`;
      default:
        return `skills.${tech.name} = ${tech.level}%;`;
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-github-text mb-4 font-mono"
          >
            <span className="text-github-warning">interface</span>
            <span className="text-github-text"> TechStack </span>
            <span className="text-github-text">{'{'}</span>
            <br />
            <span className="text-github-muted ml-4">// Expertise & Experience</span>
            <br />
            <span className="text-github-text">{'}'}</span>
          </motion.h2>
          <div className="bg-github-surface border border-github-border rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center space-x-2 mb-2">
              <Terminal className="w-4 h-4 text-github-accent" />
              <span className="text-github-muted">~/tech-stack</span>
            </div>
            <p className="text-github-text">
              <span className="text-github-success">$</span>
              <span className="ml-2">npm list --depth=0</span>
            </p>
            <p className="text-github-muted mt-1">
              Technologies mastered with depth of experience
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
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
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-github-surface border border-github-border rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                  <h3 className="text-xl font-semibold text-github-text font-mono">{tech.name}</h3>
                </div>
                <span className="text-2xl font-bold text-github-accent font-mono">
                  {tech.level}%
                </span>
              </div>

              {/* Code snippet */}
              <div className="bg-github-bg border border-github-border rounded-lg p-3 mb-4 font-mono text-sm">
                <div className="text-github-muted mb-1">// Proficiency level</div>
                <div className="text-github-text">{getLanguageSnippet(tech)}</div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-github-bg rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-2 rounded-full transition-all duration-1000"
                    style={{ backgroundColor: tech.color }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="text-center p-2 bg-github-bg rounded font-mono">
                  <div className="text-lg font-bold text-github-accent">{tech.projects}</div>
                  <div className="text-github-muted">projects.length</div>
                </div>
                <div className="text-center p-2 bg-github-bg rounded font-mono">
                  <div className="text-lg font-bold text-github-success">{tech.years}</div>
                  <div className="text-github-muted">experience.years</div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-github-bg border border-github-border rounded-lg p-3 font-mono text-xs">
                <div className="text-github-muted mb-1">/* Description */</div>
                <div className="text-github-text leading-relaxed">
                  {tech.description}
                </div>
                <div className="text-github-muted mt-1">*/</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Insights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-github-text mb-6 font-mono">
            <span className="text-github-muted">// </span>
            <span className="text-github-warning">const</span>
            <span className="text-github-text"> summary = </span>
            <span className="text-github-text">{'{'}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-4">
            <div className="bg-github-surface border border-github-border rounded-lg p-6 text-center font-mono">
              <div className="text-3xl font-bold text-github-accent mb-2">150+</div>
              <div className="text-github-muted">total_projects</div>
            </div>
            <div className="bg-github-surface border border-github-border rounded-lg p-6 text-center font-mono">
              <div className="text-3xl font-bold text-github-success mb-2">5+</div>
              <div className="text-github-muted">years_experience</div>
            </div>
            <div className="bg-github-surface border border-github-border rounded-lg p-6 text-center font-mono">
              <div className="text-3xl font-bold text-github-warning mb-2">20+</div>
              <div className="text-github-muted">technologies_mastered</div>
            </div>
          </div>
          <div className="text-github-text font-mono mt-4">{'};'}</div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;