// SPDX-License-Identifier: MIT LICENSE

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

pragma solidity ^0.8.17.0;

//Fake token
//ejemplo de garantia estable
contract USDT is ERC20, ERC20Burnable, Ownable {
  //Token mockup 
  //Al ser mock introducir el monto de ej 100 mas 18 ceros para valor en gwei
  //para mintear el spender debe aprobar para depositar a otros contratos 

  using SafeERC20 for ERC20;

  constructor() ERC20("Tether USD", "USDT") {}

  function mint(uint256 amount) external onlyOwner {
    _mint(msg.sender, amount);
  }

}
