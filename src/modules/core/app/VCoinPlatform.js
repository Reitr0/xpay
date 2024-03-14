import {Logs} from '@modules/log/logs';
import {ProviderFactory} from '@modules/core/factory/ProviderFactory';
import WSSClient from '@modules/core/ws/WSClient';
import {StakingFactory} from '@modules/core/factory/StakingFactory';

export class VCoinPlatform {
    static init() {
        try {
            initWebSocket();
            initProvider();
        } catch (e) {
            Logs.info('App: init', e);
        }
    }

    static async initStakingContract() {
        await StakingFactory.init({
            chain: 'ETH',
            stakingContractAddress:
                '0x39DCE9484dE72E199D40756cE2436C56a6106f7e',
            tokenContractAddress: '0x1f769203D2abcb78F5A77dD15C0078C50fB13287',
            tokenDecimals: 18,
        });
    }
}

const initProvider = () => {
    ProviderFactory.init([
        {
            chain: 'BTC',
            apiEndpoint: 'https://blockstream.info/api/',
            testnet: false,
        },
        {
            chain: 'ETH',
            chainId: 1,
            rpcUrl: 'https://rpc.ankr.com/eth',
            apiEndpoint: 'https://api.etherscan.io/api',
            apiKey: '4DUWR9JECH25G9YCXSZ6UPERZ16SRBG6WR',
            testnet: false,
        },
        {
            chain: 'BSC',
            rpcUrl: 'https://bsc-dataseed1.defibit.io/',
            chainId: 56,
            apiEndpoint: 'https://api.bscscan.com/api',
            apiKey: '1UVR5JEUSFF5JKYCQZQKPI2YZDNHQDIWTW',
            testnet: false,
        },
        {
            chain: 'POLYGON',
            rpcUrl: 'https://polygon-rpc.com',
            chainId: 137,
            apiEndpoint: 'https://api.polygonscan.com/api',
            apiKey: 'ADZI52F2INID3WJCEJPV7TEQUQUMRNE9M7',
            testnet: false,
        },
        {
            chain: 'TRON',
            rpcUrl: 'https://api.trongrid.io/',
            apiEndpoint: 'https://api.trongrid.io/',
            apiKey: '0327edd7-48f8-41a2-ab57-efa9f7ccfe5a',
            testnet: false,
        },
    ]);
};

const initWebSocket = () => {
    WSSClient.connect({
        header: {token: ''},
        callBack: null,
    });
};
