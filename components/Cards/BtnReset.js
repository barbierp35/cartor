import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetCards } from '../../store/actions/CardsAction';

class BtnReset extends React.Component {
  render() {
    return (
      <Button title="Recommencer" onPress={() => this.props.resetCards()}/>
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
    resetCards
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BtnReset);