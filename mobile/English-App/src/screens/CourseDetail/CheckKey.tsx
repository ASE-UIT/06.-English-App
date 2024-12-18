import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { Button } from '@rneui/themed'
import purchaseservice from '../../services/purchase.service'
import { useRoute } from '@react-navigation/native'
import { CheckKeyScreenRouteProp } from '../../type'
import Spinner from 'react-native-loading-spinner-overlay';
const CheckKey = () => {
    const [loading, setLoading] = useState(false);
    const toggleLoading = () => {
        setLoading(!loading);
    };
    const route = useRoute<CheckKeyScreenRouteProp>();
    const { coursebuyingId } = route.params;

    const [key, setKey] = useState<string>('');
    const checkKey = async () => {
        toggleLoading();
        const res = await purchaseservice.activeCourse(coursebuyingId, key);
        if (res) {
            if (res.data.active == true) {
                alert('Purchase successfully');
            }else{
                alert('Purchase failed');
            }
            setLoading(false);
        }
    }

    const onChangeText = (text: string) => {
        setKey(text);
    }

    return (
        <View className='w-full h-full'>
            <Spinner
                visible={loading}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
            />
            <Text>CheckKey</Text>
            <TextInput
                label="Key"
                value={key}
                onChangeText={onChangeText} />
            <Button onPress={checkKey}>Check</Button>
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