
const hre = require("hardhat");

async function main() {
  
  const Add = await hre.ethers.getContractFactory("Add");
  const add = await Add.deploy();

  await Add.deployed();

  console.log("Deployed to : ", add.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//Contract address : 0xc21d985f43520741CBB25C58EbCC78efDAB49E86