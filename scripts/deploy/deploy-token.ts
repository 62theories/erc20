import hre, { config, ethers } from "hardhat";
import { Greeter__factory, Token__factory } from "../../typechain";
import addressUtils from "../../utils/addresses";

export async function deployToken(tokenName: string, tokenSymbol: string) {
  //   const addressList = await addressUtils.getAddressList(hre.network.name);
  //   const [owner] = await ethers.getSigners();
  const tokenFactory = (await ethers.getContractFactory(
    "Token"
  )) as Token__factory;
  const tokenContract = await tokenFactory.deploy(tokenName, tokenSymbol);
  await tokenContract.deployTransaction.wait();
  await addressUtils.saveAddresses(hre.network.name, {
    Token: tokenContract.address,
  });
}
