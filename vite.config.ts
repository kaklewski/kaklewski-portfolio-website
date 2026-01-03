import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr({
            // svgr options: https://react-svgr.com/docs/options/
            svgrOptions: {
                exportType: 'default',
                ref: true,
                svgo: false,
                titleProp: true,
            },
            include: '**/*.svg',
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'],
                    ui: ['@chakra-ui/react'],
                    icons: [
                        'react-icons',
                        '@tabler/icons-react',
                        '@icons-pack/react-simple-icons',
                    ],
                },
            },
        },
    },
});
