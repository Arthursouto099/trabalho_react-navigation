import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChangeModeButton from './components/ui/ChangeModeButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TabsNavigator from './navigators/BottonTabNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemaProvider } from './providers/ThemeProvider';

const RootStack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <ThemaProvider>
      <SafeAreaView style={{flex: 1}}>
      <RootStack.Navigator initialRouteName='tabs' screenOptions={
        {headerShown: false}
      } >
          <RootStack.Screen name='tabs' component={TabsNavigator}/>
      </RootStack.Navigator>
      </SafeAreaView>
      </ThemaProvider>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}


