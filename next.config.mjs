/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol : 'https',
                hostname :'groww.in'
            },
            {
                protocol: 'https',
                hostname:'fakestoreapi.com'
            }
        ]
    }
}
export default nextConfig
