import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

export default function App() {
  const [characterData, setCharacterData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character?page=1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then(data => {
        setCharacterData(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <ScrollView>
      {error && <Text>Error: {error}</Text>}
      {characterData && (
        <View>
          <Text>Count: {characterData.info.count}</Text>
          <Text>Pages: {characterData.info.pages}</Text>
          <Text>Next: {characterData.info.next}</Text>
          <Text>Prev: {characterData.info.prev}</Text>
        </View>
      )}
      <Button title="Refresh" onPress={() => window.location.reload()} />
    </ScrollView>
  );
}