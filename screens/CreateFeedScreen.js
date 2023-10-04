import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, AsyncStorage, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';

export default function CreateFeedScreen({ navigation }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imagesArray, setImagesArray] = useState([]);
    // const [galleryImage, setGalleryImage] = useState({});
    const [imagePath, setImagePath] = useState("");
    const [length, setLength] = useState(0);

    useEffect(() => {
      fromGallery();
    }, [length])

    const fromGallery = () => {
      try {
      AsyncStorage.getItem("fromGallery")
        .then(value => {
          if (value != null) {
             let image = JSON.parse(value);
             console.log("image", image);
              // setGalleryImage(image)
              // imagesArray.unshift({
              //   title: title,
              //   description: description,
              //   id: image.modificationDate,
              //   imagePath: image.path,
              //   likes: 0,
              //   comments: " ",
              //   commentsCount: 0
              // });
              setImagePath(image.path)
              // setImagesArray(imagesArray)
              // setLength(imagesArray.length);
              console.log(imagePath)
            // console.log("images async length", galleryImage.length)
            // console.log("Async images", galleryImage);
          }
        })
    } catch (error) {
      console.log(error);
    }
  }

    const chooseFromPhone = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            imagesArray.unshift({
                title: title,
                description: description,
                id: image.modificationDate,
                imagePath: image.path,
                likes: 0,
                comments: " ",
                commentsCount: 0
              });
              // AsyncStorage.setItem("Feeds", JSON.stringify(imagesArray))
              setImagesArray(imagesArray)
              setLength(imagesArray.length);
            // setImagePath("")
          });
    }

    const saveImageData = async () => {
      try {
        await AsyncStorage.setItem("Feeds", JSON.stringify(imagesArray));
        console.log("saveimagedata", imagesArray);
        Alert.alert("Created feed successfully!!!")
      } catch(error) {
        console.log(error);
      }
  }
    console.log(imagesArray);
    console.log("hii", imagePath)

    // const deleteArray = async () => {
    //   await AsyncStorage.removeItem("Feeds")
    //   console.log("delete done");
    // }

  return (
    <View style={styles.container}>
        <Image source={require("../assets/create-icon.png")} style={styles.logo} />
      <View style={styles.card}>
      <TextInput
        placeholder="Title"
        placeholderTextColor={"#fff"}
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        keyboardType="default"
      />

      <TextInput
        placeholder="Description"
        placeholderTextColor={"#fff"}
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        keyboardType="default"
      />
      </View>

    {
      imagePath != "" 
      ? <Image source={{ uri: imagePath }} 
      style={{ height: 100, width: 100, alignSelf: "center" }} /> 
      : null
    }

      <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("GalleryScreen")}>
              <Text style={{ textAlign: "center", fontSize: 18, color: "black" }}>Choose from App</Text>
          </TouchableOpacity>
          {/* <Text style={{ fontSize: 30, color: "#fff", textAlign: "center" }}>OR</Text> */}
          <TouchableOpacity style={styles.button2} onPress={chooseFromPhone}>
              <Text style={{ textAlign: "center", fontSize: 20, color: "#fff" }}>Choose from Phone</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2} onPress={saveImageData}>
              <Text style={{ textAlign: "center", fontSize: 20, color: "#fff" }}>Create Feed</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.button2} onPress={deleteArray}>
              <Text style={{ textAlign: "center", fontSize: 20, color: "#fff" }}>Delete Feeds</Text>
          </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: "center",
      backgroundColor: 'black',
      padding: 4,
    },
    paragraph: {
      margin: 40,
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff',
      backgroundColor: "black",
      borderRadius: 8,
      padding: 5
    },
    card: {
      // padding: 10,
      // backgroundColor: "#f06c5b",
      marginHorizontal: 10,
      // borderRadius: 8
  },
    input: {
      height: 50,
      marginHorizontal: 10,
      marginVertical: 6,
      borderBottomWidth: 2,
      borderBottomColor: "#fff",
      padding: 10,
      // borderRadius: 8,
      // backgroundColor: '#fff',
      fontSize: 20,
      color: "#fff"
    },
    btnContainer: {
      margin: 10,
    },
    button1: {
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 12,
      marginVertical: 15,
      marginBottom: 20,
    },
    bottomText: {
      margin: 6,
      color: 'blue',
      color: '#fff',
      fontSize: 18,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    logo: {
      height: 100,
      width: 100,
      justifyContent: "center",
      alignSelf: "center"
    },
    button2: {
      borderRadius: 15,
      padding: 10,
      marginVertical: 15,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: "#fff",
    }
  });