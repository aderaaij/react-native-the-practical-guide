import * as React from 'react';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
export interface SideDrawerProps {}

export default class SideDrawer extends React.Component<SideDrawerProps, any> {
  public render() {
    return (
      <View>
        <Text>SideDrawer</Text>
      </View>
    );
  }
}
