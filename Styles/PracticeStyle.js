import { StyleSheet } from 'react-native';

const PracticeStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#C1FF72', 

    },
    text:{ 
        color: '#2F3500', 
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
        marginTop: 10
    },
    button: {
      padding: 20,
      marginTop: 10,
      borderRadius: 5,
      backgroundColor: '#CFEB8D',
      borderColor: '#907543',
      borderWidth: 1, 
      width: '45%',
      justifyContent: 'space-evenly',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonText2: {
      fontSize: 16,
    
      textAlign: 'justify',
  },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
        marginTop: 20
      },
    questionText: {
        fontSize: 16,
        marginBottom: 20,
      },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: 'white', 
      },  
      buttonContainer: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-around',
        width: '100%',
    },
    disabledButton: {
        backgroundColor: '#999',
      },
    resultText: {
        marginTop: 20,
        fontSize: 16,
      },
  });

export default PracticeStyles;
