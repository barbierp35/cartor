import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetCards } from '../../store/actions/CardsAction';
import { resetPlayer } from '../../store/actions/PlayersAction';

class BtnReset extends React.Component {
  resetGame() {
    this.props.resetCards()
    this.props.resetPlayer()
  }

  render() {
    return (
      <Button title="Recommencer" onPress={() => this.resetGame()}/>
    );
  }
}

const styles = StyleSheet.create({
});

const mapStateToProps = (state) => {
  const { cardsReducer } = state
  return { cardsReducer }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    resetCards, resetPlayer
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BtnReset);