import { StyleSheet, Text, View} from 'react-native';

export default function Detalle({route}){
    const item = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.nombre}</Text>

            <Text style={styles.subtitle}>Categoría:</Text>
                <Text style={{fontWeight: 'normal', fontSize: 20}}>{item.categoria}.</Text>
            
            <Text style={styles.subtitle}>¿Qué financia la beca?</Text>
            <Text style={{fontWeight: 'normal', fontSize: 20}}>La beca cuenta con una financiación del {item.financiacion}%.</Text>
            
            <Text style={styles.subtitle}>Universidad:</Text>
            <Text style={{fontWeight: 'normal', fontSize: 20}}>{item.universidad}, en {item.pais}.</Text>

            <Text style={styles.subtitle}>¿Qué se necesita para acceder a la beca?</Text>
            <Text style={{fontWeight: 'normal', fontSize: 20}}>Debe contar con los siguientes requerimientos: {item.requerimientos}.</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      //flex: 1,
      marginTop: 10,
      marginHorizontal: 20,
      //backgroundColor: '#fff',
      //alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',      
    }
  
  });