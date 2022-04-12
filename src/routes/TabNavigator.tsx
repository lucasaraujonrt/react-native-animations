import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';

import i18n from '@mobile/i18n';
import Home from '@mobile/pages/Home';
import { createStack } from '@mobile/services/navigation';

import CreditCardIcon from '../assets/svg/routes/credit-card.svg';
import GithubIcon from '../assets/svg/routes/github.svg';
import HomeIcon from '../assets/svg/routes/home.svg';
import UserIcon from '../assets/svg/routes/user.svg';

const HomeStack = () => {
  const Stack = createStack();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const CreditCardStack = () => {
  const Stack = createStack();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const GithubStack = () => {
  const Stack = createStack();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  const Stack = createStack();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const TabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="none"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeIcon width={30} height={30} color={color} />
          ),
          tabBarLabel: i18n.t('PAGES.ROUTES.HOME.TAB'),
        }}
      />
      <Tab.Screen
        name="CreditCard"
        component={CreditCardStack}
        options={{
          tabBarIcon: ({ color }) => (
            <CreditCardIcon width={30} height={30} color={color} />
          ),
          tabBarLabel: i18n.t('PAGES.ROUTES.CREDIT_CARD.TAB'),
        }}
      />
      <Tab.Screen
        name="Github"
        component={GithubStack}
        options={{
          tabBarIcon: ({ color }) => (
            <GithubIcon width={30} height={30} color={color} />
          ),
          tabBarLabel: i18n.t('PAGES.ROUTES.GITHUB.TAB'),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => (
            <UserIcon width={30} height={30} color={color} />
          ),
          tabBarLabel: i18n.t('PAGES.ROUTES.USER.TAB'),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
