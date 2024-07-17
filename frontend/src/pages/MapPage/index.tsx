import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "../../components/atoms/Button";
import { colors } from "../../modules/utils/colors";
import { LinearGradient } from "expo-linear-gradient";

export function MapPage() {
  return (
    <LinearGradient
      colors={[colors.BLACK, colors.BLACK, colors.BLACK, colors.GRAY]}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <View style={styles.body}></View>
        <View style={styles.imgContainer}></View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  body: {
    marginBottom: 50,
    paddingLeft: 28,
  },
  header: {
    marginBottom: 32,
  },
  buttonContainer: {
    marginTop: 16,
  },
  title: {
    color: colors.PRIMARY,
    marginBottom: 20,
    fontSize: 40,
    fontWeight: "bold",
  },
  bodyText: {
    color: colors.WHITE,
    lineHeight: 30,
    fontWeight: "bold",
    fontSize: 14,
  },
  carImg: {
    marginTop: 50,
    width: 220,
    height: 220,
  },
  imgContainer: {
    width: "100%",
    alignItems: "center",
  },
  linearGradient: {
    flex: 1,
  },
});
