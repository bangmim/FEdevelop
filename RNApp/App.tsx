/**
 * RNApp - React Native App
 *
 * @format
 */

import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

const BRAND_COLOR = '#3ED598';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="#FFFFFF"
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Image
            source={require('./assets/app_icon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>RNApp</Text>
          <Text style={styles.subtitle}>Welcome to React Native</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: BRAND_COLOR,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
  },
});

export default App;
