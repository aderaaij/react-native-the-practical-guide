import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const myTabNavigation = async () => {
  const icons = await Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('md-share-alt', 30)
  ]);
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsId',
        children: [
          {
            stack: {
              id: 'Tabs',
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
                        icon: icons[0]
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            stack: {
              id: 'Tabs2',
              children: [
                {
                  component: {
                    id: 'findscreen',
                    name: 'awesome-places.FindPlaceScreen',
                    options: {
                      topBar: {
                        visible: true,
                        title: {
                          text: 'Find Place'
                        }
                      },
                      bottomTab: {
                        fontSize: 12,
                        text: 'Find Place',
                        icon: icons[1]
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    }
  });
};
export default myTabNavigation;
