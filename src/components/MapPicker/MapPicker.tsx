import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  flex: 1;
  width: 100%;
  align-items: center;
`;
const ButtonWrap = styled(View)`
  margin: 8px;
`;

const PlaceHolder = styled(View)`
  border: 1px solid #000;
  background: #eee;
  width: 80%;
  height: 150px;
`;

export interface MapPickerProps {}

export default class MapPicker extends React.Component<MapPickerProps, any> {
  public render() {
    return (
      <Container>
        <PlaceHolder>
          <Text>Map</Text>
        </PlaceHolder>
        <ButtonWrap>
          <Button title="Locate Me" onPress={() => alert("Locating, don't move")} />
        </ButtonWrap>
      </Container>
    );
  }
}
