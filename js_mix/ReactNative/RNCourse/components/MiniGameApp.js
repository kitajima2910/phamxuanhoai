import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, {  use, useState } from 'react'
import StartGameScreen from '../screens/StartGameScreen'
import GameScreen from '../screens/GameScreen'
import GameOverScreen from '../screens/GameOverScreen'
import { useFonts } from "expo-font"
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'



const MiniGameApp = () => {

    const [userNumber, setUserNumber] = useState()
    const [gameIsOver, setGameIsOver] = useState(true)
    const [guessRounds, setGuessRounds] = useState(0)

    const [fontsLoaded] = useFonts({
        "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf")
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber)
        setGameIsOver(false)
    }

    const gameOverHandler = (gameOver) => {
        setGameIsOver(true)
        setGuessRounds(gameOver)
    }

    const startNerGame = () => {
        setUserNumber(null)
        setGuessRounds(0)
    }

    let currentScreen = <StartGameScreen onPickNumber={pickedNumberHandler} />

    if (userNumber) {
        currentScreen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    }

    // console.log("miniGameApp = ", gameIsOver, userNumber);
    if (gameIsOver && userNumber) {
        currentScreen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={startNerGame} />
    }

    

    return (
        <>
            <StatusBar style="light" />
            {/* <ImageBackground imageStyle={styles.ImageBackgroundStyle} source={require("../assets/images/background.png")} resizeMode="cover" style={styles.rootScreen}> */}
            {/* <StartGameScreen /> */}
            {currentScreen}
            {/* </ImageBackground> */}

        </>
    )
}

export default MiniGameApp

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        backgroundColor: "#ddb52f",
    },
    ImageBackgroundStyle: {
        opacity: 0.15
    }
})