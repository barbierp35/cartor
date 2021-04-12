import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class HeaderCards extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tirer les cartes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFFFFF',
    height: 70
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default (HeaderCards);