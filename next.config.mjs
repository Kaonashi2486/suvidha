/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['images.unsplash.com', 'avatar.vercel.sh'],
    },
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      appDir: true,
    },
  };
  
  export default nextConfig;
  