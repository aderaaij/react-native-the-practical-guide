import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

export const addPlace = (placeName: string) => ({
  type: ADD_PLACE,
  placeName
});

export const deletePlace = (key: number) => ({
  type: DELETE_PLACE,
  placeKey: key
});
