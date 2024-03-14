import { StakingService } from "@persistence/staking/StakingService";
import {
  getStakedBalanceSuccess,
  getStakedHistorySuccess,
  getTotalStakedBalanceSuccess,
} from "@persistence/staking/StakingReducer";

export const StakingAction = {
    getTotalStakedBalance,
    getStakedBalance,
    getStakingHistory,
    stake,
    unstake,
    claimRewards,
    checkRewards
};

function getTotalStakedBalance() {
    return async dispatch => {
        const { success,data } = await StakingService.getTotalStakedBalance();
        if(success === true){
            dispatch(getTotalStakedBalanceSuccess(data));
        }
        return { success,data };
    };
}
function getStakedBalance(walletAddress) {
    return async dispatch => {
        const { success,data } = await StakingService.getStakedBalance(walletAddress);
        if(success === true){
            dispatch(getStakedBalanceSuccess(data));
        }
        return { success,data };
    };
}
function getStakingHistory(walletAddress) {
    return async dispatch => {
        const { success,data } = await StakingService.getStakingHistory(walletAddress);
        if(success === true){
            dispatch(getStakedHistorySuccess(data));
        }
        return { success,data };
    };
}
function stake(params) {
    return async dispatch => {
        const { success,data } = await StakingService.stake(params);
        return { success,data };
    };
}
function unstake(index) {
    return async dispatch => {
        const { success,data } = await StakingService.unstake(index);
        return { success,data };
    };
}

function claimRewards(index) {
    return async dispatch => {
        const { success,data } = await StakingService.claimRewards(index);
        return { success,data };
    };
}

function checkRewards(index) {
    return async dispatch => {
        const { success,data } = await StakingService.checkRewards(index);
        return { success,data };
    };
}
