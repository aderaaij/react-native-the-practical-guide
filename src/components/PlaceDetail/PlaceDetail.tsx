import React from 'react';
import { Modal, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

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
    name: string;
    image: object;
  };
}

const PlaceDetail: React.SFC<Props> = ({ selectedPlace, onItemDeleted, onModalClosed }) => {
  let modalContent = null;
  if (selectedPlace) {
    modalContent = (
      <>
        <FeaturedImage source={selectedPlace.image} />
        <TitleText>{selectedPlace.name}</TitleText>
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
        <TouchableOpacity onPress={onItemDeleted}>
          <Icon size={30} name="ios-trash" color="red" />
        </TouchableOpacity>
        {/* <Button title="Delete" color="red" onPress={onItemDeleted} /> */}
        <Button title="Close" onPress={onModalClosed} />
      </ButtonWrap>
    </ModalWrap>
  );
};
export default PlaceDetail;
