import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Box, Button, Container} from 'native-base';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';


export default function NuevaOrden() {

  const navigation = useNavigation()


  return (
    <Container style={globalStyles.container}>
      <Box
      w="100%"
      marginX={'10'}
      style={[globalStyles.contenido, styles.contenido]}>
        <Button 
        style={[globalStyles.button, styles.button]}
        onPress={() => navigation.navigate('Menu')}
        >
          <Text style={globalStyles.buttonText}>Nueva Orden</Text>
        </Button>
      </Box
      
      >
    </Container>
  );
}

const styles = StyleSheet.create({
 contenido: {
  flexDirection:'column',
  justifyContent:'center',
  
 },
 button:{
  margin:'auto',
  backgroundColor: "#facc15",
      borderColor: "#CA8A04",
      borderWidth: 1,
      borderRadius: 4
 }
})
