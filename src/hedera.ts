// This code is generated automatically using deployer's(console.hashingsystems.com) interface generator
// @createdDate : Sun Apr 19 2020 23:27:38 GMT-0500 (Central Daylight Time) 
// @dependencies : hash-sdk 
// @language : TypeScript
// hash-sdk should be installed 
// # npm i hash-sdk 
// # yarn add hash-sdk 

import hash from "hash-sdk"; 

const hashSdk = {...hash}

   /**
    * Initializes an account for interacting with below functions
    */
    interface IAccountDataLike {
        accountId:string,
        network:string,
        keys?:{
            privateKey:string
            publicKey?:string
        },
        mnemonics?:string
    }
 const init = async()=> {
        try{
            // Setting it default to software it talks to sdk directly
            await hash.setProvider('software');
            const accountData :IAccountDataLike= {
                accountId: ''/*<accountId(0.0.1234)>*/,
                network: ''/*<mainnet | testnet>*/,
                keys:{
                    privateKey:''/*<aplphanumeric user privatekey>*/
                },
                mnemonics:''/*<phrase>*/
            }
            await hash.setAccount(accountData);
        }catch(e){
            console.log('Error in intializing account:::',e);
            throw e;
        }
    }

   interface IFileRetrieveData {
        fileId:string,
        memo:string
      }

 const file_hnstxt = {
      fileRetrieve : async() => {
          const data :IFileRetrieveData= {
              memo: "file retrieve",
              fileId: "0.0.39692"
          }
          return await hash.triggerFileRetrieve(data);
      }
    }
interface ITopicUpdateData {
        topicId:string,
        memo?:string,
        topicName?:string,
        submitKeyList?:string|string[],
        expirationTime?:string|number
      }
      interface ITopicInfoData {
        topicId:string,
        memo:string
      }
      interface ISubmitMessageData {
        topicId:string,
        memo:string,
        message:string
      }


 const topic_testing = {
      topicUpdate : async(updatedData:ITopicUpdateData) => {
          const data :ITopicUpdateData= {
              topicId:"0.0.39693"
          }
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
          const data  :ITopicInfoData= {
              memo: "consensus topic info",
              topicId:"0.0.39693"
          }
          return await hash.triggerTopicInfo(data);
      },
      

      topicDelete : async() => {
          const data :ITopicInfoData= {
              memo: "consensus topic delete",
              topicId:"0.0.39693"
          }
          return await hash.triggerTopicDelete(data);
      },
      

      messageSubmit : async(message:string=" ") => {
          const data :ISubmitMessageData= {
              memo: "consensus message submit",
              topicId:"0.0.39693",
              message
          }
          return await hash.triggerSubmitMessage(data);
      }
    }
    

 const topic_2345 = {
      topicUpdate : async(updatedData:ITopicUpdateData) => {
          const data :ITopicUpdateData= {
              topicId:"0.0.39695"
          }
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
          const data  :ITopicInfoData= {
              memo: "consensus topic info",
              topicId:"0.0.39695"
          }
          return await hash.triggerTopicInfo(data);
      },
      

      topicDelete : async() => {
          const data :ITopicInfoData= {
              memo: "consensus topic delete",
              topicId:"0.0.39695"
          }
          return await hash.triggerTopicDelete(data);
      },
      

      messageSubmit : async(message:string=" ") => {
          const data :ISubmitMessageData= {
              memo: "consensus message submit",
              topicId:"0.0.39695",
              message
          }
          return await hash.triggerSubmitMessage(data);
      }
    }

export default {
    init,
    file_hnstxt,
    topic_testing,
    topic_2345,
    hashSdk
}