import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff', 
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    width: 250,
    marginBottom: 20,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'col',
  },
  button: {
    width: 80,
    height: 50,
    borderRadius: 20,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderColor: '#907543',
    borderWidth: 1, 
  },
  buttonText: {
    fontSize: 16,
    color: '#907543',
  },
  labelStyle: {
    fontSize: 14
  },
  disabledButton: {
    backgroundColor: '#999',
  },
  button2: {
    padding: 10,
  marginTop: 10,
  borderRadius: 5,
  borderWidth: 1, 
  position: 'absolute',
  top: 20,
  right: 20,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
    backgroundColor: 'lightgreen'
  },
 
  });

  export default HomeStyles;