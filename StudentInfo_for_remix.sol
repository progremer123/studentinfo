/**
 * Remix IDE 실행 가이드
 * 
 * 1. https://remix.ethereum.org 접속
 * 2. 새 파일 생성: StudentInfo.sol
 * 3. 아래 코드를 복사하여 붙여넣기
 * 4. 컴파일 후 배포
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

/**
 * 배포 시 Constructor 파라미터:
 * _studentId: "92113633"
 * _studentName: "백"
 */