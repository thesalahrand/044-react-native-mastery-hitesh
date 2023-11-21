import React from 'react';
import FlatCards from './components/FlatCards';
import {SafeAreaView, ScrollView} from 'react-native';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
