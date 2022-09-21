// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Add{

    uint public sum;

    event Addition(address owner, uint sum);

    function getSum(uint a,uint b )public{
        sum = a + b;
        emit Addition(msg.sender, sum);
    }

}