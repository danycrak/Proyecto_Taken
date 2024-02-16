import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, TextInput, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';

export default function Details() {
  const [filmData, setFilmData] = useState(null);
  const [error, setError] = useState(null);
  const [filmIdInput, setFilmIdInput] = useState('');
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDirector, setUpdatedDirector] = useState('');
  const [updatedDuration, setUpdatedDuration] = useState('');
  const [updatedGenre, setUpdatedGenre] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedExpence, setUpdatedExpence] = useState('');

  const fetchFilmDetails = () => {
    //fetch(`http://192.168.1.14:8083/film?id=${filmIdInput}`, {
      fetch(`http://10.0.1.182:8083/film?id=${filmIdInput}`, {
      method: 'GET',
    })
      .then(response => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('Film data:', data);
        setFilmData(data);
        setError(null); // Clear any previous errors
      })
      .catch(error => {
        console.error('Fetch Error:', error);
        setError(error.message);
      });
  };

  const updateFilmDetails = () => {
   // fetch(`http://192.168.1.14:8083/film?id=${filmIdInput}`, {
      fetch(`http://10.0.1.182:8083/film?id=${filmIdInput}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: filmIdInput,
        title: updatedTitle,
        director: updatedDirector,
        duration: updatedDuration,
        genre: updatedGenre,
        description: updatedDescription,
        expence: updatedExpence,
      }),
    })
      .then(response => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('Updated film data:', data);
        // You can handle response accordingly, maybe show a success message
      })
      .catch(error => {
        console.error('Update Error:', error);
        setError(error.message);
      });
  };

  const deleteFilm = () => {
    // Validar que el ID de la película no esté vacío
    if (!filmIdInput.trim()) {
      setError('Please enter a valid film ID.');
      return;
    }

    // Confirmación de eliminación
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this film?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Delete', onPress: () => confirmDelete() },
      ],
      { cancelable: false }
    );
  };

  const confirmDelete = () => {
   // fetch(`http://192.168.1.14:8083/film?id=${filmIdInput}`, {
      fetch(`http://10.0.1.182:8083/film/${filmIdInput}`, {
      method: 'DELETE',
    })
      .then(response => {
        console.log('Response status:', response.status);
        if (response.status === 200) {
          // Película eliminada con éxito
          setFilmData(null); // Limpiar los datos de la película
          setError(null);
          setFilmIdInput(''); // Limpiar el campo de entrada del ID de la película
        } else {
          setError('Error deleting film.');
        }
      })
      .catch(error => {
        console.error('Delete Error:', error);
        setError(error.message);
      });
  };

  return (
    <ScrollView style={styles.containerDetails}>
      <TextInput
        style={styles.input}
        placeholder="Enter film Id"
        onChangeText={text => setFilmIdInput(text)}
        value={filmIdInput}
      />
      {error && <Text>Error: {error}</Text>}
      {filmData && (
        <View style={styles.filmDetails}>
          {filmData.map(movie => {
            if (movie.id === parseInt(filmIdInput)) {
              return (
                <View key={movie.id}>
                  <Text>id: {movie.id}</Text>
                  <Text>title: {movie.title}</Text>
                  <Text>director: {movie.director}</Text>
                  <Text>duration: {movie.duration}</Text>
                  <Text>genre: {movie.genre}</Text>
                  <Text>description: {movie.description}</Text>
                  <Text>expence: {movie.expence}</Text>
               
                  <TextInput
                    style={styles.input}
                    placeholder="Update Title"
                    onChangeText={text => setUpdatedTitle(text)}
                    value={updatedTitle}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Update Director"
                    onChangeText={text => setUpdatedDirector(text)}
                    value={updatedDirector}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Update Duration"
                    onChangeText={text => setUpdatedDuration(text)}
                    value={updatedDuration}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Update Genre"
                    onChangeText={text => setUpdatedGenre(text)}
                    value={updatedGenre}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Update Description"
                    onChangeText={text => setUpdatedDescription(text)}
                    value={updatedDescription}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Update Expence"
                    onChangeText={text => setUpdatedExpence(text)}
                    value={updatedExpence}
                  />

                  <Button title="Update" onPress={updateFilmDetails} />
                </View>
              );
            } else {
              return null;
            }
          })}
          <TextInput
            style={styles.input}
            placeholder="Enter film ID to delete"
            onChangeText={text => setFilmIdInput(text)}
            value={filmIdInput}
          />
          <Button title="Delete" onPress={deleteFilm} />
        </View>
      )}
      <Button title="Fetch Data" onPress={fetchFilmDetails} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}
