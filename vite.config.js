import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('react-dom')) {
                            return 'vendor_react_dom';
                        }
                        if (id.includes('react-router-dom')) {
                            return 'vendor_react_router';
                        }
                        if (id.includes('aos')) {
                            return 'vendor_animation';
                        }
                        if (id.includes('react-lazy-load-image-component')) {
                            return 'vendor_image_loading';
                        }
                        return 'vendor';
                    }
                },
            },
        },
    },
});
