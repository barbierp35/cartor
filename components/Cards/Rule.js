import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Rule extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.playerName}>{this.props.currentPlayer}</Text>
        <Text style={styles.rule}>{this.props.rule}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playerName: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  rule: {
    height: 50,
    textAlign: 'center'
  }
});

export default (Rule);