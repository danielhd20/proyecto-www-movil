import * as React from 'react';
import { Appbar, DarkTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Context from './Context';

export default function Navbar () {
  const navigation = useNavigation();
  const myContext = React.useContext(Context);

  const logOut = function() {
    myContext.setLogged(false);
    navigation.navigate('Login')
  }
  
  return(
    <Appbar style={styles.bottom}>
   <Appbar.Action icon="home" onPress={() => navigation.navigate('Inicio')}/>
    <Appbar.Action icon="newspaper" onPress={() => navigation.navigate('Noticias')} />
    <Appbar.Action icon="view-list" onPress={() => navigation.navigate('EditarBecas')} />
    <Appbar.Action icon="logout" onPress={() => logOut()} />
  </Appbar>
);

}


const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: 50,
    backgroundColor: '#a51b0b',
    justifyContent: 'space-between',
  },
});