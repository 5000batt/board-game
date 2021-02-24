import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './Home'; 
import Search from './Search';
import List_genre from './List_genreContainer';
import List_boardgame from './List_boardgameContainer';
import Likes from './Likes';
import Details from './Details';

// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ListStack = createStackNavigator();
const SearchStack = createStackNavigator();
const LikesStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={Home} 
        options={{title:"Home", headerTitleAlign:"center"}}
      />
    </HomeStack.Navigator>
  )
}
const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen 
        name="List_genre" 
        component={List_genre} 
        options={{title:"장르", headerTitleAlign:"center"}} 
      />
      <ListStack.Screen 
        name="List_boardgame" 
        component={List_boardgame} 
        options={({ route }) => ({ title: route.params.title, headerTitleAlign:"center" })}
      />
      <ListStack.Screen 
        name="Details" 
        component={Details} 
        options={({ route }) => ({ title: route.params.title, headerTitleAlign:"center" })}  
      />
    </ListStack.Navigator>
  )
}

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen 
        name="Sea" 
        component={Search} 
        options={{title:"검색", headerTitleAlign:"center"}} 
      />
      <SearchStack.Screen 
        name="Details" 
        component={Details} 
        options={({ route }) => ({ title: route.params.title, headerTitleAlign:"center" })}  
      />
    </SearchStack.Navigator>
  )
}

const LikesStackScreen = () => {
  return (
    <LikesStack.Navigator>
      <LikesStack.Screen 
        name="Likes" 
        component={Likes} 
        options={{title:"구독", headerTitleAlign:"center"}} 
      />
      <LikesStack.Screen 
        name="Details" 
        component={Details} 
        options={({ route }) => ({ title: route.params.title, headerTitleAlign:"center" })} 
      />
    </LikesStack.Navigator>
  )
}

const tabBarOptions = {
  activeTintColor: '#CCCCFF',
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
      case 'Search':
        iconName = focused
          ? 'search'
          : 'search-outline';
        break;
      case 'List':
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

export default function Main() {

  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("--main is mounted--")
    dispatch({type:"FETCH_LIKES"})
  })

  const alert = useSelector(state => state.alert)
  console.log("--alert")
  console.log(alert)

  if(alert.isShow) {
    Alert.alert(
      "Errors",
      alert.msg,
      [
        { text: "OK", onPress: () => dispatch({type:"CLOSE_ALERT"}) }
      ],
      { cancelable: false }
    );
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
          <Tab.Screen name="Home" component={HomeStackScreen}/>
          <Tab.Screen name="List" component={ListStackScreen}/>
          <Tab.Screen name="Search" component={SearchStackScreen}/>
          <Tab.Screen name="Likes" component={LikesStackScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

