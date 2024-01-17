
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  // Get the contract factory
  const MyNFT = await hre.ethers.getContractFactory("MyNFT");

  // Deploy the contract
  const mynft = await MyNFT.deploy();

  // Wait for the contract to be deployed
  await mynft.deployed();

  // Log the contract address
  console.log("MyNFT contract deployed to:", mynft.address);

}

// Execute the deployment function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
