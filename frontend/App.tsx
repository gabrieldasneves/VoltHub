import React, { useState } from "react";
import { Splash } from "./src/pages/Splash";
import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";
import { Home } from "./src/pages/Home";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadResources = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadResources}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <LinearGradient
      colors={["#151924", "#151924", "#464952"]}
      style={styles.linearGradient}
    >
      {isReady ? <Home /> : <Splash />}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
