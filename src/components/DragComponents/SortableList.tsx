import type { ReactElement } from 'react';
import React from 'react';
import { ScrollView } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import { SortableItem } from './SortableItem';

interface SortableListProps {
  children: ReactElement[];
  item: { width: number; height: number };
}

const SortableList = ({
  children,
  item: { height, width },
}: SortableListProps) => {
  const activeCard = useSharedValue(-1);
  /**
   * @param multiply
   */
  const getY = (multiply: number) => useSharedValue(multiply);
  const offsets = children.map((_, i) => ({ y: getY(height * i) }));

  return (
    <ScrollView contentContainerStyle={{ height: children.length, flex: 1 }}>
      {children.map((child, index) => (
        <SortableItem
          {...{ offsets, index, width, height, activeCard }}
          key={index}
        >
          {child}
        </SortableItem>
      ))}
    </ScrollView>
  );
};

export default SortableList;
