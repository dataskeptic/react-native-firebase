import React from 'react';
import { TouchableOpacity , Image, Text } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = () => (
    <TouchableOpacity
        style={{marginHorizontal: 10}}
    >
        <Text style={{fontSize: 16}}>Skip</Text>
    </TouchableOpacity>
);

/* const Dots = () => {
    let backgroundColor;
    backgroundColor = 'rgba(0, 0, 0, 0.8)';

    return(
        <View style={{
            width: 5,
            heigth: 5,
            marginHorizontal: 3,
            backgroundColor,
        }}>     
        </View>
    );
} */

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
//          DotComponent={Dots}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assets/onboarding-img1.png')} />,
                    title: 'Connect to the world',
                    subtitle: 'A new way to connect wiht the world',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'Share your favorites',
                    subtitle: 'Share your thougths with similar kind of peaple',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../assets/onboarding-img3.png')} />,
                    title: 'Become the star',
                    subtitle: 'Let the spot light capture you',
                },
  ]}
/>
    );
}

/* const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}); */

export default OnboardingScreen;
