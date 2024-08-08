const Spacebear = artifacts.require("Spacebear");

contract("Spacebaear", (account) => {
  const defaultAddress = "0x0000000000000000000000000000000000000000";
  // web3.utils.ToBN("0");
  let spacebearInstance;
  let expect;

  before(async () => {
    spacebearInstance = await Spacebear.deployed();
    const chai = await import('chai');
    expect = chai.expect;
  });

  it("credit an nft to an account", async() => {
    const txResult = await spacebearInstance.safeMint(account[1], "spacebear_1.json");
    expect(txResult.logs[0].event).to.equal("Transfer");
    const owner = await spacebearInstance.ownerOf(0);
    expect(owner).to.equal(account[1]);
  });
});