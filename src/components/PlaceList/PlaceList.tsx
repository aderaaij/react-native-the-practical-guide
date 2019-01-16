import * as React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import ListItem from '../ListItem/ListItem';

const PlaceListContainer = styled(FlatList)`
  width: 100%;
`;

interface PlaceObject {
  name: string;
  image: {
    uri: string;
  };
  key: number;
}
interface PlaceListProps {
  places: Array<PlaceObject>;
  onItemSelected: (arg: number) => void;
}

const PlaceList: React.SFC<PlaceListProps> = ({ places, onItemSelected }) => {
  return (
    <PlaceListContainer
      data={places}
      renderItem={({ index, item }: { index: number; item: any }) => (
        <ListItem
          index={index}
          name={item.name}
          image={item.image}
          onItemPressed={() => onItemSelected(item.key)}
        />
      )}
    />
  );
};
export default PlaceList;
