import React from 'react';
import { Stack, Text } from '@fluentui/react';

const Footer = () => {
  return (
    <Stack 
      horizontal 
      horizontalAlign="space-between" 
      verticalAlign="center"
      styles={{
        root: {
          padding: '8px 16px',
          backgroundColor: '#f3f2f1',
          borderTop: '1px solid #edebe9',
          height: '40px'
        }
      }}
    >
      <Text variant="small">© 2024 Bundesinstitut für Risikobewertung (BfR) </Text>
      <Text variant="small">Version 1.0.0</Text>
    </Stack>
  );
};

export default Footer;