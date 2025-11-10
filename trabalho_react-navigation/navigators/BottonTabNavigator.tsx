import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons"
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import EditProfileScreen from "../screens/EditProfileScreen";



const RootTabStack = createBottomTabNavigator()



export default function TabsNavigator () {
    return (
        <RootTabStack.Navigator 
        screenOptions={({route}) => ({
            tabBarIcon: () => {
                if(route.name === 'home') return <Ionicons name="home" size={24}/>
                if(route.name === "settings") return <Ionicons name="settings" size={24}/>
                if(route.name === "profile") return <Ionicons name="american-football" size={24}/>
            },
            headerShown: false
        })}
        >
        <RootTabStack.Screen name="home" component={HomeScreen}/>
        <RootTabStack.Screen name="settings" component={SettingsScreen}/>
        <RootTabStack.Screen name="profile" component={EditProfileScreen}/>
        
        </RootTabStack.Navigator>
    )
}