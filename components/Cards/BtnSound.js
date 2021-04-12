import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editConfig } from '../../store/actions/ConfigsAction';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

class BtnSound extends React.Component {
  state = {
    iconVolume: this.props.configsReducer.sound ? 'volume-high' : 'volume-off'
  }

  render() {
    return (
      <View>
        <TouchableOpacity
         style={styles.button}
         onPress={() => this.props.editConfig({key: 'sound', value: !this.props.configsReducer.sound})}
        >
          <MaterialCommunityIcons name={this.props.configsReducer.sound ? 'volume-high' : 'volume-off'} size={24} color="black" />
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
  const { configsReducer } = state
  return { configsReducer }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    editConfig
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BtnSound);