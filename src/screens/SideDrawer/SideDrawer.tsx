import * as React from 'react';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../store/actions/index';

export interface SideDrawerProps {}

type Screen = {
  componentId: string;
  componentName: string;
};
class SideDrawer extends React.Component<SideDrawerProps, any> {
  constructor(props: any) {
    super(props);
    Navigation.events().bindComponent(this);
  }
  componentDidAppear(screen: Screen) {
    this.props.onDrawerToggle(true);
  }
  componentDidDisappear(screen: Screen) {
    this.props.onDrawerToggle(false);
  }
  public render() {
    return (
      <View>
        <Text>SideDrawer</Text>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onDrawerToggle: (value: boolean) => dispatch(toggleDrawer(value)),
  onClose: (value: boolean) => dispatch(toggleDrawer(value))
});

export default connect(
  null,
  mapDispatchToProps
)(SideDrawer);
