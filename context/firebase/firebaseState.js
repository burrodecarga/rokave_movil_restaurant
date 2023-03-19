import { useReducer } from 'react';
import firebase from '../../firebase';

import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

import {OBTENER_PRODUCTOS_EXITO} from '../../types'
import _ from 'lodash'

const FirebaseState = props=>{

  
  //1.- Crear Estado Inicial
const InitalState={
  menu:[],
}

// 2.- Traer información de BD

const [state,dispatch] =useReducer(FirebaseReducer,InitalState)

const obtenerProductos = ()=>{
  //console.log('Desde firebase Estate')
  dispatch({type:OBTENER_PRODUCTOS_EXITO})

  //firebase.db.settings({ experimentalForceLongPolling: true,merge: true });
  //firebase.db.settings({ timestampsInSnapshot: true, merge: true });
  firebase.db.collection('productos').where('existencia','==',true)
             .onSnapshot(handlerSnapshop)

  function handlerSnapshop(snapshot) {
    let platillos = snapshot.docs.map(doc=>{
      return {
        id:doc.id,
      ...doc.data()
    }
    })
    //console.log(platillos);
    //Ordenar con lodash
   
    platillos = _.sortBy(platillos,'categoria')

    dispatch({
      type:OBTENER_PRODUCTOS_EXITO,
      payload:platillos
    })
  }           
}

  return (
  <FirebaseContext.Provider
  value={
   { menu:state.menu,
     firebase,
     obtenerProductos
  }
  }
  >
{props.children}
  </FirebaseContext.Provider>)
}

export default FirebaseState