import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {colors} from './variables';

const BottomTabScreenOptions = props => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName;
    switch (props.route.name) {
      case 'Профиль':
        iconName = 'user';
        break;
      case 'Новости':
        iconName = 'feed';
        break;
      case 'Материалы':
        iconName = 'folder';
        break;
      case 'Витрина':
        iconName = 'bath';
        break;
      case 'Где купить':
        iconName = 'credit-card';
        break;
      default:
        iconName = 'music';
    }
    return <Icon name={iconName} size={size} color={color} />;
  },
});

const BottomTabBarOptions = {
  activeTintColor: colors.selectedTab,
  inactiveTintColor: colors.secondary,
};

export {BottomTabScreenOptions, BottomTabBarOptions};
