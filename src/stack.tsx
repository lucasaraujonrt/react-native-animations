import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

import Login from './pages/Auth/Login';
import Home from './pages/Home';
import PanGesture from './pages/PanGesture';
import TabNavigator from './routes/TabNavigator';
import { createStack } from './services/navigation';

const MainStack = createStack();
const ContentStack = createStack();
const StartStack = createStack();

const routeList: Array<{ name: string; component: React.ReactNode }> = [
  {
    name: 'TabBar',
    component: (
      <ContentStack.Screen
        name="TabBar"
        component={TabNavigator}
        key="TabBar"
      />
    ),
  },
];

const ContentNavigator = () => (
  <ContentStack.Navigator screenOptions={{ headerShown: false }}>
    {routeList.map((item) => item.component)}
  </ContentStack.Navigator>
);

const onPressLink = () => Linking.openURL('https://github.com/lucasaraujonrt');

const AuthNavigator = () => (
  <StartStack.Navigator>
    <StartStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Text>Code with ♥️ by </Text>
            <TouchableOpacity onPress={onPressLink}>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  color: 'blue',
                }}
              >
                @lucasaraujonrt
              </Text>
            </TouchableOpacity>
          </View>
        ),
      }}
    />
    <StartStack.Screen name="Login" component={Login} />
    <StartStack.Screen
      name="PanGesture"
      component={PanGesture}
      options={{ headerTitle: 'PanGesture' }}
    />
  </StartStack.Navigator>
);

const Navigator = () => (
  <MainStack.Navigator
    initialRouteName=""
    screenOptions={{ headerShown: false }}
  >
    <MainStack.Screen name="Start" component={AuthNavigator} />
    <MainStack.Screen name="Content" component={ContentNavigator} />
  </MainStack.Navigator>
);

export default Navigator;
