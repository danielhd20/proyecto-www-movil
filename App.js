import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Inicio from './components/Inicio';
import Api from './components/Apinews';
import Navbar from './components/Navbar';
const myStyles = {
  title: "Becas Ingenieria de Sistemas",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "black",
  }
}

function App() {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} 
        options ={myStyles}/>

        <Stack.Screen name="Noticias" component={Api} 
        options ={myStyles}/>
      </Stack.Navigator>
  );
}
export default () => {
  return (
      <NavigationContainer>
        <App/>
        <Navbar/>
      </NavigationContainer>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
