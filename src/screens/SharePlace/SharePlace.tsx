import * as React from 'react';
import { Dispatch } from 'redux';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';

import PlaceInput from '../../components/PlaceInput/PlaceInput';

class SharePlaceScreen extends React.Component<any> {
  // constructor(props: any) {
  //   super(props);
  //   this.isSideDrawerVisible = false;
  //   Navigation.events().bindComponent(this);
  //   console.log(Navigation);
  // }
  // navigationButtonPressed(event: { buttonId: string; componentId: string }) {
  //   console.log(event);
  //   if (event.buttonId === 'sideDrawerToggle') {
  //     !this.isSideDrawerVisible
  //       ? (this.isSideDrawerVisible = true)
  //       : (this.isSideDrawerVisible = false);
  //     Navigation.mergeOptions(this.props.componentId, {
  //       sideMenu: {
  //         left: {
  //           visible: this.isSideDrawerVisible
  //         }
  //       }
  //     });
  //   }
  // }
  placeAddedHandler = (placeName: string) => {
    this.props.onAddPlace(placeName);
  };
  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onAddPlace: (placeName: string) => dispatch(addPlace(placeName))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
