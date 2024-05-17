import React, { useEffect } from "react";
import { View, Image } from "react-native";
import SplashStyles from "../Styles/SplashStyles";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={SplashStyles.splashcontainer}>
      <Image
        source={require("../assets/QuizSplash.jpg")}
        style={SplashStyles.splash}
        resizeMode="cover"
      />
    </View>
  );
};

export default SplashScreen;
