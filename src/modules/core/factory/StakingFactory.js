// Import the crypto getRandomValues shim (**BEFORE** the shims)
import 'react-native-get-random-values';
// Import the the ethers shims (**BEFORE** ethers)
import '@ethersproject/shims';
import {WalletFactory} from '@modules/core/factory/WalletFactory';
import {ethers} from 'ethers';
import StakingContract from '@contracts/VStaking.json';
import VCoin from '@contracts/VCoin.json';
import _ from 'lodash';

export class StakingFactory {
    static stakingContract;
    static tokenContract;
    static stakingContractAddress = '';
    static tokenContractAddress = '';
    static tokenDecimals = 18;
    static async init({
        chain,
        stakingContractAddress,
        tokenContractAddress,
        tokenDecimals,
    }) {
        if (_.isNil(this.stakingContract)) {
            const wallet = await WalletFactory.getWallet(chain);
            this.stakingContract = new ethers.Contract(
                stakingContractAddress,
                StakingContract.abi,
                wallet.signer,
            );
        }
        if (_.isNil(this.tokenContract)) {
            const wallet = await WalletFactory.getWallet(chain);
            this.tokenContract = new ethers.Contract(
                tokenContractAddress,
                VCoin.abi,
                wallet.signer,
            );
        }
        this.tokenDecimals = tokenDecimals;
        this.stakingContractAddress = stakingContractAddress;
        this.tokenContractAddress = tokenContractAddress;
    }
}
