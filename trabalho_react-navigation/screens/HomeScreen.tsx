
import { View, Text } from "react-native";
import useThemeContext from "../hooks/useThemeContext";


export default function HomeScreen() {
        const {darkMode} = useThemeContext()

        return (
            <View style={{flex: 1}}>
                <Text>Olá</Text>
            </View>
        )
}