require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks : {
    sepolia :{
      url : "https://sepolia.infura.io/v3/0faf246c4dde4496ab2d4727068330ba",
      accounts : ["f4ded818e12218c2f26d30b171b560a378d8126c6e7440f9658e854e60eace6d"],
      //0x5b37FC465f2396007a1a00827D26b8cf0cE1d456
    },
    PolygonZkEVM  : {
      url : "https://rpc.public.zkevm-test.net",
      accounts : ["f4ded818e12218c2f26d30b171b560a378d8126c6e7440f9658e854e60eace6d"],
      //0x407012E405E64De531590f19b8Dc166D44b39C42
    },
    ScrollSepolia : {
      url : "https://sepolia-rpc.scroll.io",
      accounts : ["f4ded818e12218c2f26d30b171b560a378d8126c6e7440f9658e854e60eace6d"],
      //0x407012E405E64De531590f19b8Dc166D44b39C42
    },
    /*Celo : {
      url : "https://celo-alfajores.infura.io/v3/0faf246c4dde4496ab2d4727068330ba",
      accounts : ["f4ded818e12218c2f26d30b171b560a378d8126c6e7440f9658e854e60eace6d"],
    },*/
  }
};
