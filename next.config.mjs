/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"], // Add any other domains you may use for images here
  },
  async redirects() {
    return [
      {
        source: "/single-product",
        destination: "/",
        permanent: false, // Set to true if this is a permanent redirect (301), otherwise false for a temporary redirect (302)
      },
    ];
  },
};

export default nextConfig;
