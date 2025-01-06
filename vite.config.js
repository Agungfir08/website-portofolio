import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                    animation: ['aos'],
                    'image-loading': ['react-lazy-load-image-component'],
                    analog: ['./src/constants/Analog.js'],
                    projects: ['./src/constants/Projects.js'],
                    resume: ['./src/constants/Resumes.js'],
                },
            },
        },
    },
});
