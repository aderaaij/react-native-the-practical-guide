import * as React from 'react';
import styled from 'styled-components';
import { TextInput } from 'react-native';

interface DefaultInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
}

const Input = styled(TextInput)`
  width: 100%;
  border: 1px solid #eee;
  padding: 5px;
  margin: 8px;
`;

const DefaultInput: React.SFC<DefaultInputProps> = props => <Input {...props} />;

export default DefaultInput;
