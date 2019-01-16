import { TOGGLE_DRAWER } from './actionTypes';

export const toggleDrawer = (isDrawerOpen: boolean) => ({
  type: TOGGLE_DRAWER,
  isDrawerOpen
});
