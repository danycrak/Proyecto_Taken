import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'; // Asegúrate de tener definidos los estilos correctamente en este archivo

export default function CreateCharactersScreen() {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    description: '',
    cost: '',
    actor: '',
    roles: '',
    sceneId: '',
  });

  const handleChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePost = () => {
    fetch('http://10.0.1.182:8083/characters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Personaje creado:', data);
      navigation.navigate('CharactersDetail'); // Navega a la pantalla 'CharactersDetail' después de que se complete la solicitud POST
    })
    .catch(error => console.error('Error al crear Personaje:', error));
  };

  const handleSubmit = () => {
    handlePost(); // Realiza la solicitud POST primero
  };

  return (
    <View style={styles.containerfilm}>
      {/* Formulario */}
      <View style={styles.form}>
        <Text style={styles.titlefilm}>Crear Personajes</Text>
        <TextInput
          style={[styles.inputfilm, { height: 100 }]}
          placeholder="Descripción"
          value={formData.description}
          onChangeText={text => handleChange('description', text)}
        />
        <TextInput
          style={styles.inputfilm}
          placeholder="Costo"
          value={formData.cost}
          onChangeText={text => handleChange('cost', text)}
        />
        <TextInput
          style={styles.inputfilm}
          placeholder="Actor"
          value={formData.actor}
          onChangeText={text => handleChange('actor', text)}
        />
        <TextInput
          style={[styles.inputfilm, { height: 100 }]}
          placeholder="Rol"
          value={formData.roles}
          onChangeText={text => handleChange('roles', text)}
        />
        <TextInput
          style={[styles.inputfilm, { height: 100 }]}
          placeholder="SceneId"
          value={formData.sceneId}
          onChangeText={text => handleChange('sceneId', text)}
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
