// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.6.0/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.6.0/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.6.0/access/Ownable.sol";

contract OnlabCoin is ERC20, ERC20Burnable, Ownable {
    address[] VIPs; 

    constructor() ERC20("OnlabCoin", "OLC") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
        VIPs.push(msg.sender); 
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function searchForVIP(address VIP) private view returns(int256) {
        uint256 i;
        for(i = 0; i < VIPs.length; i++)
        {
            if (VIPs[i] == VIP)
            {
                return int256(i);
            }
        }

        return int256(-1);
        
    }

    function addVIP(address VIP) public onlyOwner {
        int256 i = searchForVIP(VIP);
        if (i < 0) VIPs.push(VIP);
    }

    function removeVIP(address VIP) public onlyOwner {
        int256 i = searchForVIP(VIP);
        if (i >= 0) {
            VIPs[uint256(i)] = VIPs[VIPs.length - 1];
            VIPs.pop();
        } 
    }
}