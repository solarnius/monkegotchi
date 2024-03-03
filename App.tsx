/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.sectionContainer}>
        <Image style={styles.image} source={require('./monke.png')} />
        <Text style={styles.sectionTitle}>monkegotchi</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('Button pressed');
          }}>
          <Text>Connect Wallet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    height: Dimensions.get('window').height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: Colors.dark,
    color: 'white',
    borderRadius: 5,
    padding: 10,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
});

export default App;
