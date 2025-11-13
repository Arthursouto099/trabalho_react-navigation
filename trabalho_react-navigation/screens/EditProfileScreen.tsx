import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import useThemeContext from "../hooks/useThemeContext";
import { commonStyles } from "../styles/commonStyles";
import { ProfileScreenProps, User } from "../interfaces/NavigationTypes";
import useUserLoggedContext from "../hooks/useUserLoggedContext";
import { Ionicons } from "@expo/vector-icons";

export default function EditProfileScreen({
  route,
  navigation,
}: ProfileScreenProps) {
  const userCtx: User = route.params;
  const { darkMode } = useThemeContext();
  const { setUser } = useUserLoggedContext();
  const [user, setUserCtx] = useState<User>({
    email: userCtx.email,
    city: userCtx.city,
    name: userCtx.name,
  });

  return (
    <View style={darkMode ? commonStyles.modeDark : commonStyles.modeLight}>
    
    <View style={{
      position: "absolute",
      top: 0,padding: 10

    }}>
        <TouchableOpacity onPress={() => {navigation.navigate("tabs", undefined)}} >
        <Ionicons size={25} name="arrow-back" color={darkMode ? "white" : "black"}></Ionicons>
      </TouchableOpacity>
    </View>
    
      <View
        style={{
          display: "flex",
          gap: 3,
          alignItems: "center",
          flexDirection: "row",
          marginBottom: 15,
        }}
      >
        
        <Ionicons
          name="archive-outline"
          size={25}
          color={darkMode ? "white" : "black"}
        />

        <Text style={{ color: darkMode ? "white" : "black", fontSize: 17 }}>
          Editar
        </Text>
      </View>

      <View>
        <TextInput
          value={user.name}
          onChangeText={(t) =>
            setUserCtx({
              ...user,
              name: t,
            })
          }
          placeholder="Digite seu nome:"
          style={[
            styles.input,
            {
              color: darkMode ? "white" : "black",
            },
          ]}
        />
        <TextInput
          value={user.email}
          onChangeText={(t) =>
            setUserCtx({
              ...user,
              email: t,
            })
          }
          placeholder="Digite seu email:"
          style={[
            styles.input,
            {
              color: darkMode ? "white" : "black",
            },
          ]}
        />
        <TextInput
          value={user.city}
          onChangeText={(t) =>
            setUserCtx({
              ...user,
              city: t,
            })
          }
          placeholder="Digite sua cidade:"
          style={[
            styles.input,
            {
              color: darkMode ? "white" : "black",
            },
          ]}
        />
      </View>

      <TouchableOpacity onPress={() => setUser(user)} style={styles.button}>
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
