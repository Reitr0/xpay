import {configProperties} from '@modules/core/config/config.properties';
import axios from 'axios';

export class TokenFactory {
    static async getTokenMetadata(chain, contractAddress) {
        try {
            let url = '';
            let headers = {};

            if (chain == 'TRC20') {
                url = `${configProperties.trc20.api}${contractAddress}`;
            } else {
                url =
                    `${configProperties.moralis.api}/v2.2/erc20/metadata?chain=` +
                    chain.toLowerCase() +
                    '&addresses=' +
                    contractAddress;
                headers = {'X-API-Key': configProperties.moralis.key};
            }

            const {data, error} = await axios
                .get(url, {
                    headers: {
                        accept: 'application/json',
                        ...headers,
                    },
                })
                .then(item => {});
            console.log(error);
            return data[0];
        } catch (e) {
            console.log(e);
        }
    }
}
