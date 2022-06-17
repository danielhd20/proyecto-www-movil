import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Inicio from './components/Inicio';

const myStyles = {
  title: "Becas",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#082032",
  }
}

function App() {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} 
        options ={myStyles}/>
      </Stack.Navigator>
  );
}
export default () => {
  return (
      <NavigationContainer>
        <App/>
      </NavigationContainer>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
