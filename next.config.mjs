/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [new URL('https://res.cloudinary.com/rlipac/**')],
  }
};



export default nextConfig;
