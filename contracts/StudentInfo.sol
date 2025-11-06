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