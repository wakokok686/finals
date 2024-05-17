import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import PracticeStyles from "../Styles/PracticeStyle";
import { level1Questions, level2Questions, level3Questions, level4Questions, level5Questions } from "../LocalData/Questions";

const TriviaModal = ({ isVisible, onClose, trivia, isCorrectAnswer, questionAnswer }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: '#aaf683', padding: 30, borderRadius: 10, width: '80%' }}>
        {isCorrectAnswer ? (
          <Text style={[PracticeStyles.resultText, { color: 'green', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: 10 }]}>
            Correct Answer! 
          </Text>
        ) : null}
          <Text style={PracticeStyles.buttonText2}>{trivia}</Text>
          <TouchableOpacity onPress={onClose} style={{ backgroundColor: '#CFEB8D', padding: 10, borderRadius: 5, borderColor: '#907543', borderWidth: 1, marginTop: 20 }}>
            <Text style={PracticeStyles.buttonText}>Got it!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const PracticeScreen = ({ navigation, route }) => {
  const { level, username } = route.params;
  const questionsData = level === 1 ? level1Questions :
    level === 2 ? level2Questions :
    level === 3 ? level3Questions :
    level === 4 ? level4Questions :
    level === 5 ? level5Questions : null;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
    const [isWrongAnswer, setIsWrongAnswer] = useState(false);
    const [trivia, setTrivia] = useState('');
    const [userAnswers, setUserAnswers] = useState(Array(questionsData.length).fill({ answer: '', isScored: false }));
    const [totalScore, setTotalScore] = useState(0);
    const [isTriviaModalVisible, setTriviaModalVisible] = useState(false); 

  const handleGoBack = () => {
    navigation.navigate('Loading', { username, destination: 'Home' });
  };

  const handleNextQuestion = () => {
    if (userAnswer.trim() === '') {
      setCurrentQuestionIndex(currentIndex => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < questionsData.length) {
          setUserAnswer('');
          setIsWrongAnswer(false);
        }
        return nextIndex;
      });
    } else {
      const correctAnswerText = questionsData[currentQuestionIndex].questionAnswer.toLowerCase();
      const userEnteredAnswer = userAnswer.trim().toLowerCase();
      setIsCorrectAnswer(false);
      setIsWrongAnswer(false);
      setTrivia('');
      setTriviaModalVisible(false);
  
      setUserAnswers(prevAnswers => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[currentQuestionIndex] = { answer: userAnswer.trim().toLowerCase(), isScored: false };
        return updatedAnswers;
      });
  
      if (userEnteredAnswer === correctAnswerText) {
        setIsCorrectAnswer(true);
        setTotalScore(prevScore => prevScore + 1);
        setUserAnswers(prevAnswers => {
          const updatedAnswers = [...prevAnswers];
          updatedAnswers[currentQuestionIndex] = { answer: userAnswer.trim().toLowerCase(), isScored: true };
          return updatedAnswers;
        });
        setTrivia(questionsData[currentQuestionIndex].trivia);
        setTriviaModalVisible(true);
  
        setTimeout(() => {
          setTriviaModalVisible(false);
          setIsCorrectAnswer(false);
          setIsWrongAnswer(false);
          setTrivia('');
  
          setCurrentQuestionIndex(currentIndex => {
            const nextIndex = currentIndex + 1;
            if (nextIndex < questionsData.length) {
              setUserAnswer('');
            }
            return nextIndex;
          });
        }, 1000);
      } else {
        setIsCorrectAnswer(false);
        setIsWrongAnswer(true);
      }
    }
  };
  
  
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      const prevUserAnswer = userAnswers[currentQuestionIndex - 1];
      const correctAnswerText = questionsData[currentQuestionIndex - 1].questionAnswer.toLowerCase();
  
      setUserAnswer('');
      setIsCorrectAnswer(false);
      setIsWrongAnswer(false);
      setTrivia('');
      setCurrentQuestionIndex(currentIndex => currentIndex - 1);
  
      if (prevUserAnswer && prevUserAnswer.isScored) {
        if (prevUserAnswer.answer === correctAnswerText) {
          setTotalScore(prevScore => prevScore - 1); 
        }
      }
    }
  };
  
  const checkAnswer = () => {
    const correctAnswerText = questionsData[currentQuestionIndex].questionAnswer.toLowerCase();
    const userEnteredAnswer = userAnswer.trim().toLowerCase();
  
    if (userAnswer.trim() !== '') {
      setUserAnswers(prevAnswers => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[currentQuestionIndex] = { answer: userAnswer.trim().toLowerCase(), isScored: false };
        return updatedAnswers;
      });
  
      if (userEnteredAnswer === correctAnswerText) {
        setIsCorrectAnswer(true);
        setTotalScore(prevScore => prevScore + 1);
        setUserAnswers(prevAnswers => {
          const updatedAnswers = [...prevAnswers];
          updatedAnswers[currentQuestionIndex] = { answer: userAnswer.trim().toLowerCase(), isScored: true };
          return updatedAnswers;
        });
        setTrivia(questionsData[currentQuestionIndex].trivia);
        setTriviaModalVisible(true);
  
        if (currentQuestionIndex === questionsData.length - 1) {
          setUserAnswers(prevAnswers => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[currentQuestionIndex] = { answer: userAnswer.trim().toLowerCase(), isScored: true };
            return updatedAnswers;
          });
  
          setTimeout(() => {
            setTriviaModalVisible(false);
            navigation.navigate('Loading', {
              questionsData: questionsData, 
              userAnswers: [...userAnswers], 
              totalScore: totalScore + 1, 
              username: route.params.username,
              destination: 'Answer'
            });
          }, 1000);
        } else {
          setTimeout(() => {
            setTriviaModalVisible(false);
            setIsCorrectAnswer(false);
            setIsWrongAnswer(false);
            setTrivia('');
            setCurrentQuestionIndex(currentIndex => currentIndex + 1);
            setUserAnswer('');
          }, 1000);
        }
      } else {
        setIsCorrectAnswer(false);
        setIsWrongAnswer(true);
      }
    }
  };
  
  const handlePracticeCompleted = () => {
    const correctAnswerText = questionsData[currentQuestionIndex].questionAnswer;
    const userEnteredAnswer = userAnswer.trim().toLowerCase();
  
    console.log("Correct Answer:", correctAnswerText); 
    console.log("User Entered Answer:", userEnteredAnswer); 
  
    const isCorrect = userEnteredAnswer === correctAnswerText.toLowerCase();
  
    console.log("Is Correct:", isCorrect); 
  
    const newTotalScore = isCorrect ? totalScore + 1 : totalScore;
  
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = { answer: userEnteredAnswer, isScored: isCorrect };
    setUserAnswers(updatedUserAnswers);
  
    console.log("New Total Score:", newTotalScore);
    setTotalScore(newTotalScore);
  
    if (currentQuestionIndex === questionsData.length - 1) {
      // Last question
      if (isCorrect) {
        setTrivia(questionsData[currentQuestionIndex].trivia);
        setTriviaModalVisible(true);
        setTimeout(() => {
          setTriviaModalVisible(false);
          navigation.navigate('Loading', {
            questionsData: questionsData, 
            userAnswers: updatedUserAnswers,
            totalScore: newTotalScore,
            username: route.params.username,
            destination: 'Answer'
          });
        }, 1000);
      } else {
        setIsWrongAnswer(true); 
      }
    } else {
      navigation.navigate('Loading', {
        questionsData: questionsData, 
        userAnswers: updatedUserAnswers,
        totalScore: newTotalScore,
        username: route.params.username,
        destination: 'Answer'
      });
    }
  };
  

  return (
    <View style={PracticeStyles.container}>
      <Text style={PracticeStyles.text}>Level {level}</Text>
      {currentQuestionIndex < questionsData.length ? (
        <View style={PracticeStyles.card}>
          <Text style={PracticeStyles.questionText}>{questionsData[currentQuestionIndex].question}</Text>
          <TextInput
            style={PracticeStyles.input}
            onChangeText={text => setUserAnswer(text)}
            value={userAnswer}
            placeholder="Type your answer here..."
            placeholderTextColor="#999"
          />
          {isWrongAnswer ? (
            <Text style={[PracticeStyles.resultText, { color: 'red' }]}>
              Incorrect Answer! The correct answer is: {questionsData[currentQuestionIndex].questionAnswer}
            </Text>
          ) : null}
          <View style={PracticeStyles.buttonContainer}>
            {currentQuestionIndex !== 0 && (
              <TouchableOpacity style={PracticeStyles.button} onPress={handlePrevQuestion}>
                <Text style={PracticeStyles.buttonText}>Previous Question</Text>
              </TouchableOpacity>
            )}
            {currentQuestionIndex < questionsData.length - 1 && (
              <TouchableOpacity style={PracticeStyles.button} onPress={handleNextQuestion}>
                <Text style={PracticeStyles.buttonText}>Next Question</Text>
              </TouchableOpacity>
            )}
          </View>
          {currentQuestionIndex !== questionsData.length - 1 && (
  <TouchableOpacity
    style={[PracticeStyles.button, !userAnswer && PracticeStyles.disabledButton]}
    onPress={checkAnswer}
    disabled={!userAnswer}
  >
    <Text style={PracticeStyles.buttonText}>Check Answer</Text>
  </TouchableOpacity>
)}
          <TouchableOpacity style={PracticeStyles.button} onPress={handlePracticeCompleted}>
            <Text style={PracticeStyles.buttonText}>Finish Practice</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGoBack} style={[PracticeStyles.button]}>
            <Text style={PracticeStyles.buttonText}>Exit</Text>
          </TouchableOpacity>
          
          <TriviaModal
        isVisible={isTriviaModalVisible}
        onClose={() => setTriviaModalVisible(false)}
        trivia={trivia}
        isCorrectAnswer={isCorrectAnswer}
        questionAnswer={questionsData[currentQuestionIndex].questionAnswer}
      />
        </View>
      ) : null}
    </View>
  );
};

export default PracticeScreen;
