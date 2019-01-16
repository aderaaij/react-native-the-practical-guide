import { createStore, combineReducers, compose } from 'redux';
import placesReducer from './reducers/places';
import uiReducer from './reducers/ui';

const rootReducer = combineReducers({
  places: placesReducer,
  ui: uiReducer
} as any);
let composeEnhancers = compose;
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const configureStore = () => createStore(rootReducer, composeEnhancers());

export default configureStore;
