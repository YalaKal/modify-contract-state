
const hre = require("hardhat");

async function main() {
  
  const ModifyVariable = await hre.ethers.getContractFactory("ModifyVariable");
  const modifyVariable = await ModifyVariable.deploy(10, "Diner Des Cons")
  await modifyVariable.deployed();

  console.log(
    `ModifyVariable Contract deployed ad ${modifyVariable.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
