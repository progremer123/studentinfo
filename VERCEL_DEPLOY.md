# Vercel 배포 가이드

## 🚀 Vercel 배포 단계:

### 1. Vercel 계정 생성
1. https://vercel.com/ 접속
2. "Sign Up" 클릭
3. GitHub 계정으로 로그인

### 2. 프로젝트 연결
1. Vercel 대시보드에서 "New Project" 클릭
2. GitHub 저장소 연결
3. "web3-student-dapp" 저장소 선택
4. "Import" 클릭

### 3. 환경 변수 설정 ⚠️ 중요!
다음 환경 변수들을 Vercel에 추가해야 합니다:

**Environment Variables 섹션에서 추가:**

- **NEXT_PUBLIC_CONTRACT_ADDRESS**: `0x6B3b8DDad4c5999330DAAF8C3D8a637cB88bfA26`
- **NEXT_PUBLIC_SEPOLIA_RPC_URL**: `https://sepolia.drpc.org`

### 4. 배포 실행
1. 환경 변수 설정 완료 후
2. "Deploy" 버튼 클릭
3. 배포 완료까지 2-3분 대기

### 5. 배포 완료 확인
- Vercel에서 제공하는 URL 확인
- 예: `https://web3-student-dapp-xyz123.vercel.app`

## ✅ 체크리스트:
- [ ] GitHub 저장소 생성 및 업로드
- [ ] Vercel 계정 생성
- [ ] 프로젝트 연결
- [ ] 환경 변수 설정
- [ ] 배포 완료
- [ ] 웹사이트 동작 확인