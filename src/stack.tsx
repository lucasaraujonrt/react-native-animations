import React from 'react';
import { Linking } from 'react-native';

import { Home as HomeViews, AboutMe, Contact } from '@mobile/views';

import { Web, Swiping } from './components';
import { links } from './config';
import AnimatedCarousel from './pages/AnimatedCarousel';
import Graph from './pages/Graph';
import Home from './pages/Home';
import Matrix from './pages/Matrix';
import MindBlow from './pages/MindBlow';
import PanGesture from './pages/PanGesture';
import PhoneCall from './pages/PhoneCall';
import Shake from './pages/Shake';
import SquareStick from './pages/SquareStick';
import Tinder from './pages/Tinder';
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

const ViewsNavigator = () => (
  <StartStack.Navigator>
    <StartStack.Screen
      name="home"
      component={HomeViews}
      options={{ headerShown: false }}
    />
    <StartStack.Screen
      name="AboutMe"
      component={AboutMe}
      options={{ headerShown: false, animationTypeForReplace: 'push' }}
    />
    <StartStack.Screen
      name="SandBox"
      component={Home}
      options={{ headerShown: false }}
    />
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
      name="Shake"
      component={Shake}
      options={{
        headerShown: false,
        animationTypeForReplace: 'push',
        presentation: 'modal',
        animationEnabled: true,
      }}
    />
    <StartStack.Screen
      name="Graph"
      component={Graph}
      options={{
        headerShown: true,
        animationEnabled: true,
      }}
    />
    <StartStack.Screen
      name="Contact"
      component={Contact}
      options={{
        headerShown: false,
      }}
    />
    <StartStack.Screen
      name="Web"
      component={Web}
      options={{
        headerShown: false,
      }}
    />
    <StartStack.Screen
      name="Tinder"
      component={Tinder}
      options={{
        headerShown: false,
      }}
    />
  </StartStack.Navigator>
);

const Navigator = () => (
  <MainStack.Navigator
    initialRouteName=""
    screenOptions={{ headerShown: false }}
  >
    <MainStack.Screen name="Views" component={ViewsNavigator} />
    <MainStack.Screen name="Content" component={ContentNavigator} />
  </MainStack.Navigator>
);

export default Navigator;
