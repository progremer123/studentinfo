# GitHub 업로드 명령어

# 1. GitHub에서 새 저장소를 생성한 후
# 2. 저장소 URL을 복사하여 아래 명령어에 입력

# 원격 저장소 추가 (YOUR_GITHUB_URL을 실제 URL로 변경)
git remote add origin YOUR_GITHUB_URL

# 예시:
# git remote add origin https://github.com/username/web3-student-dapp.git

# GitHub에 푸시
git push -u origin master

# 만약 기본 브랜치가 main이라면:
# git push -u origin main