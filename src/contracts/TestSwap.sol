pragma solidity  <=0.8.11;


import '@uniswap/v2-periphery/contracts/UniswapV2Router02.sol';
import './Token.sol';

contract TestSwap {
    string public name  = "TestSwap test contract";


    function uniswapUSDTForWETH() external {

    string  usdt_address = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
    string  wethAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
    
    Token  usdtToken = Token(usdt_address);
    Token  wethToken = Token(wethAddress);

    require(usdtToken.approve(address(UniswapV2Router02), 500), 'approve failed.');
    require(wethToken.approve(address(UniswapV2Router02), 500), 'approve failed.');



    address[] memory path = new address[](2);
    path[0] = address(usdtToken);
    path[1] = address(wethToken);
    UniswapV2Router02.swapExactTokensForTokens(500, 500, path, msg.sender, block.timestamp);

    }


    function uniswapWETHForUSDT() external {

    string  usdt_address = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
    string  wethAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
    
    Token  usdtToken = Token(usdt_address);
    Token  wethToken = Token(wethAddress);

    require(usdtToken.approve(address(UniswapV2Router02), 500), 'approve failed.');
    require(wethToken.approve(address(UniswapV2Router02), 500), 'approve failed.');



    address[] memory path = new address[](2);
    path[1] = address(usdtToken);
    path[0] = address(wethToken);
    UniswapV2Router02.swapExactTokensForTokens(500, 500, path, msg.sender, block.timestamp);

    }


}