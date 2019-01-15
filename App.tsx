import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import configureStore from './src/store/configureStore';

const store = configureStore();

const createPage = (Component, ...props) => {
  return class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Component
            {...{
              ...this.props,
              ...props
            }}
          />
        </Provider>
      );
    }
  };
};
// Register Screens
Navigation.registerComponent('awesome-places.AuthScreen', () => createPage(AuthScreen));
Navigation.registerComponent('awesome-places.SharePlaceScreen', () => createPage(SharePlaceScreen));
Navigation.registerComponent('awesome-places.FindPlaceScreen', () => createPage(FindPlaceScreen));
Navigation.registerComponent('awesome-places.PlaceDetailScreen', () =>
  createPage(PlaceDetailScreen)
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Auth',
        children: [
          {
            component: {
              name: 'awesome-places.AuthScreen',
              options: {
                topBar: {
                  visible: true,
                  title: {
                    text: 'Login'
                  }
                }
              }
            }
          }
        ]
      }
    }
  });
});
