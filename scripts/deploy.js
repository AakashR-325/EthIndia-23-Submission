const hre = require("hardhat");

async function main() {
  const StakingContract = await hre.ethers.getContractFactory("StakingContract");
  const stakingContract = await StakingContract.deploy();
  await stakingContract.waitForDeployment();

  console.log(`Staking contract deployed at : ${stakingContract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
