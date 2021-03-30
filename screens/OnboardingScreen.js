import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

const OnboardingScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Onboarding Screen</Text>
            <Button 
                title="Click Here"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default OnboardingScreen;
