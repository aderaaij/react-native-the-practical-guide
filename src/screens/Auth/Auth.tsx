import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import styled from 'styled-components';

import myTabNavigation from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import H1 from '../../components/UI/Headings/H1';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBg from '../../components/UI/Buttons/ButtonWithBg';
import BGImage from '../../assets/background.jpg';

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled(View)`
  width: 80%;
`;

const GreyInput = styled(DefaultInput)`
  background: #ececec;
`;

const StyledBG = styled(ImageBackground)`
  width: 100%;
  flex: 1;
  resize-mode: cover;
`;

export default class AuthScreen extends React.Component {
  loginHandler = () => {
    myTabNavigation();
  };

  render() {
    return (
      <StyledBG source={BGImage}>
        <Container>
          <MainText>
            <H1>Please Log In</H1>
          </MainText>
          <ButtonWithBg
            title="Switch to Login"
            style={{ backgroundColor: '#29AAF4' }}
            onPress={() => alert('click')}
          />
          <InputContainer>
            <GreyInput placeholder="Your e-mail Address" />
            <GreyInput placeholder="Password" secureTextEntry={true} />
            <GreyInput placeholder="Confirm Password" secureTextEntry={true} />
          </InputContainer>
          <ButtonWithBg
            title="Login"
            onPress={this.loginHandler}
            style={{ backgroundColor: '#29AAF4' }}
          />
        </Container>
      </StyledBG>
    );
  }
}
