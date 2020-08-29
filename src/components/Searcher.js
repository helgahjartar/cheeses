import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

class Searcher extends Component {
  state = {
    search: '',
  };

  filterList(cheeseList) {
    return cheeseList.filter(cheeseItem => cheeseItem.name.toLowerCase().includes(this.state.search.toLowerCase()));
  }

  render() {
    const cheeseList = this.props.cheeses;

    return (
      <View>
        <Text style={styles.title}>Search for your favorite cheese</Text>
        <TextInput
          onChangeText={(search) => this.setState({search})}
          style={styles.searchBar}
        />
        {this.filterList(cheeseList).map((cheeseItem, index) => (
          <Text key={index} style={styles.itemText}>{cheeseItem.name}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#e4e4e4',
    height: 55,
    borderRadius: 3,
    padding: 5,
    margin: 30,
  },
  itemText: {
    margin: 10,
    fontSize: 24,
    width: '100%',
    height: 50
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 30,
  },
});

function mapStateToProps (state) {
  return {
    cheeses: state.cheeses.cheeses
  }
}

export default connect(
  mapStateToProps,
)(Searcher)
