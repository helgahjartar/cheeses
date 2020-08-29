import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import Searcher from './Searcher';
import Adder from './Adder';


class Cheeses extends React.Component {
  constructor() {
    super();
    this.state = {
        show: false,
        search: ''
      };
  }

  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  getFirstLetter(name) {
    return name.charAt(0)
  }

  filterList(cheeseList) {
    return cheeseList.filter(cheeseItem => cheeseItem.name.toLowerCase().includes(this.state.search.toLowerCase()));
  }

  render() {
    const cheeseList = this.props.cheeses;

    return (
      <View style={styles.container}>
      <Text style={styles.title}>Cheeses</Text>
        {this.state.show ? (
          <View>
            <View style={styles.searchContainer}>
              <Text style={styles.searchTitle}>1. Search for your favorite cheese</Text>
              <TextInput
                onChangeText={(search) => this.setState({search})}
                style={styles.searchBar}
              />
            </View>
            <Adder/>
          </View>
        ) : null}
        {this.filterList(cheeseList).map((cheeseItem, index) => (
          <View key={index} style={styles.cheeseContainer}>
            <View style={styles.cheese}>
            <UserAvatar size={40} name= {this.getFirstLetter(cheeseItem.name)} />
            <Text style={styles.cheeseTitle}> {cheeseItem.name} </Text>
            </View>
            <Text style={styles.cheeseDesc} > {cheeseItem.description}</Text>
          </View>        ))}
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText} onPress={this.ShowHideComponent}>Got Cheese?</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    fontFamily: 'Avenir-Roman',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Avenir-Roman',
    marginTop: 30,
  },
  input: {
    backgroundColor: '#e4e4e4',
    height: 55,
    borderRadius: 3,
    padding: 5,
    marginTop: 12,
  },
  button: {
    backgroundColor: '#ff9904',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Avenir-Roman',
  },
  cheeseContainer: {
    marginTop: 20,
  },
  cheese: {
    marginTop: 12,
    flex: 1,
    flexDirection: 'row',
  },
  cheeseTitle: {
    fontSize: 25,
    marginLeft: 5,
  },
  cheeseDesc: {
    fontSize: 15,
    marginLeft: 50,
  },
  searchBar: {
    backgroundColor: '#e4e4e4',
    height: 55,
    borderRadius: 3,
    padding: 5,
    marginTop: 12,
  },
  searchTitle: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Avenir-Roman',
    marginTop: 30,
  },
  searchContainer: {
    padding: 20,
  }
});

function mapStateToProps (state) {
  return {
    cheeses: state.cheeses.cheeses
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchAddCheese: (cheese) => dispatch(addCheese(cheese)),
    dispatchdeleteCheese: (cheese) => dispatch(deleteCheese(cheese))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cheeses)
