import * as React from 'react';
import { Appbar ,Title} from 'react-native-paper';
import {View,Text} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Header = (props) => {
  return (
     <Appbar.Header
    theme={{
        colors: {
            primary:'#00aaff'
        }     
    }}
    style={{flexDirection:'row' ,justifyContent:'center'}}
    >
     <Title style={{color:'red'}}>{props.name} </Title>
    </Appbar.Header>

  );
};

export default Header;