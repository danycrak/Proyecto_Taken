import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function WorkshopScreen({ navigation }) {
  const goBack = useNavigation().goBack;

  // Función para navegar a la página 'Create Films'
  const navigateToCreateFilms = () => {
    navigation.navigate('CreateFilms'); // Cambia 'CreateFilms' al nombre correcto de tu pantalla
  };

  

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.titleText}>DASHBOARD FILMS</Text>

      {/* Botón Agregar */}
      <TouchableOpacity style={styles.icon3Container} onPress={navigateToCreateFilms}>
        <Image source={require('./assets/images/icon2.png')} style={styles.iconImage} />
      </TouchableOpacity>

      {/* Contenedor 1 */}
      <TouchableOpacity style={styles.filmContainer} onPress={() => navigation.navigate('Scene')}>
        <Text style={styles.subtitle}>Film1</Text>






        
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
      <TouchableOpacity style={styles.filmContainer} onPress={() => navigation.navigate('Scene')}>
        <Text style={styles.subtitle}>Film2</Text>
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
      <TouchableOpacity style={styles.filmContainer} onPress={() => navigation.navigate('Scene')}>
        <Text style={styles.subtitle}>Film3</Text>
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

      {/* Imágenes clicables */}
      <StatusBar style="auto" />
    </View>
  );
}
