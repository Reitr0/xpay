import {getMarketsSuccess} from '@persistence/market/MarketReducer';
import {MarketService} from '@persistence/market/MarketService';

export const MarketAction = {
    getMarkets,
};

function getMarkets(limit, sparkline) {
    return async dispatch => {
        const {success, data} = await MarketService.getMarkets(
            limit,
            sparkline,
        );
        if (success) {
            dispatch(getMarketsSuccess(data));
        }
        return {success, data};
    };
}