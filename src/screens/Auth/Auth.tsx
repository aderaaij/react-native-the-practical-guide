import * as React from 'react';
import { View, Text, Button } from 'react-native';
import myTabNavigation from '../MainTabs/startMainTabs';
export default class AuthScreen extends React.Component {
  loginHandler = () => {
    myTabNavigation();
  };
  render() {
    return (
      <View>
        <Text>Auth Screen</Text>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}
