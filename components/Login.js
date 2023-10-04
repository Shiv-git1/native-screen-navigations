import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, 
  Alert, ActivityIndicator, ImageBackground, 
  TouchableOpacity, AsyncStorage, TouchableWithoutFeedback, Image
} from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [loading, setLoading] = React.useState(false);

  // const submitHandler = () => {
  //   // Alert.alert("form submitted");
  //   setLoading(!loading);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }
//   React.useEffect(() => {
//     createChannels();
//   }, []);

//   const createChannels = () => {
//     PushNotification.createChannel({
//       channelId: "login-channel",
//       channelName: "Login Channel"
//     })
//   }


// const getData = () => {
//     try {
//         AsyncStorage.getItem("UserData")
//         .then(value => {
//             if(value != null) {
//                 let user = JSON.parse(value);
//                 if((email == user.Email) && password == user.Password ) {
//                   navigation.navigate("FeedScreen");
//                   // PushNotification.localNotification({
//                   //   channelId: "login-channel",
//                   //   title: "Logged in successfully",
//                   //   message: "good evening"
//                   // });
//                 } else {
//                   Alert.alert("Credentials does not match");
//                 }
//             }
//         })
//     } catch(error) {
//         console.log(error);
//     }
// }

// const handleNotification = () => {
//   PushNotification.localNotification({
//     channelId: "login-channel",
//     title: "Logged in successfully",
//     message: "good evening"
//   });
// }

  return (
    <ImageBackground source={require("../assets/login-image.jpg")} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <View style={styles.card}>
      <TextInput
        placeholder="Email"
        placeholderTextColor={"#fff"}
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="default"
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor={"#fff"}
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        keyboardType="default"
        secureTextEntry={true}
      />
      </View>

      <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("Home")}>
              <Text style={{ textAlign: "center", fontSize: 18, color: "black" }}>Login</Text>
          </TouchableOpacity>
          {/* <Text style={{ fontSize: 30, color: "#fff", textAlign: "center" }}>OR</Text> */}
          <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("Signup")}>
              <Text style={{ textAlign: "center", fontSize: 20, color: "black" }}>SignUp</Text>
          </TouchableOpacity>
      </View>

      {/* <View>
       { loading ? <ActivityIndicator size="large" /> : null }
      </View> */}
    </View>
       </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: "center",
    // backgroundColor: 'yellow',
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
    color: "black"
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
    borderColor: "#fff"
  }
});