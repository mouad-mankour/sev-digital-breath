import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// WordPress-specific Vite config
export default defineConfig({
  base: './', // Use relative paths for WordPress
  build: {
    outDir: 'wordpress-theme/assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'index.css';
          }
          return 'assets/[name].[ext]';
        },
      },
    },
    manifest: true, // Generate manifest for WordPress
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
