import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StudentInfoModule = buildModule("StudentInfoModule", (m) => {
  // 실제 학번과 이름
  const studentId = "92113633"; // 백 학생의 학번
  const studentName = "백"; // 백 학생의 이름
  
  const studentInfo = m.contract("StudentInfo", [studentId, studentName]);

  return { studentInfo };
});

export default StudentInfoModule;