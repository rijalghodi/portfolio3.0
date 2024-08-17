/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
