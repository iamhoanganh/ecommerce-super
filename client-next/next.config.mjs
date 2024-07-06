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
                hostname: 'dolphin-app-xjwi7.ondigitalocean.app',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
