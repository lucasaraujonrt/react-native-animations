import React, { useState } from 'react';

import { HyperComponent, ShakeComponent } from '@mobile/components';

const Shake = () => {
  const bgColor = '#7d63ab';
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  return (
    <HyperComponent
      {...{ backgroundColor: bgColor }}
    >
      <ShakeComponent
        value={value}
        title='Input'
        error={error}
        onChangeText={(text: string) => {
          setValue(text);
          if (text.length > 10) {
            setError((prev) => !prev);
          }
        }}
      />
    </HyperComponent>
  );
};

export default Shake;