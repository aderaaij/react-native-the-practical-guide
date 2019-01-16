import * as React from 'react';
import { TextInput, Button, View } from 'react-native';
import styled from 'styled-components';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

interface PlaceInputProps {
  placeName: string;
  onChangeText: (val: string) => void;
}

const PlaceInput: React.SFC<PlaceInputProps> = props => {
  return (
    <DefaultInput
      placeholder="Place name"
      value={props.placeName}
      onChangeText={props.onChangeText}
    />
  );
};

export default PlaceInput;
