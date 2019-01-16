import * as React from 'react';
import { Dispatch } from 'redux';
import { Text, View, TabBarIOSItem } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';

import PlaceInput from '../../components/PlaceInput/PlaceInput';

class SharePlaceScreen extends React.Component<any> {
  constructor(props: any) {
    super(props);
    Navigation.events().bindComponent(this);
  }
  navigationButtonPressed(event: { buttonId: string; componentId: string }) {
    if (event.buttonId === 'sideDrawerToggle') {
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: !this.props.isDrawerOpen
          }
        }
      });
    }
  }
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

const mapStateToProps = ({ ui }) => ({
  isDrawerOpen: ui.isDrawerOpen
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddPlace: (placeName: string) => dispatch(addPlace(placeName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharePlaceScreen);
