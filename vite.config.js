import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // Roda o servidor do front-end na porta 5500
    port: 5500,
    proxy: {
      // Qualquer requisição que comece com /api...
      '/api': {
        // ...será redirecionada para a nossa API backend
        target: 'http://localhost:3001',
        // Necessário para o proxy funcionar corretamente
        changeOrigin: true,
      },
    },
  },
});