import React, { useState } from "react";
import { View, TextInput, Image, Alert, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import "react-native-gesture-handler";
import LoginStyles from "../Styles/LoginStyles";
import CustomButton from "../Styles/ButtonStyle";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleRegister = async () => {
    try {
      if (!username || !password) {
        Alert.alert("Error", "Username and password cannot be blank.");
        return;
      }
  
      const existingUsers = JSON.parse(await AsyncStorage.getItem("users")) || [];
      const userExists = existingUsers.find(user => user.username === username);
      if (userExists) {
        Alert.alert("Error", "Username already exists. Please choose a different username.");
        return;
      }
      
      const newUser = { username, password };
      setRegisteredUsers(prevUsers => [...prevUsers, newUser]); 
      const updatedUsers = [...existingUsers, newUser];
      await AsyncStorage.setItem("users", JSON.stringify(updatedUsers));
  
      Alert.alert(
        "Registration Successful",
      );
      navigation.navigate("Loading", { username: username, destination: 'Home' });
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
  

  const handleLogin = () => {
    navigation.navigate("Loading", { username: username, password: password, destination: 'Login' });
  };

  const LoginLink = ({ onPress, text }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={LoginStyles.link}> {text} </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={LoginStyles.container}>
      <Image source={require("../assets/Logo.png")} style={LoginStyles.logo} />
      <TextInput
        style={LoginStyles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={LoginStyles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <CustomButton title="REGISTER" onPress={handleRegister} />
      <Text> Already have an Account?</Text>
      <LoginLink onPress={handleLogin} text="Login now!" />
    </View>
  );
};

export default RegisterScreen;
