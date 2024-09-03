import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboardScreen = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const getUser = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const { username } = JSON.parse(userData);
        setUsername(username);
      }
    };

    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Button
        title="Say Hello"
        onPress={() => alert(`Hello, ${username}!`)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardScreen;
