import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  text1?: string;
  text2?: string;
  type: "success" | "error";
};

export default function CustomToast({ text1, text2, type }: Props) {
  const isSuccess = type === "success";

  return (
    <View style={styles.container}>
      <Ionicons
        name={isSuccess ? "checkmark-circle" : "close-circle"}
        size={64}
        color={isSuccess ? "#22C55E" : "#EF4444"}
      />

      <Text style={styles.title}>{text1}</Text>

      {!!text2 && <Text style={styles.subtitle}>{text2}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    alignSelf: "center",

    backgroundColor: "#fff",
    borderRadius: 20,

    paddingVertical: 24,
    paddingHorizontal: 20,

    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },

  title: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: "#666",
    textAlign: "center",
  },
});
