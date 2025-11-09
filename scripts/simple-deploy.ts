// 간단한 배포 스크립트
// Hardhat 없이 직접 ethers.js 사용

import { ethers } from 'ethers';

// 컨트랙트 ABI와 바이트코드
const contractABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_studentId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_studentName",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "studentId",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "studentName",
        "type": "string"
      }
    ],
    "name": "InfoUpdated",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "getInfo",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "studentId",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "studentName",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_studentId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_studentName",
        "type": "string"
      }
    ],
    "name": "updateInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

async function deployContract() {
  try {
    // Sepolia 네트워크 연결
    const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
    const wallet = new ethers.Wallet(process.env.SEPOLIA_PRIVATE_KEY!, provider);
    
    console.log("🚀 배포 시작...");
    console.log("배포자 주소:", wallet.address);
    
    // 주의: 실제 배포를 위해서는 컨트랙트 바이트코드가 필요합니다
    // Remix IDE 사용을 권장합니다
    
    console.log("✨ Remix IDE를 사용하여 수동 배포를 진행하세요");
    console.log("학번: 92113633");
    console.log("이름: 백");
    
  } catch (error) {
    console.error("❌ 배포 실패:", error);
  }
}

export { contractABI, deployContract };