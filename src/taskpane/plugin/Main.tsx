import React from 'react';
import { Stack, initializeIcons } from '@fluentui/react';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import MainContent from './Layout/MainContent';
import Footer from './Layout/Footer';

// Initialize icons
initializeIcons();

const Index = () => {
    return (
        <Stack styles={{ root: { height: "100%" } }}>
          <Header />
          <Stack horizontal styles={{ root: { flex: 1, overflow: "hidden" } }}>
            <Sidebar />
          </Stack>
          <Footer />
        </Stack>
      );
};

export default Index;