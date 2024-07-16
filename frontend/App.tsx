import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Home } from "./src/pages/Home";
import { colors } from "./src/modules/utils/colors";

export default function App() {
  return (
    <LinearGradient
      colors={[colors.BLACK, colors.BLACK, colors.BLACK, colors.GRAY]}
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
