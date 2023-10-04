import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Logout() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Logout</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  },
  content: {
    fontSize: 40,
    color: "#fff"
  }
})