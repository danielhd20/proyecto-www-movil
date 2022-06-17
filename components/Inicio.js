import React, { useState, useEffect } from "react";
import {FlatList, StyleSheet, Text, View } from 'react-native';
import {Card} from 'react-native-paper';

function Inicio() {
    const [becas, setBecas] = useState([]);
    const [loading, setLoading] = useState(true);


    const renderbecas = (item) => {
        return (
            <Card style={styles.cardStyle}>
          <Text style= {{fontSize: 25, color: '#fff', fontFamily: 'sans-serif-condensed',}}>{item.nombre}</Text>
          <Text style= {{fontSize: 15, color: '#fff', fontFamily: 'sans-serif-condensed',}}>Categoría: {item.categoria}</Text>
          <Text style= {{fontSize: 15, color: '#fff', fontFamily: 'sans-serif-condensed',}}>financiacion: {item.financiacion}%</Text>
        </Card>
        )
    }
    const loadBecas = () => {
        fetch("https://backendbeca.herokuapp.com/beca/",{
            method: "GET"
        })
    .then(response => response.json()) 
    .then((data)=>{
        const ordenadas = data.sort((a,b) => b.financiacion.localeCompare(a.financiacion))
        setBecas(ordenadas);
        //console.log(ordenadas);
        setLoading(false);
    }) 
    .catch(error => console.log(error));
    }

    useEffect(() => {
        loadBecas();
    }, []);


  return (
        <View>
            <FlatList 
            data = {becas}
            renderItem = {({item}) => {
                return renderbecas(item);
            }}
            onRefresh = {() => loadBecas()} 
            refreshing = {loading}
            keyExtractor = {item => `${item.id}`} 
            />
        </View>
  )
}
const styles = StyleSheet.create({
  cardStyle: {
    padding: 10,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FFA500',
    color: '#fff',
    fontFamily: 'sans-serif-condensed',
  }
});
export default Inicio;
