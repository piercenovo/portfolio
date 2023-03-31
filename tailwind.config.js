const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: colors.slate[50],
          light: colors.slate[300],
          DEFAULT: colors.slate[400],
          dark: '#1B1B1B',
          darker: '#19191A',
          darkest: '#161515'
        },
        secondary: {
          DEFAULT: colors.sky[500],
          darkest: colors.sky[900],
          light: '#0ea5e91a'
        },
        whatsapp: '#38bdf8',
        twitter: '#38bdf8',
        instagram: '#38bdf8',
        github: '#38bdf8',
        linkedin: '#38bdf8',
        styledcomponents: '#D972B1',
        css: '#1572b6',
        tailwindcss: '#06b6d4',
        javascript: '#f7df1e',
        typescript: '#3178c6',
        dart: '#03589C',
        flutter: '#5FCAF8',
        reactjs: '#61dafb',
        nextjs: '#FFFFFF',
        nodejs: '#339933',
        express: '#FFFFFF',
        mongodb: '#47a248',
        mysql: '#E48E00',
        graphql: '#E535AB',
        postgresql: '#3178c6',
        jsonwebtokens: '#FB015B',
        figma: '#A259FF',
        excel: '#217346',
        git: '#f05032',
        githubicon: '#FFFFFF',
        vercel: '#FFFFFF',
        vscode: '#22A6F1',
        docker: '#2496ED',
        pnpm: '#F9AD00',
        prisma: '#336791'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        },
        'fade-in-down': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-125%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0%)'
          }
        },
        'fade-in-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(125%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0%)'
          }
        },
        profile: {
          '0%': {
            'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%'
          },
          '50%': {
            'border-radius': '30% 60% 70% 40%/50% 60% 30% 60%'
          },
          '100%': {
            'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%'
          }

        },
        floating: {
          '0%': {
            transform: 'translateY(-15%)'
          },
          '50%': {
            transform: 'translateY(15%)'
          },
          '100%': {
            transform: 'translateY(-15%)'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 1.15s 1.75s both',
        'fade-in-down': 'fade-in-down 1.15s 1.50s both',
        'fade-in-up': 'fade-in-up 1.15s 1.50s both',
        profile: 'profile 8s ease-in-out infinite 1s',
        arrow: 'fade-in 2.5s 3s both, floating 1.5s 3s infinite'
      },
      maxWidth: {
        'prose-lg': '75ch',
        '8xl': '88rem'

      },
      dropShadow: {
        white: '0px 0px 5px #ffffff25'
      },
      boxShadow: {
        image: '0 0 0 9px rgb(255, 255, 255/30%)'
      }
    }
  },
  plugins: [
    plugin(({ addUtilities, e }) => {
      const [from, to, incrementBy] = [0, 2000, 250]
      const values = Array.from(
        { length: (to - from) / incrementBy + 1 },
        (_, i) => from + incrementBy * i
      )

      const animationProperties = values.reduce((acc, value) => {
        const key = value === 0 ? 'none' : value

        return {
          ...acc,
          [`.${e(`animation-duration-${key}`)}`]: {
            animationDuration: `${value}ms`
          },
          [`.${e(`animation-delay-${key}`)}`]: {
            animationDelay: `${value}ms`
          }
        }
      }, {})

      addUtilities(animationProperties)
    })
  ]
}
