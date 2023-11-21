import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  flatCardsWrapper: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
  },
  flatCard: {
    width: 120,
    height: 120,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatCard01: {
    backgroundColor: '#F05252',
  },
  flatCard02: {
    backgroundColor: '#0E9F6E',
  },
  flatCard03: {
    backgroundColor: '#3F83F8',
  },
  flatCardText: {
    color: '#ffffff',
  },
});

export default function FlatCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.flatCardsWrapper}>
        <View style={[styles.flatCard, styles.flatCard01]}>
          <Text style={styles.flatCardText}>Red</Text>
        </View>
        <View style={[styles.flatCard, styles.flatCard02]}>
          <Text style={styles.flatCardText}>Green</Text>
        </View>
        <View style={[styles.flatCard, styles.flatCard03]}>
          <Text style={styles.flatCardText}>Blue</Text>
        </View>
      </View>
    </View>
  );
}
