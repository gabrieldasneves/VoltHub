import React, { useEffect, useRef } from "react";
import { View, Image, StyleSheet, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { usePulseAnimation } from "../../hooks/usepulseAnimation";

export function Splash() {
  const value = usePulseAnimation();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../../assets/splash.png")}
        style={[styles.image, { transform: [{ scale: value }] }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 400,
    height: 400,
  },
});
