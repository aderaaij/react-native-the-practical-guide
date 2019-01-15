import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const myTabNavigation = async () => {
  const mapIcon = await Icon.getImageSource('md-map', 30);
  const shareIcon = await Icon.getImageSource('md-share-alt', 30);
  const iconMenu = await Icon.getImageSource('ios-menu', 30);

  const menuToggle = {
    leftButtons: [
      {
        id: 'sideDrawerToggle',
        icon: iconMenu
      }
    ]
  };
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: 'awesome-places.SideDrawer'
          }
        },
        center: {
          bottomTabs: {
            id: 'BottomTabsId',
            children: [
              {
                stack: {
                  id: 'Tabs1',
                  children: [
                    {
                      component: {
                        id: 'findscreen',
                        name: 'awesome-places.FindPlaceScreen',
                        options: {
                          topBar: {
                            visible: true,
                            ...menuToggle,
                            title: {
                              text: 'Find Place'
                            }
                          },
                          bottomTab: {
                            fontSize: 12,
                            text: 'Find Place',
                            icon: mapIcon
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
                        id: 'sharescreen',
                        name: 'awesome-places.SharePlaceScreen',
                        options: {
                          topBar: {
                            visible: true,
                            ...menuToggle,
                            title: {
                              text: 'Share Place'
                            }
                          },
                          bottomTab: {
                            fontSize: 12,
                            text: 'Share Place',
                            icon: shareIcon
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
      }
    }
  });
};
export default myTabNavigation;
