import { useEffect, useRef } from "react";
import { Animated } from "react-native";

export function usePulseAnimation() {
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.1,
          duration: 2000,
          useNativeDriver: true,
        }),

        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    );
    pulseAnimation.start();
    return () => pulseAnimation.stop();
  }, [scaleValue]);

  return scaleValue;
}
