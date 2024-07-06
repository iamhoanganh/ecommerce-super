/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5000',
                // pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
                port: '',
                pathname: '/s/files/**',
            },
            {
                protocol: 'https',
                hostname: 'ecommerce-super-1.onrender.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
