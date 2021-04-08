import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import ProgressBar from '../components/Cards/ProgressBar';
import CardsVisualisation from '../components/Cards/CardsVisualisation';
import BtnReset from '../components/Cards/BtnReset';

class CardsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ProgressBar/>
        <CardsVisualisation/>
        <BtnReset/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const mapStateToProps = (state) => {
  const { cardssReducer } = state
  return { cardssReducer }
};

export default connect(mapStateToProps)(CardsScreen);