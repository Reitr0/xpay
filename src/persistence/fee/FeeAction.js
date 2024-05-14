import {FeeService} from '@persistence/fee/FeeService';
import {getFeeSuccess} from '@persistence/fee/FeeReducer';

export const FeeAction = {
    getFee,
};

function getFee(params) {
    return async dispatch => {
        const {success, data} = await FeeService.getFee(params);
        if (success === true) {
            dispatch(getFeeSuccess(data));
        }
        return {success, data};
    };
}
