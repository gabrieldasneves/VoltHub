import React from "react";
import { Splash } from "./src/pages/Splash";
import { StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#151924", "#151924", "#464952"]}
      style={styles.linearGradient}
    >
      <Splash />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
