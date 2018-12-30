import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

interface ListItemProps {
  placeName: string;
  index: number;
  oddEven?: string;
}

const ListItemWrap = styled.View`
  width: 100%;
  background: ${(props: ListItemProps) => (props.oddEven === 'even' ? '#ec008c' : '#fff')};
  text-align: left;
  padding: 10px;
`;

const ListItem: React.SFC<ListItemProps> = props => {
  return (
    <ListItemWrap oddEven={props.index % 2 ? 'even' : 'odd'}>
      <Text>{props.placeName}</Text>
    </ListItemWrap>
  );
};
export default ListItem;
