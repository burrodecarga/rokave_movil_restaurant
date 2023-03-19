import React, {useContext, useEffect, useState} from 'react';
import {
  Input,
  Stack,
  FormControl,
  HStack,
  Center,
  Box,
  Button,
  AddIcon,
  MinusIcon,
  CheckCircleIcon,
  Divider,
  Text,
  VStack,
  Pressable,
  Icon,
  CheckIcon,
} from 'native-base';
import globalStyles from '../styles/global';
import PedidoContext from '../context/pedidos/pedidosContext';
import {Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FormularioPlatillo() {
  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(0);
  const {platillo, guardarPedido} = useContext(PedidoContext);

  const navigation = useNavigation()

  const incrementar = () => {
    const newCantidad = parseInt(cantidad) + 1;
    setCantidad(newCantidad);
  };

  const decrementar = () => {
    if (parseInt(cantidad) > 1) {
      const newCantidad = parseInt(cantidad) - 1;
      setCantidad(newCantidad);
    }
  };

  const calcularTotal = () => {
    const totalPago = platillo.precio * cantidad;
    setTotal(totalPago);
  };

  const confirmarOrden = () => {
    Alert.alert('¿Desea confirmar pedido?', 'Se anexará a orden', [
      {
        text: 'confirmar',
        onPress: () => {
          const pedido = {
            ...platillo,
            cantidad,
            total,
          };
          guardarPedido(pedido);
          navigation.navigate('Resumen')
          
        },
      },
      {text: 'cancelar', style: 'cancel'},
    ]);
  };


  

  useEffect(() => {
    calcularTotal();
  }, [cantidad]);

  return (
    <FormControl>
      <VStack>
        <Text style={globalStyles.pago}>
          {platillo.nombre}
          {'  precio :  $'}
          {platillo.precio}
        </Text>
        <Text style={globalStyles.pago}>
          {'Cantidad : ' + cantidad}
          {'  total :  $'}
          {total}
        </Text>
      </VStack>
      <HStack space={15} justifyContent="center" my="20%">
        <Box>
          <Button
            _hover={{bg: 'blue.400'}}
            _pressed={{bg: 'blue.400'}}
            _focus={{bg: 'blue.400'}}
            onPress={() => decrementar()}
            mt="2"
            endIcon={<MinusIcon size="3" />}>
            Eliminar
          </Button>
        </Box>
        <Box>
          <Button
            _hover={{bg: 'blue.400'}}
            _pressed={{bg: 'blue.400'}}
            _focus={{bg: 'blue.400'}}
            onPress={() => setCantidad(1)}
            my="2"
            endIcon={<CheckCircleIcon size="3" />}></Button>
          <Input
            textAlign={'center'}
            width={'12'}
            value={cantidad.toString()}
            keyboardType="numeric"
            onChangeText={cantidad => {
              setCantidad(cantidad);
              if (cantidad <= 0) setCantidad(1);
            }}
          />
        </Box>
        <Box>
          <Button
            onPress={() => incrementar()}
            mt="2"
            endIcon={<AddIcon size="3" />}>
            Agregar
          </Button>
        </Box>
      </HStack>
      <VStack>
        <Box>
          <Button
            _hover={{bg: 'blue.400'}}
            _pressed={{bg: 'blue.400'}}
            _focus={{bg: 'blue.400'}}
            onPress={() => confirmarOrden()}
            mt="2"
            mx="10"
            endIcon={<CheckIcon size="3" />}>
            Añaqir a Pedido
          </Button>
        </Box>
      </VStack>
    </FormControl>
  );
}
