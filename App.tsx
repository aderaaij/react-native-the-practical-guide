import * as React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions';
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

const state = {
  places: [],
  selectedPlace: {}
};

interface Place {
  key: string;
  placeName: string;
  placeImage: {
    uri: string;
  };
}

// interface Props {}
class App extends React.Component<any> {
  placeAddedHandler = (placeName: string) => {
    console.log(placeName);
    this.props.onAddPlace(placeName);
  };

  placeSelectedHandler = (key: number) => {
    this.props.onSelectPlace(key);
  };
  placeDeletedHandler = (key: number) => {
    this.props.onDeletePlace(key);
  };
  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };
  public render() {
    return (
      <AppContainer>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList onItemSelected={this.placeSelectedHandler} places={this.props.places} />
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
      </AppContainer>
    );
  }
}

const mapStateToProps = (state: State) => ({
  places: state.places.places,
  selectedPlace: state.places.selectedPlace
});

const mapDispatchToProps = dispatch => ({
  onAddPlace: (name: string) => dispatch(addPlace(name)),
  onDeletePlace: () => dispatch(deletePlace()),
  onSelectPlace: (key: number) => dispatch(selectPlace(key)),
  onDeselectPlace: () => dispatch(deselectPlace())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
