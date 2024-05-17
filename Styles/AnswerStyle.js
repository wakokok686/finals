import { StyleSheet } from "react-native";

const AnswerStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fffff', 
      },
      goBackButton: {
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: '#CFEB8D',
        borderColor: '#907543',
        borderWidth: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
      },
      goBackText: {
        fontWeight: 'bold',
      },
      scoreContainer: {
        alignItems: 'left',
        marginTop: 15,
        marginBottom: 20,
      },
      totalScoreText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      questionContainer: {
        marginBottom: 20,
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#907543',
        backgroundColor: '#d9ed92', 
      },
      correctAnswer: {
        marginBottom: 20,
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#907543',
        backgroundColor: '#ecf39e', 
      },
      wrongAnswer: {
        marginBottom: 20,
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#907543',
        backgroundColor: '#f28482', 
      },
      questionText: {
        fontSize: 16,
        marginBottom: 5,
      },
      answerText: {
        marginLeft: 10,
        marginBottom: 3,
      },
      answerText2: {
        marginLeft: 10,
        marginBottom: 3,
        color: '#ffbc42',
      },
      separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginVertical: 5,
      },
  });

  export default AnswerStyle;