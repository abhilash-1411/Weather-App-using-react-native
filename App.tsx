
import React from 'react';
import {StatusBar, Text, View,SafeAreaView} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Search from './screens/Search';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
  
const App=()=> {

const Tab = createBottomTabNavigator()
  return (
  <SafeAreaProvider>
  <View style={{flex:1}}>
  <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
  <NavigationContainer>
        <Tab.Navigator
         screenOptions={({route})=>({
           tabBarIcon:({color})=>{
             let iconName;
             if(route.name==="home"){
               iconName = 'home-city-outline'
             }else if(route.name==="search"){
               iconName = "city"
             }
             return <MaterialCommunityIcons name={iconName} size={25} color={color} />
           }
         })}
         tabBarOptions={{
           activeTintColor:"white",
           inactiveTintColor:"gray",
           activeBackgroundColor:"#00aaff",
           inactiveBackgroundColor:"#00aaff"
         }}


        >
          <Tab.Screen name="home" component={Home} 
           initialParams={{city:"london"}}
          />
          <Tab.Screen name="search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
  </View>
  </SafeAreaProvider>
  
     
 );
}
export default App;
