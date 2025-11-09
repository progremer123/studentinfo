"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";
const CONTRACT_ABI = [
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

export default function Home() {
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 컨트랙트가 배포되지 않았을 때 임시 정보 표시
    if (!CONTRACT_ADDRESS) {
      setStudentId("92113633");
      setStudentName("백이랑");
    }
    connectWallet();
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);

        // 네트워크 확인
        const network = await provider.getNetwork();
        console.log("Connected network:", network.name, network.chainId);
        
        if (Number(network.chainId) !== 11155111) { // Sepolia chainId
          alert("Sepolia 테스트넷으로 변경해주세요!");
          return;
        }

        const signer = await provider.getSigner();
        if (CONTRACT_ADDRESS) {
          const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
          setContract(contractInstance);
          await loadStudentInfo(contractInstance);
        }
      } catch (error) {
        console.error("Error connecting wallet:", error);
        alert("지갑 연결 중 오류가 발생했습니다. Sepolia 네트워크를 확인해주세요.");
      }
    } else {
      alert("MetaMask를 설치해주세요!");
    }
  };

  const addSepoliaNetwork = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: '0xaa36a7', // 11155111 in hex
            chainName: 'Sepolia',
            nativeCurrency: {
              name: 'SepoliaETH',
              symbol: 'SepoliaETH',
              decimals: 18
            },
            rpcUrls: ['https://sepolia.drpc.org'],
            blockExplorerUrls: ['https://sepolia.etherscan.io/']
          }]
        });
        alert("Sepolia 네트워크가 추가되었습니다!");
      } catch (error) {
        console.error("네트워크 추가 실패:", error);
        alert("네트워크 추가에 실패했습니다.");
      }
    }
  };

  const loadStudentInfo = async (contractInstance: ethers.Contract) => {
    try {
      setLoading(true);
      console.log("📋 컨트랙트 정보 로드 시작...");
      console.log("📍 컨트랙트 주소:", CONTRACT_ADDRESS);
      
      // 개별 함수 호출로 테스트
      console.log("🔍 studentId 함수 호출...");
      const studentIdResult = await contractInstance.studentId();
      console.log("✅ studentId 결과:", studentIdResult);
      
      console.log("🔍 studentName 함수 호출...");
      const studentNameResult = await contractInstance.studentName();
      console.log("✅ studentName 결과:", studentNameResult);
      
      console.log("🔍 getInfo 함수 호출...");
      const [id, name] = await contractInstance.getInfo();
      console.log("✅ getInfo 결과:", id, name);
      
      setStudentId(id);
      setStudentName(name);
      console.log("🎉 학생 정보 로드 완료!");
    } catch (error: any) {
      console.error("❌ 학생 정보 로드 실패:", error);
      // 더 자세한 오류 정보
      if (error?.code) {
        console.error("오류 코드:", error.code);
      }
      if (error?.reason) {
        console.error("오류 이유:", error.reason);
      }
      if (error?.message) {
        console.error("오류 메시지:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Web3.0 Student Information DApp
          </h1>
          <p className="text-lg text-gray-600">
            Ethereum Sepolia 테스트넷에 배포된 스마트 컨트랙트
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">학생 정보</h2>
          
          {!account ? (
            <div className="text-center space-y-4">
              <button
                onClick={connectWallet}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mr-4"
              >
                MetaMask 연결하기
              </button>
              <button
                onClick={addSepoliaNetwork}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                Sepolia 네트워크 추가
              </button>
              <p className="text-sm text-gray-600 mt-4">
                ⚠️ Sepolia 테스트넷에 연결되어야 합니다
              </p>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">연결된 지갑:</p>
                <p className="font-mono text-sm bg-gray-100 p-3 rounded">
                  {account}
                </p>
              </div>

              {loading ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-4 text-gray-600">정보를 불러오는 중...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      학번
                    </label>
                    <div className="p-4 bg-gray-50 rounded-lg border">
                      <span className="text-lg font-semibold text-gray-900">
                        {studentId || "정보를 불러오지 못했습니다"}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이름
                    </label>
                    <div className="p-4 bg-gray-50 rounded-lg border">
                      <span className="text-lg font-semibold text-gray-900">
                        {studentName || "정보를 불러오지 못했습니다"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">프로젝트 정보</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700">컨트랙트 주소:</h3>
              <p className="font-mono text-sm bg-gray-100 p-2 rounded break-all">
                {CONTRACT_ADDRESS || "배포 후 업데이트 예정"}
              </p>
              {CONTRACT_ADDRESS && (
                <a 
                  href={`https://sepolia.etherscan.io/address/${CONTRACT_ADDRESS}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm underline"
                >
                  Etherscan에서 확인하기 ↗
                </a>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">네트워크:</h3>
              <p>Ethereum Sepolia Testnet</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">기능:</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>학번과 이름을 블록체인에 저장</li>
                <li>스마트 컨트랙트를 통한 정보 조회</li>
                <li>MetaMask 지갑 연동</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
