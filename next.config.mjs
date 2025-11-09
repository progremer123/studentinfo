/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      'hardhat/config': 'hardhat/config',
      '@nomiclabs/hardhat-ethers': '@nomiclabs/hardhat-ethers'
    });
    return config;
  },
  experimental: {
    // Next.js 앱 라우터 최적화
    appDir: true,
  }
};

export default nextConfig;