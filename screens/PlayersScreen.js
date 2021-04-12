import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dumpPlayers } from '../store/actions/PlayersAction';
import HeaderPlayers from '../components/Players/HeaderPlayers';
import PlayersList from '../components/Players/PlayersList';
import InputNewPlayer from '../components/Players/InputNewPlayer';

class PlayersScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderPlayers style={styles.header}/>
        <View style={styles.content}>
          <Text>{ this.props.playersReducer.players.length } Joueurs</Text>
          <PlayersList/>
          <InputNewPlayer/>
          <View style={styles.hr}/>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
                this.props.dumpPlayers()
              }
            >
            <Text>X RESET</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1
  },
  content: {
    flex: 5,
    padding:20,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  },
  hr: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#828282',
    height: 3
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