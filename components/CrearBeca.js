import { StyleSheet, Text, View, TextInput, Button, ScrollView, Alert} from 'react-native';
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
//import AwesomeAlert from '../react-native-awesome-alerts';


export default function EditarBeca({route}){
    const item = route.params;
    const navigation = useNavigation();
    const [nombre, setNombre] = useState(); 
    const [categoria, setCategoria] = useState();
    const [financiacion, setFinanciacion] = useState();
    const [universidad, setUniversidad] = useState();
    const [pais, setPais] = useState();
    const [requerimientos, setRequerimientos] = useState();

    const crearBeca = async function() {
        var dataToSend = {nombre: nombre,
            categoria: categoria, 
            financiacion: financiacion,
            pais: pais, 
            universidad: universidad, 
            requerimientos: requerimientos}

        fetch("https://danielhd20.pythonanywhere.com/beca/",{
        method  : "POST",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',                 
        //'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify(dataToSend)
        }) // Solicitud de datos a la API
        .then(response => response.json()) // Solicita la información en formato json
        .then((data)=>{
        console.log("Data updated succesfully:",data);
        Alert.alert("Beca registrada exitosamente");
        navigation.navigate('EditarBecas');
        //this.props.history.push('/');           
        }) // Especifica qué se hará con la información traida de la API (data)
        .catch(console.log)
    }

    return (
        <ScrollView style={styles.fondo}>
            <View style={styles.container}>
            <Text style={styles.title}>Nombre</Text>
            <TextInput
            style={styles.input}
            onChangeText={text => setNombre(text)}
            value={nombre}
            />

            <Text style={styles.title}>Categoría</Text>
            <TextInput
            style={styles.input}
            onChangeText={text => setCategoria(text)}
            value={categoria}
            />

            <Text style={styles.title}>Financiación</Text>
            <TextInput 
            style={styles.input}
            onChangeText={text => setFinanciacion(text)}
            value={financiacion}
            />

            <Text style={styles.title}>Universidad</Text>
            <TextInput
            style={styles.input}
            onChangeText={text => setUniversidad(text)}
            value={universidad}
            />

            <Text style={styles.title}>Pais</Text>
            <TextInput
            style={styles.input}
            onChangeText={text => setPais(text)}
            value={pais}
            />

            <Text style={styles.title}>Requerimientos</Text>
            <TextInput
            style={styles.input}
            onChangeText={text => setRequerimientos(text)}
            value={requerimientos} 
            />
            <View style={styles.btn}>
                <View style={styles.spc}>
                    <Button style={styles.btn} title="Crear" onPress={() => crearBeca()} />
                </View>
                <View style={styles.spc}>
                <Button style={styles.btn} color="#F63030" title="Cancelar" onPress={() => navigation.navigate('EditarBecas')} />
                </View>
            </View>     
                
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
      //flex: 1,
      marginTop: 10,
      marginHorizontal: 10,
      backgroundColor: '#a51b0b',
      //alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20
    },
    title: {
        marginHorizontal: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "white"
    },
    subtitle: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',      
    },
    input: {
        marginHorizontal: 10,
        fontSize: 20,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white"
    },
    btn: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        //display: 'block',
    },
    spc: {
        marginHorizontal: 5,
    },
    fondo: {
        backgroundColor: "#505050"
    }
  
  });