const Token = artifacts.require("Token");
const TestSwap = artifacts.require("TestSwap");


module.exports = function(deployer) {
  deployer.deploy(Token);
  deployer.deploy(TestSwap);
  
};