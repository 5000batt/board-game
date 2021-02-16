import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './components/Home';
import List_genre from './components/List_genre';
import List_boardgame from './components/List_boardgame';
import Likes from './components/Likes';
import Details from './components/Details';

// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const HomeStack = createStackNavigator();

const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="List_genre" component={List_genre} options={{title:"List_genre", headerTitleAlign:"center"}} />
      <ListStack.Screen name="List_boardgame" component={List_boardgame} options={{title:"List_boardgame", headerTitleAlign:"center"}} />
    </ListStack.Navigator>
  )
}

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{title:"Home", headerTitleAlign:"center"}} />
      <HomeStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}}  />
    </HomeStack.Navigator>
  )
}

const tabBarOptions = {
  activeTintColor: 'green',
  inactiveTintColor: 'gray',
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch(route.name){
      case 'Home':
        iconName = focused
          ? 'home'
          : 'home-outline';
        break;
      case 'List_genre':
        iconName = focused
          ? 'list'
          : 'list-outline'; 
        break;
      case 'Likes':
        iconName = focused
          ? 'thumbs-up'
          : 'thumbs-up-outline'; 
        break;
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
          <Tab.Screen name="Home" component={HomeStackScreen}/>
          <Tab.Screen name="List_genre" component={ListStackScreen}/>
          <Tab.Screen name="Likes" component={Likes}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

