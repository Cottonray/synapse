# ReactNative Synapse - Yarn Workspace

TypeScript 기반 React Native 앱을 yarn workspace로 구성한 프로젝트입니다.

## 📋 프로젝트 구조

```
ReactNative_Synapse/
├── .git/                    # Git 저장소
├── .gitignore
├── .gitattributes  
├── package.json             # 루트 package.json (yarn workspace 설정)
├── apps/
│   └── mobile/              # TypeScript React Native 앱
│       ├── App.tsx          # TypeScript 메인 파일
│       ├── tsconfig.json    # TypeScript 설정
│       ├── ios/             # iOS 네이티브 코드
│       └── android/         # Android 네이티브 코드
└── node_modules/
```

## 🚀 실행 방법

### iOS 앱 실행
```bash
yarn ios
```

### Android 앱 실행
```bash
yarn android
```

### Metro 번들러 시작
```bash
yarn start
```

### 워크스페이스 명령어
```bash
# mobile 워크스페이스에서 직접 실행
yarn workspace mobile ios
yarn workspace mobile android
yarn workspace mobile start
```

## 🛠 설치 과정 (참고용)

### 1. 기존 프로젝트 정리
```bash
# Git 관련 파일을 제외한 모든 파일 삭제
rm -rf apps/ package.json yarn.lock README.md
```

### 2. Yarn Workspace 설정
루트 `package.json` 생성:
```json
{
  "name": "synapse-monorepo",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "apps/*"
  ],
  "scripts": {
    "ios": "yarn workspace mobile ios",
    "android": "yarn workspace mobile android",
    "start": "yarn workspace mobile start",
    "web": "yarn workspace mobile web"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0"
  }
}
```

### 3. React Native 프로젝트 생성
```bash
mkdir apps
cd apps
npx --yes @react-native-community/cli@latest init mobile
```

### 4. iOS 설정
```bash
cd mobile/ios
bundle install
bundle exec pod install
```

### 5. 앱 실행
```bash
cd ../../..  # 루트 디렉토리로 이동
yarn ios     # iOS 앱 실행
```

## ✅ 현재 설정 상태

- ✅ TypeScript 완전 지원 (React Native 0.80.2)
- ✅ Yarn Workspace 구성 완료
- ✅ iOS CocoaPods 설치 완료
- ✅ iPhone 14 시뮬레이터에서 정상 동작 확인
- ✅ Expo 없이 순수 React Native CLI 사용

## 📱 지원 플랫폼

- ✅ iOS (시뮬레이터 및 실기기)
- ✅ Android (에뮬레이터 및 실기기)
- ✅ TypeScript 완전 지원
- ✅ Hot Reload / Fast Refresh

## 🔧 개발 도구

- **React Native**: 0.80.2
- **TypeScript**: 5.0.4
- **Node.js**: >=18
- **Yarn**: Workspace 지원 버전

## 🚨 주의사항

1. **iOS 실행**: 첫 실행 시 CocoaPods 설치가 완료되어야 합니다
2. **캐시 정리**: 빌드 오류 시 `yarn start --reset-cache` 실행
3. **시뮬레이터**: Xcode에서 iOS 시뮬레이터가 실행되어야 합니다

---

**Happy Coding! 🎉** 