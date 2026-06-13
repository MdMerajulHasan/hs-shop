import { Text, StyleSheet } from "react-native";

type Props = {
    label: string;
}

export default function MenuFormTitle({label}: Props){
    return (
        <Text style={styles.text}>{label}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        fontWeight: 700,
        color: "#F5F5F5",
        marginBottom: 20
    }
})