import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import TimedStyles from "../Styles/TimedStyle";
import { level1Questions, level2Questions, level3Questions, level4Questions, level5Questions } from "../LocalData/Questions";

const TimedScreen = ({ navigation, route }) => {
  const { level } = route.params;
  const questionsData = level === 1 ? level1Questions :
    level === 2 ? level2Questions :
    level === 3 ? level3Questions :
    level === 4 ? level4Questions :
    level === 5 ? level5Questions : null;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState(Array(questionsData.length).fill({ answer: '' }));
  const [totalScore, setTotalScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft === 0) {
        if (currentQuestionIndex === questionsData.length - 1) {
          handleFinishQuiz();
        } else {
          handleNextQuestion();
        }
      } else {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, currentQuestionIndex]);

  const handleNextQuestion = () => {
    const correctAnswerText = questionsData[currentQuestionIndex].questionAnswer;
    const userEnteredAnswer = userAnswer.trim().toLowerCase();
    const isCorrect = userEnteredAnswer === correctAnswerText.toLowerCase();

    const newTotalScore = isCorrect ? totalScore + 1 : totalScore;
    setTotalScore(newTotalScore);

    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = { answer: userEnteredAnswer };
    setUserAnswers(updatedUserAnswers);

    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setUserAnswer('');
    setIsCorrectAnswer(false);
    setTimeLeft(15);
  };

  const handleFinishQuiz = () => {
    const correctAnswerText = questionsData[currentQuestionIndex].questionAnswer;
    const userEnteredAnswer = userAnswer.trim().toLowerCase();

    console.log("Correct Answer:", correctAnswerText); 
    console.log("User Entered Answer:", userEnteredAnswer); 

    const isCorrect = userEnteredAnswer === correctAnswerText.toLowerCase();

    console.log("Is Correct:", isCorrect); 

    const newTotalScore = isCorrect ? totalScore + 1 : totalScore;

    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = { answer: userEnteredAnswer };
    setUserAnswers(updatedUserAnswers);

    console.log("New Total Score:", newTotalScore);
    setTotalScore(newTotalScore);
    navigation.navigate('Loading', {
      questionsData: questionsData, 
      userAnswers: updatedUserAnswers,
      totalScore: newTotalScore,
      username: route.params.username,
      destination: 'Answer'
    });
  };

  return (
    <View style={TimedStyles.container}>
      <View style={TimedStyles.clock}>
        <Image source={require("../assets/cobra-unscreen.gif")} style={TimedStyles.clockIcon} />
        <Text style={TimedStyles.timer}>{timeLeft}</Text>
      </View>
      <Text style={TimedStyles.text}>Level {level}</Text>
      {currentQuestionIndex < questionsData.length ? (
        <View style={TimedStyles.card}>
          <Text style={TimedStyles.questionText}>{questionsData[currentQuestionIndex].question}</Text>
          <TextInput
            style={TimedStyles.input}
            onChangeText={text => setUserAnswer(text)}
            value={userAnswer}
            placeholder="Type your answer here..."
            placeholderTextColor="#999"
          />

          <View style={TimedStyles.buttonContainer}>
            {currentQuestionIndex < questionsData.length - 1 && (
              <TouchableOpacity style={TimedStyles.button} onPress={handleNextQuestion}>
                <Text style={TimedStyles.buttonText}>Next Question</Text>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity style={TimedStyles.button} onPress={handleFinishQuiz}>
            <Text style={TimedStyles.buttonText}>Finish Quiz!</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default TimedScreen;
