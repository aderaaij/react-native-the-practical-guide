import * as React from 'react';
import { Dispatch } from 'redux';
import { Text, View, TextInput, Button, Image, ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addPlace } from '../../store/actions/index';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import H1 from '../../components/UI/Headings/H1';
import MainText from '../../components/UI/MainText/MainText';
import ImagePicker from '../../components/ImagePicker/ImagePicker';
import MapPicker from '../../components/MapPicker/MapPicker';

const Container = styled(View)`
  flex: 1;
  align-items: center;
`;

const ButtonWrap = styled(View)`
  margin: 8px;
`;

interface SharePlaceScreenProps {
  componentId: string;
  isDrawerOpen: boolean;
  onAddPlace: (placename: string) => void;
}
class SharePlaceScreen extends React.Component<SharePlaceScreenProps> {
  constructor(props: SharePlaceScreenProps) {
    super(props);
    Navigation.events().bindComponent(this);
  }
  state = {
    placeName: ''
  };
  navigationButtonPressed(event: { buttonId: string; componentId: string }) {
    if (event.buttonId === 'sideDrawerToggle') {
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: !this.props.isDrawerOpen
          }
        }
      });
    }
  }
  placeNameChangedHandler = (val: string) => {
    this.setState({
      placeName: val
    });
  };
  placeAddedHandler = () => {
    if (this.state.placeName.trim() !== '') {
      this.props.onAddPlace(this.state.placeName);
    }
  };
  render() {
    return (
      <ScrollView>
        <Container>
          <MainText>
            <H1>Share a place with us</H1>
          </MainText>
          <ImagePicker />
          <MapPicker />
          <PlaceInput
            onChangeText={this.placeNameChangedHandler}
            placeName={this.state.placeName}
          />
          <ButtonWrap>
            <Button title="Share Place" onPress={this.placeAddedHandler} />
          </ButtonWrap>
        </Container>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ ui }: { ui: { isDrawerOpen: boolean } }) => ({
  isDrawerOpen: ui.isDrawerOpen
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddPlace: (placeName: string) => dispatch(addPlace(placeName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharePlaceScreen);
