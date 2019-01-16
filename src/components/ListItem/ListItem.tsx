import * as React from 'react';
import styled from 'styled-components';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface ListItemProps {
  name: string;
  image: string;
  index: number;
  oddEven?: string;
  onItemPressed: () => void;
}

const Thumbnail = styled(Image)`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

const ListItemWrap = styled(View)`
  width: 100%;
  background: ${(props: ListItemProps) => (props.oddEven === 'even' ? '#ec008c' : '#fff')};
  text-align: left;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  padding: 10px;
`;

const ListItem: React.SFC<ListItemProps> = props => {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <ListItemWrap oddEven={props.index % 2 ? 'even' : 'odd'}>
        <Thumbnail resizeMode="cover" source={props.image} />
        <Text>{props.name}</Text>
      </ListItemWrap>
    </TouchableOpacity>
  );
};
export default ListItem;
