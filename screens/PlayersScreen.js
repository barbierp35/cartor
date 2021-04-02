import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dumpPlayers } from '../store/actions/PlayersAction';
import PlayersList from '../components/Players/PlayersList';
import InputNewPlayer from '../components/Players/InputNewPlayer';

class PlayersScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{ this.props.players.players.length } Joueurs</Text>
        <PlayersList/>
        <InputNewPlayer/>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
              this.props.dumpPlayers()
            }
          >
          <Text>X RESET</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
});

const mapStateToProps = (state) => {
  const { players } = state
  return { players }
};
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    dumpPlayers
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PlayersScreen);