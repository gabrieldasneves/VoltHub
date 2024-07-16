import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
} from "react-native";
import { ButtonShape } from "../../typography/types";
import { colors } from "../../../modules/utils/colors";

type Props = {
  disabled?: boolean;
  title?: string;
  type?: ButtonShape;
  width?: number;
  height?: number;
  borderRadius?: number;
  color?: string;
  onPress: () => void;
  iconPath?: string;
};

export function Button({
  disabled = false,
  title,
  type = "circle",
  width = 52,
  height = 52,
  borderRadius = 50,
  color = colors.GRAY,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        { width, height, borderRadius, backgroundColor: colors.PRIMARY },
      ]}
    >
      {!title && <Image source={require("../../../../assets/arrowIcon.png")} />}
      {title && <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.BLACK,
    marginLeft: 8,
  },
  icon: {
    width: 16,
    height: 16,
  },
});
