import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Navbar () {
  const navigation = useNavigation();
  return(
 <Appbar style={styles.bottom}>
   <Appbar.Action icon="home" onPress={() => navigation.navigate('Inicio')}/>
    <Appbar.Action icon="newspaper" onPress={() => navigation.navigate('Noticias')} />
    <Appbar.Action icon="view-list" onPress={() => console.log('Pressed label')} />
    <Appbar.Action icon="logout" onPress={() => console.log('Pressed label')} />
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
    backgroundColor: 'black',
    justifyContent: 'center',
  },
});