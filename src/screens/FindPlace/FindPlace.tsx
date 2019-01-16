import * as React from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import PlaceList from '../../components/PlaceList/PlaceList';
export interface FindPlaceScreenProps {
  componentId: string;
  places: Array<Place>;
  isDrawerOpen: boolean;
}

type Place = {
  key: number;
  name: string;
  image: {
    uri: string;
  };
};

class FindPlaceScreen extends React.Component<FindPlaceScreenProps> {
  constructor(props: FindPlaceScreenProps) {
    super(props);
    Navigation.events().bindComponent(this);
  }
  async componentDidMount() {
    const constants = await Navigation.constants();
    const topBarHeight = constants.topBarHeight;
    console.log({ constants });
  }
  itemSelectedHandler = (key: number) => {
    const currentPlace = this.props.places.find((item: Place) => item.key === key);
    Navigation.push(this.props.componentId, {
      component: {
        name: 'awesome-places.PlaceDetailScreen',
        passProps: {
          selectedPlace: this.props.places.find((item: Place) => item.key === key)
        },
        options: {
          topBar: {
            title: {
              text: currentPlace && currentPlace.name ? currentPlace.name : ''
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

const mapStateToProps = ({ places, ui }: { places: any; ui: { isDrawerOpen: boolean } }) => {
  return {
    places: places.places,
    isDrawerOpen: ui.isDrawerOpen
  };
};
export default connect(mapStateToProps)(FindPlaceScreen);
