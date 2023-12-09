// put auth-key in sdk 

import {FusionSDK, NetworkEnum, QuoteParams,PrivateKeyProviderConnector,OrderInfo} from '@1inch/fusion-sdk'
import {Quote} from "@1inch/fusion-sdk/api";
import Web3 from "web3";
import {PresetEnum} from "@1inch/fusion-sdk/api";
import { ethers } from "ethers";

 const pk = '';
  const network = NetworkEnum.POLYGON;
const authKey = '';  // wAfNeT6H3HJbpGzxwy9Jb8OEzPlDMx3q
 const ethNetworkRPC =  ''; // use polygon
    // https://rpc.ankr.com/polygon/150aa8fab13e61e50ba49ac1cd0c06e26ae190e4c907691044886fdda314bfb6
const   userAddress  = "";  //0x676F5DB4407f16FF97e0a0F20694FC9665b9b7cF
const web3 = new Web3(new Web3.providers.HttpProvider(ethNetworkRPC));


// console.log(signer);

const blockchainProvider = new PrivateKeyProviderConnector(
    pk,
    // @ts-ignore
    web3
)

 export const sdk = new FusionSDK({
    url: "https://api.1inch.dev/fusion",

    network: network,
    blockchainProvider,
    authKey: authKey,
}) 

// console.log(sdk);
 
   const  fromTokenAddress= ''; //0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
   const  toTokenAddress= ''; // 0x6B175474E89094C44Da98b954EedeAC495271d0F
   const  amount= ''; //1000000000000000000

const params  = {

    fromTokenAddress,
    toTokenAddress,
    amount

}

export function getAddressFromPrivateKey(privateKey: string): string {
    const web3 = new Web3();
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    return account.address;
}

export async function createOrder(sdk: FusionSDK, from: string, to: string, amount: string, walletAddress: string, preset: PresetEnum) {
    try {

        console.log("==========================================================");
        console.log('Inside Fusion Transaction before creating order');
console.log("==========================================================");

        const txn =  await sdk.placeOrder({
            fromTokenAddress: from,
            toTokenAddress: to,
            amount: amount,
            walletAddress,
            preset,
        })
        console.log("=========================TXN ==================================");
        console.log(txn);
        console.log("=========================TXN ====================================");
    } catch (e) {
        console.log(e)
    }

}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


async function gettingQuoates(){
try{
    const quote = await sdk.getQuote(params) // this fetchjing quotes
    console.log("=============================================");
    console.log(quote);
    await sleep(1000);

    const finalAmount = quote.toTokenAmount ;
    console.log("=============================================");

    console.log("Calling Create Transaction Function");

  await createOrder(sdk,
        fromTokenAddress,
        toTokenAddress,
        amount,
        // getAddressFromPrivateKey(pk),
       userAddress ,
        PresetEnum.fast);
        await sleep(1000);

console.log("==========================================================");
        console.log('Finished with Fusion Order...')
console.log("==========================================================");

}
catch(e){
    console.log(e);
} 

    }

async function allInOne(){

    try{
        const quote = await sdk.getQuote(params) // this fetchjing quotes
        await sleep(1000);

        console.log("=============================================");
        // console.log(quote);
        const toTokenAmount = quote.toTokenAmount ;

        console.log("=============================================");
    
        console.log("Calling Create Transaction Function");
    
     await  createOrder(sdk,
            fromTokenAddress,
            toTokenAddress,
            amount,
            // getAddressFromPrivateKey(pk),
           userAddress ,
            PresetEnum.fast);

            await sleep(1000);

    console.log("==========================================================");
    console.log('Finished with Fusion Order...');
    console.log("==========================================================");
    console.log('Staking starting........');
    console.log("==========================================================");

 // create a instance of the contract 
//  const providersAccounts = await web3.eth.getAccounts();
	// const defaultAccount = providersAccounts[0];

  const abi: any = require('./MyContractAbi.json');
  const deployedAddress = "";
const myContract: any = new web3.eth.Contract(abi, deployedAddress);
myContract.handleRevert = true;
  
const defaultAccount: string = '' ; //0x1FE78EAdDa7f4B421bAfBC70E049B91462cC8C0A

//  // call that function in the contract and stake
 try {

  // Increment my numbern
  // change the name
  const receipt: any = await myContract.methods.stake(
    toTokenAddress,
    toTokenAmount  // change to the market amount of swap token
  ).send({
    from: defaultAccount
  });
  console.log('Transaction Hash: ' + receipt.transactionHash);

} catch (error) {
  console.error(error);
}

    console.log("==========================================================");
    console.log('Staking Done........');
    console.log("==========================================================");
    
    }
    catch(e){
        console.log(e);
    } 


}

    gettingQuoates();
    allInOne();

