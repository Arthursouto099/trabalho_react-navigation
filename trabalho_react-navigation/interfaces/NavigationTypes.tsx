import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, ParamListBase } from '@react-navigation/native';

export type User = {name: string, email: string, city: string }


export const user: Record<"user",User> = {
    user: {
        name: "arthur santos tavares souto",
        city: "São leopoldo",
        email: "arthurtavares@gmail.com"
    }
    
}

export interface TabParamList extends ParamListBase {
  home: undefined;
  profile: User ;
  
}

// Props HomeScreen
export interface HomeScreenProps {
    navigation: NativeStackNavigationProp<TabParamList, 'home'>;
  }

// Props ProfileScreen
export interface ProfileScreenProps {
    navigation: NativeStackNavigationProp<TabParamList, 'profile'>;
    route: RouteProp<TabParamList, 'profile'>;
  }

