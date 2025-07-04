/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cms-webserver-statics.s3.amazonaws.com', 'i.imgur.com'],
  },
};

export default nextConfig;
