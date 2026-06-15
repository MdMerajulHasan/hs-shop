import { View } from "react-native";
import PaginationDot from "./PaginationDot";

export default function Pagination({ length, scrollX }: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Array.from({ length }).map((_, i) => (
        <PaginationDot key={i} index={i} scrollX={scrollX} />
      ))}
    </View>
  );
}