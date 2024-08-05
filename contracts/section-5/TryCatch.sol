// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract TryCatch {
  error NotAllowedError(string);
  function aFunction() external pure {
    // require(false, "Error Message");
    // assert(false);
    revert NotAllowedError("Not allowed.");
  }
}

contract Test {
  event ErrorLogging(string reason);
  event ErrorLogCode(uint code);
  event ErrorLogBytes(bytes lowLevelData);

  function bFunction() public {
    TryCatch ex = new TryCatch();
    
    try ex.aFunction() {
    } catch Error(string memory reason) { // * used for require statements.
      emit ErrorLogging(reason);
    } catch Panic(uint errorCode) { // * used for assert statements.
      emit ErrorLogCode(errorCode);
    } catch(bytes memory lowLevelData) { // * used for custom errors.
      emit ErrorLogBytes(lowLevelData); 
    }
  }
}