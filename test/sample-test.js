const {expect, assert} = require('chai')
const { ethers } = require('hardhat')

describe('TestModifyVariable', function() {
  it('should change x to 1977', async function() {
    const ModifyVariable = await ethers.getContractFactory('ModifyVariable')

    const contract =await ModifyVariable.deploy(10, '')

    await contract.deployed()
    // Modify x from 10 to 1977
    await contract.modifyToLeet()
    // get the state variable x
    const newX = await contract.x();
    // Modify favorite movie
    await contract.modifyFavorite()
    // get the state variable favoriteMovie
    const newFavoriteMovie = await contract.favoriteMovie();
    assert.equal(newX.toNumber(), 1977)
    assert.equal(newFavoriteMovie, 'Shooter')
  })
})