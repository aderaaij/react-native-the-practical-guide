import * as React from 'React';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Navigation } from 'react-native-navigation';

import { deletePlace } from '../../store/actions/index';
import Icon from 'react-native-vector-icons/Ionicons';

const TitleText = styled(Text)`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`;

const ButtonWrap = styled(View)`
  display: flex;
  flex-direction: row;
`;

const FeaturedImage = styled(Image)`
  width: 100%;
  height: 200px;
`;

export interface PlaceDetailProps {
  onDeletePlace: (key: number) => void;
  selectedPlace: {
    key: number;
    name: string;
    image: {
      uri: string;
    };
  };
  componentId: string;
}

class PlaceDetail extends React.Component<PlaceDetailProps> {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    Navigation.pop(this.props.componentId);
  };
  public render() {
    return (
      <View>
        <View>
          <FeaturedImage source={this.props.selectedPlace.image} />
          <TitleText>{this.props.selectedPlace.name}</TitleText>
        </View>
        <ButtonWrap>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <Icon size={30} name="ios-trash" color="red" />
          </TouchableOpacity>
        </ButtonWrap>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onDeletePlace: (key: number) => dispatch(deletePlace(key))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetail);
