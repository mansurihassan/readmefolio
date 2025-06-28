import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Rocket, Heart, MapPin, Calendar, Terminal } from 'lucide-react';

const ReadmeSection: React.FC = () => {
  return (
    <section id="timeline" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-github-text mb-4 font-mono"
          >
            <span className="text-github-warning">import</span>
            <span className="text-github-text"> README </span>
            <span className="text-github-warning">from</span>
            <span className="text-github-success"> './Hassan.md'</span>
            <span className="text-github-text">;</span>
          </motion.h2>
          <div className="bg-github-surface border border-github-border rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center space-x-2 mb-2">
              <Terminal className="w-4 h-4 text-github-accent" />
              <span className="text-github-muted">Documentation loaded successfully</span>
            </div>
            <p className="text-github-text">
              <span className="text-github-success">✓</span> Comprehensive overview of development journey
            </p>
          </div>
        </div>

        <div className="bg-github-surface border border-github-border rounded-lg overflow-hidden">
          {/* File header */}
          <div className="bg-github-bg border-b border-github-border px-6 py-3">
            <div className="flex items-center space-x-2">
              <Code className="w-4 h-4 text-github-muted" />
              <span className="font-mono text-sm text-github-text">Hassan/README.md</span>
              <span className="text-xs text-github-muted">• 1.2k lines</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 font-mono text-sm">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h1 className="text-3xl font-bold mb-4 text-github-text">
                <span className="text-github-muted">#!/bin/bash</span>
                <br />
                <span className="text-github-success">echo</span>
                <span className="text-github-text"> "Hi there! I'm Hassan 👋"</span>
              </h1>
              <div className="bg-github-bg border border-github-border rounded-lg p-4">
                <div className="text-github-muted mb-2"># About Me</div>
                <div className="text-github-text space-y-1">
                  <div><span className="text-github-warning">passion</span>=<span className="text-github-success">"Building exceptional digital experiences"</span></div>
                  <div><span className="text-github-warning">location</span>=<span className="text-github-success">"Digital realm"</span></div>
                  <div><span className="text-github-warning">mission</span>=<span className="text-github-success">"Solving complex problems with code"</span></div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-github-accent">
                <span className="text-github-muted">/*</span>
                <br />
                <span className="ml-2">* Current Status</span>
                <br />
                <span className="text-github-muted">*/</span>
              </h3>
              <div className="bg-github-bg border border-github-border rounded-lg p-4">
                <div className="space-y-2 text-github-text">
                  <div>🔭 <span className="text-github-warning">currently_working_on</span> = [<span className="text-github-success">"AI Applications"</span>, <span className="text-github-success">"Blockchain Projects"</span>]</div>
                  <div>🌱 <span className="text-github-warning">learning</span> = {<span className="text-github-success">"Machine Learning"</span>, <span className="text-github-success">"Web3"</span>, <span className="text-github-success">"Cloud Architecture"</span>}</div>
                  <div>💬 <span className="text-github-warning">ask_me_about</span> = (<span className="text-github-success">"React"</span>, <span className="text-github-success">"TypeScript"</span>, <span className="text-github-success">"Node.js"</span>, <span className="text-github-success">"System Design"</span>)</div>
                  <div>⚡ <span className="text-github-warning">fun_fact</span>: <span className="text-github-success">"Can solve Rubik's cube in &lt; 2 minutes!"</span></div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-github-accent">
                <span className="text-github-warning">class</span>
                <span className="text-github-text"> GitHubStats </span>
                <span className="text-github-text">{'{'}</span>
              </h3>
              <div className="bg-github-bg border border-github-border rounded-lg p-4 ml-4">
                <div className="space-y-2 text-github-text">
                  <div><span className="text-github-warning">public int</span> repositories = <span className="text-github-accent">200</span>;</div>
                  <div><span className="text-github-warning">public int</span> stars_earned = <span className="text-github-accent">1500</span>;</div>
                  <div><span className="text-github-warning">public int</span> pull_requests = <span className="text-github-accent">300</span>;</div>
                  <div><span className="text-github-warning">public int</span> collaborators = <span className="text-github-accent">50</span>;</div>
                </div>
              </div>
              <div className="text-github-text mt-2">{'}'}</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-github-accent">
                <span className="text-github-warning">def</span>
                <span className="text-github-text"> tech_stack():</span>
              </h3>
              <div className="bg-github-bg border border-github-border rounded-lg p-4 ml-4">
                <div className="space-y-2 text-github-text">
                  <div><span className="text-github-warning">frontend</span> = [<span className="text-github-success">"React"</span>, <span className="text-github-success">"Vue.js"</span>, <span className="text-github-success">"TypeScript"</span>, <span className="text-github-success">"Next.js"</span>]</div>
                  <div><span className="text-github-warning">backend</span> = [<span className="text-github-success">"Node.js"</span>, <span className="text-github-success">"Python"</span>, <span className="text-github-success">"Express"</span>, <span className="text-github-success">"GraphQL"</span>]</div>
                  <div><span className="text-github-warning">database</span> = [<span className="text-github-success">"PostgreSQL"</span>, <span className="text-github-success">"MongoDB"</span>, <span className="text-github-success">"Redis"</span>]</div>
                  <div><span className="text-github-warning">cloud</span> = [<span className="text-github-success">"AWS"</span>, <span className="text-github-success">"Docker"</span>, <span className="text-github-success">"Kubernetes"</span>]</div>
                  <div><span className="text-github-warning">return</span> <span className="text-github-success">"Full Stack Mastery"</span></div>
                </div>
              </div>
            </motion.div>

            {/* Achievement badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <h3 className="text-xl font-semibold mb-6 text-github-accent">
                <span className="text-github-muted">&lt;!--</span>
                <span className="text-github-text"> Achievement Badges </span>
                <span className="text-github-muted">--&gt;</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Code, label: "Clean Code", color: "bg-blue-500", lang: "JS" },
                  { icon: Coffee, label: "Caffeine Powered", color: "bg-amber-500", lang: "☕" },
                  { icon: Rocket, label: "Fast Learner", color: "bg-green-500", lang: "🚀" },
                  { icon: Heart, label: "Open Source", color: "bg-red-500", lang: "❤️" }
                ].map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <motion.div
                      key={badge.label}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 p-3 bg-github-bg rounded-lg border border-github-border cursor-pointer group"
                    >
                      <div className={`p-2 ${badge.color} rounded-full`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-github-text font-mono">{badge.label}</div>
                        <div className="text-xs text-github-muted font-mono">{badge.lang}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick facts */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className="mt-12 p-4 bg-github-bg rounded-lg border border-github-border"
            >
              <h4 className="text-lg font-semibold mb-3 text-github-accent font-mono">
                <span className="text-github-muted">// </span>Quick Facts
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-github-muted" />
                  <span className="text-github-warning">location</span>
                  <span className="text-github-text">=</span>
                  <span className="text-github-success">"Digital Nomad Mode"</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-github-muted" />
                  <span className="text-github-warning">status</span>
                  <span className="text-github-text">=</span>
                  <span className="text-github-success">"Available for opportunities"</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadmeSection;