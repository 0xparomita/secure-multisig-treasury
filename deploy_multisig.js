const { ethers } = require("hardhat");

async function main() {
  const [deployer, owner2, owner3] = await ethers.getSigners();
  const owners = [deployer.address, owner2.address, owner3.address];
  const threshold = 2;

  console.log("Deploying MultiSig with 2-of-3 owners...");
  const MultiSig = await ethers.getContractFactory("MultiSigWallet");
  const wallet = await MultiSig.deploy(owners, threshold);

  await wallet.deployed();
  console.log("MultiSig deployed to:", wallet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
