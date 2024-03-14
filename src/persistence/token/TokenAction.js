import {
    addTokenSuccess,
    getAllTokensSuccess,
} from '@persistence/token/TokenReducer';
import {TokenService} from '@persistence/token/TokenService';
import {applicationProperties} from '@src/application.properties';

export const TokenAction = {
    getAllTokens,
    addToken,
};
function getAllTokens() {
    return async dispatch => {
        const {success, data} = await TokenService.getAllTokens();
        if (success === true) {
            const {ALL, ETH, BSC, POLYGON} = data;
            const nativeEth = {
                id: 'ethereum',
                name: 'Ethereum',
                symbol: 'ETH',
                isNative: true,
                address: '',
                logoURI: applicationProperties.logoURI.eth,
            };
            const nativeBnb = {
                id: 'binancecoin',
                name: 'Binance Coin',
                symbol: 'BNB',
                isNative: true,
                address: '',
                logoURI: applicationProperties.logoURI.bsc,
            };
            const nativeMatic = {
                id: 'matic-network',
                name: 'Matic',
                symbol: 'MATIC',
                isNative: true,
                address: '',
                logoURI: applicationProperties.logoURI.polygon,
            };
            dispatch(
                getAllTokensSuccess({
                    ALL,
                    ETH: [nativeEth, ...ETH],
                    BSC: [nativeBnb, ...BSC],
                    POLYGON: [nativeMatic, ...POLYGON],
                }),
            );
        }
        return {success, data};
    };
}
function addToken(token) {
    return async dispatch => {
        const {success, data} = await TokenService.addToken(token);
        if (success === true) {
            dispatch(addTokenSuccess(data));
        }
        return {success, data};
    };
}
