import { Action } from 'redux';
import { Reducer } from 'redux';

import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';
type Place = {
  key: string;
  name: string;
  image: {
    uri: string;
  };
};

type LocationsState = {
  places: ReadonlyArray<Place>;
  selectedPlace: Place | null | undefined;
};
const initialState: LocationsState = {
  places: [],
  selectedPlace: null
};

const reducer: Reducer<LocationsState> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.placeName,
          image: {
            uri:
              'https://cdn.shopify.com/s/files/1/1469/6476/files/Popoyo-Nicaragua_1024x1024.jpg?v=1518142200'
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place =>
          state.selectedPlace ? place.key !== state.selectedPlace.key : place
        ),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => place.key === action.placeKey)
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

console.log(reducer);

export default reducer;
