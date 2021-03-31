import React, { useEffect } from 'react';
import   { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();  

const AuthStack = () => {

  const [isFirstLaunch, setisFirstLaunch] = React.useState(null);
  
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setisFirstLaunch(true);
      } else {
        setisFirstLaunch(false);
      }
    });
  }, []);

  if( isFirstLaunch == null) {
    return null;
  } else if ( isFirstLaunch == true) {
    return (
      <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen 
                name="Onboarding" 
                component={OnboardingScreen}
                options={{header: () => null}}
            />              
            <Stack.Screen 
                name="Login" 
                component={LoginScreen}
                options={{header: () => null}}
            />
      </Stack.Navigator>
    );    
  } else {
     return <LoginScreen />
  }

}
export default AuthStack;
