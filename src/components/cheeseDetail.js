import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import UserAvatar from 'react-native-user-avatar';
import { deleteCheese} from '../actions/actions';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class CheeseDetail extends React.Component {

  deleteCheese = (cheese) => {
    this.props.dispatchDeleteCheese(cheese)
  }

  render() {
    const cheese = this.props.cheese;
    return(
      <View style={styles.cheeseContainer}>
        <View style={styles.cheese} >
          <UserAvatar size={70} style={styles.thumb} name= {selectedCheese.name.charAt(0)} />
          <Text style={styles.title}> {global.selectedCheese.name} </Text>
        </View>
        <View style={styles.line}/>
        <Text style={styles.cheeseDesc} > {global.selectedCheese.description} </Text>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText} onPress={() => this.deleteCheese(global.selectedCheese)}>Delete me</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cheeseContainer: {
    marginTop: 10,
    fontFamily: 'Avenir-Roman',
  },
  title: {
    fontSize: 45,
    fontFamily: 'Avenir-Roman',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#F7BF7F',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Avenir-Roman',
  },
  cheese: {
    marginTop: 12,
    flexDirection: 'row',
  },
  cheeseDesc: {
    fontSize: 15,
    marginLeft: 30,
    fontFamily: 'Avenir-Roman',
  },
  thumb: {
    margin: 15,
  },
  line: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 30,
    marginRight: 30,
  }
});

function mapStateToProps (state) {
  return {
    cheese: state.cheese
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchDeleteCheese: (cheese) => dispatch(deleteCheese(cheese))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheeseDetail)
