import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import styles from './styles';

export default function CreateFilmsScreen({ navigation }){


  const goBack = useNavigation().goBack;

  // Función para navegar a la página 'Create Films'
  const navigateToDetails = () => {
    navigation.navigate('Details'); // Cambia 'CreateFilms' al nombre correcto de tu pantalla
  };


 // Obtén el objeto de navegación

  const [formData, setFormData] = useState({
    title: '',
    director: '',
    duration: '',
    genre: '',
    description: '',
    expence: ''
  });

  const handleChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePost = () => {
    //fetch('http://192.168.1.14:8083/film', {
      fetch('http://10.0.1.182:8083/film', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Película creada:', data);
        navigation.navigate('Details', { id: data.id }); // Navega a la pantalla de detalles con el ID de la película creada
      })
      .catch(error => console.error('Error al crear película:', error));
  };

  const handleSubmit = () => {
    handlePost();
  };

  return (
    <View style={styles.containerfilm}>
      {/* Formulario */}
      <View style={styles.form}>
        <View style={styles.titleContainer}>
          <Text style={styles.titlefilm}>Crear Película</Text>
         
        </View>

        <TextInput
          style={styles.inputfilm}
          placeholder="Título"
          value={formData.title}
          onChangeText={text => handleChange('title', text)}
        />
        <TextInput
          style={styles.inputfilm}
          placeholder="Director"
          value={formData.director}
          onChangeText={text => handleChange('director', text)}
        />
        <TextInput
          style={styles.inputfilm}
          placeholder="Duración"
          value={formData.duration}
          onChangeText={text => handleChange('duration', text)}
        />
        <TextInput
          style={styles.inputfilm}
          placeholder="Género"
          value={formData.genre}
          onChangeText={text => handleChange('genre', text)}
        />
        <TextInput
          style={[styles.inputfilm, { height: 100 }]}
          placeholder="Descripción"
          multiline
          value={formData.description}
          onChangeText={text => handleChange('description', text)}
        />
        <TextInput
          style={styles.inputfilm}
          placeholder="Costo"
          value={formData.expence}
          onChangeText={text => handleChange('expence', text)}
        />
        <Button title="Crear" onPress={handleSubmit} />

         {/* Icono para ver detalles */}
         <TouchableOpacity onPress={() => navigation.navigate('Details', formData)}>
  <Image source={require('./assets/images/icon3.png')} style={styles.iconImage} />
</TouchableOpacity>


      </View>

      <StatusBar style="auto" />
    </View>
  );
}
