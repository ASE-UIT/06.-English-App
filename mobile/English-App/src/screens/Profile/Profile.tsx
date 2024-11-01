import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import InputField from './InputField'; // Adjust the import path as needed

const Profile = () => {
  const [phoneNumber, setPhoneNumber] = useState('1234567890');
  const [email, setEmail] = useState('exam@gmail.com');
  const [password, setPassword] = useState('*******');
  const [username, setUsername] = useState('johndoe');
  const [name, setName] = useState('John Doe');
  const [isEditingName, setIsEditingName] = useState(false);
  const nameInputRef = useRef(null);

  const handleEditName = () => {
    setIsEditingName(!isEditingName);
    if (!isEditingName) {
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 100); // Delay to ensure state update
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex flex-col justify-center items-center">
        <Avatar
          source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
          size="xlarge"
          rounded
          containerStyle={{ marginTop: 20 }}
          onPress={() => console.log('Works!')}
        />
        <View className="mt-5 flex flex-row items-center">
          {isEditingName ? (
            <TextInput
              ref={nameInputRef}
              value={name}
              onChangeText={setName}
              onBlur={handleEditName}
              autoFocus
              style={{ fontSize: 24, color: '#5d5fef', fontWeight: 'bold' }}
            />
          ) : (
            <Text className="text-2xl text-primary font-black mr-1">
              {name}
            </Text>
          )}
          <Icon
            onPress={handleEditName}
            name="square-edit-outline"
            type="material-community"
            size={25}
            containerStyle={{
              borderRadius: 999,
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </View>
        <InputField label="Username" value={username} onChangeText={setUsername} />
        <InputField label="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} />
        <InputField label="Email" value={email} onChangeText={setEmail} />
        <InputField label="Password" value={password} onChangeText={setPassword} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Profile;