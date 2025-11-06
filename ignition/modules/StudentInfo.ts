import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StudentInfoModule = buildModule("StudentInfoModule", (m) => {
  // 여기에 실제 학번과 이름을 입력하세요
  const studentId = "20201234"; // 실제 학번으로 변경
  const studentName = "홍길동"; // 실제 이름으로 변경
  
  const studentInfo = m.contract("StudentInfo", [studentId, studentName]);

  return { studentInfo };
});

export default StudentInfoModule;