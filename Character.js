import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'; // Importa el hook useNavigation

export default function CharacterScreen({ navigation }) {
    const goBack = useNavigation().goBack; // Obtén la función goBack() de la navegación

    const navigateToCreateCharacters = () => {
      navigation.navigate('CreateCharacters'); // Cambia 'CreateCharacters' al nombre correcto de tu pantalla
    };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.titleText}>CHARACTER FILMS</Text>

      {/* Botón de la esquina superior derecha */}
      <TouchableOpacity style={styles.icon4Container}  onPress={navigateToCreateCharacters}>
        <Image source={require('./assets/images/icon2.png')} style={styles.iconImage} />
      </TouchableOpacity>

      {/* Contenedor 1 */}
      <TouchableOpacity style={styles.filmContainer} onPress={() => navigation.navigate('CharacterDetail1')}>
        <Text style={styles.subtitle}>Character1</Text>
        {/* Contenido del Character1 si es necesario */}
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
      <TouchableOpacity style={styles.filmContainer} onPress={() => navigation.navigate('CharacterDetail2')}>
        <Text style={styles.subtitle}>Character2</Text>
        {/* Contenido del Character2 si es necesario */}
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
      <TouchableOpacity style={styles.filmContainer} onPress={() => navigation.navigate('CharacterDetail3')}>
        <Text style={styles.subtitle}>Character3</Text>
        {/* Contenido del Character3 si es necesario */}
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
