import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

type InputFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
};

const InputField = ({ label, value, onChangeText }: InputFieldProps) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const handleEdit = () => {
    setIsEdit(!isEdit);

    }
  
    return (
    <View className="w-[90%] justify-center items-center ">
      <Text className="text-black ml-5 self-start text-base font-semibold leading-none">
        {label}
      </Text>
      <TextInput
        mode="outlined"
        dense
        disabled={!isEdit}
        value={value}
        style={{ width: "90%" }}
        onChangeText={onChangeText}
        outlineColor="#5D5FEF"
        outlineStyle={{borderRadius:15}}
        right={<TextInput.Icon icon={"pencil"} onPress={handleEdit} />}
      />
    </View>
  );
};

export default InputField;
