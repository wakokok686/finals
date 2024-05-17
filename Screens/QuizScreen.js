import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import QuizStyles from "../Styles/QuizStyles";

const QuizScreen = ({ navigation, route }) => {
  const { level, username } = route.params;

  const handlePracticeQuiz = () => {
    navigation.navigate("Loading", { level, username, destination: 'Practice' });
  };

 

  const handleTakeQuiz = () => {
    navigation.navigate("Loading", { level, username, destination: 'Timed' });
  };

  const handleGoBack = () => {
    navigation.navigate('Loading', { username: username, destination: 'Home' });
  };

  return (
    <View style={[QuizStyles.container, {marginTop: 100}]}>
        
      <Text style={QuizStyles.text}>Level {level}</Text> 
      <View style={QuizStyles.buttonRow}>
        <TouchableOpacity onPress={handlePracticeQuiz} style={QuizStyles.button}>
          <View style={QuizStyles.buttonContent}>
            <Text style={QuizStyles.buttonText}>Practice Quiz</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleTakeQuiz}
          style={[QuizStyles.button]}
       
        >
          <View style={QuizStyles.buttonContent}>
            <Text style={QuizStyles.buttonText}>Take the Quiz!</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleGoBack} style={QuizStyles.goBackButton}>
        <Text style={QuizStyles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizScreen;
