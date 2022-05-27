import React from 'react';

import { Home as HomeViews, AboutMe, Contact, Experience } from '@mobile/views';

import { Web } from './components';
import AnimatedCarousel from './pages/AnimatedCarousel';
import Drag from './pages/Drag';
import Graph from './pages/Graph';
import Home from './pages/Home';
import Matrix from './pages/Matrix';
import MindBlow from './pages/MindBlow';
import PanGesture from './pages/PanGesture';
import PhoneCall from './pages/PhoneCall';
import SquareStick from './pages/SquareStick';
import Tinder from './pages/Tinder';
import Trigonometry from './pages/Trigonometry';
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

const ViewsNavigator = () => (
  <StartStack.Navigator screenOptions={{}}>
    <StartStack.Screen
      name="home"
      component={HomeViews}
      options={{ headerShown: false }}
    />
    <StartStack.Screen
      name="AboutMe"
      component={AboutMe}
      options={{
        headerShown: false,
      }}
    />
    <StartStack.Screen
      name="SandBox"
      component={Home}
      options={{ headerShown: false }}
    />
    <StartStack.Screen
      name="PanGesture"
      component={PanGesture}
      options={{ headerShown: false }}
    />
    <StartStack.Screen
      name="SquareStick"
      component={SquareStick}
      options={{ headerShown: false }}
    />
    <StartStack.Screen
      name="PhoneCall"
      component={PhoneCall}
      options={{ headerShown: false }}
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
      name="Graph"
      component={Graph}
      options={{
        headerShown: false,
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
    <StartStack.Screen
      name="Trigonometry"
      component={Trigonometry}
      options={{
        headerShown: false,
      }}
    />
    <StartStack.Screen
      name="Drag"
      component={Drag}
      options={{
        headerShown: false,
      }}
    />
    <StartStack.Screen
      name="Experience"
      component={Experience}
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
