import { View, Text, ImageBackground,Image,TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { CheckBox,Button } from '@rneui/themed'


const SignUp = () => {
    // agree-checkbox
    const [isSelected, setSelection] = useState(false);
    const handleCheckBox = () => {
        setSelection(!isSelected)
        console.log(isSelected)
    }
    const [ fullName, setFullName ] = useState('')
    const [ phoneNumber, setPhoneNumber ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const handleFullName = (e: any) => {
        setFullName(e.target.value)
    }
    const handlePhoneNumber = (e: any) => {
        setPhoneNumber(e.target.value)
    }
    const handlePassword = (e: any) => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = (e: any) => {
        setConfirmPassword(e.target.value)
    }

    const submitForm = async () => {
        try {
            const response = await fetch('https://ec2-13-229-207-229.ap-southeast-1.compute.amazonaws.com/api/auth/sign-up', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                fullName,
                phoneNumber,
                password,
                confirmPassword,
              }),
            });
            const data = await response.json();
        
            if (response.ok) {
              // Xử lý khi đăng ký thành công
              console.log('Sign Up Successful:', data);
            } else {
              
            }
          } catch (error) {
            console.error('Error:', error);
            
          }
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
                    <TextInput onChangeText={handleFullName} placeholder='Full Name' className='border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4' />
                    <TextInput onChangeText={handleFullName} placeholder='Phone number' className='border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4' />
                    <TextInput onChangeText={handleFullName} placeholder='Password' className='border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4' />
                    <TextInput onChangeText={handleFullName} placeholder='Confirm password' className='border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4' />
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
                    onPress={submitForm}
                />
                <Text>Already have an account? <Text style={{ color: '#EF5DA8', textDecorationLine: 'underline' }} onPress={() => {console.log('press')}}>Login</Text> </Text>
            </View>
        </ImageBackground>
    )
}

export default SignUp