/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import * as React from 'react';
 import { Button, View } from 'react-native';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Home from './components/Home';
import MyCart from './components/MyCart';
import MyOrders from './components/MyOrders';
import About from './components/About';
import Logout from './components/Logout';
import CustomDrawer from './components/CustomDrawer';
import TabNav from './components/TabNav';
import Login from './components/Login';
import Signup from './components/Signup';
import GalleryScreen from './screens/GalleryScreen';
import CreateFeedScreen from './screens/CreateFeedScreen';
import FeedScreen from './screens/FeedScreen';
import ProfileScreen from './screens/ProfileScreen';
 
 const Drawer = createDrawerNavigator();
 const Stack = createNativeStackNavigator();
 
 export default function App() {
   return (
     <NavigationContainer>
       <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} /> }
        screenOptions={{
          drawerStyle: {
            width: 220,           
          },
          headerStyle: {
            backgroundColor: "#25a5be"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
       >
         <Drawer.Screen 
          name="Home" component={TabNav} />
         <Drawer.Screen 
          name="MyCart" component={MyCart} />
         <Drawer.Screen 
          name="MyOrders" component={MyOrders} />
         <Drawer.Screen 
          name="About" component={About} />
         <Drawer.Screen 
          name="Login" component={Login} />
          <Drawer.Screen 
          name="Signup" component={Signup} />
          <Drawer.Screen 
          name="GalleryScreen" component={GalleryScreen} />
          <Drawer.Screen 
          name="CreateFeedScreen" component={CreateFeedScreen} />
          <Drawer.Screen 
          name="FeedScreen" component={FeedScreen} />
          <Drawer.Screen 
          name="ProfileScreen" component={ProfileScreen} />
       </Drawer.Navigator>

       {/* <TabNav /> */}
     </NavigationContainer>
   );
 }