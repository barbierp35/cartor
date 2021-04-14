import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editConfig } from '../../store/actions/ConfigsAction';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as Speech from 'expo-speech';

class BtnSound extends React.Component {
  state = {
    iconVolume: this.props.configsReducer.sound ? 'volume-high' : 'volume-off'
  }

  toggleSound() {
    Speech.stop()
    this.props.editConfig({key: 'sound', value: !this.props.configsReducer.sound})
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.toggleSound()}
      >
        <MaterialCommunityIcons name={this.props.configsReducer.sound ? 'volume-high' : 'volume-off'} size={24} color="black" />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginLeft: 20
  }
});

const mapStateToProps = (state) => {
  const { configsReducer } = state
  return { configsReducer }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    editConfig
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BtnSound);