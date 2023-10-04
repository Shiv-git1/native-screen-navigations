import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import LogoutModule from './LogoutModule';
import Share from 'react-native-share';

export default function Feed({ navigation }) {
 const shareApp = async() => {
   const shareOptions = {
     message: "url"
   }

   try {
     const ShareResponse = await Share.open(shareOptions);
     console.log(JSON.stringify(ShareResponse));
   } catch(error) {
      console.log(error);
   }
 }
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("FeedScreen")}>
          <View style={styles.buttonContainer}>
            <Image source={require("../assets/feed-icon.png")} />
            <Text style={styles.content}>View Feeds</Text>
            <Image source={require("../assets/forward-icon.png")} />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("CreateFeedScreen")}>
          <View style={styles.buttonContainer}>
            <Image source={require("../assets/create-icon.png")} />
            <Text style={styles.content}>Create Diary Feed</Text>
            <Image source={require("../assets/forward-icon.png")} />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("GalleryScreen")}>
          <View style={styles.buttonContainer}>
            <Image source={require("../assets/gallery-icon.png")} />
            <Text style={styles.content}>Gallery</Text>
            <Image source={require("../assets/forward-icon.png")} />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <View style={styles.buttonContainer}>
            <Image source={require("../assets/profile-icon.png")} />
            <Text style={styles.content}>Profile</Text>
            <Image source={require("../assets/forward-icon.png")} />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={shareApp}>
          <View style={styles.buttonContainer}>
            <Image source={require("../assets/share-icon.png")} />
            <Text style={styles.content}>Share App</Text>
            <Image source={require("../assets/forward-icon.png")} />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.buttonContainer}>
            <Image source={require("../assets/logout-icon.png")} />
            <Text style={styles.content}>Logout</Text>
            <Image source={require("../assets/forward-icon.png")} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff"
  },
  content: {
    fontSize: 20,
    color: "black"
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    padding: 5,
    justifyContent: "space-between",
    backgroundColor: "lightblue",
    // borderWidth: 2,
    borderRadius: 8
  }
})