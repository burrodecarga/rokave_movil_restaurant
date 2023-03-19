import React, { useContext } from 'react'
import { Pressable, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import PedidoContext from '../context/pedidos/pedidosContext';


export default function Boton() {

  const {pedido} = useContext(PedidoContext)

  if(pedido.length ===0) return null
  
  const navigation = useNavigation()
  return (
  <>
  <Pressable mr="4"
   _hover={{bg: 'blue.400'}}
   _pressed={{bg: 'blue.400'}}
   _focus={{bg: 'blue.400'}}
   px={3}
   br={10}
  onPress={()=>navigation.navigate('Resumen')}  
  >
    <Text>Orden</Text>
  </Pressable>
 
  </>
  )
}
