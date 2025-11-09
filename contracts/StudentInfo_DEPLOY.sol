/*
=== Remix IDE 배포 단계별 가이드 ===

1. https://remix.ethereum.org/ 접속

2. 새 파일 생성: contracts/StudentInfo.sol

3. 아래 코드 복사하여 붙여넣기
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract StudentInfo {
    string public studentId;
    string public studentName;
    address public owner;
    
    event InfoUpdated(string studentId, string studentName);
    
    constructor(string memory _studentId, string memory _studentName) {
        studentId = _studentId;
        studentName = _studentName;
        owner = msg.sender;
    }
    
    function updateInfo(string memory _studentId, string memory _studentName) public {
        require(msg.sender == owner, "Only owner can update info");
        studentId = _studentId;
        studentName = _studentName;
        emit InfoUpdated(_studentId, _studentName);
    }
    
    function getInfo() public view returns (string memory, string memory) {
        return (studentId, studentName);
    }
}

/*
=== 배포 설정 ===

4. Solidity Compiler 탭:
   - Compiler: 0.8.28
   - "Compile StudentInfo.sol" 클릭

5. Deploy & Run Transactions 탭:
   - Environment: "Injected Provider - MetaMask"
   - Account: MetaMask 계정 연결
   - Contract: StudentInfo 선택
   - Deploy 섹션에서 Constructor 파라미터 입력:
     * _studentId: "92113633"
     * _studentName: "백이랑"
   - "transact" 버튼 클릭
   - MetaMask에서 트랜잭션 승인

6. 배포 완료 후:
   - 하단 "Deployed Contracts"에서 컨트랙트 주소 복사
   - 주소는 0x로 시작하는 42자리 문자열
*/