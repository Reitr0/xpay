import * as React from 'react';
import {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CommonText from '@components/commons/CommonText';
import CommonTouchableOpacity from '@components/commons/CommonTouchableOpacity';
import CommonBackButton from '@components/commons/CommonBackButton';
import CommonLoading from '@components/commons/CommonLoading';
import Balance from '@components/Balance';
import {useTranslation} from 'react-i18next';
import _ from 'lodash';
import {ethers} from 'ethers';
import {StakingAction} from '@persistence/staking/StakingAction';
import {StakingFactory} from '@modules/core/factory/StakingFactory';
import useWalletHook from '@persistence/wallet/WalletHook';
import CommonAlert from '@components/commons/CommonAlert';
import CommonButton from '@components/commons/CommonButton';

function StakingDetailScreen({navigation, route}) {
    const {item} = route.params;
    const {theme} = useSelector(state => state.ThemeReducer);
    const [amount, setAmount] = useState('');
    const {vcoin} = useWalletHook();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    return (
        <SafeAreaView
            style={[styles.container, {backgroundColor: theme.background4}]}>
            <View style={[styles.header, {backgroundColor: theme.background2}]}>
                <View style={styles.leftHeader}>
                    <CommonBackButton
                        color={theme.text}
                        onPress={async () => {
                            navigation.goBack();
                        }}
                    />
                </View>
                <View style={styles.rightHeader} />
            </View>
            <View style={[styles.content, {backgroundColor: theme.background}]}>
                <View style={styles.titleContainer}>
                    <View style={{flex: 1}}>
                        <CommonText
                            style={[styles.title, {color: theme.text2}]}>
                            Staking AZURE
                        </CommonText>
                        <CommonText
                            style={[styles.subTitle, {color: theme.text7}]}>
                            Invest in Savings: Stake Tokens for Discounted
                            Thrills!
                        </CommonText>
                    </View>
                    <View style={styles.availableBalance}>
                        <CommonText
                            style={[styles.subTitle, {color: theme.text7}]}>
                            Available
                        </CommonText>
                        <Balance
                            style={[styles.balance, {color: theme.text2}]}
                            symbol={' Azure'}>
                            {vcoin.balance}
                        </Balance>
                    </View>
                </View>
                <View style={styles.durationContainer}>
                    <CommonText style={[styles.label, {color: theme.text7}]}>
                        Duration (Days) & APR
                    </CommonText>
                    <View style={styles.durationList}>
                        <View
                            style={[
                                styles.durationItem,
                                {borderWidth: 1, borderColor: theme.bg3},
                            ]}>
                            <CommonText style={{color: theme.text2}}>
                                {item.code}
                            </CommonText>
                        </View>
                    </View>
                    <CommonText style={{color: theme.text7}}>
                        Est. APR{' '}
                        <CommonText
                            style={[styles.label, {color: theme.text2}]}>
                            {item.apr}
                        </CommonText>
                    </CommonText>
                </View>
                <View style={styles.titleInputContainer}>
                    <CommonText style={[styles.label, {color: theme.text2}]}>
                        {t('stake.amount')}
                    </CommonText>
                </View>
                <View
                    style={[
                        styles.inputView,
                        {backgroundColor: theme.inputBackground},
                    ]}>
                    <TextInput
                        style={[styles.input, {color: theme.inputText}]}
                        onChangeText={setAmount}
                        value={amount}
                        placeholder={'0.0'}
                        numberOfLines={1}
                        returnKeyType="done"
                        placeholderTextColor="gray"
                        autoCompleteType={'off'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onEndEditing={async () => {}}
                    />
                    <CommonTouchableOpacity
                        style={styles.moreBtn2}
                        onPress={async () => {
                            setAmount(vcoin.balance);
                        }}>
                        <CommonText style={[styles.max, {color: theme.text2}]}>
                            {t('tx.max')}
                        </CommonText>
                    </CommonTouchableOpacity>
                </View>
                <View style={styles.bottomContainer}>
                    {/*<CommonGradientButton*/}
                    {/*  text={'Set Rate'}*/}
                    {/*  onPress={async () => {*/}
                    {/*    CommonLoading.show();*/}
                    {/*    try{*/}
                    {/*      const wallet = await WalletFactory.getWallet("BSC");*/}
                    {/*      const stakingContract = new ethers.Contract('0x273FBFB3da1Ce34586484393c951000adD310ad5', StakingContract.abi, wallet.signer);*/}

                    {/*      const gasPrice = ethers.utils.parseUnits('3', 'gwei');*/}
                    {/*      const gasLimit = 50000; // Adjust this value based on the complexity of the transaction*/}
                    {/*      const rateInWei = ethers.utils.parseUnits("0.1496",18);*/}
                    {/*      const rateTx = await stakingContract.updateRate(120 * 24 * 60 * 60,rateInWei,{*/}
                    {/*        gasPrice: gasPrice,*/}
                    {/*        gasLimit: gasLimit,*/}
                    {/*      });*/}
                    {/*      const stakeReceipt = await rateTx.wait();*/}
                    {/*      console.log('Stake receipt:', stakeReceipt);*/}
                    {/*    }catch (e) {*/}
                    {/*      console.log(e);*/}

                    {/*    }finally {*/}
                    {/*      CommonLoading.hide();*/}
                    {/*    }*/}

                    {/*  }}*/}
                    {/*/>*/}
                    {/*<CommonGradientButton*/}
                    {/*  text={'Get Rate'}*/}
                    {/*  onPress={async () => {*/}
                    {/*    const wallet = await WalletFactory.getWallet("BSC");*/}
                    {/*    const stakingContract = new ethers.Contract('0x273FBFB3da1Ce34586484393c951000adD310ad5', StakingContract.abi, wallet.signer);*/}
                    {/*    const rateTx = await stakingContract.getRate(5);*/}
                    {/*    console.log('Stake receipt:',  ethers.utils.formatUnits(rateTx,18));*/}
                    {/*  }}*/}
                    {/*/>*/}
                    <CommonButton
                        text={'Stake'}
                        onPress={async () => {
                            if (_.isEmpty(amount) || amount <= 0) {
                                return;
                            }
                            const gasPrice = ethers.utils.parseUnits(
                                '3',
                                'gwei',
                            );
                            const gasLimit = 600000; // Adjust this value based on the complexity of the transaction
                            CommonLoading.show();
                            dispatch(
                                StakingAction.stake({
                                    amount: ethers.utils.parseUnits(
                                        amount,
                                        StakingFactory.tokenDecimals,
                                    ),
                                    duration: item.data.duration,
                                    gasPrice,
                                    gasLimit,
                                }),
                            ).then(({success, data}) => {
                                CommonLoading.hide();
                                if (success === false) {
                                    CommonAlert.show({
                                        title: t('alert.error'),
                                        message: t(
                                            'staking.balance_not_enough',
                                        ),
                                        type: 'error',
                                    });
                                    return;
                                }
                                CommonAlert.show({
                                    title: t('alert.success'),
                                    message: t('staking.success'),
                                    type: 'success',
                                });
                                dispatch(
                                    StakingAction.getStakingHistory(
                                        vcoin.walletAddress,
                                    ),
                                );
                                dispatch(
                                    StakingAction.getStakedBalance(
                                        vcoin.walletAddress,
                                    ),
                                );
                                navigation.goBack();
                            });
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 48,
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftHeader: {
        width: 30,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    contentHeader: {
        flex: 1,
        justifyContent: 'center',
        height: '100%',
    },
    rightHeader: {
        width: 30,
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    titleContainer: {
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 12,
    },
    availableBalance: {
        alignItems: 'flex-end',
    },
    balance: {
        fontSize: 16,
    },
    content: {
        flex: 1,
        paddingTop: 10,
    },
    productContainer: {
        width: '100%',
        flex: 1,
    },
    productWrapper: {
        width: '100%',
    },
    sectionContainer: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 10,
    },
    sectionHeader: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    sectionContent: {
        flex: 1,
    },
    productThumbnail: {
        width: '100%',
        height: 238,
        borderRadius: 10,
        marginTop: 5,
    },
    productInformation: {
        flex: 1,
    },
    tabsContainer: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    tabContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
    },
    tabContent: {
        width: '100%',
    },
    bottomContainer: {
        width: '100%',
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    inputView: {
        height: 60,
        backgroundColor: '#FAFAFA',
        paddingHorizontal: 5,
        borderRadius: 10,
        fontSize: 14,
        marginVertical: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {flex: 1, color: 'black'},
    titleInputContainer: {
        marginTop: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    durationContainer: {
        width: '100%',
        marginVertical: 5,
        paddingHorizontal: 10,
    },
    label: {fontWeight: 'bold'},
    durationList: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    durationItem: {
        width: 70,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    moreBtn2: {
        justifyContent: 'center',
        marginRight: 10,
    },
});
export default StakingDetailScreen;
