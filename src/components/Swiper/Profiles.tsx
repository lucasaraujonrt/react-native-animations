import React, { useCallback, useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';

import theme from '@mobile/theme';

import Header from '../Header';
import HyperComponent from '../hoc/HyperComponent';

import type { ProfileModel } from './Profile';
import Swipeable, { Swiper } from './Swipable';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  cards: {
    flex: 1,
    marginHorizontal: 16,
    zIndex: 100,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 16,
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    shadowColor: 'gray',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 2,
  },
});

interface ProfilesProps {
  profiles: ProfileModel[];
}

const Profiles = ({ profiles: defaultProfiles }: ProfilesProps) => {
  const topCard = useRef<Swiper>(null);
  const scale = useSharedValue(0);
  const [profiles, setProfiles] = useState(defaultProfiles);
  const onSwipe = useCallback(() => {
    setProfiles(profiles.slice(0, profiles.length - 1));
  }, [profiles]);

  return (
    <HyperComponent backgroundColor={theme.colors.background}>
      <Header title="Tinder" />
      <View style={styles.cards}>
        {profiles.map((profile, index) => {
          const onTop = index === profiles.length - 1;
          const ref = onTop ? topCard : null;

          return (
            <Swipeable
              ref={ref}
              key={profile.id}
              profile={profile}
              scale={scale}
              onSwipe={onSwipe}
              onTop={onTop}
            />
          );
        })}
      </View>
      <View style={styles.footer}>
        <RectButton
          style={styles.circle}
          onPress={() => {
            topCard.current?.swipeLeft();
          }}
        >
          <Icon name="x" size={32} color="#ec5288" />
        </RectButton>
        <RectButton
          style={styles.circle}
          onPress={() => {
            topCard.current?.swipeRight();
          }}
        >
          <Icon name="heart" size={32} color="#6ee3b4" />
        </RectButton>
      </View>
    </HyperComponent>
  );
};

export default Profiles;
