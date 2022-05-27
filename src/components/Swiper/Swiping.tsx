import React from 'react';

import type { ProfileModel } from './Profile';
import Profiles from './Profiles';

export const profiles: ProfileModel[] = [
  {
    id: '1',
    name: 'A',
    age: 24,
    profile: require('../../animation/Cards/assets/horizontal/horizontal_1.png'),
  },
  {
    id: '2',
    name: 'Joker',
    age: 30,
    profile: require('../../animation/Cards/assets/horizontal/horizontal_2.png'),
  },
  {
    id: '3',
    name: 'Queen',
    age: 21,
    profile: require('../../animation/Cards/assets/horizontal/horizontal_3.png'),
  },
  {
    id: '4',
    name: 'King',
    age: 28,
    profile: require('../../animation/Cards/assets/horizontal/horizontal_4.png'),
  },
];

const Swiping = () => <Profiles {...{ profiles }} />;

export default Swiping;
