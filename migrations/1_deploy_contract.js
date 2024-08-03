const Types = artifacts.require("Types");
const WrapAround = artifacts.require("WrapAround");
const Strings = artifacts.require("Strings");
const Addresses = artifacts.require("Addresses");
const MsgSender = artifacts.require("MsgSender");
const ViewPure = artifacts.require("ViewPure");
const Constructor = artifacts.require("Constructor");

module.exports = function (deployer) {
  deployer.deploy(Types);
  deployer.deploy(WrapAround);
  deployer.deploy(Strings);
  deployer.deploy(Addresses);
  deployer.deploy(MsgSender);
  deployer.deploy(ViewPure);
  deployer.deploy(Constructor);
};
