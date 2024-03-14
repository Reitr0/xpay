import React from 'react';
import ReduxStore from '@modules/redux/ReduxStore';

export const PriceService = {
    getCurrentPrice,
};

async function getCurrentPrice(id) {
    return ReduxStore.getState().PriceReducer.prices[id];
}
