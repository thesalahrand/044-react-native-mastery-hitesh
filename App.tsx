import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import {SafeAreaView, ScrollView} from 'react-native';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
