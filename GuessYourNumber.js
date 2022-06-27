import React, { useState } from 'react';
import { View, Button, Text, ImageBackground} from 'react-native';
import List from './List';
import styles from './styles';

function mapItems(items){
    return items.map((value, i) => ({key: i.toString(), value}));
}

function generateRandomNumber(max, min = 1){
    return Math.floor(Math.random()*(max - min) + min);
}

const nRand = generateRandomNumber(100);

function GuessYourNumber(){
    const [limitDown, setLimitDown] = useState(0);
    const [limitUp, setLimitUp] = useState(100);
    const [random, setRandom] = useState(nRand);
    const [guessList, setGuessList] = useState([]);
    const [win, setWin] = useState(false);
    const [count, setCount] = useState(0);
    const [soClose, setSoClose] = useState(false);

    const MuyAlto = () => {
        setLimitUp(random);
        const newRandom = generateRandomNumber(limitDown, random);
        setRandom(newRandom);
        setCount(count + 1);
        setGuessList([
            random,
            ...guessList,
        ])
    }

    const MuyBajo = () => {
        setLimitDown(random);
        const newRandom = generateRandomNumber(random, limitUp);
        setRandom(newRandom);
        setCount(count + 1);
        setGuessList([
            random,
            ...guessList,
        ])
    }

    const PocoAlto = () => {
        setLimitUp(random - 1);
        let newRandom;
        if(soClose == false){
            setLimitDown(random - 6);
            newRandom = generateRandomNumber(random - 6, random -1);
            setSoClose(true);
        }
        else{
            newRandom = generateRandomNumber(limitDown, random - 1);
        }
        setRandom(newRandom);
        setCount(count + 1);
        setGuessList([
            random,
            ...guessList,
        ])
    }

    const PocoBajo = () => {
        setLimitDown(random + 1);
        let newRandom;
        if(soClose == false){
            setLimitUp(random + 6);
            newRandom = generateRandomNumber(random, random + 6);
            setSoClose(true);
        }
        else{
            newRandom = generateRandomNumber(random + 1, limitUp);
        }
        setRandom(newRandom);
        setCount(count + 1);
        setGuessList([
            random,
            ...guessList,
        ])
    }

    const YouWin = () => {
        setWin(true);
    }

    return(
        <ImageBackground source={require('./images/processor.jpg')} resizeMode='cover' style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
             <View style={styles.game}>
                <Text style={styles.text}>
                    ¿Es el numero {random}?
                </Text>
                <View style = {styles.containerButtons}>
                    <Button
                        title = "Muy alto"
                        onPress={MuyAlto}
                        style={styles.buttons}
                    />
                    <Button
                        title = "Poco alto"
                        onPress={PocoAlto}
                        style={styles.buttons}
                    />
                    <Button
                        title = "Ganaste"
                        onPress={YouWin}
                        style={styles.buttons}
                    />
                    <Button
                        title = "Poco bajo"
                        onPress={PocoBajo}
                        style={styles.buttons}
                    />
                    <Button
                        title = "Muy bajo"
                        onPress={MuyBajo}
                        style={styles.buttons}
                    />
                </View>
                <View style={styles.text}>
                {
                    win ?
                    <Text>
                        Excelente, lo encontré en {count} intentos
                    </Text>
                    :
                    <Text/>
                }
                </View>
                <List data={mapItems(guessList)}/>
            </View>
        </ImageBackground>
    )
}

export default GuessYourNumber;