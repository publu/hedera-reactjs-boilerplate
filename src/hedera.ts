import hash from "hash-sdk";

 
interface TopicUpdateData {
    topicId: string;
    memo?: string;
    topicName?: string;
    submitKeyList?: string|string[];
    expirationTime?: string|number;
  }
  interface TopicInfoData {
    topicId: string;
    memo: string;
  }
  interface SubmitMessageData {
    topicId: string;
    memo: string;
    message: string;
  }
 
 
  interface AccountDataLike {
    accountId: string;
    network: string;
    keys?: {
        privateKey: string;
        publicKey?: string;
    };
    mnemonics?: string;
}
 
interface ContractFunctionCallData {
    contractid: string;
    memo: string;
    abi: Array<any>;
    params: Array<string|number|boolean>;
    amount?: number;
  }
 
  interface FileRetrieveData {
    fileId: string;
    memo: string;
  }
export default {
 
        /**
    * nitializes an account for interacting with below functions
    */
    init : async()=> {
        try{
            // Setting it default to software it talks to sdk directly
            await hash.setProvider("software");
            const accountData: AccountDataLike= {
                accountId: ""/*<accountId(0.0.1234)>*/,
                network: ""/*<mainnet | testnet>*/,
                keys:{
                    privateKey:""/*<aplphanumeric user privatekey>*/
                },
                mnemonics:""/*<phrase>*/
            };
            await hash.setAccount(accountData);
        }catch(e){
            console.log("Error in intializing account:::",e);
            throw e;
        }
    },
 
scHelloWorld : {
  update : async(newMessage: string) => {
      const data: ContractFunctionCallData= {
          memo: "smart contract call",
          contractid: "0.0.28595",
          abi:[{"constant":false,"inputs":[{"name":"newMessage","type":"string"}],"name":"update","payable":false,"stateMutability":"nonpayable","type":"function","contractId":{"contract":28595,"realm":0,"shard":0},"contractName":"HelloWorld"}],
          params:[newMessage],
          amount: 0
      };
      return await hash.triggerSmartContract(data);
    },
 
    message : async() => {
      const data: ContractFunctionCallData= {
          memo: "smart contract call",
          contractid: "0.0.28595",
          abi:[{"constant":true,"name":"message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","contractId":{"contract":28595,"realm":0,"shard":0},"contractName":"HelloWorld"}],
          params:["afas"],
          amount: 0
      };
      return await hash.triggerSmartContract(data);
    }
},
 
 
 
filemyTestFiletxt : {
      fileRetrieve : async() => {
          const data: FileRetrieveData= {
              memo: "file retrieve",
              fileId: "0.0.28596"
          };
          return await hash.triggerFileRetrieve(data);
      }
    },
 
 
topicjustATestTopic : {
      topicUpdate : async(updatedData: TopicUpdateData) => {
          const data: TopicUpdateData= {
              topicId:"0.0.28597"
          };
          if(updatedData.topicName){
              data.memo = updatedData.topicName;
          }
          if(updatedData.submitKeyList){
            data.submitKeyList = updatedData.submitKeyList;
          }
          if(updatedData.expirationTime){
            data.expirationTime = updatedData.expirationTime;
          }
          return await hash.triggerTopicUpdate(data);
      },
      
 
      topicInfo : async() => {
          const data: TopicInfoData= {
              memo: "consensus topic info",
              topicId:"0.0.28597"
          };
          return await hash.triggerTopicInfo(data);
      },
      
 
      topicDelete : async() => {
          const data: TopicInfoData= {
              memo: "consensus topic delete",
              topicId:"0.0.28597"
          };
          return await hash.triggerTopicDelete(data);
      },
      
 
      messageSubmit : async(message: string=" ") => {
          const data: SubmitMessageData= {
              memo: "consensus message submit",
              topicId:"0.0.28597",
              message
          };
          return await hash.triggerSubmitMessage(data);
      }
    } ,
    
    hashSdk : hash
};