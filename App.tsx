import * as React from 'react';
import styled from 'styled-components/native';
// import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

const AppContainer = styled.View`
  display: flex;
  flex: 1;
  padding: 30px 10px 0 10px;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
`;

interface State {
  placeName: string;
  places: Array<string>;
}

interface Props {}
export default class App extends React.Component<Props, State> {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangeHandler = (val: string) => {
    this.setState({
      placeName: val
    });
  };

  placeAddedHandler = (placeName: string) => {
    this.setState((prevState: State) => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          value: placeName
        })
      };
    });
    this.setState({ placeName: '' });
  };

  placeDeletedHandler = (key: number) => {
    this.setState(prevState => ({
      places: prevState.places.filter(place => place.key !== key)
    }));
  };
  public render() {
    return (
      <AppContainer>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList onItemDeleted={this.placeDeletedHandler} places={this.state.places} />
      </AppContainer>
    );
  }
}
