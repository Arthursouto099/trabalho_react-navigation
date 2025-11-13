import { TouchableOpacity, Text } from "react-native";
import useThemeContext from "../../hooks/useThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { commonStyles } from "../../styles/commonStyles";

export default function ChangeModeButton() {
    const {darkMode, setDarkMode} = useThemeContext()


    return (
        <TouchableOpacity
        onPress={() => {setDarkMode(prev=> !prev)}}
        >
            <Ionicons size={24} name={darkMode ? "moon" : "sunny"} color={darkMode ? "white" : "black"}/>
            {/* <FiSun size={20} style={darkMode ? commonStyles.buttonDark : commonStyles.buttonLigth}/> */}
        </TouchableOpacity>
    )
}