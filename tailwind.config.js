module.exports = {
  theme: {
    extend: {
      animation: {
        swing: 'swing 2s ease-in-out infinite', // Animação de balanço
      },
      keyframes: {
        swing: {
          '0%, 100%': {
            transform: 'rotate(10deg)', // Começa com 10 graus de rotação
          },
          '50%': {
            transform: 'rotate(-10deg)', // Vai para -10 graus no meio do caminho
          },
        },
      },
    },
  },
}
