import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardsVisualisation from '../components/Cards/CardsVisualisation';

class CardsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardsVisualisation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  const { cardssReducer } = state
  return { cardssReducer }
};

export default connect(mapStateToProps)(CardsScreen);