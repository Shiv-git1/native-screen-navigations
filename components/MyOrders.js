import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function MyOrders() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>My Orders</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink"
  },
  content: {
    fontSize: 40,
    color: "#fff"
  }
})