import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { deletePlayer } from '../../store/actions/PlayersAction';

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
              onPress={() => this.props.deletePlayer(element)}
              >
                <MaterialCommunityIcons name='trash-can-outline' size={24} color="red" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linePlayer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
  },
  button: {
    padding: 0
  }
});


const mapStateToProps = (state) => {
  const { playersReducer } = state
  return { playersReducer }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    deletePlayer
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);