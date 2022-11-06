// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Verify {
    struct Content {
        string data;
        string id;
        address owner;
        uint256 timestamp;
    }

    mapping(string => Content) public contents;
    mapping(string => address[]) public reports;

    function createContent(string memory data, string memory id)
        public
        returns (Content memory)
    {
        require(contents[id].timestamp == 0, "Id already registered");
        Content memory new_content = Content(
            data,
            id,
            msg.sender,
            block.timestamp
        );
        contents[id] = new_content;
        return new_content;
    }

    function createReport(string memory id) public returns (uint256) {
        require(contents[id].timestamp != 0, "Content not found!");
        require(
            reportJustOnce(reports[id], msg.sender),
            "Just one report for address!"
        );
        address[] storage last_addresses = reports[id];
        last_addresses.push(msg.sender);
        return last_addresses.length;
    }

    function getReports(string memory id) public view returns (uint256) {
        address[] storage last_addresses = reports[id];
        return last_addresses.length;
    }

    function reportJustOnce(address[] memory arr, address searchFor)
        private
        pure
        returns (bool)
    {
        for (uint256 i = 0; i < arr.length; i++) {
            if (arr[i] == searchFor) {
                return false;
            }
        }
        return true;
    }
}
