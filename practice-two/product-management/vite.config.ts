import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'node_modules'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        manualChunks: {
          'react-dom': ['react-dom'],
          'react-router-dom': ['react-router-dom'],
          '@chakra-ui/icons': ['@chakra-ui/icons'],
          '@chakra-ui/react': ['@chakra-ui/react'],
          'framer-motion': ['framer-motion'],
        },
      },
    },
  },
})
