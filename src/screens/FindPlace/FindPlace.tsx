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
  constructor(props: any) {
    super(props);
    Navigation.events().bindComponent(this);
  }
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
  render() {
    return (
      <View>
        <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
      </View>
    );
  }
}

const mapStateToProps = ({ places, ui }) => {
  return {
    places: places.places,
    isDrawerOpen: ui.isDrawerOpen
  };
};
export default connect(mapStateToProps)(FindPlaceScreen);
