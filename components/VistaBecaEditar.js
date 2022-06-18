import React, { useState, useEffect } from "react";
import {FlatList, StyleSheet, Text, View } from 'react-native';
import {Card, Button} from 'react-native-paper';
import { FAB } from 'react-native-paper';


export default function VistaBecaEditar({navigation}) {
    const [becas, setBecas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      loadBecas();
  }, [becas]);
  
    const renderbecas = (item) => {
        return (
          <Card style={styles.cardStyle}>
          <Card.Cover source={{ uri: 'https://www.univalle.edu.co/media/k2/items/cache/f5b95525832f3712e665bb57dba370d3_M.jpg' }} />
          <Text style= {{fontSize: 25, color: '#fff', fontFamily: 'sans-serif-condensed',}}>{item.nombre}</Text>
          <Text style= {{fontSize: 15, color: '#fff', fontFamily: 'sans-serif-condensed',}}>Categoría: {item.categoria}</Text>
          <Text style= {{fontSize: 15, color: '#fff', fontFamily: 'sans-serif-condensed',}}>Financiación: {item.financiacion}%</Text>
          <Card.Actions>
          <Button style={styles.ButtonStyle} onPress={() => navigation.navigate('EditarBeca', item)}>
          Editar beca
          </Button>
          </Card.Actions>
          </Card>
        )
    }
    const loadBecas = async function() {
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

    


  return (
        <View style={{marginBottom: 50}}>
            <FlatList 
            data = {becas}
            renderItem = {({item}) => {
                return renderbecas(item);
            }}
            onRefresh = {() => loadBecas()} 
            refreshing = {loading}
            keyExtractor = {item => `${item.id}`} 
            />

            <FAB
                icon="plus"
                style={styles.fab}          
                onPress={() => navigation.navigate('CrearBeca')}
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
    backgroundColor: '#000000',
    color: '#fff',
    fontFamily: 'sans-serif-condensed',
  },
  ButtonStyle: {
    backgroundColor: '#000000',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#909090',
  }
});