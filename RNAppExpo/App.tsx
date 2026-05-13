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
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const lottieSource = require('./assets/Moggoji_splash.json');

SplashScreen.preventAutoHideAsync().catch(() => {});

const BRAND_COLOR = '#3ED598';

/** 서울 시청 근처 초기 영역 */
const INITIAL_REGION = {
  latitude: 37.5665,
  longitude: 126.978,
  latitudeDelta: 0.08,
  longitudeDelta: 0.08,
};

export default function App() {
  const { width, height } = useWindowDimensions();
  const [phase, setPhase] = useState<'lottie' | 'main'>(() =>
    Platform.OS === 'web' ? 'main' : 'lottie',
  );
  const nativeSplashHidden = useRef(false);

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
        source={lottieSource}
        autoPlay
        loop={false}
        speed={1}
        resizeMode="contain"
        renderMode="AUTOMATIC"
        hardwareAccelerationAndroid={false}
        cacheComposition
        style={{ width, height }}
        onLayout={hideNativeSplashOnce}
        onAnimationFailure={(err) => {
          console.warn('[Lottie] load failed:', err);
          hideNativeSplashOnce();
          goMain();
        }}
        onAnimationFinish={() => {
          goMain();
        }}
      />
    </View>
  );
}

function MainScreen() {
  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>RNAppExpo</Text>
        <Text style={styles.subtitle}>
          Google 지도는 iOS/Android 앱에서 확인하세요.
        </Text>
        <StatusBar style="dark" />
      </View>
    );
  }

  return (
    <View style={styles.mapShell}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        mapType="standard"
        showsCompass
        showsScale
        toolbarEnabled={false}
      >
        <Marker
          coordinate={{
            latitude: INITIAL_REGION.latitude,
            longitude: INITIAL_REGION.longitude,
          }}
          title="서울"
          description="초기 위치"
        />
      </MapView>
      <View style={styles.mapOverlay} pointerEvents="box-none">
        <Image
          source={require('./assets/icon.png')}
          style={styles.logoSmall}
          resizeMode="contain"
        />
        <Text style={styles.overlayTitle}>RNAppExpo</Text>
      </View>
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
  mapShell: {
    flex: 1,
    backgroundColor: '#E8EEF2',
  },
  mapOverlay: {
    position: 'absolute',
    top: 52,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  logoSmall: {
    width: 36,
    height: 36,
  },
  overlayTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: BRAND_COLOR,
    marginLeft: 10,
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
