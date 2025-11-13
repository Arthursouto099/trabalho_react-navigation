import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemaProvider } from './providers/ThemeProvider';
import useThemeContext from './hooks/useThemeContext';
import { commonStyles } from './styles/commonStyles';
import Router from './router';
import { UserLoggedProvider } from './providers/UserContextProvider';

export default function App() {


  return (
    <ThemaProvider>
      <UserLoggedProvider>
      <SafeAreaProvider>
          <Router/>
      </SafeAreaProvider>
      </UserLoggedProvider>
    </ThemaProvider>
  );
}