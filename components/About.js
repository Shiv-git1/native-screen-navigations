import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>About</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey"
  },
  content: {
    fontSize: 40,
    color: "#fff"
  }
})
