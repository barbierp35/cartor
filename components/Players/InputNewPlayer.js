import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPlayer } from '../../store/actions/PlayersAction';

class InputNewPlayer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      newPlayer: ''
    }
  }

  createPlayer() {
    this.props.addPlayer(this.state.newPlayer)
    this.setState({newPlayer:''})
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Nouveau Joueur"
          value={this.state.newPlayer}
          onChangeText={(text) => this.setState({newPlayer:text})}
        />
        <Button style={styles.button} title="Ajouter" onPress={() => this.createPlayer()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

const mapStateToProps = (state) => {
  const { players } = state
  return { players }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addPlayer
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(InputNewPlayer);