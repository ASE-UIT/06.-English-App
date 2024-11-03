import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { CheckBox, Button } from '@rneui/themed'
import { Field, Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirm password is required'),
});

const SignUp = () => {
    const [isSelected, setSelection] = useState(false);
    const handleCheckBox = () => {
        setSelection(!isSelected)
        console.log(isSelected)
    }

    return (
        <ImageBackground source={require('../../../assets/signupbg.png')} style={{ width: '100%', height: '100%' }}>
            <View className='flex gap-5 mt-[90px] items-center'>
                <Image source={require('../../../assets/avatar.png')} className='w-[100px] h-[110px]' />
                <Text className='text-[38px] font-semibold text-[#5D5FEF]'>Create an account</Text>
                <View className='flex flex-row'>
                    <TouchableOpacity >
                        <Image source={require('../../../assets/google.png')} className='w-[40px] h-[40px] mr-12' />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image source={require('../../../assets/facebook.png')} className='w-[40px] h-[40px]' />
                    </TouchableOpacity>
                </View>

                <Formik
                    initialValues={{ fullName: '', phoneNumber: '', password: '', confirmPassword: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ handleChange, handleBlur,handleSubmit, values, errors, touched }) => (
                        <View className="flex gap-y-3 mt-3 mx-auto">
                            <TextInput
                                placeholder="Full Name"
                                className="border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4"
                                onChangeText={handleChange('fullName')}
                                onBlur={handleBlur('fullName')}
                                value={values.fullName}
                            />
                            {errors.fullName && touched.fullName && <Text style={{ color: 'red' }}>{errors.fullName}</Text>}

                            <TextInput
                                placeholder="Phone number"
                                className="border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4"
                                onChangeText={handleChange('phoneNumber')}
                                onBlur={handleBlur('phoneNumber')}
                                value={values.phoneNumber}
                            />
                            {errors.phoneNumber && touched.phoneNumber && <Text style={{ color: 'red' }}>{errors.phoneNumber}</Text>}

                            <TextInput
                                placeholder="Password"
                                className="border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry
                            />
                            {errors.password && touched.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}

                            <TextInput
                                placeholder="Confirm password"
                                className="border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4"
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                                secureTextEntry
                            />
                            {errors.confirmPassword && touched.confirmPassword && <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text>}

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
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                buttonStyle={{
                                    backgroundColor: '#EF5DA8',
                                    borderRadius: 12,
                                    width: 150,
                                }}
                            />
                        </View>
                    )}
                </Formik>
                <Text>Already have an account? <Text style={{ color: '#EF5DA8', textDecorationLine: 'underline' }} onPress={() => { console.log('press') }}>Login</Text> </Text>
            </View>
        </ImageBackground>
    )
}

export default SignUp