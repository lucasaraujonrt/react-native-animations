import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import { Cards, Card, CARD_HEIGHT } from '@mobile/animation/Cards';
import { Header, HyperComponent } from '@mobile/components';
import SortableList from '@mobile/components/DragComponents/SortableList';
import theme from '@mobile/theme';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    height: CARD_HEIGHT,
    width: '100%',
    alignItems: 'center',
  },
});
const cards = [Cards.Card1, Cards.Card2, Cards.Card3];

const Drag = () => (
  <>
    <HyperComponent backgroundColor={theme.colors.background}>
      <Header title="Drag" />
      <SortableList item={{ width, height: CARD_HEIGHT + 32 }}>
        {cards.map((card, index) => (
          <View style={styles.card} key={index.toString()}>
            <Card card={card} />
          </View>
        ))}
      </SortableList>
    </HyperComponent>
  </>
);

export default Drag;
