import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { Button } from '@rneui/themed'
import purchaseservice from '../../services/purchase.service'
import { useNavigation, useRoute, } from '@react-navigation/native'
import { CheckKeyScreenRouteProp,  } from '../../type'
import Spinner from 'react-native-loading-spinner-overlay';
const CheckKey = () => {
    const [loading, setLoading] = useState(false);
    const toggleLoading = () => {
        setLoading(!loading);
    };
    const route = useRoute<CheckKeyScreenRouteProp>();
    const { courseBuyingId } = route.params;

    const [key, setKey] = useState<string>('');
    const nav = useNavigation();
    const checkKey = async () => {
        toggleLoading();
        const res = await purchaseservice.activeCourse(courseBuyingId, key);
        if (res) {
            if (res.data.active == true) {
                alert('Purchase successfully');
            } else {
                alert('Purchase failed');
            }
            setLoading(false);
            nav.navigate('learning');
        }
    }

    const onChangeText = (text: string) => {
        setKey(text);
    }

    return (
        <View className="px-3 h-full pt-10">
            <Spinner
                visible={loading}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
            />
            {/* Centered View */}
            <View className="items-center">
                <Text>OTP code was sent in your email</Text>
                <TextInput
                    label="OTP code"
                    value={key}
                    onChangeText={onChangeText}
                    style={{ width: 300 }}
                />
                <Button onPress={checkKey} containerStyle={{
                    backgroundColor: '#FF6347',
                    width: 300,
                    marginTop: 10
                }}>Check</Button>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinnerTextStyle: {
        color: '#FFF',
    },
});
export default CheckKey