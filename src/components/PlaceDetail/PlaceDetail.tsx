import React from 'react';
import { Modal, View, Text, Image, Button } from 'react-native';
import styled from 'styled-components/native';

const ModalWrap = styled.Modal`
  margin: 22px;
`;

const TitleText = styled.Text`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`;

const ButtonWrap = styled.View`
  display: flex;
  flex-direction: row;
`;

const FeaturedImage = styled.Image`
  width: 100%;
  height: 200px;
`;

interface Props {
  selectedPlace: {
    placeName: string;
    placeImage: object;
  };
}

const PlaceDetail: React.SFC<Props> = ({ selectedPlace, onItemDeleted, onModalClosed }) => {
  let modalContent = null;
  if (selectedPlace) {
    modalContent = (
      <>
        <FeaturedImage source={selectedPlace.placeImage} />
        <TitleText>{selectedPlace.placeName}</TitleText>
      </>
    );
  }

  return (
    <ModalWrap
      onRequestClose={onModalClosed}
      visible={selectedPlace !== null}
      animationType="slide"
    >
      <View>{modalContent}</View>
      <ButtonWrap>
        <Button title="Delete" color="red" onPress={onItemDeleted} />
        <Button title="Close" onPress={onModalClosed} />
      </ButtonWrap>
    </ModalWrap>
  );
};
export default PlaceDetail;
