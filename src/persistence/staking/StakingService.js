import { ethers } from "ethers";
import { StakingFactory } from "@modules/core/factory/StakingFactory";
import _ from "lodash";
import * as React from "react";

export const StakingService = {
  getTotalStakedBalance,
  getStakedBalance,
  getStakingHistory,
  stake,
  unstake,
  claimRewards,
  checkRewards
};

async function getTotalStakedBalance() {
  const totalStakedBalance = await StakingFactory.stakingContract.getTotalStakedBalance();
  return {
    success : true,
    data : ethers.utils.formatUnits(totalStakedBalance,StakingFactory.tokenDecimals)
  }
}

async function getStakedBalance(walletAddress) {
  const staked = await StakingFactory.stakingContract.getStakedBalance(walletAddress);
  return {
    success: true,
    data : ethers.utils.formatUnits(staked,StakingFactory.tokenDecimals)
  }
}

async function getStakingHistory(walletAddress) {
  const stakingHistoryResult = await StakingFactory.stakingContract.getStakingHistory(walletAddress);
  const stakingHistory = [];
  if(stakingHistoryResult.length > 0){
    stakingHistoryResult.forEach((item,index) => {
      stakingHistory.push({
        index: index,
        timestamp: ethers.BigNumber.from(item[0]).toNumber(),
        amount: ethers.utils.formatUnits(item[1], 18), // Assuming 18 decimal places for your token
        rate: ethers.utils.formatEther(item[2]),
        lockDuration: ethers.BigNumber.from(item[3]).toNumber(),
        lockTime: ethers.BigNumber.from(item[4]).toNumber(),
        claimedRewards: ethers.utils.formatUnits(item[5], 18), // Assuming 18 decimal places for your token
        status: item[6]
      })
    });
  }
  return {
    success : true,
    data : _.orderBy(stakingHistory, ['timestamp'], ['desc'])
  }
}

async function stake({ amount, duration,gasPrice,gasLimit }) {
  try{
    await StakingFactory.tokenContract.approve(StakingFactory.stakingContractAddress,amount, {
      gasPrice: gasPrice,
      gasLimit: gasLimit,
    });
    const tx = await StakingFactory.stakingContract.stake(amount,duration, {
      gasPrice,
      gasLimit
    });
    await tx.wait(1);
    return {
      success : true,
      data : {}
    }
  }catch (e) {
    return {
      success : false,
      data : e
    }
  }

}

async function unstake({index,gasPrice,gasLimit}) {
  try{

    const unstakedTx = await StakingFactory.stakingContract.unstake(index,{
      gasPrice,
      gasLimit
    });
    await unstakedTx.wait(1);
    return {
      success : true,
      data : {}
    }
  }catch (e) {
    return {
      success : false,
      data : e
    }
  }
}
async function claimRewards({index,gasPrice,gasLimit}) {
  try{
    const claimsTx = await StakingFactory.stakingContract.claimRewards(index,{gasPrice,gasLimit});
    await claimsTx.wait(3);
    return {
      success : true,
      data : {}
    }
  }catch (e) {
    return {
      success : false,
      data : e
    }
  }
}
async function checkRewards(index) {
  try{
    const checkRewardsTx = await StakingFactory.stakingContract.checkRewards(index);
    return {
      success : true,
      data : {}
    }
  }catch (e) {
    return {
      success : false,
      data : e
    }
  }

}
