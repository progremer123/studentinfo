/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack을 위한 빈 설정으로 webpack 오류 해결
  turbopack: {},
  // 실험적 기능 제거 (Next.js 16에서 더이상 필요없음)
  experimental: {},
  // 환경 변수 허용
  env: {
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
    SEPOLIA_RPC_URL: process.env.SEPOLIA_RPC_URL,
  }
};

export default nextConfig;