import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Home } from "./src/pages/Home";
import { colors } from "./src/modules/utils/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MapPage } from "./src/pages/MapPage";
import { Image } from "react-native";

function ThunderIcon() {
  return (
    <Image
      style={{ width: 50, height: 50, marginBottom: 0 }}
      source={require("./assets/thunderIcon.png")}
    />
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MapPage"
          component={MapPage}
          options={{
            headerStyle: { backgroundColor: colors.BLACK },
            headerTitle: (props) => <ThunderIcon />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
