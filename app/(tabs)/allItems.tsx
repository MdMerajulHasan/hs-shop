import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function AllItems() {

    const { filter } = useLocalSearchParams<{
        filter?: string;
    }>();

    console.log(filter);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>
                {filter}
            </Text>
      </View>
    )

}