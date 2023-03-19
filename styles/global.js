const { StyleSheet } = require('react-native');


const globalStyles = StyleSheet.create({
  container :{
    flex : 1,
  
  },
  contenido:{
    flex : 1,
    marginHorizontal:'5%',
   
    
  },
  button:{
   width:'100%',

  },
  buttonText:{
    textTransform:'uppercase',
    fontWeight:'bold',
    color:'#000'
  },
  titulo:{
    textAlign:'center',
    marginTop:40,
    marginBottom:20,
    fontSize:30
  },
  imagen:{
    height:300,
    width:'100%',
  },
  cantidad:{
    marginVertical:5,
    textAlign:'center',
    fontWeight:'bold',
    fontSize:16
  },
  numero:{
    backgroundColor:'#000',
    fontWeight:'bold',
    fontSize:20
  },
  pago:{
    textAlign:'center',
    marginTop:10,
    marginBottom:10,
    fontSize:16
  },
  cuadro:{
    height:70,
    width:70,
  },
  orden:{
    textAlign:'center',
    marginTop:40,
    marginBottom:20,
    fontSize:16,
    fontWeight:'bold',
  },
  nOrden:{
    color:'#eec614',
    textAlign:'center',
    marginTop:40,
    marginBottom:20,
    fontSize:16,
    fontWeight:'bold',
  },
  time:{
    textAlign:'center',
    marginTop:40,
    marginBottom:20,
    fontSize:60,
    fontWeight:'bold',
  },

})

export default globalStyles;