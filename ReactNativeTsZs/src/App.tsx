// Core imports
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// Components imports
import ApiTester from './components/ApiTester';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ApiTester />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
