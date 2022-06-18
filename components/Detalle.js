import { StyleSheet, Text, View,} from 'react-native';
import {Card} from 'react-native-paper';

export default function Detalle({route}){
    const item = route.params;

    return (
        <View style={styles.root}>
        <Card style={styles.cardStyle}>
            <Text style= {{fontSize: 25, color: '#fff', fontFamily: 'sans-serif-condensed', fontStyle: 'italic'}}>{item.nombre} {"\n"}</Text>
            <Text style= {{fontSize: 20, color: '#fff', fontFamily: 'sans-serif-condensed',}}>Categoría:</Text>
            <Text style= {{fontSize: 15, color: '#fff', fontFamily: 'sans-serif-condensed',}}>{item.categoria}.{"\n"}</Text>
            
            <Text style= {{fontSize: 20, color: '#fff', fontFamily: 'sans-serif-condensed',}}>¿Qué financia la beca?</Text>
            <Text style= {{fontSize: 15, color: '#fff', fontFamily: 'sans-serif-condensed',}}>La beca cuenta con una financiación del {item.financiacion}%. {"\n"}</Text>
            
            <Text style= {{fontSize: 20, color: '#fff', fontFamily: 'sans-serif-condensed',}}>Universidad:</Text>
            <Text style= {{fontSize: 15, color: '#fff', fontFamily: 'sans-serif-condensed',}}>{item.universidad}, en {item.pais}. {"\n"}</Text>

            <Text style= {{fontSize: 20, color: '#fff', fontFamily: 'sans-serif-condensed',}}>¿Qué se necesita para acceder a la beca?</Text>
            <Text style= {{fontSize: 15, color: '#fff', fontFamily: 'sans-serif-condensed',}}>Debe contar con los siguientes requerimientos: {item.requerimientos}. {"\n"}</Text>
            <Card.Cover source={{ uri: 'https://www.univalle.edu.co/media/k2/items/cache/f5b95525832f3712e665bb57dba370d3_M.jpg' }} />
        </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    cardStyle: {
        padding: 15,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 180,
        backgroundColor: '#000000',
        color: '#fff',
        fontFamily: 'sans-serif-condensed',
      },
      root: {
        backgroundColor: '#505050',
      }
  });