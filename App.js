import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import   { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();  

const App = () => {

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
      <NavigationContainer>
        <Stack.Navigator      
          headerMode="none"
        >
            <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );    
  } else {
     return <LoginScreen />
  }

}
export default App;
