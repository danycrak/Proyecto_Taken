import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'; // Importa el hook useNavigation


export default function SceneScreen({ navigation }) {
  const goBack = useNavigation().goBack; // Obtén la función goBack() de la navegación

  const navigateToCreateScenes = () => {
    navigation.navigate('CreateScenes'); // Cambia 'CreateFilms' al nombre correcto de tu pantalla
  };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.titleText}>SCENES    FILMS</Text>

      <TouchableOpacity style={styles.icon3Container} onPress={navigateToCreateScenes}>
        <Image source={require('./assets/images/icon2.png')} style={styles.iconImage} />
      </TouchableOpacity>

      {/* Contenedor 1 */}
      <TouchableOpacity style={styles.filmContainer} onPress={() => navigation.navigate('Character')}>
        <Text style={styles.subtitle}>Scene1</Text>
        {/* Contenido del Scene1 si es necesario */}
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="create" size={24} color="#9F738E" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteIcon}>
            <Ionicons name="trash" size={24} color="#9F738E" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* Contenedor 2 */}
      <TouchableOpacity style={styles.filmContainer} onPress={() => navigation.navigate('Character')}>
        <Text style={styles.subtitle}>Scene2</Text>
        {/* Contenido del Scene2 si es necesario */}
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="create" size={24} color="#9F738E" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteIcon}>
            <Ionicons name="trash" size={24} color="#9F738E" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* Contenedor 3 */}
      <TouchableOpacity style={styles.filmContainer} onPress={() => navigation.navigate('Character')}>
        <Text style={styles.subtitle}>Scene3</Text>
        {/* Contenido del Scene3 si es necesario */}
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="create" size={24} color="#9F738E" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteIcon}>
            <Ionicons name="trash" size={24} color="#9F738E" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

         {/* Botón de retroceso */}
         <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
        <Image source={require('./assets/images/icon1.png')} style={styles.iconImage} />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
