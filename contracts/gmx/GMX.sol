// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "../tokens/MintableBaseToken.sol";

contract GMX is MintableBaseToken {
    constructor() public MintableBaseToken("MOX", "MOX", 0) {
    }

    function id() external pure returns (string memory _name) {
        return "MOX";
    }
}
