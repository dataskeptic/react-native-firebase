import React from 'react'
import { View, Text, StyleSheet } from 'react-native';


const MessagesScreen = ({navigation}) => {
  

    return (
        <View style={styles.container}>
            
            <Text style={styles.text}>RN Social App</Text>

        </View>
    );
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9fafd',
      },
      text: {
        fontSize: 28,
      },
});

export default MessagesScreen;

