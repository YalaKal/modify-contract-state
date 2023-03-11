// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

contract ModifyVariable {
  uint public x;
  string public favoriteMovie;

  constructor(uint _x, string  memory _favoriteMovie) {
    x = _x;
    favoriteMovie = _favoriteMovie;
  }

  function modifyToLeet()  public {
    x = 1977;
  }

  function modifyFavorite() public {
    favoriteMovie = 'Shooter';
  }
}