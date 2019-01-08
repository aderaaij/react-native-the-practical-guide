import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from './actionTypes';

export const addPlace = (placeName: string) => ({
  type: ADD_PLACE,
  placeName
});

export const deletePlace = () => ({
  type: DELETE_PLACE
});

export const selectPlace = (key: number) => ({
  type: SELECT_PLACE,
  placeKey: key
});

export const deselectPlace = () => ({
  type: DESELECT_PLACE
});
