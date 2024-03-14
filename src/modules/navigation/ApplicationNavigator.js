import * as React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStackNavigator from '@modules/navigation/AuthenticationStackNavigator';
import {withTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import MainStackNavigator from '@modules/navigation/MainStackNavigator';
import {StatusBar, StyleSheet} from 'react-native';
import {ThemeAction} from '@persistence/theme/ThemeAction';
import {CurrencyAction} from '@persistence/currency/CurrencyAction';
import {AppLockAction} from '@persistence/applock/AppLockAction';
import {TokenAction} from '@persistence/token/TokenAction';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {WalletAction} from '@persistence/wallet/WalletAction';
import {DEFAULT_WALLET} from '@persistence/wallet/WalletConstant';
import {UserAction} from '@persistence/user/UserAction';
import CommonLoading from '@components/commons/CommonLoading';
import {FeeAction} from '@persistence/fee/FeeAction';

const Drawer = createDrawerNavigator();

function ApplicationNavigator() {
    const {theme, defaultTheme} = useSelector(state => state.ThemeReducer);
    const {loggedIn} = useSelector(state => state.UserReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ThemeAction.getDefault());
        dispatch(CurrencyAction.getCurrency());
        dispatch(AppLockAction.getAppLock());
        dispatch(TokenAction.getAllTokens());
    }, [dispatch]);
    return (
        <NavigationContainer
            theme={{
                colors: {
                    background: theme.background,
                },
            }}>
            <StatusBar
                hidden={false}
                backgroundColor={theme.button}
                barStyle={
                    defaultTheme.code === 'light'
                        ? 'dark-content'
                        : 'light-content'
                }
            />

            {loggedIn ? (
                <MainStackNavigator />
            ) : (
                <AuthenticationStackNavigator />
            )}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontSize: 40,
        letterSpacing: 1,
        color: '#0xFFeab42f',
    },
});
const MyColor = StyleSheet.create({
    primary: {color: '#eab42f'},
    white: {color: '#FFFFFF'},
    title: {color: '#292929'},
    bg1: {color: '#F9F9F9'},
    body1: {color: '#777777'},
    body2: {color: '#555555'},
    unslectedTab: {color: '#E0E0E0'},
    primaryColor: {color: '#eab42f'},
    secondaryColor: {color: '#F6F7FE'},
    screenBgColor: {color: '#F9F9F9'},
    primaryTextColor: {color: '#262626'},
    contentTextColor: {color: '#777777'},
    lineColor: {color: '#ECECEC'},
    titleColor: {color: '#292929'},
    borderColor: {color: '#F2F2F2'},
    bodyTextColor: {color: '#747475'},
    labelTextColor: {color: '#444444'},
    smallTextColor1: {color: '#555555'},
    appBarColor: {color: '#eab42f'},
    appBarContentColor: {color: '#FFFFFF'},
    textFieldDisableBorderColor: {color: '#CFCEDB'},
    textFieldEnableBorderColor: {color: '#eab42f'},
    hintTextColor: {color: '#B0B0B0'},
    primaryButtonColor: {color: '#eab42f'},
    primaryButtonTextColor: {color: '#FFFFFF'},
    secondaryButtonColor: {color: '#FFFFFF'},
    secondaryButtonTextColor: {color: '#262626'},
    iconColor: {color: '#555555'},
    filterEnableIconColor: {color: '#eab42f'},
    filterIconColor: {color: '#555555'},
    colorWhite: {color: '#FFFFFF'},
    colorBlack: {color: '#262626'},
    colorGreen: {color: '#28C76F'},
    colorRed: {color: '#D92027'},
    colorGrey: {color: '#555555'},
    transparentColor: {color: 'transparent'},
    greenSuccessColor: {color: '#28C76F'},
    redCancelTextColor: {color: '#F93E2C'},
    highPriorityPurpleColor: {color: '#7367F0'},
    pendingColor: {color: 'orange'},
    greenP: {color: '#28C76F'},
    containerBgColor: {color: '#F9F9F9'},
    // Additional colors and methods can be added here.
});
export default withTranslation()(ApplicationNavigator);
