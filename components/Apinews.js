import React, { useEffect, useState } from 'react';
import {FlatList, StyleSheet, Text, View } from 'react-native';
import {Card} from 'react-native-paper';

export default function Api(props){

const [noticias,setNoticias] = useState([]);
const [loading, setLoading] = useState(true);

const rendernews = (item) => {
    return (
        <Card style={styles.cardStyle}>
        <Card.Cover source={{ uri: item.multimedia[0].url}} />
      <Text style= {{fontSize: 25, color: '#fff', fontFamily: 'sans-serif-condensed',}}>{item.title}</Text>
      <Text style= {{fontSize: 15, color: '#fff', fontFamily: 'sans-serif-condensed',}}>{item.abstract}</Text>
    </Card>
    )
}

const loadData = () =>{
fetch("http://api.nytimes.com/svc/topstories/v2/world.json?api-key=MFf8jPFwlAUieJ11eom6mLDIDn1n83JK") 
.then(response => response.json()) 
.then((data)=>{
    let data_results = data.results;
    setNoticias(data_results);
    setLoading(false)
})
.catch(error => console.log(error))
}

useEffect(() => {
    loadData();
}, []);


    return(
        <View style={{marginBottom: 50}}>
        <FlatList 
        data = {noticias}
        renderItem = {({item}) => {
            return rendernews(item);
        }}
        onRefresh = {() => loadData()} 
        refreshing = {loading}
        keyExtractor = {item => `${item.uri}`} 
        />
    </View>
    );
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
    }
  });
