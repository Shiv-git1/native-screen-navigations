import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  content: {
    fontSize: 40,
    color: "black"
  }
})