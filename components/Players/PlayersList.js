import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

class PlayersList extends React.Component {
  render() {
    return (
      <View>
        {this.props.playersReducer.players.map((element, index) => (
          <View key={index} style={styles.linePlayer}>
            <TextInput
              style={styles.input}
              value={element}
            />
            <TouchableOpacity
              style={styles.button}
              // onPress={() => this.props.editConfig({key: 'sound', value: !this.props.configsReducer.sound})}
              >
                <MaterialCommunityIcons name='trash-can-outline' size={24} color="black" />
              </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linePlayer: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 0
  }
});


const mapStateToProps = (state) => {
  const { playersReducer } = state
  return { playersReducer }
};

export default connect(mapStateToProps)(PlayersList);