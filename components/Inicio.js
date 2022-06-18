import React, { useState, useEffect } from "react";
import {FlatList, StyleSheet, Text, View } from 'react-native';
import {Card, Button} from 'react-native-paper';


export default function Inicio() {
    const [becas, setBecas] = useState([]);
    const [loading, setLoading] = useState(true);


    const renderbecas = (item) => {
        return (
          <Card style={styles.cardStyle}>
          <Card.Cover source={{ uri: 'https://www.univalle.edu.co/media/k2/items/cache/f5b95525832f3712e665bb57dba370d3_M.jpg' }} />
          <Text style= {{fontSize: 25, color: '#fff', fontFamily: 'sans-serif-condensed',}}>{item.nombre}</Text>
          <Text style= {{fontSize: 15, color: '#fff', fontFamily: 'sans-serif-condensed',}}>Categoría: {item.categoria}</Text>
          <Text style= {{fontSize: 15, color: '#fff', fontFamily: 'sans-serif-condensed',}}>financiacion: {item.financiacion}%</Text>
          <Card.Actions>
          <Button style={styles.ButtonStyle}>Ver detalles</Button>
          </Card.Actions>
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
    backgroundColor: '#000000',
    color: '#fff',
    fontFamily: 'sans-serif-condensed',
  },
  ButtonStyle: {
    backgroundColor: '#000000',
  }
});

