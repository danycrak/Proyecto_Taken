import React, { useState } from 'react';
import { View, Text, ScrollView, Button, TextInput, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';

export default function CharactersDetail() {
  const [characterData, setCharacterData] = useState(null);
  const [error, setError] = useState(null);
  const [characterIdInput, setCharacterIdInput] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedCost, setUpdatedCost] = useState('');
  const [updatedActor, setUpdatedActor] = useState('');
  const [updatedRoles, setUpdatedRoles] = useState('');
  const [sceneId, setSceneId] = useState('');

  const fetchCharactersDetail = () => {
   // fetch(`http://192.168.1.14:8083/characters?id=${characterIdInput}`, {
      fetch(`http://10.0.1.182:8083/characters?id=${characterIdInput}`, {
      method: 'GET',
    })
      .then(response => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('Character data:', data);
        setCharacterData(data);
        setError(null); // Clear any previous errors
      })
      .catch(error => {
        console.error('Fetch Error:', error);
        setError(error.message);
      });
  };

  const updateCharactersDetail = () => {
   // fetch(`http://192.168.1.14:8083/characters?id=${characterIdInput}`, {
      fetch(`http://10.0.1.182:8083/characters?id=${characterIdInput}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: characterIdInput,
        description: updatedDescription,
        cost: updatedCost,
        actor: updatedActor,
        roles: updatedRoles,
        sceneId: sceneId,
      }),
    })
      .then(response => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('Updated character data:', data);
        // Handle response accordingly
      })
      .catch(error => {
        console.error('Update Error:', error);
        setError(error.message);
      });
  };

  const deleteCharacter = () => {
    // Validar que el ID del personaje no esté vacío
    if (!characterIdInput.trim()) {
      setError('Please enter a valid character ID.');
      return;
    }

    // Confirmación de eliminación
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this character?',
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
    //fetch(`http://192.168.1.14:8083/characters?id=${characterIdInput}`, {
      fetch(`http://10.0.1.182:8083/characters?id=${characterIdInput}`, {
      method: 'DELETE',
    })
      .then(response => {
        console.log('Response status:', response.status);
        if (response.status === 200) {
          // Personaje eliminado con éxito
          setCharacterData(null); // Limpiar los datos del personaje
          setError(null);
          setCharacterIdInput(''); // Limpiar el campo de entrada del ID del personaje
        } else {
          setError('Error deleting character.');
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
        placeholder="Enter character ID"
        onChangeText={text => setCharacterIdInput(text)}
        value={characterIdInput}
      />
      {error && <Text>Error: {error}</Text>}
      {characterData && (
        <View style={styles.charactersDetail}>
          {characterData.map(character => {
            if (character.id === parseInt(characterIdInput)) {
              return (
                <View key={character.id}>
                  <Text>id: {character.id}</Text>
                  <Text>description: {character.description}</Text>
                  <Text>cost: {character.cost}</Text>
                  <Text>actor: {character.actor}</Text>
                  <Text>roles: {character.roles}</Text>
                  <Text>sceneId: {character.sceneId}</Text>
               
                  <TextInput
                    style={styles.input}
                    placeholder="Update Description"
                    onChangeText={text => setUpdatedDescription(text)}
                    value={updatedDescription}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Update Cost"
                    onChangeText={text => setUpdatedCost(text)}
                    value={updatedCost}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Update Actor"
                    onChangeText={text => setUpdatedActor(text)}
                    value={updatedActor}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Update Roles"
                    onChangeText={text => setUpdatedRoles(text)}
                    value={updatedRoles}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Update Scene ID"
                    onChangeText={text => setSceneId(text)}
                    value={sceneId}
                  />

                  <Button title="Update" onPress={updateCharactersDetail} />
                </View>
              );
            } else {
              return null;
            }
          })}
          <TextInput
            style={styles.input}
            placeholder="Enter character ID to delete"
            onChangeText={text => setCharacterIdInput(text)}
            value={characterIdInput}
          />
          <Button title="Delete" onPress={deleteCharacter} />
        </View>
      )}
      <Button title="Fetch Data" onPress={fetchCharactersDetail} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}
