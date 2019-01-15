import { Navigation } from 'react-native-navigation';

const myTabNavigation = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsId',
        options: {
          topBar: {
            visible: true
          }
        },
        children: [
          {
            component: {
              id: 'sharescreen',
              name: 'awesome-places.SharePlaceScreen',
              options: {
                topBar: {
                  visible: true,
                  title: {
                    text: 'Share Place'
                  }
                },
                bottomTab: {
                  fontSize: 12,
                  text: 'Share Place',
                  icon: require('../../assets/signin.png')
                }
              }
            }
          },
          {
            component: {
              id: 'findplace',
              name: 'awesome-places.FindPlaceScreen',
              options: {
                bottomTab: {
                  text: 'Find Place',
                  fontSize: 12,
                  icon: require('../../assets/signup.png')
                }
              }
            }
          }
        ]
      }
    }
  });

export default myTabNavigation;
