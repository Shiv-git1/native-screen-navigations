import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Notifications</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  content: {
    fontSize: 40,
    color: "#fff"
  }
})