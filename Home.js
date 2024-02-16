import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import ImageViewer from './ImageViewer';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';

const PlaceholderImage = require('./assets/images/img3.jpg');

export default function HomeScreen({ navigation }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === '12' && password === '12') {
      setIsLoggedIn(true);
      setError('');
      navigation.navigate('Workshop');
    } else {
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>

      <Text style={styles.title} numberOfLines={2}> MOVIE  MAKING</Text>
  
      <View style={styles.formContainer}>

      
        <TextInput
          placeholder="User"
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="Passwd"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>BEGIN</Text>
        </TouchableOpacity>
        {/* Aplica el nuevo estilo loginButton al botón de login */}
     
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
