import React from 'react';
import { connect } from 'react-redux';
import { addCheese} from '../actions/actions';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

class Adder extends React.Component {
  state = {
    name: '',
    description: '',
  }
  addCheese = () => {
    if (this.state.inputValue === '') return;
    this.props.dispatchAddCheese({
      name: this.state.name,
      description: this.state.description,
    });
    this.setState({ name: '', description: ''});
  }
  updateInputName = (name) => {
    this.setState({ name })
  }
  updateInputDescription = (description) => {
    this.setState({ description })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>2. Add a cheese of your choice</Text>
        <TextInput
          onChangeText={text => this.updateInputName(text)}
          style={styles.input}
          value={this.state.name}
          placeholder="Name"
        />
        <TextInput
          onChangeText={text => this.updateInputDescription(text)}
          style={styles.input}
          value={this.state.description}
          placeholder="Description"
        />
        <TouchableHighlight
          underlayColor="#ffa012"
          style={styles.button}
          onPress={this.addCheese}
        >
          <Text style={styles.buttonText}>Add Cheese</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#e4e4e4',
    height: 55,
    borderRadius: 3,
    padding: 5,
    marginTop: 12,
  },
  button: {
    backgroundColor: '#ff9900',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
  },
});

function mapStateToProps (state) {
  return {
    cheeses: state.cheeses.cheeses
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchAddCheese: (cheese) => dispatch(addCheese(cheese)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Adder)
