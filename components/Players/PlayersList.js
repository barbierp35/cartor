import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

class PlayersList extends React.Component {
  render() {
    return (
      <View>
        {this.props.playersReducer.players.map((element, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={element}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
});


const mapStateToProps = (state) => {
  const { playersReducer } = state
  return { playersReducer }
};

export default connect(mapStateToProps)(PlayersList);