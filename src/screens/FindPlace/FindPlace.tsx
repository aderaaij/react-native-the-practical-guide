import * as React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends React.Component {
  itemSelectedHandler = key => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'awesome-places.PlaceDetailScreen',
        passProps: {
          selectedPlace: this.props.places.find(item => item.key === key)
        },
        options: {
          topBar: {
            title: {
              text: this.props.places.find(item => item.key === key).name
            }
          }
        }
      }
    });
  };
  render() {
    return (
      <View>
        <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};
export default connect(mapStateToProps)(FindPlaceScreen);
