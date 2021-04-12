import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import ProgressBar from '../components/Cards/ProgressBar';
import CardsVisualisation from '../components/Cards/CardsVisualisation';
import HeaderCards from '../components/Cards/HeaderCards';
import BtnReset from '../components/Cards/BtnReset';
import BtnSound from '../components/Cards/BtnSound';

class CardsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderCards style={styles.header}/>
        <View style={styles.content}>
          <ProgressBar/>
          <CardsVisualisation/>

          <View style={styles.btnList}>
            <BtnReset/>
            <BtnSound/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1
  },
  content: {
    flex: 5,
    padding:20,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  btnList: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  }
});

const mapStateToProps = (state) => {
  const { cardssReducer } = state
  return { cardssReducer }
};

export default connect(mapStateToProps)(CardsScreen);