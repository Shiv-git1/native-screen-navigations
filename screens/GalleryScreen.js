import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Button, AsyncStorage } from 'react-native';
import React, { useEffect, useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';

export default function GalleryScreen({ navigation }) {
    const [imagesArray, setImagesArray] = useState([]);
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        getGalleryArray();
    }, [])

    // const chooseFromPhone = () => {
    //     ImagePicker.openPicker({
    //         width: 300,
    //         height: 400,
    //         cropping: false
    //       }).then(image => {
    //         console.log(image);
    //         imagesArray.push({
    //             id: image.modificationDate,
    //             imagePath: image.path,
    //           });
    //         AsyncStorage.setItem("galleryArray", JSON.stringify(imagesArray));
    //         setImagesArray(imagesArray)
    //       });
    // }
    // console.log("outside", imagesArray);

    const getGalleryArray = () => {
        try {
        AsyncStorage.getItem("galleryArray")
          .then(value => {
            if (value != null) {
               let image = JSON.parse(value);
               console.log("image", image);
                setImagesArray(image)
              console.log("images async length", imagesArray.length)
              console.log("Async images", imagesArray);
            }
          })
      } catch (error) {
        console.log(error);
      }
    }

    const chooseFromGallery = (path) => {
        console.log(path)
    ImagePicker.openCropper({
        path: path,
        width: 300,
        height: 400
      }).then(image => {
        console.log(image);
        AsyncStorage.setItem("fromGallery", JSON.stringify(image))
        navigation.navigate("CreateFeedScreen")
      });
    }

    const deleteBtn = (id) => {
      console.log("hi")
      // imagesArray.forEach(elem => {
      //   console.log(elem.id)
      //   console.log("id", id)
      //   if(elem.id == id) {
      //     setShowBtn(true)
      //   } else {
      //     setShowBtn(false)
      //   }
      // })
      setShowBtn(!showBtn)
      // if(!imagesArray.includes(index))
      // setShowBtn(!showBtn)
    }

    const Item = ({ path, id }) => (
        // <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => chooseFromGallery(path)}
        onLongPress={() => deleteBtn(id)}
      delayLongPress={1000}
        >
          <Image 
            style={styles.images}
            source={{ uri: path }}  
        />
        
        {
         showBtn ? <TouchableOpacity style={styles.deleteBtn}>
          <Text style={{ fontSize: 18, color: "#fff" }}>Delete</Text>
        </TouchableOpacity> : null
        }

        </TouchableOpacity>
        //  </View>
      );

    const renderItem = ({ item, id }) => (
        <Item path={item.imagePath} id={item.id} />
      );

    return (
        <>
        <FlatList
        key={item => item.id}
        data={imagesArray}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      {/* <Button title='submit' onPress={chooseFromPhone} /> */}
      </>
    );
}

const styles = StyleSheet.create({
    images: {
        height: 180,
        width: 180,
        marginHorizontal: 7,
        marginVertical: 5,
        position: "relative"
    },
    deleteBtn: {
      position: "absolute",
      alignSelf: "center",
      top: 50,
      borderWidth: 2,
      padding: 5,
      borderRadius: 4,
      backgroundColor: "red"
    }
})