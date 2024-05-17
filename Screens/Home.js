import React from "react";
import { View, Text, TouchableOpacity, Image, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeStyles from "../Styles/HomeStyles";

const HomeScreen = ({ route }) => {
  const { username } = route.params;
  const navigation = useNavigation();

  const handleQuizLevel = (level) => {
    navigation.navigate('Loading', { level, username, destination: 'Quiz' });
  };

  const handleExitApp = () => {
    BackHandler.exitApp(); 
  };

  return (
    <View style={HomeStyles.container}>
        <TouchableOpacity
           style={HomeStyles.button2}
           onPress={handleExitApp}>

  <Text style={HomeStyles.labelStyle}>Exit</Text>
</TouchableOpacity>
      <Text style={HomeStyles.welcomeText}>
        Home Page
      </Text>
      <View style={HomeStyles.buttonsContainer}>
        {[1, 2, 3, 4, 5].map(level => (
          <TouchableOpacity
            key={level}
            style={HomeStyles.button}
            onPress={() => handleQuizLevel(level)}
          >
            <Text style={HomeStyles.buttonText}>Level {level}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;
