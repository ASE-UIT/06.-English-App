import { View, Text, ImageBackground,Image,TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { CheckBox,Button } from '@rneui/themed'



const SignUp = () => {
    const [isSelected, setSelection] = useState(false);
    const handleCheckBox = () => {
        setSelection(!isSelected)
        console.log(isSelected)
    }
    return (
        <ImageBackground source={require('../../assets/signupbg.png')} style={{ width: '100%', height: '100%' }}>
            <View className='flex gap-5 mt-[90px] items-center '>
                <Image source={require('../../assets/avatar.png')} className='w-[100px] h-[110px]' />
                <Text className='text-[38px] font-semibold text-[#5D5FEF]'>Create an account</Text>
                <View className='flex flex-row'>
                    <TouchableOpacity >
                        <Image source={require('../../assets/google.png')} className='w-[40px] h-[40px] mr-12' />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image source={require('../../assets/facebook.png')} className='w-[40px] h-[40px]' />
                    </TouchableOpacity>
                </View>

                <View className='flex gap-3'>
                    <TextInput placeholder='Full Name' className='border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4' />
                    <TextInput placeholder='Phone number' className='border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4' />
                    <TextInput placeholder='Password' className='border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4' />
                    <TextInput placeholder='Confirm password' className='border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4' />
                </View>
                <CheckBox
                    center
                    title={
                        <Text style={{ color: 'black' }}>
                        I agree to the{' '}
                        <Text
                            style={{ color: '#EF5DA8', textDecorationLine: 'underline' }}
                            onPress={() => console.log('Terms & Conditions pressed')}
                        >
                            Terms & Conditions
                        </Text>
                        </Text>
                    }
                    checked={isSelected}
                    onPress={handleCheckBox}
                />
                <Button
                    title={'Sign Up'}
                    containerStyle={{
                    }}
                    buttonStyle={{ 
                        backgroundColor: '#EF5DA8',
                        borderRadius: 12,

                        width: 150,
                    }}
                />
                <Text>Already have an account? <Text style={{ color: '#EF5DA8', textDecorationLine: 'underline' }} onPress={() => {console.log('press')}}>Login</Text> </Text>
            </View>
        </ImageBackground>
    )
}

export default SignUp