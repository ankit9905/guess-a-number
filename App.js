import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as font from 'expo-font'
import AppLoading  from 'expo-app-loading'

import Header from './components/Header'
import Screen from './components/StartGameScreen'
import StartGame from './components/GameScreen'
import GameOver from './components/GameOver'

const fetchFonts = () => {
  return font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err)=>console.log(err)}
      />
    )
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber)

  }

  const GameOverHandler = Rounds => {
    setGuessRounds(Rounds)
  }

  let content = <Screen onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content = <StartGame userChoice={userNumber} onGameOver={GameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOver roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />
  }

  return (
    <View style={styles.screen} >
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

