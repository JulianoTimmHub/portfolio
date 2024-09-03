/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    serviceId: process.env.NEXT_PUBLIC_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    accountPublicKey: process.env.NEXT_PUBLIC_ACCOUNT_PUBLIC_KEY
  },
};

export default nextConfig;