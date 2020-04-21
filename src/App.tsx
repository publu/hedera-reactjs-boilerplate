import React from 'react';
import logo from './logo.svg';
import './App.css';
import hedera from './hedera';


function App() {

  const dataContractDeploy = {
    fileid: "",
    memo: "deployer sc deploy",
    params: '["paul"]',
    abi: '[{"constant":false,"inputs":[{"name":"newMessage","type":"string"}],"name":"update","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initMessage","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]',
    bytecode: "608060405234801561001057600080fd5b506040516103d73803806103d7833981018060405281019080805182019291905050508060009080519060200190610049929190610050565b50506100f5565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061009157805160ff19168380011785556100bf565b828001600101855582156100bf579182015b828111156100be5782518255916020019190600101906100a3565b5b5090506100cc91906100d0565b5090565b6100f291905b808211156100ee5760008160009055506001016100d6565b5090565b90565b6102d3806101046000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633d7403a314610051578063e21f37ce146100ba575b600080fd5b34801561005d57600080fd5b506100b8600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061014a565b005b3480156100c657600080fd5b506100cf610164565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561010f5780820151818401526020810190506100f4565b50505050905090810190601f16801561013c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b8060009080519060200190610160929190610202565b5050565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101fa5780601f106101cf576101008083540402835291602001916101fa565b820191906000526020600020905b8154815290600101906020018083116101dd57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061024357805160ff1916838001178555610271565b82800160010185558215610271579182015b82811115610270578251825591602001919060010190610255565b5b50905061027e9190610282565b5090565b6102a491905b808211156102a0576000816000905550600101610288565b5090565b905600a165627a7a723058201bc75883782c0954b2b3136ce40d9d577918dbc74990ea3edfcc02efe46e45820029",
    amount: 0,
    contractName: "Contract1",
  }
  
  const setProvider = async() => {
    hedera.hashSdk.setProviderUI((err,res)=>{
      console.log('Response:::',res);
    });
  }
  const setAccount = async() => {
    hedera.hashSdk.setAccountUI((err,res)=>{
      console.log('Response:::',res);
    });
  }
  // initialize()
  const checkBalance = async() => {
    let resp =await hedera.hashSdk.triggerCheckBalance({accountID:'0.0.1210'}, (err, res) => {
      console.log('SUCCESS ACCOUNT_INFO cb:::', res);
      console.log('ERROR ACCOUNT_INFO cb:::', err);
    });
    console.log('SUCCESS ACCOUNT_INFO:::', resp);
  }
  const cryptoTransfer = async() => {
    const data = {
      memo: "crypto transfer",
      contentid: "test1",
      redirect: '{"nonPayingAccount": "/nomicropaymentreceived.html"}',
      recipientlist: `[{"tinybars": "${1000000}", "to":"${`0.0.1210`}"}]`,
    }
    
    let resp =await hedera.hashSdk.triggerCryptoTransfer(data, (err, res) => {
      console.log('SUCCESS CRYPTO cb:::', res);
      console.log('ERROR CRYPTO cb:::', err);
    });
    console.log('SUCCESS CRYPTO:::', resp);
  }
  const contractCall = async() => {
    const data = {
      contractid: "0.0.138993",
      memo: "deployer sc call",
      params: "[]",
      paymentserver: "https://mps.hedera.hashSdk.ngsystems.com",
      abi: "[{\"constant\":true,\"name\":\"message\",\"outputs\":[{\"n\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\",\"inputs\":[]}]",
      amount: 0
    }
    let resp =await hedera.hashSdk.triggerSmartContract(data, (err, res) => {
      console.log('SUCCESS CONTRACT_CALL cb:::', res);
      console.log('ERROR CONTRACT_CALL cb:::', err);
    });
    console.log('SUCCESS CONTRACT_CALL:::', resp);
  }
  
  const contractDeploy = async() => {
    const data = dataContractDeploy;
    let resp =await hedera.hashSdk.deploySmartContract(data, (err, res) => {
      console.log('SUCCESS CONTRACT_DEPLOY cb:::', res);
      console.log('ERROR CONTRACT_DEPLOY cb:::', err);
    });
    console.log('SUCCESS CONTRACT_DEPLOY:::', resp);
  }
  const fileCreate = async() => {
    const data = {
      memo: "file create",
      fileContent: "[84,104,105,115,32,105,115,32,102,105,108,101,32,119,105,116,104,32,114,97,110,100,111,109,32,116,101,115,116,32,99,97,115,101,115,10]",
      fileSize:36
    }
    let resp =await hedera.hashSdk.triggerFileCreate(data, (err, res) => {
      console.log('SUCCESS FILE_CREATE cb:::', res);
      console.log('ERROR FILE_CREATE cb:::', err);
    });
    console.log('SUCCESS FILE_CREATE:::', resp);
  }
  const fileRetrieve = async() => {
    const data = {
      memo: "file retrieve",
      fileId: "0.0.140565"
  }
    let resp =await hedera.hashSdk.triggerFileRetrieve(data, (err, res) => {
      console.log('SUCCESS FILE_RETRIEVE cb:::', res);
      console.log('ERROR FILE_RETRIEVE cb:::', err);
    });
    console.log('SUCCESS FILE_RETRIEVE:::', resp);
  }
  const topicCreate = async() => {
    const data = {
      memo: "new-topic",
      submitKeyList:JSON.stringify(["b35376234d87f3d208de97359b607202f6e67ee76b8daf81f12320eb2af5123e","19d743b3fc98ffac232fc4cf5387e7a02ef187b1f84e1352c7059dc8a14d7827"])
  }
    let resp =await hedera.hashSdk.triggerTopicCreate(data, (err, res) => {
      console.log('SUCCESS TOPIC_CREATE cb:::', res);
      console.log('ERROR TOPIC_CREATE cb:::', err);
    });
    console.log('SUCCESS TOPIC_CREATE:::', resp);
  }
  const topicUpdate = async() => {
    const data = {
      memo: "consensus update topic",
      message:'Hi Paul Lobo',
      topicId:'0.0.187476'
    }
    let resp =await hedera.hashSdk.triggerTopicUpdate(data, (err, res) => {
      console.log('SUCCESS TOPIC_UPDATE cb:::', res);
      console.log('ERROR TOPIC_UPDATE cb:::', err);
    });
    console.log('SUCCESS TOPIC_UPDATE:::', resp);
  }
  const topicInfo = async() => {
    const data = {
      memo: "consensus info topic",
      topicId:'0.0.202966'
    }
    let resp =await hedera.hashSdk.triggerTopicInfo(data, (err, res) => {
      console.log('SUCCESS TOPIC_INFO cb:::', res);
      console.log('ERROR TOPIC_INFO cb:::', err);
    });
    console.log('SUCCESS TOPIC_INFO:::', resp);
  }
  const topicDelete = async() => {
    const data = {
      memo: "consensus delete topic",
      topicId:'0.0.202966'
    }
    let resp =await hedera.hashSdk.triggerTopicDelete(data, (err, res) => {
      console.log('SUCCESS TOPIC_DELETE cb:::', res);
      console.log('ERROR TOPIC_DELETE cb::: ', err);
    });
    console.log('SUCCESS TOPIC_DELETE:::', resp);
  }
  const submitMessage = async() => {
    const data = {
      memo: "consensus message submit",
      message:'Hi Paul',
      topicId:'0.0.187476'
    }
    let resp =await hedera.hashSdk.triggerSubmitMessage(data, (err, res) => {
      console.log('SUCCESS SUBMIT_MESSAGE cb:::', res);
      console.log('ERROR SUBMIT_MESSAGE cb:::', err);
    });
    console.log('SUCCESS SUBMIT_MESSAGE:::', resp);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://docs.hedera.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Hedera Hashgraph
        </a>
      <p>
          Step 1: Set provider chooses the wallet
      </p>
      <button onClick={()=>setProvider()}> SET PROVIDER </button>
      <p>
          Step 2 (optional): If wallet needs to be set manually
      </p>
      <button onClick={()=>setAccount()}> SET ACCOUNT </button>
      <p>
          Step 3: Once accounts are set. These are the functions available:
      </p>
      <button onClick={()=>checkBalance()}> ACCOUNT INFO </button>
      <button onClick={()=>cryptoTransfer()}> CRYPTO TRANSFER </button>
      <button onClick={()=>contractCall()}> CONTRACT CALL </button>
      <button onClick={()=>contractDeploy()}> CONTRACT DEPLOY </button>
      <button onClick={()=>fileCreate()}> FILE CREATE </button>
      <button onClick={()=>fileRetrieve()}> FILE RETRIEVE </button>
      <button onClick={()=>topicCreate()}> TOPIC CREATE </button>
      <button onClick={()=>topicUpdate()}> TOPIC UPDATE </button>
      <button onClick={()=>topicInfo()}> TOPIC INFO </button>
      <button onClick={()=>topicDelete()}> TOPIC DELETE </button>
      <button onClick={()=>submitMessage()}> SUBMIT MESSAGE</button>
      </header>
    </div>
  );
}

export default App;
