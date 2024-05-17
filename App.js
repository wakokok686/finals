import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Login from './Screens/Login';
import Dashboard from './Screens/Home';
import SplashScreen from './Screens/SplashScreen';
import LoadingScreen from './Screens/LoadingScreen';
import RegisterScreen from './Screens/RegisterScreen';
import QuizScreen from './Screens/QuizScreen';
import PracticeScreen from './Screens/PracticeScreen';
import TimedScreen from './Screens/TimedScreen';
import AnswerScreen from './Screens/AnswerScreen';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Dashboard} options={{ title: 'Home', headerShown: false }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Practice" component={PracticeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Timed" component={TimedScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Answer" component={AnswerScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;