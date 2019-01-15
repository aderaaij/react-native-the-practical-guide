import * as React from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import PlaceList from '../../components/PlaceList/PlaceList';

type Place = {
  key: number;
  name: string;
  image: {
    uri: string;
  };
};

class FindPlaceScreen extends React.Component {
  itemSelectedHandler = (key: number) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'awesome-places.PlaceDetailScreen',
        passProps: {
          selectedPlace: this.props.places.find((item: Place) => item.key === key)
        },
        options: {
          topBar: {
            title: {
              text: this.props.places.find((item: Place) => item.key === key).name
            }
          }
        }
      }
    });
  };
  openSideMenu = () => {
    console.log('open it');
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: true,
          enabled: true
        }
      }
    });
  };
  render() {
    return (
      <View>
        <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
        <Button title="SideMenu" onPress={this.openSideMenu} />
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
