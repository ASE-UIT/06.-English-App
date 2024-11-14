import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import InputField from './InputField'; // Adjust the import path as needed
import userService from '../../services/user.service';

const Profile = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('exam@gmail.com');
  const [password, setPassword] = useState('*******');
  const [username, setUsername] = useState('johndoe');
  const [name, setName] = useState('John Doe');
  const [isEditingName, setIsEditingName] = useState(false);
  const nameInputRef = useRef<TextInput>(null);
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    const fetchData= async()=>{
      try{

        const result = await userService.getUser();
        if(result.statusCode===200){
          const userData = result.data;
          setUsername(`${userData.firstName} ${userData.lastName}`);
          setPhoneNumber(userData.phone);
          setEmail(userData.email);
        }
      }
      catch(err){
        console.log(err);
      }
      
    }
    fetchData();
  }, []);

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
        <View
        style={{ marginTop: 100 }}
        className="flex flex-row justify-center items-center  gap-7"
      >
        <TouchableOpacity className="flex-row justify-between items-center bg-secondary rounded-lg shadow p-3">
          <Icon
            name="checkbox-marked-outline"
            type="material-community"
            color="white"
            size={25}
          />
          <Text className="text-white text-xs  font-semibold">Update</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center bg-secondary rounded-lg shadow p-3">
          <Icon name="cog" type="material-community" color="white" size={25} />
          <Text className="text-white text-xs  font-semibold">Setting</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center bg-secondary rounded-lg shadow p-3">
          <Icon
            name="logout"
            type="material-community"
            color="white"
            size={25}
          />
          <Text className="text-white text-xs  font-semibold">Log out</Text>
        </TouchableOpacity>
      </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Profile;