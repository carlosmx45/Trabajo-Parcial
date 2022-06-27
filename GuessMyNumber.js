import React, { useState } from 'react';
import { View, Button, TextInput, Text, ImageBackground} from 'react-native';
import List from './List';
import styles from './styles';
function mapItems(items){
    return items.map((value, i) => ({key: i.toString(), value}));
}

function generateRandomNumber(max, min = 1){
    return Math.floor(Math.random()*(max - min) + min);
}

function calculateText(number, random) {
    const soClose = 5;
    const diff = Math.abs(random - number);

    if(diff < soClose){
        if(number < random){
            return ("Tu número es un poco bajo.");
        }else{
            return ("Tu número es un poco alto.");
        }
    }else{
        if(number < random) {
            return "Tu número es muy bajo";
        } else{
            return "Tu número es muy alto";
        }
    }
}

const random = generateRandomNumber(100);

function GuessMyNumber(){
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [guessList, setGuessList] = useState([]);
    const [win, setWin] = useState(false);
    const [count, setCount] = useState(0);

    const handleOnChange = (newNumber) => {
        setNumber(newNumber);
    }

    const handleOnPress = () => {
        const num = parseInt(number);
        const numRand = parseInt(random);
        const text = calculateText(num, numRand);

        if(num == numRand){
            setWin(true);
        }

        setNumber("");
        setMessage(text);
        setGuessList([
            num,
            ...guessList,
        ])

        setCount(count + 1);
    }
    return(
        <ImageBackground source={require('./images/TeDejePensando.jpg')} resizeMode='cover' style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
             <View style={styles.game}>
                <TextInput 
                    style={styles.input}
                    autoFocus
                    placeholder="Guess My Number"
                    onChangeText = {handleOnChange}
                    defaultValue = {number}
                />
                <Button 
                    title = "Probar"
                    onPress={handleOnPress}
                />
                <View style={styles.text}>
                {
                    win ?
                    <Text>
                        Felicidades, los has adivinado en {count} intentos
                    </Text>
                    :
                        <Text>
                        {message}
                    </Text>
                }
                </View>
                <List data={mapItems(guessList)}/>
            </View>
        </ImageBackground>
    )
}

export default GuessMyNumber;