import * as React from 'react';
import styled from 'styled-components/native';

const PlaceInputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PlaceInputBox = styled.TextInput`
  width: 70%;
`;

const SubmitButton = styled.Button`
  width: 30%;
`;

interface PlaceInputProps {
  placeName: string;
  onPlaceAdded: (arg: string) => string;
}

export default class PlaceInput extends React.Component<PlaceInputProps, any> {
  state = {
    placeName: ''
  };
  placeNameChangeHandler = (val: string) => {
    this.setState({
      placeName: val
    });
  };
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') return;
    this.props.onPlaceAdded(this.state.placeName);
    this.setState({ placeName: '' });
  };
  public render() {
    return (
      <>
        <PlaceInputContainer>
          <PlaceInputBox
            placeholder="Insert your fav place name"
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <SubmitButton onPress={this.placeSubmitHandler} title="Submit it!" />
        </PlaceInputContainer>
      </>
    );
  }
}
