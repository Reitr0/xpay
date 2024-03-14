import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {RefreshControl, SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CommonText from '@components/commons/CommonText';
import CommonImage from '@components/commons/CommonImage';
import CommonTouchableOpacity from '@components/commons/CommonTouchableOpacity';
import CommonFlatList from '@components/commons/CommonFlatList';
import Balance from '@components/Balance';
import {WalletAction} from '@persistence/wallet/WalletAction';
import {StakingAction} from '@persistence/staking/StakingAction';
import useWalletHook from '@persistence/wallet/WalletHook';
import {applicationProperties} from '@src/application.properties';
import LinearGradient from 'react-native-linear-gradient';
const menus = [
    {
        id: 'lock-30',
        name: '30-Day Lock Staking',
        code: '30 days',
        apr: '10%',
        desc: 'Get a 5% discount on every purchase with a 30-day lock.',
        data: {
            duration: 30 * 24 * 60 * 60,
            rate: 10,
        },
    },
    {
        id: 'lock-60',
        name: '60-Day Lock Staking',
        code: '60 days',
        apr: '20%',
        desc: 'Enjoy a 10% discount on every purchase after staking for 60 days.',
        data: {
            duration: 60 * 24 * 60 * 60,
            rate: 20,
        },
    },
    {
        id: 'lock-90',
        name: '90-Day Lock Staking',
        code: '90 days',
        apr: '30%',
        desc: 'Stake for 90 days and get a 15% discount on all purchases.',
        data: {
            duration: 90 * 24 * 60 * 60,
            rate: 30,
        },
    },
    {
        id: 'lock-120',
        name: '120-Day Lock Staking',
        code: '120 days',
        apr: '40%',
        desc: 'Maximize your savings with a 20% discount on all purchases after a 120-day lock period.',
        data: {
            duration: 120 * 24 * 60 * 60,
            rate: 40,
        },
    },
];
function StakingScreen({navigation}) {
    const {theme} = useSelector(state => state.ThemeReducer);
    const dispatch = useDispatch();
    const {stakedBalance} = useSelector(state => state.StakingReducer);
    const [refreshing, setRefreshing] = useState(false);
    const {vcoin} = useWalletHook();
    useEffect(() => {
        (async () => {
            dispatch(StakingAction.getStakedBalance(vcoin.walletAddress));
        })();
    }, []);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        dispatch(StakingAction.getStakedBalance(vcoin.walletAddress)).then(
            () => {
                setRefreshing(false);
            },
        );
        dispatch(WalletAction.balance());
    }, []);
    const renderItem = ({item}) => {
        return (
            <CommonTouchableOpacity
                onPress={() => {
                    navigation.navigate('StakingDetailScreen', {item});
                }}
                style={[styles.itemContainer]}>
                <View style={styles.imageContainer}>
                    <CommonImage
                        source={{uri: applicationProperties.logoURI.app}}
                        style={{
                            width: 32,
                            height: 32,
                            borderWidth: 2,
                            borderColor: theme.bg0,
                            borderRadius: 100,
                        }}
                    />
                </View>
                <View style={styles.itemInformationContainer}>
                    <View style={{flex: 1}}>
                        <CommonText style={{color: theme.inputText}}>
                            {item.name}
                        </CommonText>
                        <CommonText
                            style={[styles.descText, {color: theme.text7}]}>
                            {item.desc}
                        </CommonText>
                    </View>
                    <View>
                        <CommonText style={{color: theme.longColor}}>
                            {item.apr}
                        </CommonText>
                    </View>
                </View>
            </CommonTouchableOpacity>
        );
    };
    return (
        <View style={[styles.container, {backgroundColor: theme.background2}]}>
            <SafeAreaView
                style={[
                    styles.container,
                    {backgroundColor: theme.background2},
                ]}>
                <View style={[styles.content, {backgroundColor: theme.bg0}]}>
                    <View
                        style={[
                            styles.userInformationContainer,
                            {backgroundColor: theme.background2},
                        ]}>
                        <View style={styles.userContainerTop}>
                            <View
                                style={[
                                    styles.userImgContainer,
                                    {
                                        borderRadius: 100,
                                    },
                                ]}>
                                <CommonImage
                                    source={{
                                        uri: applicationProperties.logoURI.app,
                                    }}
                                    style={styles.userImg}
                                />
                            </View>
                            <View style={styles.userInfo}>
                                <CommonText style={[styles.userSubTitle]}>
                                    You have
                                </CommonText>
                                <Balance
                                    style={[styles.userTitle]}
                                    symbol={' Azure'}>
                                    {vcoin?.balance}
                                </Balance>
                            </View>
                        </View>
                        <View style={styles.userContainerBottom}>
                            <CommonText style={styles.label}>
                                Staked{': '}
                                <Balance
                                    style={styles.userTitle}
                                    symbol={' Azure'}>
                                    {stakedBalance}
                                </Balance>
                            </CommonText>
                            <CommonTouchableOpacity
                                onPress={() => {
                                    navigation.navigate('StakingHistoryScreen');
                                }}>
                                <CommonText style={styles.label}>
                                    History
                                </CommonText>
                            </CommonTouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.promotionContainer}>
                        <LinearGradient
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 1}}
                            colors={theme.gradient1}
                            style={styles.promotion}>
                            <CommonText
                                style={{
                                    fontWeight: 'bold',
                                }}>
                                Using AZURE for a 20% discount on purchases
                            </CommonText>
                        </LinearGradient>
                    </View>
                    <View style={styles.menuContainer}>
                        <CommonFlatList
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            data={menus}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
                        />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    userInformationContainer: {
        width: '100%',
        height: 140,
        padding: 10,
    },
    userImgContainer: {
        width: 64,
        height: 64,
    },
    userContainerTop: {
        flex: 1,
        flexDirection: 'row',
    },
    userImg: {
        flex: 1,
    },
    userInfo: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    userContainerBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    userSubTitle: {
        fontSize: 13,
    },
    label: {
        fontSize: 13,
    },
    promotionContainer: {
        width: '100%',
        marginTop: 15,
        paddingHorizontal: 10,
    },
    promotion: {
        width: '100%',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuContainer: {
        flex: 1,
        marginVertical: 10,
    },
    itemContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        flexDirection: 'row',
        paddingHorizontal: 5,
        height: 64,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemInformationContainer: {
        flex: 1,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    descText: {
        fontSize: 11,
    },
    apr: {
        width: 50,
    },
});
export default StakingScreen;
