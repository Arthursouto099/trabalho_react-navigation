import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useThemeContext from "../hooks/useThemeContext";
import { HomeScreenProps } from "../interfaces/NavigationTypes";

import { Ionicons } from "@expo/vector-icons";
import { commonStyles } from "../styles/commonStyles";
import useUserLoggedContext from "../hooks/useUserLoggedContext";

export default function HomeScreens({ navigation }: HomeScreenProps) {
  const { darkMode, setDarkMode } = useThemeContext();
  const {user} = useUserLoggedContext()

  return (
    <View
      style={[
        darkMode ? homeStyles.darkHome : homeStyles.ligthHome,
        homeStyles.Home,
      ]}
    >
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Ionicons
            name="person"
            size={20}
            color={darkMode ? "white" : "black"}
          ></Ionicons>

          <Text
            style={[
              darkMode ? homeStyles.darkHome : homeStyles.ligthHome,
              {
                fontSize: 20,
              },
            ]}
          >
            Perfil do Usuario
          </Text>
        </View>

        <View
          style={[
            darkMode ? homeStyles.darkHome : homeStyles.ligthHome,
            {
              padding: 10,
              marginTop: 10,
              marginBottom: 10,
            },
            darkMode ? commonStyles.cardDark : commonStyles.cardLigth
          ]}
        >
          <Text
            style={[
              darkMode ? homeStyles.textDarkColor : homeStyles.textColorLigth,
              {
                fontSize: 17,
                marginBottom: 2,
              },
            ]}
          >
            {user.name}
          </Text>
          <Text
            style={[
              darkMode ? homeStyles.textDarkColor : homeStyles.textColorLigth,
              {
                color: "#B0B0B0",
              },
            ]}
          >
            {user.email}
          </Text>
          <Text
            style={[
              darkMode ? homeStyles.textDarkColor : homeStyles.textColorLigth,
              { color: "#B0B0B0" },
            ]}
          >
            {user.city}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {navigation.navigate("profile", {
            name: user.name,
            email: user.email,
            city: user.city
        })}}
        style={[
          darkMode ? homeStyles.darkHome : homeStyles.ligthHome, darkMode ? commonStyles.buttonDark : commonStyles.buttonLigth
        ]}
      >
        <View>
          <Text style={darkMode ? homeStyles.darkHome : homeStyles.ligthHome}>
            Editar Perfil
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const homeStyles = StyleSheet.create({
  darkHome: {
    backgroundColor: "black",
    color: "white",
  },
  ligthHome: {
    backgroundColor: "white",
    color: "black",
  },
  textDarkColor: {
    color: "#ffff",
  },
  textColorLigth: {
    color: "#000",
  },
  Home: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
