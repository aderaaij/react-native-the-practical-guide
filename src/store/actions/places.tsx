import { ADD_PLACE, DELETE_PLACE, TOGGLE_DRAWER } from './actionTypes';

export const addPlace = (placeName: string) => ({
  type: ADD_PLACE,
  placeName
});

export const deletePlace = (key: number) => ({
  type: DELETE_PLACE,
  placeKey: key
});

export const toggleDrawer = (isDrawerOpen: boolean) => ({
  type: TOGGLE_DRAWER,
  isDrawerOpen: !isDrawerOpen
});
