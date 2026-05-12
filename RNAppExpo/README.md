# RNAppExpo

Expo + TypeScript 기반 모바일 앱 프로젝트.

## 시작하기

### 1. 의존성 설치 (이미 완료됨)

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npx expo start
```

또는

```bash
npm start
```

실행하면 터미널에 QR 코드가 표시됩니다. 다음 키를 눌러 플랫폼을 선택할 수 있습니다.

| 키 | 동작                                          |
| -- | --------------------------------------------- |
| `a` | Android 에뮬레이터 (Android Studio AVD) 실행 |
| `i` | iOS 시뮬레이터 (macOS 전용)                  |
| `w` | 웹 브라우저에서 실행                         |
| `r` | 앱 리로드                                     |
| `j` | 디버거 열기                                   |

## 확인 방법

### 방법 1: 휴대폰 + Expo Go 앱 (가장 빠름)

1. 휴대폰(Android/iOS)에 **Expo Go** 앱 설치 (Play Store / App Store)
2. PC와 휴대폰을 같은 Wi-Fi에 연결
3. `npx expo start` 실행 후 표시된 QR 코드를 휴대폰으로 스캔
   - Android: Expo Go 앱에서 직접 스캔
   - iOS: 기본 카메라 앱으로 스캔

### 방법 2: Android Studio 에뮬레이터

1. Android Studio 설치 후 AVD Manager에서 에뮬레이터 생성/실행
2. `npx expo start` 실행 후 `a` 키 입력 → 자동으로 에뮬레이터에 설치

### 방법 3: 웹 브라우저

```bash
npx expo start --web
```

또는 `npx expo start` 후 `w` 키 입력.

### 방법 4: iOS 시뮬레이터 (macOS만)

Xcode 설치 후 `npx expo start` 실행, `i` 키 입력.

## 앱 아이콘 / 스플래시

Expo는 `app.json`에서 한 곳에서 관리합니다. 이미지를 교체하려면 다음 파일들을 같은 이름으로 덮어쓰면 됩니다.

- `assets/icon.png` - iOS/일반 앱 아이콘 (1024x1024 권장)
- `assets/adaptive-icon.png` - Android Adaptive Icon foreground (1024x1024 권장)
- `assets/splash-icon.png` - 스플래시 중앙에 표시될 로고
- `assets/favicon.png` - 웹용 favicon

설정은 `app.json`의 `expo.icon`, `expo.splash`, `expo.android.adaptiveIcon` 항목 참조.

## 네이티브 빌드 (옵션)

Expo Go로는 일부 네이티브 라이브러리가 지원되지 않습니다. 실제 빌드된 APK/IPA가 필요하면 **EAS Build** 사용:

```bash
npm install -g eas-cli
eas login
eas build --platform android --profile preview
```

## 브랜드 컬러

- Primary Green: `#3ED598`
- Background: `#FFFFFF`
