import React, {useContext} from 'react';
import PedidoContext from '../context/pedidos/pedidosContext';
import {
  ScrollView,
  Box,
  Text,
  Image,
  HStack,
  VStack,
  Pressable,
} from 'native-base';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';


export default function DetallePlatillo() {
  const {platillo} = useContext(PedidoContext);
  const navigation = useNavigation()
 
  return (
    <Box 
    mx="auto"
    my="5" bg="primary.600" py="4" px="3" borderRadius="5" rounded="md" width={300} maxWidth="100%">
    <VStack justifyContent="space-between">
    <Image source={{
      uri: platillo.imagen
    }} alt="Aang flying and surrounded by clouds"  rounded="5"
    style={globalStyles.imagen}
    />
   
      <Box justifyContent="space-between">
        <VStack space="2">
          <Text fontSize="sm" color="white">
            {platillo.categoria}
          </Text>
          <Text color="white" fontSize="xl">
           {platillo.descripcion}
          </Text>
          <Text fontSize="sm" color="white" style={globalStyles.cantidad}>
           {' Precio  '}
            {platillo.precio} $
          </Text>
        </VStack>
        <Pressable rounded="xs" 
        bg="primary.400"
        my="5"
        alignSelf="center" py="1" px="6"
        _hover={{ bg: "blue.400" }}
        _pressed={{ bg: "blue.400" }}
        _focus={{ bg: "blue.400" }}
        onPress={()=>{
          
          navigation.navigate('FormularioPlatillo')
        }}
        >
          <Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color="white">
            Ordenar Platillo
          </Text>
        </Pressable>
      </Box>
       </VStack>
  </Box>
  );
}
