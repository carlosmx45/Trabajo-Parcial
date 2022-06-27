import React from 'react';
import { View, Button, ImageBackground } from 'react-native';
import styles from './styles';

function Select({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./images/thinking.gif')} style={styles.imageBack}>
                <Button 
                    title="Guess My Number"
                    onPress={() => navigation.navigate("Game", {id: 0})}
                    style={styles.buttons}
                />
                <Button 
                    title="Guess Your Number"
                    onPress={() => navigation.navigate("Game", {id: 4})}
                    style={styles.buttons}
                />
            </ImageBackground>
            <ImageBackground source={require('./images/jkp.gif')} style={styles.imageBack}>
                <Button
                    title="Piedra, papel o tijeras"
                    onPress={() => navigation.navigate("Game", {id: 1})}
                    style = {styles.buttons}
                />
            </ImageBackground>
            <ImageBackground source={require('./images/Pajaro.gif')} style={styles.imageBack}>
                <Button
                    title="Flappy Bird"
                    onPress={() => navigation.navigate("Game", {id: 2})}
                    style = {styles.buttons}
                />
            </ImageBackground>
        </View>
    );
}

export default Select;