import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from './Home';
import About from './About';
import MyCart from './MyCart';
import MyOrders from './MyOrders';
import Logout from './Logout';
import Names from './Names';
import Like from './Like';
import Notifications from './Notifications';
import Profile from './Profile';
import Feed from './Feed';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
            position: "absolute",
            bottom: 15,
            margin: 5,
            backgroundColor: "#fff",
            borderRadius: 15,
            height: 90,
        },
        headerShown: false
        
    }}>
        <Tab.Screen name='Feed' component={Feed} 
            options={{
            tabBarIcon: ({ focused }) => (
                <FontAwesome5 name={"home"} size={20} color={"black"} 
                    style={{ color: focused ? "blue" : "black", 
                        backgroundColor: focused ? "skyblue" : "#fff",
                        padding: 10,
                        borderRadius: 8 }}
                />
            )
        }} />
        <Tab.Screen name='Names' component={Names} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <FontAwesome5 name={"search"} size={20} color={"black"} 
                    style={{ color: focused ? "blue" : "black", 
                        backgroundColor: focused ? "skyblue" : "#fff",
                        padding: 10,
                        borderRadius: 8 }}/>
                )
            }}
        />
        <Tab.Screen name='Like' component={Like} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <FontAwesome5 name={"heart"} size={20} color={"black"} 
                    style={{ color: focused ? "blue" : "black", 
                        backgroundColor: focused ? "skyblue" : "#fff",
                        padding: 10,
                        borderRadius: 8 }}/>
                )
            }}
        />
        <Tab.Screen name='Notifications' component={Notifications} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <FontAwesome5 name={"bell"} size={20} color={"black"} 
                    style={{ color: focused ? "blue" : "black", 
                        backgroundColor: focused ? "skyblue" : "#fff",
                        padding: 10,
                        borderRadius: 8 }}/>
                )
            }}
        />
        <Tab.Screen name='Profile' component={Profile} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <FontAwesome5 name={"user"} size={20} color={"black"} 
                    style={{ color: focused ? "blue" : "black", 
                        backgroundColor: focused ? "skyblue" : "#fff",
                        padding: 10,
                        borderRadius: 8 }}/>
                )
            }}
        />
    </Tab.Navigator>
  );
}
