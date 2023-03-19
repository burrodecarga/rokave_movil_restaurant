import React, {Fragment, useContext, useEffect} from 'react';
import FirebaseContext from '../context/firebase/firebaseContext';
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

export default function Menu() {
  const {menu, obtenerProductos} = useContext(FirebaseContext);

  const {seleccionarPlatillo} = useContext(PedidoContext);

  const navigation = useNavigation()

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <ScrollView>

  <Box m="5">
    {
        menu?.map(platillo=>{

          return (

    <Box my="5" bg="primary.600" py="4" px="3" borderRadius="5" rounded="md" width={375} maxWidth="100%">
      <HStack justifyContent="space-between">
        <Box justifyContent="space-between">
          <VStack space="2">
            <Text fontSize="sm" color="white">
              {platillo.categoria}{' : Precio  '}
              {platillo.precio} $
            </Text>
            <Text color="white" fontSize="xl">
             {platillo.descripcion}
            </Text>
          </VStack>
          <Pressable 
           _hover={{ bg: "blue.400" }}
           _pressed={{ bg: "blue.400" }}
           _focus={{ bg: "blue.400" }}
          rounded="xs" bg="primary.400" alignSelf="flex-start" py="1" px="3"
          onPress={()=>{
            seleccionarPlatillo(platillo)
            navigation.navigate('DetallePlatillo')
          }}
          >
            <Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color="white">
              Solicitar
            </Text>
          </Pressable>
        </Box>
        <Image source={{
        uri: platillo.imagen
      }} alt="Aang flying and surrounded by clouds" height="100" rounded="full" width="100" />
      </HStack>
    </Box>
          )
        })
      }
  </Box>
    </ScrollView>
      
 
  );
}
