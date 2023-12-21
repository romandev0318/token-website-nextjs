/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  compiler: {
    styledComponents: true,
  },

  images: {
    domains: [
      'shib-token.s3.eu-central-1.amazonaws.com',
      'the-shib.ghost.io',
      'shib.mypinata.cloud',
    ],
  },
};

module.exports = nextConfig;
