import { Box } from 'native-base'
import React, { useContext, useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import { StyleSheet, Text, View } from 'react-native'
import PedidoContext from '../context/pedidos/pedidosContext'
import firebase from '../firebase'
import globalStyles from '../styles/global'

export default function Progreso() {

  const {idpedido} = useContext(PedidoContext)
  const [tiempo,setTiempo] = useState(0)
  const [completado,setCompletado] = useState(false)
 //console.log('Edwin'+idpedido+'XXXXYYYY');
useEffect(()=>{
 
const obtenerProducto = ()=>{  
  firebase.db.collection('ordenes')
  .doc(idpedido)
  .onSnapshot(function(doc){
          setTiempo(doc.data().tiempoDeEntrega);
          setCompletado(doc.data().completado);
        })
}
obtenerProducto()
},[])

const renderer = ({minutes, seconds})=>{
return (
  <Text style={globalStyles.time}>{minutes}:{seconds} </Text>
)
}

  return (
    <Box style={globalStyles.container}>
      <Box class="m-auto bg-gray-600">
        
        {tiempo ===0 && (
          <>
          <Text style={globalStyles.nOrden}>Orden:{idpedido}</Text>
          <Text style={globalStyles.orden}>Hemos recibido tú Orden</Text>
          <Text style={globalStyles.orden}>Estamos calculando el tiempo de entrega</Text>
          </>
        )}

{tiempo >0 && !completado && (
          <>
          <Text style={globalStyles.orden}>Tiempo Restante</Text>

          <Countdown
          date={Date.now()+tiempo * 60000}
          renderer={renderer}
          />
          
          </>
        )}
        {
          completado && (
            <>
          <Text style={globalStyles.orden}>Orden Lista</Text>
          <Text style={globalStyles.orden}>Por Favor pasar a recoger Orden</Text>
          </>
          )
        }
        </Box>
    </Box>
  )
}

const styles = StyleSheet.create({})