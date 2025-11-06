# Web3 DApp 배포 가이드

## 📋 배포 체크리스트

### 1. 스마트 컨트랙트 배포 준비
- [ ] `.env.local` 파일 생성 및 설정
- [ ] Infura 프로젝트 생성 (https://infura.io/)
- [ ] MetaMask에서 Sepolia 테스트넷 ETH 받기 (https://sepoliafaucet.com/)
- [ ] 개인키 및 RPC URL 설정

### 2. 환경 변수 설정
`.env.local` 파일을 생성하고 다음 정보를 입력하세요:

```env
# Sepolia 네트워크 설정
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
SEPOLIA_PRIVATE_KEY=YOUR_PRIVATE_KEY_HERE

# Etherscan API Key (선택사항 - 컨트랙트 검증용)
ETHERSCAN_API_KEY=YOUR_ETHERSCAN_API_KEY

# Next.js 환경 변수
NEXT_PUBLIC_CONTRACT_ADDRESS=DEPLOYED_CONTRACT_ADDRESS
NEXT_PUBLIC_SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
```

### 3. 스마트 컨트랙트 정보 수정
`ignition/modules/StudentInfo.ts` 파일에서 학번과 이름을 수정하세요:

```typescript
// 실제 정보로 변경하세요
const studentId = "실제학번"; 
const studentName = "실제이름";
```

### 4. 스마트 컨트랙트 배포 (수동)

Hardhat에 문제가 있어서 Remix IDE 사용을 권장합니다:

1. https://remix.ethereum.org/ 접속
2. `contracts/StudentInfo.sol` 파일 내용을 Remix에 복사
3. 컴파일 (Solidity 0.8.28 사용)
4. Deploy & Run에서:
   - Environment: "Injected Provider - MetaMask" 선택
   - 네트워크를 Sepolia로 변경
   - Constructor에 학번, 이름 입력
   - Deploy 클릭
5. 배포된 컨트랙트 주소를 복사하여 환경 변수에 저장

### 5. GitHub 저장소 생성
1. https://github.com/new 에서 새 저장소 생성
2. 저장소 URL을 복사

```bash
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin master
```

### 6. Vercel 배포
1. https://vercel.com/ 가입/로그인
2. "New Project" 클릭
3. GitHub 저장소 연결
4. Environment Variables에서 다음 변수들 설정:
   - `NEXT_PUBLIC_CONTRACT_ADDRESS`: 배포된 컨트랙트 주소
   - `NEXT_PUBLIC_SEPOLIA_RPC_URL`: Infura RPC URL
5. Deploy 클릭

### 7. 최종 확인
- [ ] 웹사이트가 정상적으로 로드되는지 확인
- [ ] MetaMask 연결이 작동하는지 확인
- [ ] 학생 정보가 올바르게 표시되는지 확인

## 🔗 제출 정보

배포 완료 후 다음 정보들을 제출하세요:

1. **컨트랙트 주소**: `0x...` (Sepolia 테스트넷)
2. **GitHub 저장소**: `https://github.com/username/repo`
3. **Vercel 웹사이트**: `https://your-app.vercel.app`
4. **주요 기능 캡처**: 
   - 초기 화면 (학번, 이름 표시)
   - MetaMask 연결 화면
   - 스마트 컨트랙트 정보 표시

## ⚠️ 주의사항

1. **개인키 보안**: `.env.local` 파일은 절대 GitHub에 업로드하지 마세요
2. **테스트넷 사용**: 반드시 Sepolia 테스트넷을 사용하세요
3. **지갑 백업**: MetaMask 시드 구문을 안전하게 보관하세요