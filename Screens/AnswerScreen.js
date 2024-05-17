import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnswerStyle from '../Styles/AnswerStyle';

const AnswerScreen = ({ route }) => {
  const navigation = useNavigation();
  const { questionsData, userAnswers, totalScore, username } = route.params;

  const handleGoBack = () => {
    navigation.navigate('Loading', { username: username, destination: 'Home' });
  };

  return (
    <ScrollView style={AnswerStyle.container}>
      <TouchableOpacity onPress={handleGoBack} style={AnswerStyle.goBackButton}>
        <Text style={AnswerStyle.goBackText}>Go Back</Text>
      </TouchableOpacity>
      <View style={AnswerStyle.scoreContainer}>
        <Text style={AnswerStyle.totalScoreText}>Total Score: {totalScore}</Text>
      </View>
      {questionsData.map((question, index) => (
        <View 
          key={index} 
          style={[
            AnswerStyle.questionContainer, 
            userAnswers[index].answer.toLowerCase() === question.questionAnswer.toLowerCase() ? AnswerStyle.correctAnswer : AnswerStyle.wrongAnswer
          ]}
        >
          <Text style={AnswerStyle.questionText}>{index + 1}. {question.question}</Text>
          <Text style={AnswerStyle.answerText2}>Correct Answer: {question.questionAnswer}</Text>
          <Text style={AnswerStyle.answerText}>User Answer: {userAnswers[index].answer}</Text> 
        </View>
      ))}
    </ScrollView>
  );
};

export default AnswerScreen;
