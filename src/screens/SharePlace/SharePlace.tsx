import * as React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';

import PlaceInput from '../../components/PlaceInput/PlaceInput';

class SharePlaceScreen extends React.Component {
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
const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName: string) => dispatch(addPlace(placeName))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
