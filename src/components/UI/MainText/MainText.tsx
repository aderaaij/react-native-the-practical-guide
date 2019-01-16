import * as React from 'react';
import { Text, Platform } from 'react-native';
import styled from 'styled-components';

const StyledText = styled(Text)`
  font-family: ${Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto'};
  color: #000000;
`;

interface MainTextProps {}
const MainText: React.SFC<MainTextProps> = props => <StyledText>{props.children}</StyledText>;

export default MainText;
