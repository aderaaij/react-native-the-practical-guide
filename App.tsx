import * as React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

const AppContainer = styled.View`
  display: flex;
  flex: 1;
  padding: 30px 10px 0 10px;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
`;

interface State {
  places: Array<Place>;
  selectedPlace: Place;
}

interface Place {
  key: string;
  placeName: string;
  placeImage: {
    uri: string;
  };
}

interface Props {}
class App extends React.Component<Props, any> {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = (placeName: string) => {
    this.setState((prevState: State) => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          placeName,
          placeImage: {
            uri:
              'https://cdn.shopify.com/s/files/1/1469/6476/files/Popoyo-Nicaragua_1024x1024.jpg?v=1518142200'
          }
        })
      };
    });
    this.setState({ placeName: '' });
  };

  placeSelectedHandler = (key: number) => {
    this.setState((prevState: State) => ({
      selectedPlace: prevState.places.find((place: Place) => place.key === key)
    }));
  };
  placeDeletedHandler = (key: number) => {
    this.setState((prevState: State) => ({
      places:
        prevState.selectedPlace !== null
          ? prevState.places.filter((place: Place) => place.key !== prevState.selectedPlace.key)
          : prevState.places
    }));
    this.modalClosedHandler();
  };
  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };
  public render() {
    return (
      <AppContainer>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList onItemSelected={this.placeSelectedHandler} places={this.state.places} />
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
      </AppContainer>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places.places,
  selectedPlace: state.places.selectedPlace
});

const mapDispatchToProps = dispatch => ({});

export default connect()(App);
