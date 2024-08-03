// * SECTION 3 

// const Types = artifacts.require("Types");
// const WrapAround = artifacts.require("WrapAround");
// const Strings = artifacts.require("Strings");
// const Addresses = artifacts.require("Addresses");
// const MsgSender = artifacts.require("MsgSender");
// const ViewPure = artifacts.require("ViewPure");
// const Constructor = artifacts.require("Constructor");

// module.exports = function (deployer) {
//   deployer.deploy(Types);
//   deployer.deploy(WrapAround);
//   deployer.deploy(Strings);
//   deployer.deploy(Addresses);
//   deployer.deploy(MsgSender);
//   deployer.deploy(ViewPure);
//   deployer.deploy(Constructor);
// };

// * SECTION 4 

const SampleContract = artifacts.require("SampleContract");
const SampleCallback = artifacts.require("SampleCallback");
const SmartMoney = artifacts.require("SmartMoney");

module.exports = async function (deployer) {
  await deployer.deploy(SampleContract);
  await deployer.deploy(SampleCallback);
  await deployer.deploy(SmartMoney);
};
