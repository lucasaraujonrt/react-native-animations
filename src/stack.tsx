import React from 'react';
import { Text, TouchableOpacity, Linking } from 'react-native';

import { Row } from './components';
import { links } from './config';
import AnimatedCarousel from './pages/AnimatedCarousel';
import Login from './pages/Auth/Login';
import HocComponent from './pages/HocComponent';
import Home from './pages/Home';
import Matrix from './pages/Matrix';
import MindBlow from './pages/MindBlow';
import PanGesture from './pages/PanGesture';
import PhoneCall from './pages/PhoneCall';
import Shake from './pages/Shake';
import SquareStick from './pages/SquareStick';
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

const onPressLink = () => Linking.openURL(links.github);

const AuthNavigator = () => (
  <StartStack.Navigator>
    <StartStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Row>
            <Text>
              {'</>'}
              {' '}
              with ♥️ by
              {' '}
            </Text>
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
          </Row>
        ),
      }}
    />
    <StartStack.Screen name="Login" component={Login} />
    <StartStack.Screen
      name="PanGesture"
      component={PanGesture}
      options={{ headerTitle: 'PanGesture' }}
    />
    <StartStack.Screen
      name="SquareStick"
      component={SquareStick}
      options={{ headerTitle: 'SquareStick' }}
    />
    <StartStack.Screen
      name="PhoneCall"
      component={PhoneCall}
      options={{ headerTitle: 'CI&T Calling' }}
    />
    <StartStack.Screen
      name="AnimatedCarousel"
      component={AnimatedCarousel}
      options={{ headerShown: false }}
    />
    <StartStack.Screen
      name="Matrix"
      component={Matrix}
      options={{ headerTitle: 'Matrix' }}
    />
    <StartStack.Screen
      name="MindBlow"
      component={MindBlow}
      options={{ headerShown: false }}
    />
    <StartStack.Screen
      name="HocComponent"
      component={HocComponent}
      options={{ headerShown: false }}
    />
    <StartStack.Screen
      name="Shake"
      component={Shake}
      options={{ headerShown: false }}
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
