/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cms-webserver-statics.s3.amazonaws.com",
      "i.imgur.com",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
