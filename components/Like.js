import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Like() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Like</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  content: {
    fontSize: 40,
    color: "black"
  }
})