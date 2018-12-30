import * as React from 'react';
import styled from 'styled-components/native';
import ListItem from '../ListItem/ListItem';

const PlaceListContainer = styled.View`
  width: 100%;
`;
interface PlaceListProps {
  places: Array<string>;
}

const PlaceList: React.SFC<PlaceListProps> = props => {
  return (
    <PlaceListContainer>
      {props.places.map((place, i) => (
        <ListItem index={i} key={i} placeName={place} />
      ))}
    </PlaceListContainer>
  );
};
export default PlaceList;
