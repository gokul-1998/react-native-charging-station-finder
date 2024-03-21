## These steps are to be followed to create the application.


- https://icons.expo.fyi/Index/FontAwesome/search
    - use the above link to get the icons

- `npx create-expo-app EV-Charging-Station-App`
    - expo is  a framework and platform for universal React applications.
    -  It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.
    -  It is a free and open source toolchain built around React Native to help you build native iOS and Android projects using JavaScript and React.


- `npm start` - to run the  application
- `npx expo install react-native-web react-dom @expo/metro-runtime`

- `npx expo install expo-font`
- `npx expo install expo-splash-screen`

## lets create clerk login
    - create a new project in  clerk    
        - use `facebook` and `google` as the authentication providers 
    -  `npm install @clerk/clerk-expo`
    - `npx expo install expo-web-browser`
    - `npm install expo-secure-store`
    - `npm install @react-navigation/native`
    - `npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons`

- refer this for active screens.
    - `npx expo install react-native-maps`
    - `npx expo install expo-location`