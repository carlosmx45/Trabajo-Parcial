import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';

function Home() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./images/ImagenMenu.jpg')} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>
                    Arcade de Juegos Baratos
                </Text>
                
            </ImageBackground>
        </View>
    );
}

export default Home;