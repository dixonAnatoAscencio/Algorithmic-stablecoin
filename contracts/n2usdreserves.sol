// SPDX-License-Identifier: MIT LICENSE


pragma solidity ^0.8.17.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

//Smart contract de reserva

contract N2dUSDReserves is Ownable, ReentrancyGuard, AccessControl { 
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    uint256 public currentReserveCount;

    struct ReserveVault {
        IERC20 collateral;
        uint256 amount;
    }

    mapping (uint256 => ReserveVault) public rsvVault;

    event Deposit(uint256 indexed pid, uint256 amount);
    event Withdraw(uint256 indexed pid, uint256 amount);

    bytes32 public constant MANAGER_ROLE = keccak256("MANAGER_ROLE");

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _setupRole(MANAGER_ROLE, _msgSender());
    }
 
    function checkReserveDuplicate(IERC20 _colToken) internal view {
        for (uint256 _pid = 0; _pid < currentReserveCount; _pid++) {//Si agregamos un boveda evitaremos duplicarla
            require(rsvVault[_pid].collateral != _colToken, "Collateral Contract Already Added");
        }
    }

    function addReserve(IERC20 _colToken) external {
        require(hasRole(MANAGER_ROLE, _msgSender()), "Not allowed");//Solo puede ser llamada por el rol de administrador 
        checkReserveDuplicate(_colToken);//Aseguramos que la direccion no este ya agregada como una boveda
        rsvVault[currentReserveCount].collateral = _colToken;//Agregamos la boveda
        currentReserveCount++;//Aumemta el contador de las bovedas agregadas
    }

    //Funcion para depositar la garantia 
    function deposit(uint256 _pid, uint256 _amount) external {//Pid de la boveda
        require(hasRole(MANAGER_ROLE, _msgSender()), "Not allowed");
        IERC20 reserve = rsvVault[_pid].collateral;//En que boveda se van a depositar los tokens que Pid
        reserve.safeTransferFrom(address(msg.sender), address(this), _amount);
        uint256 currentAmount = rsvVault[_pid].amount;//checkeo del saldo actual 
        rsvVault[_pid].amount = currentAmount.add(_amount);
        emit Deposit(_pid, _amount);
    }

    function withdraw(uint256 _pid, uint256 _amount) external {//Funcion para retirar la garantia 
        require(hasRole(MANAGER_ROLE, _msgSender()), "Not allowed");
        IERC20 reserve = rsvVault[_pid].collateral;//en que Pid de boveda se van a depositar los tokens 
        uint256 currentAmount = rsvVault[_pid].amount;//Check del saldo actual 
        if (currentAmount >= _amount){//Asegurmaos tener el saldo disponible para retirar
            reserve.safeTransfer(address(msg.sender), _amount);
        }
        rsvVault[_pid].amount = currentAmount.sub(_amount);//Actualizamos el saldo solo si tenemos la cantidad disponible si no no se actualiza el saldo de la BOVEDA
        emit Withdraw(_pid, _amount);
    }

}