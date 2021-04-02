import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

class PlayersList extends React.Component {
  render() {
    return (
      <View>
        {this.props.players.players.map((element, index) => (
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const mapStateToProps = (state) => {
  const { players } = state
  return { players }
};

export default connect(mapStateToProps)(PlayersList);