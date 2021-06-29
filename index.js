import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import ContextWrapper from './src/ContextWrapper';

AppRegistry.registerComponent(appName, () => ContextWrapper);
