import react from '@vitejs/plugin-react';

export default {
    server: {
        host: true
    },
    plugins: [react()],
    base: '/cuerviar-dev'
}