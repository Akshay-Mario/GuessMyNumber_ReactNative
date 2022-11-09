import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [selectednumber, setselectedNumber] = useState();
  const [onGameOver, setOnGammeOver] = useState(true);
  const [numberofrounds, setnumberofrounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'platinum-font': require('./assets/font/Platinum-Sign.ttf'),
    'second': require('./assets/font/AldotheApache.ttf')
  });

  if (!fontsLoaded) {
    <AppLoading />
  }

  function pickednumber(pickedNumber) {
    setselectedNumber(pickedNumber);
    setOnGammeOver(false);
  }

  function gameIsOver(number) {
    setnumberofrounds(number);
    setOnGammeOver(true);
  }

  function ongamerestart() {
    setOnGammeOver(false);
    setselectedNumber(null);
    setnumberofrounds(0);
  }

  let screen = <StartGameScreen onConfim={pickednumber} />

  if (selectednumber) {
    screen = <GameScreen confirmedNumber={selectednumber} gameisover={gameIsOver} />
  }

  if (onGameOver && selectednumber) {
    screen = <GameOverScreen confirmedNumber={selectednumber} numberofrounds = {numberofrounds} ongamerestart = {ongamerestart}></GameOverScreen>
  }

  return (
    <LinearGradient colors={['#000000', '#515f5e']} style={styles.rootstyle}>
      <ImageBackground style={styles.rootstyle} imageStyle={styles.imageStyle} source={require('./assets/Images/Game.jpg')} resizeMode='cover'>
        <StatusBar style="light" />
        <SafeAreaView style={styles.rootstyle}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootstyle: {
    flex: 1,
    ...Platform.select({
      android: {
        paddingTop: 20
      }
    })
  },
  imageStyle: {
    opacity: 0.30,
  }

});
