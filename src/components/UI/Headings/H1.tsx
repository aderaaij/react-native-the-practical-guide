import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

const StyledH1 = styled(Text)`
  font-size: 28px;
  font-weight: 700;
`;
interface H1Props {}

const H1: React.SFC<H1Props> = props => <StyledH1 {...props}>{props.children}</StyledH1>;

export default H1;
