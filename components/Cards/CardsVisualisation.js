import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nextCard, disableCard, resetCards } from '../../store/actions/CardsAction';
import * as Speech from 'expo-speech';

class CardsVisualisation extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      imgSrc: require('../../assets/cards/back_card.png')
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
    this.props.nextCard()
    setTimeout( () => {
      this.setState({imgSrc: this.props.cardsReducer.cards[this.props.cardsReducer.showedCard]['src']})
      if (this.props.configsReducer.sound) {
        Speech.stop()
        Speech.speak(this.props.playersReducer.players[Math.floor(Math.random()*this.props.playersReducer.players.length)] + this.props.cardsReducer.cards[this.props.cardsReducer.showedCard]['rule']);
      }
    }, 100);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.nextCard()}>
          <Image
            source={this.state.imgSrc}
            style={{width: 196, height: 300}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

const mapStateToProps = (state) => {
  const { configsReducer, cardsReducer, playersReducer } = state
  return { configsReducer, cardsReducer, playersReducer }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    nextCard, disableCard, resetCards
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CardsVisualisation);