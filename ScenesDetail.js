import React, { useState } from 'react';
import { View, Text, ScrollView, Button, TextInput, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';

export default function ScenesDetail() {
  const [sceneData, setSceneData] = useState(null);
  const [error, setError] = useState(null);
  const [sceneIdInput, setSceneIdInput] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedMinutes, setUpdatedMinutes] = useState('');
  const [updatedBudget, setUpdatedBudget] = useState('');
  const [updatedLocation, setUpdatedLocation] = useState('');
  const [updatedEffects, setUpdatedEffects] = useState('');
  const [filmId, setFilmId] = useState('');

  const fetchScenesDetail = () => {
   // fetch(`http://192.168.1.14:8083/scene?id=${sceneIdInput}`, {
      fetch(`http://10.0.1.182:8083/scene?id=${sceneIdInput}`, {
      method: 'GET',
    })
      .then(response => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('Scene data:', data);
        setSceneData(data);
        setError(null); // Clear any previous errors
      })
      .catch(error => {
        console.error('Fetch Error:', error);
        setError(error.message);
      });
  };

  const updateScenesDetail = () => {
   // fetch(`http://192.168.1.14:8083/scene?id=${sceneIdInput}`, {
      fetch(`http://10.0.1.182:8083/scene?id=${sceneIdInput}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: sceneIdInput,
        description: updatedDescription,
        minutes: updatedMinutes,
        budget: updatedBudget,
        location: updatedLocation,
        effects: updatedEffects,
        filmId: updatefilmId,
      }),
    })
      .then(response => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('Updated scene data:', data);
        // Handle response accordingly
      })
      .catch(error => {
        console.error('Update Error:', error);
        setError(error.message);
      });
  };

  const deleteScene = () => {
    // Validar que el ID de la escena no esté vacío
    if (!sceneIdInput.trim()) {
      setError('Please enter a valid scene ID.');
      return;
    }

    // Confirmación de eliminación
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this scene?',
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
    //fetch(`http://192.168.1.14:8083/scene?id=${sceneIdInput}`, {
      fetch(`http://10.0.1.182:8083/scene?id=${sceneIdInput}`, {
      method: 'DELETE',
    })
      .then(response => {
        console.log('Response status:', response.status);
        if (response.status === 200) {
          // Escena eliminada con éxito
          setSceneData(null); // Limpiar los datos de la escena
          setError(null);
          setSceneIdInput(''); // Limpiar el campo de entrada del ID de la escena
        } else {
          setError('Error deleting scene.');
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
        placeholder="Enter scene ID"
        onChangeText={text => setSceneIdInput(text)}
        value={sceneIdInput}
      />
      {error && <Text>Error: {error}</Text>}
      {sceneData && (
        <View style={styles.sceneDetails}>
          {sceneData.map(scene => {
            if (scene.id === parseInt(sceneIdInput)) {
              return (
                <View key={scene.id}>
                  <Text>id: {scene.id}</Text>
                  <Text>description: {scene.description}</Text>
                  <Text>minutes: {scene.minutes}</Text>
                  <Text>budget: {scene.budget}</Text>
                  <Text>location: {scene.location}</Text>
                  <Text>effects: {scene.effects}</Text>
                  <Text>filmId: {scene.filmId}</Text>
               
                  <TextInput
                    style={styles.input}
                    placeholder="Update Description"
                    onChangeText={text => setUpdatedDescription(text)}
                    value={updatedDescription}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Update Minutes"
                    onChangeText={text => setUpdatedMinutes(text)}
                    value={updatedMinutes}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Update Budget"
                    onChangeText={text => setUpdatedBudget(text)}
                    value={updatedBudget}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Update Location"
                    onChangeText={text => setUpdatedLocation(text)}
                    value={updatedLocation}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Update Effects"
                    onChangeText={text => setUpdatedEffects(text)}
                    value={updatedEffects}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Update Film Id"
                    onChangeText={text => setFilmId(text)}
                    value={filmId}
                  />

                  <Button title="Update" onPress={updateScenesDetail} />
                </View>
              );
            } else {
              return null;
            }
          })}
          <TextInput
            style={styles.input}
            placeholder="Enter scene ID to delete"
            onChangeText={text => setSceneIdInput(text)}
            value={sceneIdInput}
          />
          <Button title="Delete" onPress={deleteScene} />
        </View>
      )}
      <Button title="Fetch Data" onPress={fetchScenesDetail} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}
