import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dumpPlayers } from '../store/actions/PlayersAction';
import PlayersList from '../components/Players/PlayersList';
import InputNewPlayer from '../components/Players/InputNewPlayer';

class PlayersScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{ this.props.playersReducer.players.length } Joueurs</Text>
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
  const { playersReducer } = state
  return { playersReducer }
};
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    dumpPlayers
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PlayersScreen);