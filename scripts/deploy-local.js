const hre = require("hardhat");

async function main() {
  console.log("🚀 StudentInfo 컨트랙트 배포 시작...");
  
  // 컨트랙트 팩토리 가져오기
  const StudentInfo = await hre.ethers.getContractFactory("StudentInfo");
  
  // 백 학생의 정보로 배포
  const studentInfo = await StudentInfo.deploy("92113633", "백");
  
  await studentInfo.waitForDeployment();
  
  const contractAddress = await studentInfo.getAddress();
  
  console.log("✅ StudentInfo 컨트랙트가 배포되었습니다!");
  console.log("📍 컨트랙트 주소:", contractAddress);
  
  // 배포된 컨트랙트 테스트
  console.log("\n🔍 컨트랙트 정보 확인:");
  const studentId = await studentInfo.studentId();
  const studentName = await studentInfo.studentName();
  const owner = await studentInfo.owner();
  
  console.log("학번:", studentId);
  console.log("이름:", studentName);
  console.log("소유자:", owner);
  
  // getInfo 함수 테스트
  console.log("\n📋 getInfo() 함수 테스트:");
  const [id, name] = await studentInfo.getInfo();
  console.log("반환된 학번:", id);
  console.log("반환된 이름:", name);
  
  console.log("\n🎉 모든 테스트 완료!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ 배포 실패:", error);
    process.exit(1);
  });