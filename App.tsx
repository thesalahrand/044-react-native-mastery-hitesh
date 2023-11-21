import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#ffffff',
  },
  darkText: {
    color: '#000000',
  },
});

const App = (): JSX.Element => {
  const isDark = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <Text style={isDark ? styles.whiteText : styles.darkText}>
        Hello World!
      </Text>
      {/* <Text style={styles.darkText}>Hello World!</Text> */}
    </SafeAreaView>
  );
};

export default App;
