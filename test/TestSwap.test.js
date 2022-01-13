const { assert } = require('chai')

const Token = artifacts.require('Token')
const TestSwap = artifacts.require('TestSwap')

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract ('TestSwap', (accounts)=> {


    describe('TestSWap deployment', async() => {
        it('contract has a name', async () => {
            let testSwap = await TestSwap.new()
            const name = await testSwap.name()
            assert.equal(name, 'TestSwap test contract')
        })
    })

})