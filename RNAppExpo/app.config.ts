import type { ExpoConfig } from 'expo/config';

const appJson = require('./app.json') as { expo: ExpoConfig };

export default (): { expo: ExpoConfig } => {
  const fallback = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';
  const androidMapsKey =
    process.env.GOOGLE_MAPS_ANDROID_API_KEY?.trim() ?? fallback;
  const iosMapsKey =
    process.env.GOOGLE_MAPS_IOS_API_KEY?.trim() ?? fallback;
  const { expo } = appJson;
  return {
    expo: {
      ...expo,
      android: {
        ...expo.android,
        config: {
          ...expo.android?.config,
          googleMaps: { apiKey: androidMapsKey },
        },
      },
      ios: {
        ...expo.ios,
        config: {
          ...expo.ios?.config,
          googleMapsApiKey: iosMapsKey,
        },
      },
    },
  };
};
