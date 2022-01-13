//const { default: Web3 } = require('web3')
// const Web3 = require('web3')

// const web3 = new Web3('http://localhost:7545')


 const Web3 = require('web3')

 const web3 = new Web3('http://localhost:7545')

var Contract = require('web3-eth-contract');
Contract.setProvider('http://localhost:7545');


const recipientAddress = "0x876bcc3372c0Bad27b4DFA898c2728EED74A1DFd"

const unlockedAddress = "0xE78388b4CE79068e89Bf8aA7f218eF6b9AB0e9d0"


const usdcAbi = '[{"constant":false,"inputs":[{"name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newImplementation","type":"address"},{"name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_implementation","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"previousAdmin","type":"address"},{"indexed":false,"name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"implementation","type":"address"}],"name":"Upgraded","type":"event"}]'
const parsedUSDCABI = JSON.parse(usdcAbi)
const usdcAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"

const wethAbi = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]'
const parsedWETHABI = JSON.parse(wethAbi);
const wethAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'


// const usdc = new Contract(
//     parsedUSDCABI,
//     usdcAddress
// )

const usdc = new web3.eth.Contract(parsedUSDCABI,usdcAddress );

const weth = new Contract(
    parsedWETHABI,
    wethAddress
)

const contract = new web3.eth.Contract(JSON.parse(abi), '0xafb7b8a4d90c2df4ce640338029d54a55bedcfc4', { from: '0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1', gas: 100000});
undefined
> contract.methods.balanceOf('0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1').call().then(console.log).catch(console.error);
Promise {...}



async function run() {
    
    // balance = await usdc.methods.balanceOf(recipientAddress);

    // ([unlockedBalance, recipientBalance] = await Promise.all([

    //     usdc.methods
    //     .balanceOf(unlockedAddress)
    //     .call(),
    //     usdc.methods
    //     .balanceOf(recipientAddress)
    //     .call()

    // ]) )

    printBalanceOfTokens()


    
  

    // await usdc.methods
    // .transfer(recipientAddress, 1000)
    // .send({from: unlockedAddress})


 
await usdc.transfer(recipientAddress, 1000)

   .send({
           from: unlockedAddress, 
           gas: 0x00, 
           gasPrice: 0x00
        }).then(receipt=> {consol.log(receipt)});


        printBalanceOfTokens()


    // ([unlockedBalance, recipientBalance] = await Promise.all([
    //     usdc.methods
    //     .balanceOf(unlockedAddress)
    //     .call(),
    //     usdc.methods
    //     .balanceOf(recipientAddress)
    //     .cal()
    // ]))
    // console.log(`Balance unlocked: ${unlockedBalance}`)
    // console.log(`Balnce recipient: ${recipientBalance}`)

}


async function printBalanceOfTokens()
{
    let unlockedBalance, recipientBalance;
    await web3.eth.getBalance(unlockedAddress, function(err, result) {
        if (err) {
          console.log(err)
        } 
        else
        {
            unlockedBalance = result
        }
      })

      await web3.eth.getBalance(recipientAddress, function(err, result) {
        if (err) {
          console.log(err)
        }
        else
        {
            recipientBalance = result
        } 
      })

    console.log(`Balance unlocked: ${unlockedBalance}`)
    console.log(`Balance recipient: ${recipientBalance}`)

}
console.log("!!!!!!!!!!!!!!hello galaxy!!!!!!!!!!!!")



run()


//const Web3 = require("web3")

//const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/4573144ee0c643a2ae62842574d5cfef"))

//  const Web3 = require('web3')

//  const web3 = new Web3('http://localhost:7545')


// web3.eth.getBalance("0x52bc44d5378309EE2abF1539BF71dE1b7d7bE3b5", function(err, result) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(web3.utils.fromWei(result, "ether") + " ETH")
//   }
// })





