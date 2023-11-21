import {StyleSheet, Image, Text, View} from 'react-native';
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
  fancyCard: {
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  fancyCardImage: {
    height: 160,
    width: '100%',
    objectFit: 'cover',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderWidth: 1,
  },
  fancyCardBody: {
    flex: 1,
    gap: 8,
    padding: 12,
  },
  fancyCardHeading: {
    color: '#111827',
    fontWeight: 'bold',
  },
  fancyCardDesc: {
    fontSize: 14,
    color: '#374151',
  },
});

const FancyCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={styles.fancyCard}>
        <Image
          source={{
            uri: 'https://flowbite.com/docs/images/blog/image-1.jpg',
          }}
          style={styles.fancyCardImage}
        />
        <View style={styles.fancyCardBody}>
          <Text style={styles.fancyCardHeading}>
            Noteworthy technology acquisitions 2021
          </Text>
          <Text style={styles.fancyCardDesc}>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;
