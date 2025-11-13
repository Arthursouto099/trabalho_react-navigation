import { View, Text, TouchableOpacity } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import { useTheme } from "@react-navigation/native";
import useThemeContext from "../hooks/useThemeContext";
import ChangeModeButton from "../components/ui/ChangeModeButton";

export default function SettingsScreen() {
  const { darkMode } = useThemeContext();

  return (
    <View style={[darkMode ? commonStyles.modeDark : commonStyles.modeLight]}>
      <View
        style={{
          position: "absolute",
          top: 0,
          padding: 10,
          
        }}
      >
        <ChangeModeButton />
        <TouchableOpacity>
          <Text style={[{ color: darkMode ? "white" : "black" }, { }]}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>

      <View></View>
    </View>
  );
}
