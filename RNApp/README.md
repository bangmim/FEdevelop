# RNApp

React Native + TypeScript 기반 모바일 앱 프로젝트.

## 시작하기

### 사전 요구사항

- Node.js >= 18
- JDK 17
- Android Studio + Android SDK (Android 빌드용)
- Xcode + CocoaPods (iOS 빌드용, macOS 전용)

### 의존성 설치

```bash
npm install
```

iOS의 경우 추가로 CocoaPods 설치가 필요합니다 (macOS):

```bash
cd ios && pod install && cd ..
```

### 실행

#### Metro 번들러 시작

```bash
npm start
```

#### Android 실행

```bash
npm run android
```

#### iOS 실행 (macOS)

```bash
npm run ios
```

## 앱 아이콘 / 스플래시 이미지

- 원본 이미지: `assets/app_icon.png`, `assets/splash.png`
- Android 아이콘: `android/app/src/main/res/mipmap-*/ic_launcher.png`, `ic_launcher_round.png`
- Android 스플래시: `android/app/src/main/res/drawable/launch_screen.xml` (layer-list) + `drawable-*/splash_icon.png`
- iOS 아이콘: `ios/RNApp/Images.xcassets/AppIcon.appiconset/`
- iOS 스플래시: `ios/RNApp/LaunchScreen.storyboard` + `Images.xcassets/SplashIcon.imageset/`

원본 이미지를 교체한 뒤 아래 PowerShell 스크립트를 다시 실행하면 모든 해상도의 아이콘이 재생성됩니다.

```powershell
powershell -ExecutionPolicy Bypass -File scripts/generate-icons.ps1
powershell -ExecutionPolicy Bypass -File scripts/generate-splash-icons.ps1
```

## 프로젝트 구조

```
RNApp/
├── App.tsx                # 앱 루트 컴포넌트
├── index.js               # 진입점
├── assets/                # 원본 이미지 (앱 아이콘, 스플래시)
├── scripts/               # 아이콘/스플래시 생성 PowerShell 스크립트
├── android/               # Android 네이티브 프로젝트
└── ios/                   # iOS 네이티브 프로젝트
```

## 브랜드 컬러

- Primary Green: `#3ED598`
- Splash Background: `#FFFFFF`
