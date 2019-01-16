import { Action } from 'redux';
import { Reducer } from 'redux';

import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

type Place = {
  key: string;
  name: string;
  image: {
    uri: string;
  };
};

type LocationsState = {
  places: ReadonlyArray<Place>;
};

const initialState: LocationsState = {
  places: []
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
        places: state.places.filter(place => place.key !== action.placeKey)
      };
    default:
      return state;
  }
};

export default reducer;
