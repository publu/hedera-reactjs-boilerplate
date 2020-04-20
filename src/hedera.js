// This code is generated automatically using deployer's(console.hashingsystems.com) interface generator
// @createdDate : Fri Apr 17 2020 09:46:20 GMT-0500 (Central Daylight Time) 
// @dependencies : hash-sdk 
// @language : JavaScript
// hash-sdk should be installed 
// # npm i hash-sdk 
// # yarn add hash-sdk c
const hash = require("hash-sdk");
const hashSdk = { ...hash };

/**
 * Initializes an account for interacting with below functions
 */
const init = async () => {
    try {
        // Setting it default to 'software' it talks to sdk directly
        // you can use other settings IF you're on the browser. 
        // Like prompt user to enter private key or mnemonic via a UI
        // As well as directly connect to Composer chrome extension
        await hash.setProvider('software');
        const accountData = {
            accountId: process.env.ACCOUNT_ID/*<accountId(0.0.1234)>*/,
            network: 'testnet'/*<mainnet | testnet>*/,
            keys: {
                privateKey: process.env.PRIV_KEY/*<aplphanumeric user privatekey>*/
            }
        }
        await hash.setAccount(accountData);
    } catch (e) {
        console.log('Error in intializing account:::', e);
        throw e;
    }
}
const file_hnstxt = {
    fileRetrieve: async () => {
        const data = {
            memo: "file retrieve",
            fileId: "0.0.39692"
        }
        return await hash.triggerFileRetrieve(data);
    }
}
const topic_testing = {
    topicUpdate: async (updatedData) => {
        const data = {
            topicId: "0.0.39693"
        }
        if (updatedData.topicName) {
            data.memo = updatedData.topicName;
        }
        if (updatedData.submitKeyList) {
            data.submitKeyList = updatedData.submitKeyList;
        }
        if (updatedData.expirationTime) {
            data.expirationTime = updatedData.expirationTime;
        }
        return await hash.triggerTopicUpdate(data);
    },
    topicInfo: async () => {
        const data = {
            memo: "consensus topic info",
            topicId: "0.0.39693"
        }
        return await hash.triggerTopicInfo(data);
    },
    topicDelete: async () => {
        const data = {
            memo: "consensus topic delete",
            topicId: "0.0.39693"
        }
        return await hash.triggerTopicDelete(data);
    },
    messageSubmit: async (message = " ") => {
        const data = {
            memo: "consensus message submit",
            topicId: "0.0.39693",
            message
        }
        return await hash.triggerMessageSubmit(data);
    }
}
const topic_2345 = {
    topicUpdate: async (updatedData) => {
        const data = {
            topicId: "0.0.39695"
        }
        if (updatedData.topicName) {
            data.memo = updatedData.topicName;
        }
        if (updatedData.submitKeyList) {
            data.submitKeyList = updatedData.submitKeyList;
        }
        if (updatedData.expirationTime) {
            data.expirationTime = updatedData.expirationTime;
        }
        return await hash.triggerTopicUpdate(data);
    },
    topicInfo: async () => {
        const data = {
            memo: "consensus topic info",
            topicId: "0.0.39695"
        }
        return await hash.triggerTopicInfo(data);
    },
    topicDelete: async () => {
        const data = {
            memo: "consensus topic delete",
            topicId: "0.0.39695"
        }
        return await hash.triggerTopicDelete(data);
    },
    messageSubmit: async (message = " ") => {
        const data = {
            memo: "consensus message submit",
            topicId: "0.0.39695",
            message
        }
        return await hash.triggerMessageSubmit(data);
    }
}
export default {
    init,
    file_hnstxt,
    topic_testing,
    topic_2345,
    hashSdk
}