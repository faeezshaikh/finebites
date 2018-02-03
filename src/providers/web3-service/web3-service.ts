import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Web3 from 'web3';

/*
  Generated class for the Web3ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Web3ServiceProvider {

  web3: any;
  icoContract: any;
  icoContractAddress: string;

  constructor(public http: HttpClient) {
    console.log('Hello Web3ServiceProvider Provider');
    this.icoContractAddress = '0x2563f3fdef35e2d712e9c70710f70a12b5432c41';

    console.log("WEB3 ===>",typeof window['web3']);
    
    // if (typeof window['web3']  !== 'undefined') {
        if (typeof window['web3'] !== 'undefined') {
          // this.web3 = new Web3(window.web3.currentProvider);
          // this.web3 = new Web3(window['web3'].currentProvider);
          this.web3 = new Web3(window['web3'].currentProvider);
    } else {
          this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

        // Step 2: Set default account (address)
        this.web3.eth.defaultAccount = this.web3.eth.accounts[0];
        console.log("Got default account ==>",this.web3.eth.defaultAccount);
        
        // Step 3: Get Interface to the contact - ABI from remix
        let abi = [
          {
            "constant": true,
            "inputs": [],
            "name": "getMaxPoolAllocation",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "addr",
                "type": "address"
              }
            ],
            "name": "getContribution",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "addr",
                "type": "address"
              }
            ],
            "name": "getTokenBalance",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "getRegisteredTokenSupply",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "addr",
                "type": "address"
              }
            ],
            "name": "alreadyContributed",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "getPoolBalance",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "getMyContribution",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "getMinPerContributorn",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "getContributors",
            "outputs": [
              {
                "name": "",
                "type": "address[]"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "getMaxPerContributor",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "getPoolCreator",
            "outputs": [
              {
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "DepositForTokenReceived",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "contributor",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "withdrawal",
            "type": "event"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "contribution",
                "type": "uint256"
              }
            ],
            "name": "setMinPerContributorn",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "contribute",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "name": "maxPoolAllocation1",
                "type": "uint256"
              },
              {
                "name": "maxPerContributor1",
                "type": "uint256"
              },
              {
                "name": "minPerContributor1",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "depositToken",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "tokens",
                "type": "uint256"
              }
            ],
            "name": "distributeTokens",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "tokenAddress",
                "type": "address"
              }
            ],
            "name": "registerToken",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "withdrawContribution",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ];
        var contract = this.web3.eth.contract(abi);
        
        // Step 4: Get Contract instance at the address from remix
        this.icoContract = contract.at(this.icoContractAddress);
        console.log("Got the smart contract ==> " , this.icoContract);

     
  }

   contribute(amount) {
      // amount = this.web3.fromWei(amount, 'ether');
      amount = amount * 1000000000000000000;
      console.log('Calling contribute on smart contract' , amount);
      let res = this.icoContract.contribute({value:amount, gas:3000000});
      console.log('Result ===> ',res);

      this.refresh();
  }

  refresh() {
    this.getMyCurrentBalance();
  }
  getPoolBalance() {
    let res = this.icoContract.getPoolBalance({gas:3000000});
    console.log("Pool Balance ==> ", res.toString());
    return  this.web3.fromWei(res, 'ether');
  }

  getMyContribution() {
    let res = this.icoContract.getMyContribution({gas:3000000});
    console.log('My contribution: ', res.toString());
    return this.web3.fromWei(res, 'ether');
  }

  getMyCurrentBalance2() {
    // var balance = this.web3.eth.getBalance(this.web3.eth.defaultAccount);
    // console.log(balance); 
    // console.log(balance.toString(10)); 
    // return this.web3.fromWei(balance, 'ether');

  }

  getMyCurrentBalance() {
    let p = new Promise<any>((resolve, reject) => {
      let that = this;
      return this.web3.eth.getBalance(this.web3.eth.defaultAccount, function (error, result) {
        if (!error) {
          let res = that.web3.fromWei(result.toString(), 'ether');
          console.log('Current Balance: ' ,res);
          resolve(res);
        } else {
          console.error(error);
          reject(error);
        }
      });
    }); 
    return p;
  }



  withdrawContribution(amount) {
    let res = this.icoContract.withdrawContribution(amount,{gas:3000000});
    console.log('Withdrawal result: ', res);
    return res;
  }

}
