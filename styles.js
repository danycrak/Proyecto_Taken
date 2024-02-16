

import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#350A24',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 5,
    borderRadius: 30,
    padding: 10,
    
  
   

  },
  // boton begin//
  loginButton: {
    backgroundColor: '#9F738E',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9F738E',
    padding: 12,
    alignItems: 'center',
    marginTop: 1,
    fontSize: 25,
    color: '#ffff',
    marginBottom: 10,

   
    
  },



  imageContainer: {
    flex: 1,
    paddingTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },


  formContainer: {
    width: '50%',
    marginTop: 5,
    color: '#ffff',
  },
// botones admin
  input: {
    height: 45,
    borderColor: '#9F738E',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color: '#ffff',
    backgroundColor: '#350A24',
    borderRadius: 8,
    fontSize: 20,
  },
  errorText: {
    color: '#ffff',
    marginBottom: 1,
  },



  buttonContainer: {
    alignItems: 'center',
    width: '100%',
   
     justifyContent: 'center', 
     color: '#ffff',
     
    
  },

// boton salir de films

  button: {
    backgroundColor: '#7041EE',
    borderRadius: 10,
    padding: 40,
    width: '60%',
    justifyContent: 'center',
    
  },

// color de  texto de botones worshop//
titleText: {
  fontSize: 60,
  fontWeight: 'bold',
  marginBottom: -70,
  color: '#9F738E',
  padding: 20,
 
},


// titulo movie making //
title: {
  fontSize: 60,
  color: '#9F738E',
  fontWeight: 'bold',
  marginTop: '40%', // Esto lo ajusta verticalmente a la mitad de la pantalla
},


//WORKSHOP//

filmContainer: {
  backgroundColor: '#570838',
  padding: 10,
  marginBottom: 40,
  borderRadius: 15,
  width: '70%',
  alignItems: 'center',
  
  

},

subtitle: {
  // Estilos del texto del título de la película
  fontSize: 30, // Tamaño de fuente
  fontWeight: 'bold', // Peso de la fuente
  color: '#9F738E',
  borderColor: '#ffff',
  borderBottomWidth: 1, // Color del texto
  // Agrega más estilos según sea necesario
},
  

//icosnes de volver y agregar workshop

iconContainer: {
  width: 60,
  height: 60,

  flexWrap: 'wrap',
  paddingBottom: 20, 


},



iconImage: {
  width: 60,
  height: 60,
 

},

Subtitle: {
  fontSize: 'bold',
  color: '#ffff',
},


icon2Container: {

  marginLeft: 90,
paddingBottom: 10

},
icon3Container: {

  marginLeft: 200,
paddingBottom: 10

},
icon4Container: {

  marginLeft: 200,
paddingBottom: 10

},

// createFilms

titlefilm: {
color: '#9F738E',
fontSize: 64,
fontWeight: 'bold',
padding: 20
},


containerfilm: {
  flex: 1,
  backgroundColor: '#350A24',
  alignItems: 'center',
  borderColor: '#000000',
  borderWidth: 5,
  borderRadius: 30,
  padding: 10,
  

},

inputfilm: {
backgroundColor: '#9F738E',
padding: 10,
borderRadius: 15,
fontSize: 25,
marginBottom: 10,
color: '#ffff',
},

//pantalla details.

containerDetails: {
  backgroundColor: '#ffff',
  padding: 10,
  borderRadius: 5,
  margin: 10,
 
},

filmDetails:{
  backgroundColor: '#9F738E',
 padding: 30,
 fontSize: 'bold',

},


});





export default styles;
