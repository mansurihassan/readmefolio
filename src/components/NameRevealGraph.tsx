import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NameRevealGraphProps {
  name?: string;
}

const NameRevealGraph: React.FC<NameRevealGraphProps> = ({ name = "HASSAN" }) => {
  const [animatedCells, setAnimatedCells] = useState<Set<string>>(new Set());
  const [isComplete, setIsComplete] = useState(false);

  // GitHub-style contribution graph: 53 weeks × 7 days
  const WEEKS = 53;
  const DAYS = 7;

  // Define letter patterns in a 5x7 grid for each letter (5 columns, 7 rows)
  const letterPatterns: { [key: string]: number[][] } = {
    'H': [
      [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], // Left vertical line
      [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], // Right vertical line
      [1, 3], [2, 3], [3, 3] // Horizontal middle line
    ],
    'A': [
      [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], // Left vertical line
      [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], // Right vertical line
      [1, 0], [2, 0], [3, 0], // Top horizontal line
      [1, 3], [2, 3], [3, 3] // Middle horizontal line
    ],
    'S': [
      [1, 0], [2, 0], [3, 0], [4, 0], // Top horizontal
      [0, 1], [0, 2], // Top left vertical
      [1, 3], [2, 3], [3, 3], // Middle horizontal
      [4, 4], [4, 5], // Bottom right vertical
      [0, 6], [1, 6], [2, 6], [3, 6] // Bottom horizontal
    ],
    'N': [
      [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], // Left vertical line
      [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], // Right vertical line
      [1, 1], [2, 2], [3, 3], [2, 4], [3, 5] // Diagonal line
    ]
  };

  // Calculate the pattern for the entire name
  const calculateNamePattern = (inputName: string): Array<{ row: number; col: number; letter: string; letterIndex: number }> => {
    const pattern: Array<{ row: number; col: number; letter: string; letterIndex: number }> = [];
    const letters = inputName.toUpperCase().split('');
    
    // Calculate spacing: 5 columns per letter + 2 columns spacing between letters
    const totalWidth = letters.length * 5 + (letters.length - 1) * 2;
    let startCol = Math.floor((WEEKS - totalWidth) / 2); // Center the name

    letters.forEach((letter, letterIndex) => {
      if (letterPatterns[letter]) {
        letterPatterns[letter].forEach(([relativeCol, row]) => {
          const col = startCol + (letterIndex * 7) + relativeCol; // 7 = 5 letter width + 2 spacing
          if (col >= 0 && col < WEEKS && row >= 0 && row < DAYS) {
            pattern.push({
              row,
              col,
              letter,
              letterIndex
            });
          }
        });
      }
    });

    return pattern;
  };

  const namePattern = calculateNamePattern(name);

  useEffect(() => {
    const animatePattern = async () => {
      // Group pattern by letters
      const letterGroups: { [key: number]: Array<{ row: number; col: number }> } = {};
      namePattern.forEach(({ row, col, letterIndex }) => {
        if (!letterGroups[letterIndex]) {
          letterGroups[letterIndex] = [];
        }
        letterGroups[letterIndex].push({ row, col });
      });

      // Animate each letter one by one
      for (let letterIndex = 0; letterIndex < Object.keys(letterGroups).length; letterIndex++) {
        const letterCells = letterGroups[letterIndex];
        
        // Animate all cells of current letter with slight delays
        for (let i = 0; i < letterCells.length; i++) {
          const { row, col } = letterCells[i];
          const cellKey = `${row}-${col}`;
          setAnimatedCells(prev => new Set([...prev, cellKey]));
          await new Promise(resolve => setTimeout(resolve, 40)); // Small delay between cells
        }
        
        // Pause between letters
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      
      // Complete animation
      setTimeout(() => setIsComplete(true), 500);
    };

    const timer = setTimeout(animatePattern, 1000);
    return () => clearTimeout(timer);
  }, [name]);

  const getCellIntensity = (row: number, col: number): number => {
    const cellKey = `${row}-${col}`;
    // Only return intensity for name cells
    if (animatedCells.has(cellKey)) {
      return 4; // Highest intensity for name cells only
    }
    return 0; // All other cells remain empty
  };

  const getContributionColor = (level: number): string => {
    if (level === 0) {
      return '#161b22'; // Empty cells (dark)
    }
    // Use blue color scheme instead of green
    return '#58a6ff'; // GitHub blue for name cells
  };

  return (
    <div className="w-full">
      <div className="bg-github-surface border border-github-border rounded-lg p-4">
        <div className="flex flex-col space-y-4">
          <div className="text-center">
            <h3 className="text-sm font-medium text-github-text mb-1">
              Contribution Activity
            </h3>
            <p className="text-xs text-github-muted">
              {animatedCells.size} contributions in the last year
            </p>
          </div>
          
          {/* GitHub-style contribution graph */}
          <div className="flex justify-center overflow-x-auto">
            <div className="flex flex-col">
              {/* Month labels */}
              <div className="flex mb-2">
                <div className="w-6"></div> {/* Space for day labels */}
                <div className="flex justify-between text-xs text-github-muted w-full max-w-2xl">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                    <div key={month} className="text-center">
                      {month}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex">
                {/* Day labels */}
                <div className="flex flex-col justify-between text-xs text-github-muted mr-2" style={{ height: '105px' }}>
                  <div style={{ lineHeight: '15px' }}>Mon</div>
                  <div style={{ lineHeight: '15px' }}>Wed</div>
                  <div style={{ lineHeight: '15px' }}>Fri</div>
                </div>
                
                {/* Contribution grid */}
                <div 
                  className={`grid gap-1 transition-all duration-1000 ${
                    isComplete ? 'drop-shadow-[0_0_20px_rgba(88,166,255,0.4)]' : ''
                  }`}
                  style={{ 
                    gridTemplateColumns: `repeat(${WEEKS}, 15px)`,
                    gridTemplateRows: `repeat(${DAYS}, 15px)`,
                    gridAutoFlow: 'column'
                  }}
                >
                  {Array.from({ length: WEEKS * DAYS }, (_, index) => {
                    const weekIndex = Math.floor(index / DAYS);
                    const dayIndex = index % DAYS;
                    const intensity = getCellIntensity(dayIndex, weekIndex);
                    const cellKey = `${dayIndex}-${weekIndex}`;
                    const isAnimated = animatedCells.has(cellKey);
                    
                    return (
                      <motion.div
                        key={cellKey}
                        initial={{ scale: 0.8, opacity: 0.3 }}
                        animate={{
                          scale: isAnimated ? [1, 1.3, 1] : 1,
                          opacity: 1,
                        }}
                        transition={{
                          duration: isAnimated ? 0.8 : 0.3,
                          ease: "easeOut"
                        }}
                        className={`w-3 h-3 rounded-sm transition-all duration-200 ${
                          isComplete && isAnimated ? 'animate-pulse' : ''
                        }`}
                        style={{ 
                          backgroundColor: getContributionColor(intensity),
                          boxShadow: isComplete && isAnimated ? '0 0 8px rgba(88,166,255,0.6)' : 'none'
                        }}
                        title={`${intensity} contributions on this day`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex items-center justify-between text-xs text-github-muted">
            <span>Learn how we count contributions</span>
            <div className="flex items-center space-x-2">
              <span>Less</span>
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-sm bg-github-contribution-0" />
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#58a6ff' }} />
              </div>
              <span>More</span>
            </div>
          </div>
          
          {/* Completion message */}
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center pt-2 border-t border-github-border"
            >
              <p className="text-sm text-github-accent font-mono mb-1">
                ✨ {name} revealed through contributions! ✨
              </p>
              <p className="text-xs text-github-muted">
                Longest streak: 127 days • Current streak: 12 days
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NameRevealGraph;