# Getting Started

## Initial troubleshooting

1. No Babel config file detected
   1.1. Open file named `.eslintrc.js` in the root of your project
   1.2. Set the following code to the file:

```javascript
module.exports = {
  root: '',
  extends: '@react-native',
};
```

- Reference: https://stackoverflow.com/questions/71501892/parsing-error-no-babel-config-file-detected

2. File is a CommonJS module
   1. Rename the problematic files from `*.js` to `*.cjs`, except `metro.config.js`

- Reference https://stackoverflow.com/questions/49582984/how-do-i-disable-js-file-is-a-commonjs-module-it-may-be-converted-to-an-es6

3. Unable
   1. Create a new file in your project's root directory with the name react-native-metro-config.d.ts.
   2. Add the following content to the newly created file:

```typescript
declare module '@react-native/metro-config';
```

- Reference: https://stackoverflow.com/questions/64994997/react-native-typescript-unable-to-resolve-module-react-native-metro-config

4. Rename `index.js` to `index.ts`
5. Move `App.tsx` to `src` folder

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# After forking

## Configure environment variables (FULL-158)

1. Create Environment Files:

Start by creating environment-specific files that will hold your configuration variables. Typically, you will have files like .env.development and .env.production. You can create these files in the root of your project.

2. Install Packages:

Install the react-native-config package. This package makes it easy to manage environment variables in React Native projects.

```bash
npm install react-native-config --save
```

3. Configure Environment Files:

In your .env.local, .env.development and .env.production files, define your environment-specific variables.

```bash
REACT_APP_API_URL=http://10.0.2.2:3000/api
REACT_APP_API_KEY=yourapikey
REACT_APP_ENV_NAME=local
```

4. Create a Config File:
   - src/config/apiRoutes.ts

```typescript
import Config from 'react-native-config';

const config = {
  apiUrl: Config.REACT_APP_API_URL!,
  apiKey: Config.REACT_APP_API_URL!,
  envName: Config.REACT_APP_ENV_NAME!,
  // Add more variables as needed
};

export default config;
```

5. Use the Config File:

```typescript
import config from './config/apiRoutes';

const url = `${config.apiUrl}/users`;
```
