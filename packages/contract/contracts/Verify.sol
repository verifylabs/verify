// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Verify {
    struct Content {
        string data;
        string id;
        address owner;
        uint256 timestamp;
    }

    string public OWNER;

    mapping(address => Content[]) public contentsByAddress;
    mapping(string => Content) public contents;
    mapping(string => address[]) public reports;

    constructor(string memory _owner) {
        OWNER = _owner;
    }

    function createContent(
        string memory data,
        string memory id,
        address owner
    ) public returns (Content memory) {
        require(contents[id].timestamp == 0, "Id already registered");
        Content memory new_content = Content(data, id, owner, block.timestamp);
        contents[id] = new_content;
        contentsByAddress[owner].push(new_content);
        return new_content;
    }

    function createReport(string memory id, address owner)
        public
        returns (uint256)
    {
        require(contents[id].timestamp != 0, "Content not found!");
        require(
            reportJustOnce(reports[id], owner),
            "Just one report for address!"
        );

        address[] storage last_addresses = reports[id];
        last_addresses.push(owner);

        return last_addresses.length;
    }

    function getContentList(address owner)
        public
        view
        returns (Content[] memory)
    {
        return contentsByAddress[owner];
    }

    function getContent(string memory id) public view returns (Content memory) {
        return contents[id];
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
