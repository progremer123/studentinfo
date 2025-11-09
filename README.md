# Web3.0 Student Information DApp

학생 정보를 Ethereum Sepolia 테스트넷에 저장하고 조회할 수 있는 Web3.0 분산 애플리케이션입니다.

## 🚀 주요 기능

- 스마트 컨트랙트에 학번과 이름 저장
- MetaMask 지갑 연동
- Ethereum Sepolia 테스트넷 연결
- React/Next.js 기반 모던 UI

## 🛠 기술 스택

- **프론트엔드**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **블록체인**: Ethereum, Solidity ^0.8.28
- **개발도구**: Hardhat, Ethers.js
- **배포**: Vercel (프론트엔드), Sepolia 테스트넷 (스마트 컨트랙트)

## 📋 사전 요구사항

- Node.js 18+ 
- MetaMask 브라우저 확장 프로그램
- Sepolia 테스트넷 ETH (faucet에서 받기)

## ⚙️ 설치 및 설정

1. **프로젝트 클론 및 의존성 설치**
```bash
git clone <repository-url>
cd web3-dapp-project
npm install
```

2. **환경 변수 설정**
```bash
# .env.local 파일 생성
cp .env.example .env.local
```

3. **환경 변수 입력**
```env
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
SEPOLIA_PRIVATE_KEY=YOUR_PRIVATE_KEY_HERE
ETHERSCAN_API_KEY=YOUR_ETHERSCAN_API_KEY
NEXT_PUBLIC_CONTRACT_ADDRESS=DEPLOYED_CONTRACT_ADDRESS
NEXT_PUBLIC_SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
```

## 🔧 개발 및 배포

### 1. 스마트 컨트랙트 컴파일
```bash
npm run compile
```

### 2. 로컬 테스트 (선택사항)
```bash
# 로컬 하드햇 네트워크에서 테스트
npx hardhat node
npm run deploy:local
```

### 3. Sepolia 테스트넷에 배포
```bash
npm run deploy:sepolia
```

### 4. 프론트엔드 개발 서버 실행
```bash
npm run dev
```

### 5. 프로덕션 빌드
```bash
npm run build
npm start
```

## 📱 사용 방법

1. MetaMask를 Sepolia 테스트넷으로 연결
2. 웹사이트에서 "MetaMask 연결하기" 클릭
3. 지갑 연결 승인
4. 스마트 컨트랙트에서 학생 정보 자동 로드

## 📁 프로젝트 구조

```
web3-dapp-project/
├── contracts/              # 솔리디티 스마트 컨트랙트
│   └── StudentInfo.sol     # 학생 정보 저장 컨트랙트
├── ignition/modules/       # 배포 스크립트
│   └── StudentInfo.ts      # 컨트랙트 배포 모듈
├── src/
│   ├── app/
│   │   └── page.tsx       # 메인 페이지 컴포넌트
│   └── types/
│       └── global.d.ts    # TypeScript 타입 정의
├── hardhat.config.ts      # Hardhat 설정
└── package.json           # 프로젝트 의존성
```

## 🌐 배포 정보

- **컨트랙트 주소**: `0xDad755952F8572285505e7fAaA16EF4C71427Bd2`
- **네트워크**: Ethereum Sepolia Testnet
- **웹사이트**: [Vercel 배포 후 업데이트]
- **GitHub**: [Repository URL]
- **Etherscan**: https://sepolia.etherscan.io/address/0xDad755952F8572285505e7fAaA16EF4C71427Bd2

## 🤝 기여

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 📞 연락처

- **학번**: 92113633
- **이름**: 백이랑
- **이메일**: [이메일 주소]
