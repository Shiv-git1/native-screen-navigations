import { View, Text, FlatList,StyleSheet,TouchableOpacity, TextInput,Animated } from 'react-native';
import React,{useState} from 'react';

export default function Names() {
    const Seperator=()=>{
        return(
            <View style={styles.seperator}></View>
        )
    }
    const Cards=(props)=>{
        return(
            <View style={styles.card}>
                <Text style={styles.name}>{props.name}</Text>
                <Seperator/>
            </View>
        )
    }

    const datas=["Aman","Shaik Khaji Sohail Basha","Shiv Shakti Bharti","Sanjukta Sahoo","Jhansi Midde","Rooma Khan","Pushpak Borse","Shubham Sharma","RamKumar Mahto","Satyanarayana Badireddy","Rohini Sudha Melpakam","Girish Kumar","Satyasuman Sahoo","Tohit Khan","Anirudh Panda","Shanmukh","Anupama","Ram Yadav","Yusuf","Geeta"]
    const[data,setData]=useState(datas)

    const search=(input)=>{
 let searchedData=datas.filter((item)=>item.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
 setData(searchedData)
    }


    const scrollY=new Animated.Value(0)
    const diffclamp=Animated.diffClamp(scrollY,0,65)
    const translatedY=   diffclamp.interpolate({
        inputRange:[0,65],
        outputRange:[0,-65]
    })
  
  return (
    <View style={styles.container} >
        <Animated.View style={{transform:[{translateY:translatedY}],elevation:2,zIndex:10 }}>
        <View style={styles.inputView}>
        <TextInput
        style={styles.input}
        placeholder='Search for a name'
        onChangeText={(input)=>search(input)}
        />
        </View>
        </Animated.View>
     <FlatList 
     data={data}
     keyExtractor={(item,index)=>index}
     renderItem={data=><Cards name={data.item}/>}
     onScroll={(e)=>{
         scrollY.setValue(e.nativeEvent.contentOffset.y)
        }}
     />

    </View>
  );
}
const styles=StyleSheet.create({
    container:{
        padding:20,
        paddingBottom:40
    },
    name:{
        color:'#000',
        fontSize:30,
    },
    input:{
        fontSize:24,
    },
    inputView:{
    //     position:'absolute',
    //   left:0,
    //   top:0,
    //   right:0,
      height:45,
    },
   
    seperator:{
        height:1,
        marginVertical:10,
        alignSelf:'center',
        width:"100%",
        backgroundColor:'red'
    }
})
