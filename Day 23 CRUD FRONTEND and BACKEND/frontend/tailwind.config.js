export default {
    theme: {
        extend: {
            keyframes: {
                'blob-slow': {
                    '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                },
                'blob-medium': {
                    '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
                    '40%': { transform: 'translate(-40px, 60px) scale(0.95)' },
                    '75%': { transform: 'translate(50px, -30px) scale(1.05)' },
                },
                'blob-fast': {
                    '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
                    '25%': { transform: 'translate(20px, -20px) scale(1.05)' },
                    '60%': { transform: 'translate(-30px, 40px) scale(0.9)' },
                },
            },
            animation: {
                'blob-slow': 'blob-slow 18s ease-in-out infinite alternate',
                'blob-medium': 'blob-medium 14s ease-in-out infinite alternate',
                'blob-fast': 'blob-fast 10s ease-in-out infinite alternate',
            },
        },
    },
    plugins: [],
};
