import {Logs} from '@modules/log/logs';
import {configProperties} from '@modules/core/config/config.properties';
import axios from 'axios';

export class MarketFactory {
    static async getMarkets(limit = 10, sparkline = false) {
        const url =
            configProperties.coinGecko.api +
            'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=' +
            limit +
            '&page=1&sparkline=' +
            sparkline;
        const params = {
            method: 'get',
            url: url,
        };
        try {
            const response = await axios(params);
            return response.data;
        } catch (error) {
            Logs.info('MarketFactory: getMarkets' + error);
            return [];
        }
    }

    static async getMarketsCMC(limit = 10) {
        const url =
            configProperties.coinmarketcap.api +
            '/cryptocurrency/listings/latest?limit=' +
            limit;
        const params = {
            method: 'get',
            url: url,
            headers: {
                'X-CMC_PRO_API_KEY': configProperties.coinmarketcap.key,
            },
        };

        try {
            const response = await axios(params);
            console.log('CMC get market: ' + JSON.stringify(response));
            return response.data;
        } catch (error) {
            Logs.info('MarketFactory CMC: getMarkets' + error);
            return [];
        }
    }

    static async getMarketDetailCMC(id) {
        const url =
            configProperties.coinGecko.api +
            '/cryptocurrency/quotes/latest?symbol=' +
            id;
        const params = {
            method: 'get',
            url: url,
            headers: {
                'X-CMC_PRO_API_KEY': configProperties.coinmarketcap.key,
            },
        };
        try {
            const response = await axios(params);
            return response.data;
        } catch (error) {
            return false;
        }
    }

    static async getIconImageCMC(symbol) {
        const url =
            configProperties.coinmarketcap.api +
            '/cryptocurrency/info?symbol=' +
            symbol;
        const params = {
            method: 'get',
            url: url,
            headers: {
                'X-CMC_PRO_API_KEY': 'YOUR_API_KEY_HERE',
            },
        };
        try {
            const response = await axios(params);
            console.log('CMC get icon image: ' + JSON.stringify(response));
            const cryptocurrencyInfo = response.data.data[symbol];
            if (cryptocurrencyInfo && cryptocurrencyInfo.logo) {
                return cryptocurrencyInfo.logo;
            } else {
                return null; // Icon image not found
            }
        } catch (error) {
            Logs.info('MarketFactory CMC: getIconImage' + error);
            return null;
        }
    }

    static async getMarketDetail(id) {
        const url =
            configProperties.coinGecko.api +
            'coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h,24h,7d,30d,1y&ids=' +
            id;
        const params = {
            method: 'get',
            url: url,
        };
        try {
            const response = await axios(params);
            return response.data;
        } catch (error) {
            return false;
        }
    }
}
