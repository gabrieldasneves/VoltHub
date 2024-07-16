import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <LinearGradient
      colors={["#151924", "#151924", "#464952"]}
      style={styles.linearGradient}
    >
      <Home />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
