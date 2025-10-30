import nextPlugin from "@cloudflare/next-on-pages/next-plugin";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  output: "export",
};

export default nextPlugin(nextConfig);
