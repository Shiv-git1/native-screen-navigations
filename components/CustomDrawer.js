import { View, Text } from 'react-native';
import React from 'react';
import {
    DrawerItem,
} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function CustomDrawer(props) {
    return (
        <View style={{ flex: 1, backgroundColor: "lightblue", }}>
                <DrawerItem style={{ color: "black"}}
                    icon={() => <FontAwesome5 name={"home"} size={20} color={"black"} />}
                    label="Home"
                    labelStyle={{ color: "black", fontSize: 20 }}
                    onPress={() => {props.navigation.navigate("Home")}}
                />

                <DrawerItem
                    icon={() => <FontAwesome5 name={"shopping-cart"} size={20} color={"black"} />}
                    label="MyCart"
                    labelStyle={{ color: "black", fontSize: 20 }}
                    onPress={() => {props.navigation.navigate("MyCart")}}
                />

                <DrawerItem
                    icon={() => <FontAwesome5 name={"list"} size={20} color={"black"} />}
                    label="MyOrders"
                    labelStyle={{ color: "black", fontSize: 20 }}
                    onPress={() => {props.navigation.navigate("MyOrders")}}
                />

                <DrawerItem
                    icon={() => <FontAwesome5 name={"smile"} size={20} color={"black"} />}
                    label="About"
                    labelStyle={{ color: "black", fontSize: 20 }}
                    onPress={() => {props.navigation.navigate("About")}}
                />

                <DrawerItem
                    icon={() => <FontAwesome5 name={"door-open"} size={20} color={"black"} />}
                    label="Login"
                    labelStyle={{ color: "black", fontSize: 20 }}
                    onPress={() => {props.navigation.navigate("Login")}}
                />

                <DrawerItem
                    icon={() => <FontAwesome5 name={"door-open"} size={20} color={"black"} />}
                    label="Signup"
                    labelStyle={{ color: "black", fontSize: 20 }}
                    onPress={() => {props.navigation.navigate("Signup")}}
                />
        </View>
    );
}
