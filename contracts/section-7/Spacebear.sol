// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Spacebear is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
  uint256 private _nextTokenId;

  constructor()
    ERC721("MyToken", "MTK")
    Ownable(msg.sender)
  {}

  function _baseURI() internal pure override returns (string memory) {
    return "https://ethereum-blockchian-developer.com/2022-06-nft-truffle-hardhat-foundry/nftdata/";
  }

  function safeMint(address to, string memory uri) public onlyOwner {
    uint256 tokenId = _nextTokenId++;
    _safeMint(to, tokenId);
    _setTokenURI(tokenId, uri);
  }

  function tokenURI(uint256 tokenId)
    public
    pure
    override(ERC721, ERC721URIStorage)
    returns (string memory)
  {
    return string(abi.encodePacked(_baseURI(), "spacebear_", (tokenId+1), ".json"));
  }

  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721, ERC721URIStorage)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }
}