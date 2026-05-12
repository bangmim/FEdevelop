import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

const lottieSource = require('./assets/Moggoji_splash.json');

SplashScreen.preventAutoHideAsync().catch(() => {});

const BRAND_COLOR = '#3ED598';

export default function App() {
  const { width, height } = useWindowDimensions();
  const [phase, setPhase] = useState<'lottie' | 'main'>(() =>
    Platform.OS === 'web' ? 'main' : 'lottie',
  );
  const nativeSplashHidden = useRef(false);
  const lottieRef = useRef<LottieView>(null);

  const hideNativeSplashOnce = useCallback(() => {
    if (nativeSplashHidden.current) return;
    nativeSplashHidden.current = true;
    SplashScreen.hideAsync().catch(() => {});
  }, []);

  useEffect(() => {
    if (Platform.OS === 'web') {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, []);

  const goMain = useCallback(() => {
    setPhase('main');
  }, []);

  if (Platform.OS === 'web') {
    return <MainScreen />;
  }

  if (phase === 'main') {
    return <MainScreen />;
  }

  return (
    <View style={[styles.lottieRoot, { width, height }]}>
      <LottieView
        ref={lottieRef}
        source={lottieSource}
        autoPlay={false}
        loop={false}
        resizeMode="contain"
        renderMode={Platform.OS === 'android' ? 'SOFTWARE' : 'AUTOMATIC'}
        style={{ width, height }}
        onAnimationLoaded={() => {
          hideNativeSplashOnce();
          requestAnimationFrame(() => {
            lottieRef.current?.reset();
            lottieRef.current?.play();
          });
        }}
        onAnimationFailure={(err) => {
          console.warn('[Lottie] load failed:', err);
          hideNativeSplashOnce();
          goMain();
        }}
        onAnimationFinish={(isCancelled) => {
          if (__DEV__ && isCancelled) {
            console.warn('[Lottie] animation cancelled');
          }
          goMain();
        }}
      />
    </View>
  );
}

function MainScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/icon.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>RNAppExpo</Text>
      <Text style={styles.subtitle}>Powered by Expo</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  lottieRoot: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
