import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import useThemeContext from "../hooks/useThemeContext";
import { commonStyles } from "../styles/commonStyles";

export default function EditProfileScreen() {
  const { darkMode } = useThemeContext();

  return (
    <View style={darkMode ? commonStyles.modeDark : commonStyles.modeLight}>
      <View>
        <Text> Editar </Text>
      </View>

      <View>
        <TextInput placeholder="Digite seu nome:" style={styles.input} />
        <TextInput placeholder="Digite seu email:" style={styles.input} />
        <TextInput placeholder="Digite sua cidade:" style={styles.input} />
      </View>

      <TouchableOpacity
        onPress={() => alert("Alterações salvas!")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Salvar alterações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 20,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,

    marginBottom: 15,
  },
  button: {
    backgroundColor: "#000000ff",
    padding: 12,
    borderRadius: 5,
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
