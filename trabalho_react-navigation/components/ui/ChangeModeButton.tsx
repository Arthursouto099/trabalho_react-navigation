import { TouchableOpacity, Text } from "react-native";
import useThemeContext from "../../hooks/useThemeContext";
import {FiSun} from "react-icons/fi"

export default function ChangeModeButton() {
    const {darkMode, setDarkMode} = useThemeContext()


    return (
        <TouchableOpacity>
            <FiSun size={20} color="black"/>
            

        </TouchableOpacity>
    )
}