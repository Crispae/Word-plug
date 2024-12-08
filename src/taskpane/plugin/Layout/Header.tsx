import React from 'react';
import { Stack, Text, Image } from '@fluentui/react';

const Header = () => {
  return (
    <Stack 
      horizontal 
      verticalAlign="center" 
      horizontalAlign="space-between"
      styles={{
        root: {
          padding: '8px 16px',
          backgroundColor: '#fff',
          borderBottom: '1px solid #edebe9',
          height: '48px'
        }
      }}
    >
      <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 12 }}>
        <Image 
          src="/assets/bfr.jpg"
          alt="Logo"
          width={32}
          height={32}
          styles={{
            root: {
              width: 32,
              height: 32,
              objectFit: 'contain'
            }
          }}
        />
        <Text variant="large" styles={{ root: { fontWeight: 600 } }}>
          Office-Plugins
        </Text>
      </Stack>
    </Stack>
  );
};

export default Header;