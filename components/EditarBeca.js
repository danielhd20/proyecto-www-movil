    import { StyleSheet, Text, View, TextInput, Button, ScrollView, Alert} from 'react-native';
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
//import AwesomeAlert from '../react-native-awesome-alerts';


export default function EditarBeca({route}){
    const item = route.params;
    const navigation = useNavigation();
    const [nombre, setNombre] = useState(item.nombre); 
    const [categoria, setCategoria] = useState(item.categoria);
    const [financiacion, setFinanciacion] = useState(item.financiacion);
    const [universidad, setUniversidad] = useState(item.universidad);
    const [pais, setPais] = useState(item.pais);
    const [requerimientos, setRequerimientos] = useState(item.requerimientos);

    const updateBeca = async function() {
        console.log("Entra")
        var dataToSend = {nombre: nombre,
            categoria: categoria, 
            financiacion: financiacion,
            pais: pais, 
            universidad: universidad, 
            requerimientos: requerimientos}
        fetch("https://backendbecamovil.herokuapp.com/beca/"+item.id+"/",{
        method: "PUT",
        headers: {
        //'Accept': 'application/json',
        'Content-Type': 'application/json',
        //'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify(dataToSend)
        }) // Solicitud de datos a la API
        .then(response => response.json()) // Solicita la información en formato json
        .then((data)=>{
        console.log("Data updated succesfully:",data);
        // Alert.alert(
        //     "Información actualizada exitosamente",
        //     [
        //       { text: "OK", onPress: () => console.log("OK Pressed") }
        //     ]
        //   );
        Alert.alert("Información actualizada exitosamente");
        navigation.navigate('EditarBecas');
          
        }) // Especifica qué se hará con la información traida de la API (data)
        .catch()
    }

    function deleteItem(id) {
        console.log(id);
        fetch(`https://backendbecamovil.herokuapp.com/beca/${id}/`, {
          method:'DELETE',
          headers:{
            'Content-type':'application/json',
            //'X-CSRFToken':csrftoken,
          },
        }).then(() =>{  
            navigation.navigate('EditarBecas');
        })
    }

    return (
        <ScrollView>
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
                    <Button style={styles.btn} title="Actualizar"  onPress={() => updateBeca()} />
                </View>
                <View style={styles.spc}>
                <Button style={styles.btn} color="#F63030" title="Eliminar" onPress={() => deleteItem(item.id)} />
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
      backgroundColor: '#fff',
      //alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        marginHorizontal: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
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
    }
  
  });