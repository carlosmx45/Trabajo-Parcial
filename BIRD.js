import React, { useState } from 'react';
import { View, Text, Button, ImageBackground, Dimensions } from 'react-native';

function BIRD2() {
    const screenWidth = Dimensions.get("screen").width
    const screenHeight = Dimensions.get("screen").height
    const birdLeft = screenWidth / 2
    const [birdBottom, setBirdBottom ] = useState(screenHeight/2)
    const gravity = 3
    let gameTimerId

    //caida de pajaro
    useEffect(() => {
        if (birdBottom > 0 ) {
            gameTimerId = setInterval(() => {
                setBirdBottom(birdBottom => birdBottom - 3)
            }, 30)

            return () => {
                clearInterval(gameTimerId)
            }
        }
    }, [birdButton])

    return (
        <View style={styles.container}>
            <BIRD
              birdButton={birdButton}
              birdLeft={birdLeft}
            />
        </View>
    )
}

const BIRD = ({birdButton, birdLeft}) => {

    return (
        <View style={{
            position: 'absolute',
            backgroundColor: 'blue',
            width: 50,
            height: 60,
        }}/>
    )

}

export default BIRD;