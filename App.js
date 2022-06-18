import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Inicio from './components/Inicio';
import Api from './components/Apinews';
import Navbar from './components/Navbar';
import Detalle from './components/Detalle';
import VistaBecaEditar from './components/VistaBecaEditar';
import EditarBeca from './components/EditarBeca';
import CrearBeca from './components/CrearBeca';

const myStyles = {
  inicio: {
    title: "Becas Ingenieria de Sistemas",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "black",
    }
  },
  noticias: {
    title: "Noticias",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "black",
    }
  },
  detalle: {
    title: "Detalle de la beca",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "black",
    }
  },
  VistaBecaEditar: {
    title: "Gestión de becas",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "black",
    }
  },
  editarBeca: {
    title: "Editar beca",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "black",
    }
  },
  crearBeca: {
    title: "Crear beca",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "black",
    }
  }
}

function App() {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} 
        options ={myStyles.inicio}/>

        <Stack.Screen name="Noticias" component={Api} 
        options ={myStyles.noticias}/>

        <Stack.Screen name="Detalles de la beca" component={Detalle}
        options ={myStyles.detalle}/>

        <Stack.Screen name="EditarBecas" component={VistaBecaEditar}
        options ={myStyles.VistaBecaEditar}/>

        <Stack.Screen name="EditarBeca" component={EditarBeca}
        options ={myStyles.editarBeca}/>

        <Stack.Screen name="CrearBeca" component={CrearBeca}
        options ={myStyles.crearBeca}/>
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
