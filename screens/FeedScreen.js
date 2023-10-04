import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, AsyncStorage } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function FeedScreen() {
    const [imagesArray, setImagesArray] = useState([]);
    const [length, setLength] = useState(0);

    useEffect(() => {
        feedData()
    }, [length, feedData])

    const feedData = () => {
        try {
        AsyncStorage.getItem("Feeds")
          .then(value => {
            if (value != null) {
               let image = JSON.parse(value);
               console.log("image", image);
              setImagesArray(image);
              console.log("images async length", imagesArray.length)
              // setImagesArray(imagesArray);
              console.log("Async images", imagesArray);
              setLength(imagesArray.length)
            }
          })
      } catch (error) {
        console.log(error);
      }
    }

    const deleteImage = async (index) => {
        try {
          imagesArray.splice(index, 1);
          await AsyncStorage.setItem("Feeds", JSON.stringify(imagesArray))
          setImagesArray(JSON.parse(await AsyncStorage.getItem("Feeds")))
          console.log(index)
        } catch (error) {
          console.log(error);
        }
      };

    const Item = ({ id, imagePath, title, commentsCount, description, likes, index }) => (
        <>
        <Image source={{ uri: imagePath }} style={styles.image} />
        <View style={styles.content}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../assets/profile-icon.png")} style={styles.profileImg} />
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={styles.text}>Shiv Shakti</Text>
                    <Text style={styles.text}>@shivbharti</Text>
                </View>
            </View>

            <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>{description}</Text>
            </View>

            <View style={styles.bottomIcons}>
                <View style={styles.likes}>
                    <TouchableOpacity>
                        <FontAwesome5 name={"heart"} size={30} color={"#fff"} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25, color: "#fff", marginHorizontal: 5 }}>{likes}</Text>
                </View>

                <View style={styles.likes}>
                    <TouchableOpacity>
                        <FontAwesome5 name={"comment"} size={30} color={"#fff"} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25, color: "#fff", marginHorizontal: 5 }}>{commentsCount}</Text>
                </View>

                <View style={styles.likes}>
                    <TouchableOpacity>
                        <FontAwesome5 name={"retweet"} size={30} color={"#fff"} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25, color: "#fff", marginHorizontal: 5 }}>0</Text>
                </View>

                <View style={styles.likes}>
                    <TouchableOpacity onPress={() => deleteImage(index)}>
                        <FontAwesome5 name={"trash"} size={30} color={"#fff"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </>
    );

    const renderItem = ({ item, index }) => (
         <Item id={item.id} imagePath={item.imagePath} 
            title={item.title} index={index}
            commentsCount={item.commentsCount}
            description={item.description}
            likes={item.likes}
            /> 
       )

  return (
    <FlatList
    data={imagesArray}
    renderItem={renderItem}
    keyExtractor={item => item.id} 
    extraData={length}       
/>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   position: "relative"
    },
    image: {
        height: 700,
        width: "100%",
        marginBottom: 10,
        position: "relative"
    },
    content: {
        position: "absolute",
        top: 450,
        left: 10
    },
    profileImg: {
        height: 60,
        width: 60,
        borderWidth: 4,
        borderRadius: 30,
        borderColor: "#fff"
    },
    text: {
        color: "#fff",
        fontSize: 20
    },
    likes: {
        flexDirection: "row",
        marginVertical: 5
    },
    bottomIcons: {
        position: "absolute",
        left: 300,
        bottom: 120,
    }
})