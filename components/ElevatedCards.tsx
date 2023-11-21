import {ScrollView, StyleSheet, Text, View} from 'react-native';
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
  elevatedCardsWrapper: {
    gap: 12,
  },
  elevatedCard: {
    width: 120,
    height: 120,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  elevatedCard01: {
    backgroundColor: '#F05252',
  },
  elevatedCard02: {
    backgroundColor: '#0E9F6E',
  },
  elevatedCard03: {
    backgroundColor: '#3F83F8',
  },
  elevatedCard04: {
    backgroundColor: '#E74694',
  },
  elevatedCard05: {
    backgroundColor: '#9061F9',
  },
  elevatedCardText: {
    color: '#ffffff',
  },
});

export default function ElevatedCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.elevatedCardsWrapper}>
        <View style={[styles.elevatedCard, styles.elevatedCard01]}>
          <Text style={styles.elevatedCardText}>Red</Text>
        </View>
        <View style={[styles.elevatedCard, styles.elevatedCard02]}>
          <Text style={styles.elevatedCardText}>Green</Text>
        </View>
        <View style={[styles.elevatedCard, styles.elevatedCard03]}>
          <Text style={styles.elevatedCardText}>Blue</Text>
        </View>
        <View style={[styles.elevatedCard, styles.elevatedCard04]}>
          <Text style={styles.elevatedCardText}>Pink</Text>
        </View>
        <View style={[styles.elevatedCard, styles.elevatedCard05]}>
          <Text style={styles.elevatedCardText}>Purple</Text>
        </View>
      </ScrollView>
    </View>
  );
}
