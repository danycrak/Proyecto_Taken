import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'; // Asegúrate de tener definidos los estilos correctamente en este archivo

export default function CreateScenesScreen() {



  const navigation = useNavigation();

  // Función para navegar a la página 
  const navigateToScenesDetails = () => {
    navigation.navigate('ScenesDetail'); // Cambia 
  };




  const [formData, setFormData] = useState({
    id: '',
    description: '',
    minutes: '',
    budget: '',
    location: '',
    effects: '',
    filmId: '',
  });

  const handleChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePost = () => {
    //fetch('http://192.168.1.14:8083/scene', {
      fetch('http://10.0.1.182:8083/scene', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Escena creada:', data);
      // No navega aquí. La navegación se realizará después de la solicitud POST
    })
    .catch(error => console.error('Error al crear Escena:', error));
  };

  const handleSubmit = () => {
    handlePost(); // Realiza la solicitud POST primero
    navigation.navigate('ScenesDetail'); // Luego, navega a la pantalla 'ScenesDetail' después de que se complete la solicitud
  };

  return (
    <View style={styles.containerfilm}>
      {/* Formulario */}
      <View style={styles.form}>
        <Text style={styles.titlefilm}>Crear Escena</Text>
       

        <TextInput
          style={[styles.inputfilm,  {height: 100 }]}
          placeholder="Descripción"
          value={formData.description}
          onChangeText={text => handleChange('description', text)}
        />
        <TextInput
          style={styles.inputfilm}
          placeholder="Minutos"
          value={formData.minutes}
          onChangeText={text => handleChange('minutes', text)}
        />
        <TextInput
          style={styles.inputfilm}
          placeholder="Presupuesto"
          value={formData.budget}
          onChangeText={text => handleChange('budget', text)}
        />
        <TextInput
          style={styles.inputfilm}
          placeholder="Ubicación"
          value={formData.location}
          onChangeText={text => handleChange('location', text)}
        />
        <TextInput
          style={[styles.inputfilm, { height: 100 }]}
          placeholder="Efectos"
          multiline
          value={formData.effects}
          onChangeText={text => handleChange('effects', text)}
        />
        <TextInput
          style={[styles.inputfilm, { height: 100 }]}
          placeholder=" TAKEN"
          multiline
          value={formData.filmId}
          onChangeText={text => {
            // Verifica si el número ingresado es mayor o igual a 4
            if (parseInt(text) < 4) {
              handleChange('filmId', text);
            } else {
              // Si el número ingresado es mayor o igual a 4, no actualiza el estado
              alert("Elija entre  TAKEN 1 // TAKEN 2 //  TAKEN 3");
            }
          }}
        />
        <Button title="Crear" onPress={handleSubmit} />
      </View>

      {/* Botón de retroceso */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
        <Image source={require('./assets/images/icon1.png')} style={styles.iconImage} />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
