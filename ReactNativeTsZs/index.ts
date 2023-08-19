/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import config from './src/config/apiRoutes';
console.log({config});

AppRegistry.registerComponent(appName, () => App);
