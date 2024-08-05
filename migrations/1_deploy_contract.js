// * SECTION 6 

const Event = artifacts.require("Event");
const InheritanceModifier = artifacts.require("InheritanceModifier");
const CoffeeToken = artifacts.require("CoffeeToken");
const TokenSale = artifacts.require("TokenSale");

module.exports = async function (deployer) {
  await deployer.deploy(Event);
  await deployer.deploy(InheritanceModifier);
  const coffeeToken = await deployer.deploy(CoffeeToken);
  await deployer.deploy(TokenSale, coffeeToken.address);
};

// * SECTION 5

// const Mapping = artifacts.require("Mapping");
// const PracticalMapping = artifacts.require("PracticalMapping");
// const Struct = artifacts.require("Struct");
// const MappingStruct = artifacts.require("MappingStructs");
// const ExceptionRequire = artifacts.require("ExceptionRequire");
// const TryCatch = artifacts.require("TryCatch");
// const Sender = artifacts.require("Sender");
// const ReceiverNoAction = artifacts.require("ReceiverNoAction");
// const ReceiverAction = artifacts.require("ReceiverAction");
// const ContractOne = artifacts.require("ContractOne");
// const ContractTwo = artifacts.require("ContractTwo");
// const SmartWallet = artifacts.require("SmartWallet");

// module.exports = async function (deployer) {
//   await deployer.deploy(Mapping);
  // await deployer.deploy(PracticalMapping);
  // await deployer.deploy(Struct);
  // await deployer.deploy(MappingStruct);
  // await deployer.deploy(ExceptionRequire);
  // await deployer.deploy(TryCatch);
  // await deployer.deploy(Sender);
  // await deployer.deploy(ReceiverAction);
  // await deployer.deploy(ReceiverNoAction);
  // await deployer.deploy(ContractOne);
  // await deployer.deploy(ContractTwo);
  // await deployer.deploy(SmartWallet);
// };

// * SECTION 4 

// const SampleContract = artifacts.require("SampleContract");
// const SampleCallback = artifacts.require("SampleCallback");
// const SmartMoney = artifacts.require("SmartMoney");

// module.exports = async function (deployer) {
//   await deployer.deploy(SampleContract);
//   await deployer.deploy(SampleCallback);
//   await deployer.deploy(SmartMoney);
// };

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
  // deployer.deploy(WrapAround);
  // deployer.deploy(Strings);
  // deployer.deploy(Addresses);
  // deployer.deploy(MsgSender);
  // deployer.deploy(ViewPure);
  // deployer.deploy(Constructor);
// };