import { createStore, combineReducers } from 'redux';
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
  places: placesReducer
} as any);

const configureStore = () => createStore(rootReducer);

export default configureStore;
