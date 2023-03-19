import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';

const Stack = createStackNavigator();

import NuevaOrden from './views/NuevaOrden';
import Menu from './views/Menu';
import DetallePlatillo from './views/DetallePlatillo';
import FormularioPlatillo from './views/FormularioPlatillo';
import ResumenPedido from './views/Resumen';
import Progreso from './views/Progreso';

import FirebaseState  from './context/firebase/firebaseState'
import PedidoState  from './context/pedidos/pedidosState'
import Boton from './components/boton';

function App() {
  return (
    <>
     <FirebaseState>
      <PedidoState>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#FFDA00',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign:'right',
                width: '100%',
              },
            }}>
            <Stack.Screen
              name="NuevaOrden"
              component={NuevaOrden}
              options={{
                title: 'Nueva Orden',
              }}
            />

            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{
                title: 'Nuestro Menú',
              headerRight:()=><Boton/>  
              }}
            />

            <Stack.Screen
              name="DetallePlatillo"
              component={DetallePlatillo}
              options={{
                title: 'Detalles del Platillo',
              }}
            />

            <Stack.Screen
              name="FormularioPlatillo"
              component={FormularioPlatillo}
              options={{
                title: 'Ordenar Platillo',
              }}
            />

            <Stack.Screen
              name="Resumen"
              component={ResumenPedido}
              options={{
                title: 'Resumen de Pedido',
              }}
            />
            <Stack.Screen
              name="Progreso"
              component={Progreso}
              options={{
                title: 'Progreso de Pedido',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </NativeBaseProvider>
        </PedidoState>
      </FirebaseState>
    
    </>
  );
}

const styles = StyleSheet.create({});

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default App;
