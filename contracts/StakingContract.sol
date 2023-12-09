// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StakingContract {
    address public owner;
    uint256 public totalStaked;
    mapping(address => uint256) public stakedBalance;
    mapping(address => uint256) public lastStakeTime;

    event Staked(address indexed staker, uint256 amount);
    event Unstaked(address indexed staker, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    modifier hasStake() {
        require(stakedBalance[msg.sender] > 0, "No stake found");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function stake(uint amount) external payable {
        require(amount > 0, "Staked amount must be greater than 0");

        totalStaked += amount;
        stakedBalance[msg.sender] += amount;
        lastStakeTime[msg.sender] = block.timestamp;

        emit Staked(msg.sender, amount);
    }

    function unstake(uint256 amount) external hasStake {
        require(
            amount > 0 && amount <= stakedBalance[msg.sender],
            "Invalid unstake amount"
        );

        totalStaked -= amount;
        stakedBalance[msg.sender] -= amount;

        // Transfer staked amount back to the staker
        payable(msg.sender).transfer(amount);

        emit Unstaked(msg.sender, amount);
    }

    // Function to allow the contract owner to withdraw the contract balance
    function withdrawBalance() external onlyOwner {
        payable(owner).transfer(address(this).balance);
    }

    // Function to get the current balance of the contract
    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
