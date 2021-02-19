import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Search from './components/Search';
import List_genre from './components/List_genre';
import List_boardgame from './components/List_boardgame';
import Likes from './components/Likes';
import Details from './components/Details';

// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './redux/reducers';

const store = createStore(rootReducer);

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const SearchStack = createStackNavigator();
const LikesStack = createStackNavigator();



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
        name="Home" 
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

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Search" component={SearchStackScreen}/>
            <Tab.Screen name="List" component={ListStackScreen}/>
            <Tab.Screen name="Likes" component={LikesStackScreen}/>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

