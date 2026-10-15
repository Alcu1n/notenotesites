import nextConfig from "eslint-config-next";

const config = [
  { ignores: ["output/**", ".playwright-mcp/**"] },
  ...nextConfig,
];

export default config;
