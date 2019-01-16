import * as React from 'react';
import { View, Button, Image } from 'react-native';
import styled from 'styled-components';
import placeholderImage from '../../assets/place-image.jpg';
export interface ImagePickerProps {}

const Container = styled(View)`
  flex: 1;
  width: 100%;
  align-items: center;
`;
const PlaceHolder = styled(View)`
  border: 1px solid #000;
  background: #eee;
  width: 80%;
  height: 150px;
  flex: 1;
`;

const ImageWrap = styled(Image)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const ButtonWrap = styled(View)`
  margin: 8px;
`;
export default class ImagePicker extends React.Component<ImagePickerProps, any> {
  public render() {
    return (
      <Container>
        <PlaceHolder>
          <ImageWrap source={placeholderImage} />
        </PlaceHolder>
        <ButtonWrap>
          <Button title="Pick image" onPress={() => alert('Pick an image')} />
        </ButtonWrap>
      </Container>
    );
  }
}
