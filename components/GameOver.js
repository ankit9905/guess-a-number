import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game is Over!</Text>
      <View style={styles.add}>
        <Image
          source={require('../assets/success.png')}
          style={styles.image}
        />
      </View>
      <View style={{marginVertical:25 ,marginHorizontal:30}}>
        <Text style={styles.body}>Your phone needed: <Text style={styles.highlight}>{props.roundsNumber} </Text> rounds to guess the number
      <Text style={styles.highlight}> {props.userNumber} </Text>  </Text>
      </View>
        <Button title="NEW GAME" onPress={props.onRestart} />
     
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  body: {
    fontFamily: 'open-sans',
    textAlign: 'center',
    fontSize: 20
  },
  image: {
    width: '100%',
    height: '100%'
  },
  add: {
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'black',
    width: '80%',
    height: 300,
    marginVertical: 30,
    overflow: 'hidden',

  },
  highlight: {
    color: 'blue',
    fontFamily: 'open-sans-bold'
  }
});

export default GameOverScreen;
