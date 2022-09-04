import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreenImage from './app/screens/ViewImageScreenImage';

export default function App() {


  return (
   <ViewImageScreenImage />
  );
}

