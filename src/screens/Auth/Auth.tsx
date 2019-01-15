import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import myTabNavigation from '../MainTabs/startMainTabs';
export default class AuthScreen extends React.Component {
  loginHandler = () => {
    myTabNavigation();
  };

  render() {
    return (
      <View>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}
