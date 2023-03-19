import React, {useContext, useEffect} from 'react';
import {
  HStack,
  Box,
  Button,
  Text,
  VStack,
  Image,
  ArrowBackIcon,
  CloseIcon
  } from 'native-base';
import globalStyles from '../styles/global';
import PedidoContext from '../context/pedidos/pedidosContext';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from '../firebase';

export default function ResumenPedido() {

  const {pedido,id, total, totalAPagar, eliminarProducto, pedidoRealizado} = useContext(PedidoContext);
  //console.log(pedido);
  const navigation = useNavigation()

  useEffect(()=>{
    calcularPedido()
  },[pedido])

  const calcularPedido = ()=>{
    let totalAcumulado=0
    totalAcumulado =  pedido.reduce((totalAcumulado,articulo)=>articulo.total+totalAcumulado,0)
    //console.log(totalAcumulado)
    totalAPagar(totalAcumulado)
  }

const progresoPedido = ()=>{
  let saltar=false
  Alert.alert('¿Desea confirmar pedido?', 'Se solicitará su pedido', [
    {
      text: 'confirmar',
      onPress: async () => {
        const pedidoObj ={
          tiempoDeEntrega:0,
          completado:false,
          totalAPagar:Number(total),
          orden:pedido,
          creado:Date.now(),        
        }        
        try {
            const pedido = await firebase.db.collection('ordenes').add(pedidoObj)
             pedidoRealizado(pedido.id)
             saltar=true
             navigation.navigate('Progreso')
            } catch (error) {
              console.log(error);
            }        
      },
    },
    {text: 'cancelar', style: 'cancel'},
  ]);
}

const confirmarEliminar = id=>{
  Alert.alert('¿Desea eliminar de pedido?', 'Se eliminará de su pedido', [
    {
      text: 'confirmar',
      onPress: () => {
        eliminarProducto(id)
      },
    },
    {text: 'cancelar', style: 'cancel'},
  ]);
}


  return (
    <ScrollView>

    <VStack space={4} alignItems="flex-start" mx={5} >
      {pedido.map((platillo,i) => {
        console.log(platillo.imagen)
        return (
          <Box p="5" key={platillo.id+'-'+i}>
            <HStack>
              <Image
                bg="green.500"
                source={{
                  uri: platillo.imagen,
                }} 
                fallbackSource={{
                  uri: "https://www.w3schools.com/css/img_lights.jpg"}}
                style={globalStyles.cuadro} 
                alt={platillo.nombre}
              />
              <VStack mx="4">
              <Text>{platillo.nombre}</Text>
              <Text>{'Cantidad: '+platillo.cantidad}</Text>
              <Text>{'Precio: '+platillo.precio} $</Text>
              </VStack>
              <VStack>

              <Text  ml="20%" style={globalStyles.pago}>{platillo.total+ ' $'} </Text>
              <Box>
              <Button

            backgroundColor={'#c5174b'}
            _hover={{bg: 'red.400'}}
            _pressed={{bg: 'red.400'}}
            _focus={{bg: 'red.400'}}
            my="2"
           onPress={()=>confirmarEliminar(platillo.id)}
            endIcon={<CloseIcon size="3" />}></Button>
              </Box>
              </VStack>
            </HStack>
          </Box>
        );
      })}
      <Text style={globalStyles.cantidad}>{'Total a Pagar: '}{total}$</Text>
      <Box w="100%">
          <Button
          style={{textAlign: 'center'}}
             backgroundColor='#05850f'
            _hover={{bg: 'blue.400'}}
            _pressed={{bg: 'blue.400'}}
            _focus={{bg: 'blue.400'}}
            onPress={() => navigation.navigate('Menu')}
            mt="2"
            mx="10"
            startIcon={<ArrowBackIcon size="3" />}>         
              Menu           
          </Button>
      </Box>

      <Box w="100%" my="20">
          <Button
          onPress={()=>progresoPedido()}
          style={{textAlign: 'center'}}
             backgroundColor='#3609b1'
            _hover={{bg: 'blue.400'}}
            _pressed={{bg: 'blue.400'}}
            _focus={{bg: 'blue.400'}}
            mt="2"
            mx="10"
            startIcon={<ArrowBackIcon size="3" />}>         
              Ordenar Menú           
          </Button>
      </Box>
    </VStack>
    </ScrollView>
  );
}
