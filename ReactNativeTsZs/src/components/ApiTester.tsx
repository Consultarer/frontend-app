import React from 'react';
import {apiRoutes} from '../config';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ApiTester = (): JSX.Element => {
  const [textFromApi, setTextFromApi] = React.useState<string>('Wating ...');

  const loadFromApi = async () => {
    const randonNumber = Math.floor(Math.random() * 10);
    await fetch(apiRoutes.apiUrl)
      .then(response => response.json())
      .then(json => {
        setTextFromApi(json.message + ': ' + randonNumber);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={loadFromApi}>
        <Image source={require('../assets/imgs/logo.png')} />
      </TouchableOpacity>
      <Text style={styles.text}>{textFromApi}</Text>
    </View>
  );
};

export default ApiTester;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: '#000',
  },
  button: {
    margin: 10,
  },
});
