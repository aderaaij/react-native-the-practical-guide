import * as React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styled from 'styled-components';

interface ButtonWithBgProps {
  title: string;
  onPress: () => void;
  style: {
    backgroundColor: string;
  };
}

const ButtonStyle = styled(View)`
  padding: 10px;
  margin: 5px;
  color: #000;
  border-radius: 5px;
  border: 1px solid #000;
`;

const ButtonWithBg: React.SFC<ButtonWithBgProps> = props => (
  <TouchableOpacity onPress={props.onPress}>
    <ButtonStyle style={{ ...props.style }}>
      <Text>{props.title}</Text>
    </ButtonStyle>
  </TouchableOpacity>
);

export default ButtonWithBg;
