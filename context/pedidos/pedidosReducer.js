import React, {useReducer} from 'react'
import { CONFIRMAR_ORDENAR_PLATILLO, ELIMINAR_PRODUCTO, PEDIDO_ORDENADO, SELECCIONAR_PRODUCTO, TOTAL_A_PAGAR } from '../../types'

export default (state, action)=>{
  switch (action.type) {
   case SELECCIONAR_PRODUCTO:
    return{
      ...state,
      platillo: action.payload
    }
    case CONFIRMAR_ORDENAR_PLATILLO:
      return{
        ...state,
      pedido:[...state.pedido,action.payload]
          }
    case TOTAL_A_PAGAR:
      return {
        ...state,
        total:action.payload
      }

    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        pedido:state.pedido.filter(p=>p.id !== action.payload)

      }
     case PEDIDO_ORDENADO:
      return{
        ...state,
        idpedido:action.payload,
        pedido:[],
        total:0,
      }         

    default:
    return state
  }
}