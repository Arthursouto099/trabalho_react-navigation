import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigator from './navigators/BottonTabNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import useThemeContext from './hooks/useThemeContext';
import { commonStyles } from './styles/commonStyles';
import EditProfileScreen from './screens/EditProfileScreen';
import { TabParamList } from './interfaces/NavigationTypes';



const RootStack = createNativeStackNavigator<TabParamList>()

export default function Router() {
  const {darkMode, setDarkMode} = useThemeContext()

  return (
   
    <NavigationContainer>
     
      <SafeAreaView  style={[darkMode ? commonStyles.modeDark : commonStyles.modeLight]}>
      <RootStack.Navigator initialRouteName='tabs' screenOptions={
        {headerShown: false}
      } > 
   
                 <RootStack.Screen name='tabs' component={TabsNavigator}/>
            <RootStack.Screen name="profile" component={EditProfileScreen} />
     
      </RootStack.Navigator>
      </SafeAreaView>
 
    </NavigationContainer>
   
  );
}


