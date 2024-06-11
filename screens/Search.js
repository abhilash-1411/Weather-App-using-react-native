import React ,{useState} from 'react';
import {TextInput,Button,Card} from 'react-native-paper';
import {View,Text,FlatList} from 'react-native';
import Header from './Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const [city,setCity]=useState('');
  const [cities,setCities]=useState([]);
  const navigation = useNavigation();

  const fetchCities = (text) =>{
   setCity(text);
   fetch("https://autocomplete.wunderground.com/aq?query="+text)
   .then(item=>item.json())
   .then(cityData=>{
       setCities(cityData.RESULTS.slice(0,9))
   })
  }
  const btnClick = async ()=>{
    await AsyncStorage.setItem("newcity",city)
    navigation.navigate("home",{city:city})
}
const listClick = async (cityname)=>{
    setCity(cityname)
    await AsyncStorage.setItem("newcity",cityname)
    navigation.navigate("home",{city:cityname})
}
  return (
   <View style={{flex:1}}>
        <Header name="Weather App"/>
        <TextInput
        label="City name"
        theme={{colors:{primary:'#00aaff'}}}
        value={city}
        onChangeText={(text) =>fetchCities(text)}
        />
        <Button icon="content-save" 
        mode="contained"
        style={{margin:20}} 
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>
      <FlatList
        data={cities}
        renderItem={({item})=>{
            return(
                <Card 
                 style={{margin:2,padding:12}}
                 onPress={()=>listClick(item.name)}
                >
                    <Text>{item.name}</Text>
                </Card>
            )
        }}
        keyExtractor={item=>item.name}
        />
       
    </View>
   
  );
};

export default Search;