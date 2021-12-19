import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nextCard, disableCard, resetCards } from '../../store/actions/CardsAction';
import { nextPlayer } from '../../store/actions/PlayersAction';
import * as Speech from 'expo-speech';
import Rule from './Rule';

class CardsVisualisation extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      imgSrc: require('../../assets/cards/back_card.png'),
      rule: '',
      currentPlayer: ''
    }
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.cardsReducer.showedCard !== null && this.props.cardsReducer.showedCard === null) {
      this.setState({imgSrc: require('../../assets/cards/back_card.png')})
    }
  }

  nextCard() {
    if (!this.props.playersReducer.players.length) return;
    
    this.props.disableCard(this.props.cardsReducer.showedCard)
    this.props.nextPlayer()
    this.props.nextCard()
    setTimeout( () => {
      this.setState({imgSrc: this.props.cardsReducer.cards[this.props.cardsReducer.showedCard]['src']})
      this.setState({currentPlayer: this.props.playersReducer.currentPlayer})
      this.setState({rule: this.props.cardsReducer.cards[this.props.cardsReducer.showedCard]['rule']})

      if (this.props.configsReducer.sound) {
        Speech.stop()
        const determining = this.props.cardsReducer.cards[this.props.cardsReducer.showedCard]['number'] === 'Dame' ? 'une' : 'un';
        Speech.speak(this.props.playersReducer.currentPlayer + ' pioche ' + determining + ' ' + this.props.cardsReducer.cards[this.props.cardsReducer.showedCard]['number']);
      }
    }, 100);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.nextCard()}>
          <Image
            source={this.state.imgSrc}
            style={styles.image}
          />
        </TouchableOpacity>
        <Rule currentPlayer={this.state.currentPlayer} rule={this.state.rule} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  image: {
    alignSelf: 'center',
    width: 196,
    height: 300
  }
});

const mapStateToProps = (state) => {
  const { configsReducer, cardsReducer, playersReducer } = state
  return { configsReducer, cardsReducer, playersReducer }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    nextCard, disableCard, resetCards, nextPlayer
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CardsVisualisation);