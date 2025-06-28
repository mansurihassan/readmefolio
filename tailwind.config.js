/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'SF Mono', 'Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'monospace'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        github: {
          bg: '#0d1117',
          surface: '#161b22',
          border: '#30363d',
          text: '#e6edf3',
          muted: '#7d8590',
          accent: '#58a6ff',
          success: '#3fb950',
          warning: '#d29922',
          error: '#f85149',
          contribution: {
            0: '#161b22',
            1: '#0e4429',
            2: '#006d32',
            3: '#26a641',
            4: '#39d353'
          }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'typewriter': 'typewriter 4s steps(40) 1s 1 normal both',
        'blink': 'blink 1s infinite',
        'matrix-fall': 'matrixFall 10s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(88, 166, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(88, 166, 255, 0.8)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#58a6ff' }
        },
        matrixFall: {
          '0%': { transform: 'translateY(-100vh)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' }
        }
      }
    },
  },
  plugins: [],
};