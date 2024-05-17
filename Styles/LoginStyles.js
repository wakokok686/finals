import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffff', 
    paddingHorizontal: 20,
  },
  logo: {
    height: 250,
    width: 250,
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
  link: {
    color: 'black', 
    fontWeight: 'bold'  },
  });

  export default LoginStyles;