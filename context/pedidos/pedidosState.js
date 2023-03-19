import { useReducer } from 'react';
import firebase from '../../firebase';

import PedidoReducer from './pedidosReducer';
import PedidoContext from './pedidosContext';
import { CONFIRMAR_ORDENAR_PLATILLO, ELIMINAR_PRODUCTO, 
  SELECCIONAR_PRODUCTO,TOTAL_A_PAGAR, PEDIDO_ORDENADO } from '../../types';

const PedidosState = props=>{

  //console.log(firebase,'XXXXXXXXXXXXXXXXXXXXXXXX')

  //1.- Crear Estado Inicial
const InitalState={
  pedido:[],
  platillo:null,
  total:0,
  idpedido:'',
}

// 2.- Traer información de BD

const [state,dispatch] =useReducer(PedidoReducer,InitalState)

const seleccionarPlatillo = platillo=>{
dispatch({ 
  type:SELECCIONAR_PRODUCTO,
  payload:platillo})
}

const guardarPedido = pedido => {
  dispatch({
    type:CONFIRMAR_ORDENAR_PLATILLO,
    payload:pedido
  })
}

const totalAPagar = total=>{
  dispatch({
    type:TOTAL_A_PAGAR,
    payload:total
  })
}

const eliminarProducto = id=>{
  dispatch({
    type:ELIMINAR_PRODUCTO,
    payload:id
  })
}

const pedidoRealizado = id=>{
  dispatch({
    type:PEDIDO_ORDENADO,
    payload:id,
    
  })
}

  return (
  <PedidoContext.Provider
  value={
   { pedido:state.pedido,
     firebase,
     platillo:state.platillo,
     total:state.total,
     idpedido:state.idpedido,
     seleccionarPlatillo,
     guardarPedido,
     totalAPagar,
     eliminarProducto,
     pedidoRealizado
  }
  }
  >
{props.children}
  </PedidoContext.Provider>)
}

export default PedidosState