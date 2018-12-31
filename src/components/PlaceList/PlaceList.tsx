import * as React from 'react';
import styled from 'styled-components/native';
import ListItem from '../ListItem/ListItem';
import { FlatList, Text } from 'react-native';
import { string } from 'prop-types';

const PlaceListContainer = styled.FlatList`
  width: 100%;
`;

interface PlaceObject {
  value: string;
  key: number;
}
interface PlaceListProps {
  places: Array<PlaceObject>;
  onItemDeleted: (arg: number) => string;
}

interface InfoProps {
  index: number;
  item: PlaceObject;
}

const PlaceList: React.SFC<PlaceListProps> = props => {
  return (
    <PlaceListContainer<InfoProps>
      data={props.places}
      renderItem={(info: InfoProps) => (
        <ListItem
          index={info.index}
          placeName={info.item.value}
          onItemPressed={() => props.onItemDeleted(info.item.key)}
        />
      )}
    />
  );
};
export default PlaceList;
