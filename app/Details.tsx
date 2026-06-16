import { Text, View } from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function Details(){

    const {id} = useLocalSearchParams<{id: string}>();

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>{id}</Text>
        </View>
    )
}