import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { disableCard } from '../../store/actions/CardsAction';
import * as Progress from 'react-native-progress';

class ProgressBar extends React.Component {
  constructor(props){
    super(props)

    this.state = {
			nbCards: Object.keys(this.props.cardsReducer.cards).length,
      nbCardsUnactive: 0
    }
  }

	componentDidUpdate(previousProps, previousState) {
		let nbUnactiveCards = Object.keys(filterObject(previousProps.cardsReducer.cards, 'active', false)).length + 1
		
		if (nbUnactiveCards != this.state.nbCardsUnactive) {
			this.setState({nbCardsUnactive: nbUnactiveCards})
		}
  }

  render() {
    return (
      <View style={styles.container}>
				<Progress.Bar progress={this.state.nbCardsUnactive / this.state.nbCards * 1} />
        <Text>{this.state.nbCardsUnactive} / {this.state.nbCards}</Text>
      </View>
    );
  }
}

const filterObject = (obj, filter, filterValue) => 
   Object.keys(obj).reduce((acc, val) => 
   (obj[val][filter] !== filterValue ? acc : {
       ...acc,
       [val]: obj[val]
   }                                        
), {});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10
  }
});

const mapStateToProps = (state) => {
  const { cardsReducer } = state
  return { cardsReducer }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    disableCard
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);