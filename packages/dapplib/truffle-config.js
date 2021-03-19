require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski street rescue stereo punch grid problem army genre'; 
let testAccounts = [
"0x37116b28f2045002e427051479c431ec58853315a5dff78c87ec174829ad6170",
"0xac0c9ae2922e0d5ee76cddee3cb71cf7e843e46ef9e1bb6ee973a60e6d678d3f",
"0xa0cd941ba5b93f09305057ce0730fa59cd16e6260f56257a09a0ff1b2475eb7d",
"0xb7360118636473b2c61aeb609cba864850308c7f57f3452a4d1131f0985d67eb",
"0xa86e66c6b6b98b03ed09bbbf8efd7c1369c35f8456fedd7ac92c9d99caf20859",
"0x4453b78387c69e0feb56e9cf101507872124acc2b66fd18fbfc711dfb50070a1",
"0x5b6008de69e52fdab723b9d87646d12d3ea4e6d43cf7a51727a994c707fe3a35",
"0x44dc6750d0fd8cedf52066e217561281068c30c45be463a0787d8574ab06fced",
"0x64119de8afcd6bdd99c52d6cf3a9888c76dd234bad59e5ffadad04e6e4f695ef",
"0x6968dcd7c25555e7fb85954a935c4869b2d131cfb4f68083fc435765a54f375b"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
