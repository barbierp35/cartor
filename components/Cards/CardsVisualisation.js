import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nextCard, disableCard } from '../../store/actions/CardsAction';

class CardsVisualisation extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      imgSrc: require('../../assets/cards/back_card.png')
    }
  }

  nextCard() {
    this.props.disableCard(this.props.cardsReducer.showedCard)
    this.props.nextCard()
    setTimeout( () => {
      this.setState({imgSrc: this.props.cardsReducer.cards[this.props.cardsReducer.showedCard]['src']})
    }, 500);
  }

  render() {
    return (
      <View>
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
});

const mapStateToProps = (state) => {
  const { cardsReducer } = state
  return { cardsReducer }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    nextCard, disableCard
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CardsVisualisation);