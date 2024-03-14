import React, {useEffect} from 'react';
import {PinCode} from '@components/PinCode';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import CommonText from '@components/commons/CommonText';
import CommonLoading from '@components/commons/CommonLoading';
import {UserAction} from '@persistence/user/UserAction';
import {FeeAction} from '@persistence/fee/FeeAction';

const EnterPinCodeScreen = ({route}) => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const {theme} = useSelector(state => state.ThemeReducer);
    useEffect(() => {}, []);

    const success = async () => {
        setTimeout(() => {
            CommonLoading.show();
            dispatch(UserAction.signIn()).then(() => {
                dispatch(FeeAction.getFee());
                CommonLoading.hide();
            });
        }, 150);
    };
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.header} />
            <PinCode
                onFail={() => {
                    console.log('Fail to auth');
                }}
                onSuccess={() => success()}
                onClickButtonLockedPage={() => console.log('Quit')}
                status={'enter'}
            />
            <View style={styles.securityTextContainer}>
                <CommonText style={[styles.securityText, {color: theme.text2}]}>
                    {t('pincode.pass_code_will_add')}
                </CommonText>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    header: {
        height: 48,
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    securityTextContainer: {
        width: '100%',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    securityText: {
        fontSize: 13,
        textAlign: 'center',
    },
});
export default EnterPinCodeScreen;
