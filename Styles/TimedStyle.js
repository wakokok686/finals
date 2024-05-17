import { StyleSheet } from 'react-native';

const TimedStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fffff', 

    },
    text:{ 
        color: '#2F3500', 
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 40,
        marginTop: 10
    },
    button: {
      padding: 20,
      marginTop: 10,
      borderRadius: 5,
      backgroundColor: '#CFEB8D',
      borderColor: '#907543',
      borderWidth: 1, 
      width: '50%',
      marginRight: 5, 
  
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
        marginTop: 50,
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
      clock: {
        position: 'absolute',
        top: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
      
      },
      clockIcon: {
        width: 50,
        height: 50,
      },
      timer: {
        fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
      },
  });

export default TimedStyles;
