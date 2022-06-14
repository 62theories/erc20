import hre, { config, ethers } from "hardhat";
import { Greeter__factory } from "../../typechain";
import addressUtils from "../../utils/addresses";

export async function deployGreeter() {
  //   const addressList = await addressUtils.getAddressList(hre.network.name);
  //   const [owner] = await ethers.getSigners();
  const greeterFactory = (await ethers.getContractFactory(
    "Greeter"
  )) as Greeter__factory;
  const greeterContract = await greeterFactory.deploy("test");
  await greeterContract.deployTransaction.wait();
  await addressUtils.saveAddresses(hre.network.name, {
    Greeter: greeterContract.address,
  });
}
