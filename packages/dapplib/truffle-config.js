require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue remember mad modify grid entire army gift'; 
let testAccounts = [
"0xd2f419ca27ba897e564d3347996729721fedc6c9d95de58124f5b8a4dfb26ffc",
"0xd96a74113f169107ddef3dce4642a01bcddfac354ed3798ffe91057cc4676d59",
"0x87b7a8b14cd881a9359349cc6e1fabb3c2654611a4b6737092709d49d2743f92",
"0x915fdd950af60536a4b69e015d6fa008a4c3e7cacd04609cc69bafb021c4fc10",
"0x7c13286f6d3ca24390413949da5513f9f992b46f11e5e5ab48a629b9d6954797",
"0x48e85681ad9256263b854e7435968de082f55f13e2b0f10b3b54888eae49981f",
"0x0129c841fb146f305fb0e400734fdfb9921656a9e680b37c87e46b19c210c606",
"0x34fda419600397ff966feed201774000a15d07d5235a3807bba7c0c054901ea7",
"0x24a369dac7af89ce314d75c636ff412a0325c0cb7c4b33ddc72088f7a258f737",
"0xc44deb330a47d45da4a3aeab078208b3e6ec172337e3bae50828201cd5082e02"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
