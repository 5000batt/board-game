import React, {useState, useCallback } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { SearchBar } from 'react-native-elements';
import SearchList from './SearchList';

const Search = ({ navigation }) => {

  const [keyword, setKeyword] = useState("");

  const handleSearch = useCallback((search)=>{
    console.log(search);
    setKeyword(search);
  }, []);
  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        
        <SearchBar 
          platform={"android"} 
          containerStyle={{width:'80%'}}
          placeholder="Type Here..."
          onChangeText={handleSearch}
          value={keyword}
        />
        
        <SearchList navigation={navigation} keyword={keyword}></SearchList>
        
      </View>
    </ScrollView>
  )
}
export default Search;