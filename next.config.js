/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'http',
            hostname: '127.0.0.1',
            port: '1337',
            pathname: '/uploads/**',
        },
        ],

        domains: [
            "127.0.0.1",
            "images.pexels.com",
            "unsplash.com",
            "api-janie.quinntougard.xyz"
        ]

    },
}

module.exports = nextConfig
