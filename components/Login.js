import { StyleSheet, Text, View, TextInput, Button, ScrollView, Alert, Image} from 'react-native';
import {useContext, useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import Context from './Context';


export default function Login(){
    const navigation = useNavigation();
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const [users, setUsers] = useState([]); 
    const[mode, setMode] = useState(true);
    const myContext = useContext(Context);

    useEffect(() => {
        loadUsers();
        //console.log(mode);
    }, [mode])

    const loadUsers = async function() {
        fetch("https://danielhd20.pythonanywhere.com/users/",{
            method: "GET"
        })
      .then(response => response.json()) 
      .then((data)=>{
        setUsers(data);
          //console.log("Data loaded succesfully:",data);
      }) 
      .catch(error => console.log(error));
      }

    const checkLogin  = function() {
        const user = users.find(user => user.username == username && user.password == password);
        if(user){
            setUsername("");
            setPassword("");
            myContext.setLogged(true);
            navigation.navigate('Inicio');
        }
        else{
            Alert.alert("Usuario y/o contraseña incorrecta");
        }
    }

    const checkRegister = async function() {    
        if(username != "" && password != ""){
        try {
            const request = await fetch('https://danielhd20.pythonanywhere.com/users/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',           
            }, 
            body:JSON.stringify({username: username, password: password})
            }).then(() => {
                Alert.alert("Usuario registrado exitosamente"); 
                setMode(true);
                setUsername("");
                setPassword("");
            })
        } catch (error) {
            console.log(error);
        }          
    }
    else{
        Alert.alert("Usuario y/o contraseña no valido");
    }

    }
    
    if (mode) {  
        return (
            <ScrollView>
                <View style={{backgroundColor: '#393939'}}>
                <View style={styles.container}>      
                <Image style={styles.img} source={{ uri:  'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55470/graduation-cap-emoji-clipart-md.png'}}/>
                <TextInput style={styles.input} placeholder="Usuario" onChangeText={text => setUsername(text)} value={username}/>
                <TextInput style={styles.input} secureTextEntry={true} placeholder="Contraseña" onChangeText={text => setPassword(text)} value={password}/>
                <View style={styles.btn}>
                    <Button style={{borderRadius: 30}} title="Iniciar sesión" color="#272727" onPress={() => checkLogin()}/>
                </View>

                <Text style={styles.register}>¿No tienes una cuenta?
                    <Text style={styles.innerText} onPress={() => {setMode(false), setUsername(""), setPassword("")}}> Registrate.</Text>
                </Text>              
            </View>
            </View>
            </ScrollView>
        )
    }
    else{
        return (
            <ScrollView>
                <View style={{backgroundColor: '#393939'}}>
                <View style={styles.container}>      
                <Image style={styles.img} source={{ uri:  'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55470/graduation-cap-emoji-clipart-md.png'}}/>
                <TextInput style={styles.input} onChangeText={text => setUsername(text)} placeholder="Usuario"  value={username}/>
                <TextInput style={styles.input} secureTextEntry={true} onChangeText={text => setPassword(text)} placeholder="Contraseña" value={password}/>
                <View style={styles.btn}>
                    <Button style={{borderRadius: 30}} title="Registrarse" color="#272727" onPress={() => checkRegister()}/>
                </View>
                <Text style={styles.register}>¿Ya tienes una cuenta?
                    <Text style={styles.innerText} onPress={() => {setMode(true), setUsername(""), setPassword("")}}> Inicia sesión.</Text>
                </Text>                
            </View>
            </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      //flex: 1,
      marginTop: '40%',
      marginBottom: '50%',
      marginHorizontal: 30,
      backgroundColor: '#C0C0C0',
      alignItems: 'center',
      justifyContent: 'center', 
      borderRadius: 10,
    },

    img: {
        marginTop: 50,
        marginBottom: 20,
        width: 150,
        height: 150,
    },

    register:{
        fontSize: 15,
        marginBottom: 50,
    },

    input:{
        marginTop: 10,
        marginBottom: 10,
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#fff',
    },
    btn: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    innerText: {
        color: '#0017DA'
      }

  
  });