import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {

  const [selectednumber, setselectedNumber] = useState();


  function pickednumber(pickedNumber) {
    setselectedNumber(pickedNumber);
  }

  let screen = <StartGameScreen onConfim={pickednumber} />

  if (selectednumber) {
    screen = <GameScreen confirmedNumber={selectednumber} />
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
  },
  imageStyle: {
    opacity: 0.30,
  }

});
