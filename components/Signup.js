import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, 
  Alert, ActivityIndicator, ImageBackground, TouchableOpacity, 
  AsyncStorage
} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signup({ navigation }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [loading, setLoading] = React.useState(false);

  // const submitHandler = () => {
  //   // Alert.alert("form submitted");
  //   setLoading(!loading);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }
  let firstNameRegex = /^([a-zA-Z ]){2,30}$/
  let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/

//   const saveInputs = async () => {
//     if(!firstNameRegex.test(firstName) ||
//         !emailRegex.test(email) ||
//         !passwordRegex.test(password)) {
//       Alert.alert("Min 6 letter password, a symbol, a upper, a lower case letter, a number");
//     } else {
//       try {
//         let user = {
//           _id: email,
//           Firstname: firstName,
//           Email: email,
//           Password: password
//         }
//         await AsyncStorage.setItem("UserData", JSON.stringify(user));
//         navigation.navigate("FeedScreen");
//         // Alert.alert("Saving successfull !!!!");
//       } catch(error) {
//         console.log(error);
//       }
//     }
//   }

  return (
    <View style={styles.container}>
    <ImageBackground source={require("../assets/signup-image.jpg")} resizeMode="cover" style={styles.image}>
      <Text style={styles.paragraph}>
        SignUp Here!
      </Text>
      <View style={styles.card}>
        <TextInput
        placeholder="First Name"
        placeholderTextColor={"grey"}
        style={styles.input}
        onChangeText={setFirstName}
        value={firstName}
        keyboardType="default"
      />

      <TextInput
        placeholder="Last Name (optional)"
        placeholderTextColor={"grey"}
        style={styles.input}
        onChangeText={setLastName}
        value={lastName}
        keyboardType="default"
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor={"grey"}
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="default"
      />

      <TextInput
        placeholder="Phone Number (optional)"
        placeholderTextColor={"grey"}
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor={"grey"}
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        keyboardType="default"
        secureTextEntry={true}
      />
      </View>

      <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button1}>
              <Text style={{ textAlign: "center", fontSize: 18, color: "#fff" }}>Sign Up</Text>
          </TouchableOpacity>
      </View>

      {/* <View>
       { loading ? <ActivityIndicator size="large" /> : null }
      </View> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: "center",
    // backgroundColor: 'yellow',
    // padding: 4,
  },
  paragraph: {
    margin: 20,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  card: {
      padding: 10,
      backgroundColor: "lightgreen",
      marginHorizontal: 10,
      borderRadius: 8
  },
  input: {
    height: 50,
    marginHorizontal: 10,
    marginVertical: 6,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    fontSize: 20,
    color: "black"
  },
  btnContainer: {
    margin: 10,
  },
  button1: {
    backgroundColor: 'black',
    borderRadius: 15,
    padding: 10,
    marginVertical: 15,
  },
  image: {
    flex: 1,
  }
});