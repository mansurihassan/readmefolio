import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Link as LinkIcon, Building, Users, Mail, Terminal, Code2, Star, GitFork, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'console.log("Passionate Full Stack Developer");';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="overview" className="pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left sidebar - Profile */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-8xl font-bold text-github-text mb-4"
                  >
                    <span className="text-github-muted font-mono text-xl block mb-2">const developer = &lbrace;</span>
                    <span className="text-github-accent ml-4 text-7xl md:text-9xl">HASSAN</span>
                    <span className="text-github-muted font-mono text-xl block mt-2">&rbrace;;</span>
                  </motion.h1>
                  
                  <div className="bg-github-surface border border-github-border rounded-lg p-4 font-mono text-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <Terminal className="w-4 h-4 text-github-accent" />
                      <span className="text-github-muted">~/hassan-portfolio</span>
                    </div>
                    <div className="text-github-text">
                      <span className="text-github-success">$</span>
                      <span className="ml-2">
                        {displayText}
                        {isTyping && (
                          <span className="inline-block w-2 h-5 bg-github-accent ml-1 animate-pulse"></span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-sm mb-6">
                  <div className="flex items-center text-github-muted lg:justify-start justify-center font-mono">
                    <Building className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-github-accent">@</span>
                    <span>TechCorp</span>
                  </div>
                  <div className="flex items-center text-github-muted lg:justify-start justify-center font-mono">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-github-warning">"</span>
                    <span>San Francisco, CA</span>
                    <span className="text-github-warning">"</span>
                  </div>
                  <div className="flex items-center text-github-muted lg:justify-start justify-center font-mono">
                    <LinkIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                    <a href="#" className="text-github-accent hover:underline">
                      https://hassan.dev
                    </a>
                  </div>
                  <div className="flex items-center text-github-muted lg:justify-start justify-center font-mono">
                    <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-github-warning">'</span>
                    <a href="mailto:hassan@example.com" className="text-github-accent hover:underline">
                      hassan@example.com
                    </a>
                    <span className="text-github-warning">'</span>
                  </div>
                </div>

                <div className="bg-github-surface border border-github-border rounded-lg p-4 mb-6">
                  <div className="font-mono text-sm">
                    <div className="text-github-muted mb-2">// Social Stats</div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-github-text">followers:</span>
                        <span className="text-github-accent font-bold">234</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-github-text">following:</span>
                        <span className="text-github-accent font-bold">89</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <button className="w-full px-4 py-2 bg-github-surface border border-github-border rounded-lg text-github-text hover:bg-github-border/20 transition-colors text-sm font-mono">
                    git follow hassan
                  </button>
                  <button className="w-full px-4 py-2 border border-github-border rounded-lg text-github-text hover:bg-github-surface transition-colors text-sm font-mono">
                    npm sponsor hassan
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main content - README */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* README Section */}
              <div className="bg-github-surface border border-github-border rounded-lg overflow-hidden">
                <div className="bg-github-bg border-b border-github-border px-6 py-3">
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-4 h-4 text-github-muted" />
                    <span className="font-mono text-sm text-github-text">Hassan/README.md</span>
                    <span className="text-xs text-github-muted">• 2.5k lines</span>
                  </div>
                </div>
                
                <div className="p-6 font-mono text-sm">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <h1 className="text-4xl font-bold mb-6 text-github-text">
                      <span className="text-github-muted"># </span>
                      <span className="text-github-accent">Hassan</span>
                      <span className="text-github-text"> - Full Stack Developer 👨‍💻</span>
                    </h1>
                    
                    <div className="bg-github-bg border border-github-border rounded-lg p-4 mb-6">
                      <div className="text-github-muted mb-2">```javascript</div>
                      <div className="text-github-text space-y-1">
                        <div><span className="text-github-warning">const</span> <span className="text-github-accent">developer</span> = <span className="text-github-text">&lbrace;</span></div>
                        <div className="ml-4"><span className="text-github-warning">name</span>: <span className="text-github-success">"Hassan"</span>,</div>
                        <div className="ml-4"><span className="text-github-warning">role</span>: <span className="text-github-success">"Full Stack Developer"</span>,</div>
                        <div className="ml-4"><span className="text-github-warning">location</span>: <span className="text-github-success">"San Francisco, CA"</span>,</div>
                        <div className="ml-4"><span className="text-github-warning">passion</span>: <span className="text-github-success">"Building exceptional digital experiences"</span>,</div>
                        <div className="ml-4"><span className="text-github-warning">experience</span>: <span className="text-github-accent">5</span> + <span className="text-github-success">" years"</span>,</div>
                        <div className="ml-4"><span className="text-github-warning">status</span>: <span className="text-github-success">"Available for opportunities"</span></div>
                        <div><span className="text-github-text">&rbrace;;</span></div>
                      </div>
                      <div className="text-github-muted mt-2">```</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-github-accent">
                      <span className="text-github-muted">## </span>
                      About Me
                    </h2>
                    <div className="bg-github-bg border border-github-border rounded-lg p-4 mb-4">
                      <div className="text-github-muted mb-2">```python</div>
                      <div className="text-github-text space-y-1">
                        <div><span className="text-github-warning">class</span> <span className="text-github-accent">Hassan</span>:</div>
                        <div className="ml-4"><span className="text-github-warning">def</span> <span className="text-github-accent">__init__</span>(<span className="text-github-warning">self</span>):</div>
                        <div className="ml-8"><span className="text-github-warning">self</span>.skills = [<span className="text-github-success">"React"</span>, <span className="text-github-success">"TypeScript"</span>, <span className="text-github-success">"Node.js"</span>, <span className="text-github-success">"Python"</span>]</div>
                        <div className="ml-8"><span className="text-github-warning">self</span>.interests = [<span className="text-github-success">"AI/ML"</span>, <span className="text-github-success">"Web3"</span>, <span className="text-github-success">"Cloud Architecture"</span>]</div>
                        <div className="ml-8"><span className="text-github-warning">self</span>.motto = <span className="text-github-success">"Code with purpose, build with passion"</span></div>
                      </div>
                      <div className="text-github-muted mt-2">```</div>
                    </div>
                    <p className="text-github-text leading-relaxed">
                      Passionate full-stack developer with 5+ years of experience crafting scalable web applications. 
                      I specialize in modern JavaScript frameworks, cloud technologies, and creating seamless user experiences. 
                      Always eager to learn new technologies and collaborate on innovative projects.
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-github-accent">
                      <span className="text-github-muted">## </span>
                      Current Focus
                    </h2>
                    <div className="bg-github-bg border border-github-border rounded-lg p-4">
                      <div className="text-github-muted mb-2">```cpp</div>
                      <div className="text-github-text space-y-1">
                        <div><span className="text-github-warning">#include</span> <span className="text-github-success">&lt;iostream&gt;</span></div>
                        <div><span className="text-github-warning">#include</span> <span className="text-github-success">&lt;vector&gt;</span></div>
                        <div></div>
                        <div><span className="text-github-warning">int</span> <span className="text-github-accent">main</span>() &lbrace;</div>
                        <div className="ml-4"><span className="text-github-warning">std::vector&lt;std::string&gt;</span> currentProjects = &lbrace;</div>
                        <div className="ml-8"><span className="text-github-success">"AI-Powered Web Applications"</span>,</div>
                        <div className="ml-8"><span className="text-github-success">"Blockchain Integration Projects"</span>,</div>
                        <div className="ml-8"><span className="text-github-success">"Microservices Architecture"</span>,</div>
                        <div className="ml-8"><span className="text-github-success">"Performance Optimization"</span></div>
                        <div className="ml-4">&rbrace;;</div>
                        <div className="ml-4"><span className="text-github-warning">return</span> <span className="text-github-accent">0</span>;</div>
                        <div>&rbrace;</div>
                      </div>
                      <div className="text-github-muted mt-2">```</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mb-8"
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-github-accent">
                      <span className="text-github-muted">## </span>
                      Tech Arsenal
                    </h2>
                    <div className="bg-github-bg border border-github-border rounded-lg p-4">
                      <div className="text-github-muted mb-2">```css</div>
                      <div className="text-github-text space-y-1">
                        <div><span className="text-github-warning">.frontend</span> &lbrace;</div>
                        <div className="ml-4"><span className="text-github-accent">frameworks</span>: React, Vue.js, Next.js;</div>
                        <div className="ml-4"><span className="text-github-accent">languages</span>: TypeScript, JavaScript;</div>
                        <div className="ml-4"><span className="text-github-accent">styling</span>: Tailwind CSS, Styled Components;</div>
                        <div>&rbrace;</div>
                        <div></div>
                        <div><span className="text-github-warning">.backend</span> &lbrace;</div>
                        <div className="ml-4"><span className="text-github-accent">runtime</span>: Node.js, Python, Java;</div>
                        <div className="ml-4"><span className="text-github-accent">frameworks</span>: Express, FastAPI, Spring;</div>
                        <div className="ml-4"><span className="text-github-accent">databases</span>: PostgreSQL, MongoDB, Redis;</div>
                        <div>&rbrace;</div>
                        <div></div>
                        <div><span className="text-github-warning">.cloud</span> &lbrace;</div>
                        <div className="ml-4"><span className="text-github-accent">platforms</span>: AWS, Google Cloud, Azure;</div>
                        <div className="ml-4"><span className="text-github-accent">tools</span>: Docker, Kubernetes, Terraform;</div>
                        <div>&rbrace;</div>
                      </div>
                      <div className="text-github-muted mt-2">```</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mb-8"
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-github-accent">
                      <span className="text-github-muted">## </span>
                      GitHub Stats
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-github-bg border border-github-border rounded-lg p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Code2 className="w-5 h-5 text-github-accent mr-2" />
                          <span className="text-2xl font-bold text-github-accent font-mono">150</span>
                        </div>
                        <div className="text-xs text-github-muted font-mono">repositories.length</div>
                      </div>
                      <div className="bg-github-bg border border-github-border rounded-lg p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Star className="w-5 h-5 text-github-warning mr-2" />
                          <span className="text-2xl font-bold text-github-warning font-mono">1.2k</span>
                        </div>
                        <div className="text-xs text-github-muted font-mono">stars.earned</div>
                      </div>
                      <div className="bg-github-bg border border-github-border rounded-lg p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <GitFork className="w-5 h-5 text-github-success mr-2" />
                          <span className="text-2xl font-bold text-github-success font-mono">300</span>
                        </div>
                        <div className="text-xs text-github-muted font-mono">forks.count</div>
                      </div>
                      <div className="bg-github-bg border border-github-border rounded-lg p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Eye className="w-5 h-5 text-github-text mr-2" />
                          <span className="text-2xl font-bold text-github-text font-mono">5+</span>
                        </div>
                        <div className="text-xs text-github-muted font-mono">years.experience</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 }}
                    className="border-t border-github-border pt-6"
                  >
                    <div className="text-center">
                      <div className="bg-github-bg border border-github-border rounded-lg p-4 font-mono text-sm">
                        <div className="text-github-muted mb-2">// Let's connect and build something amazing together!</div>
                        <div className="text-github-text">
                          <span className="text-github-warning">if</span> (you.hasProject() || you.needDeveloper()) &lbrace;
                          <br />
                          <span className="ml-4">hassan.contact();</span>
                          <br />
                          &rbrace;
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;