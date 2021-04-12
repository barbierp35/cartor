import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import ProgressBar from '../components/Cards/ProgressBar';
import CardsVisualisation from '../components/Cards/CardsVisualisation';
import BtnReset from '../components/Cards/BtnReset';
import BtnSound from '../components/Cards/BtnSound';

class CardsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ProgressBar/>
        <CardsVisualisation/>

        <View className="btnList">
          <BtnReset/>
          <BtnSound/>
        </View>
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
  btnList: {
    flex: 1,
    flexDirection: 'row'
  }
});

const mapStateToProps = (state) => {
  const { cardssReducer } = state
  return { cardssReducer }
};

export default connect(mapStateToProps)(CardsScreen);