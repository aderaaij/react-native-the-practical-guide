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
  name: string;
  onPlaceAdded: (arg: string) => string;
}

export default class PlaceInput extends React.Component<PlaceInputProps, any> {
  state = {
    name: ''
  };
  placeNameChangeHandler = (val: string) => {
    this.setState({
      name: val
    });
  };
  placeSubmitHandler = () => {
    if (this.state.name.trim() === '') return;
    this.props.onPlaceAdded(this.state.name);
    this.setState({ name: '' });
  };
  public render() {
    return (
      <>
        <PlaceInputContainer>
          <PlaceInputBox
            placeholder="Insert your fav place name"
            value={this.state.name}
            onChangeText={this.placeNameChangeHandler}
          />
          <SubmitButton onPress={this.placeSubmitHandler} title="Submit it!" />
        </PlaceInputContainer>
      </>
    );
  }
}
