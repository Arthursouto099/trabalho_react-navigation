import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import useThemeContext from "../hooks/useThemeContext";
import type { ComponentProps } from "react";
import { TabParamList } from "../interfaces/NavigationTypes";
type IonicosName = ComponentProps<typeof Ionicons>["name"];

const icons: Record<string, IonicosName> = {
  home: "home-outline",
  settings: "settings-outline",
  profile: "person-outline",
};

const RootTabStack = createBottomTabNavigator<TabParamList>();

export default function TabsNavigator() {
  const { darkMode, setDarkMode } = useThemeContext();
  return (
    <RootTabStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          const iconName = icons[route.name] || "help-outiline";
          return <Ionicons name={iconName} size={24}  color={darkMode ? "white" : "black"}/>;
        },
        headerShown: false,
        tabBarStyle: { backgroundColor: darkMode ? "black" : "white",
         borderTopColor: darkMode ? "black" : "white"   
         },
      })}
    >
      <RootTabStack.Screen name="home" component={HomeScreen} />
      <RootTabStack.Screen name="settings" component={SettingsScreen} />

    </RootTabStack.Navigator>
  );
}
