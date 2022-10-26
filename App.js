import React, {PureComponent} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './src/routers/MainNavigation';

export default class AppContainer extends PureComponent {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <MainNavigation />
    );
  }
}