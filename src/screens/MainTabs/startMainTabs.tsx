import { Navigation } from 'react-native-navigation';

const myTabNavigation = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsId',
        children: [
          {
            component: {
              name: 'awesome-places.SharePlaceScreen',
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Share Place'
                  // icon: require('./signin.png')
                }
              }
            }
          },
          {
            component: {
              name: 'awesome-places.FindPlaceScreen',
              options: {
                bottomTab: {
                  text: 'Find Place',
                  fontSize: 12
                  // icon: require('./signup.png')
                }
              }
            }
          }
        ]
      }
    }
  });

export default myTabNavigation;
