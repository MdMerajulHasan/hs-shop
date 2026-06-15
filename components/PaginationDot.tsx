import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

type Props = {
  index: number;
  scrollX: any;
};

export default function PaginationDot({ index, scrollX }: Props) {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollX.value,
      [index - 1, index, index + 1],
      [0.3, 1, 0.3]
    );

    const scale = interpolate(
      scrollX.value,
      [index - 1, index, index + 1],
      [1, 1.4, 1]
    );

    const width = interpolate(
      scrollX.value,
      [index - 1, index, index + 1],
      [8, 24, 8,]
    )

    return {
      opacity,
      transform: [{ scale }],
      width
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: "#F5F5F5",
          marginHorizontal: 4,
        },
        animatedStyle,
      ]}
    />
  );
}