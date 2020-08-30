import React from 'react';
import { connect } from 'react-redux';
import UserAvatar from 'react-native-user-avatar';
import Searcher from './Searcher';
import Adder from './Adder';
import { selectCheese} from '../actions/actions';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native';


class Cheeses extends React.Component {
  constructor() {
    super();
    global.selectedCheese = '';
    this.state = {
        show: false,
        menuTitle: 'Cheese Menu',
        search: ''
      };
  }

  selectCheese = (cheese) => {
    this.props.dispatchSelectCheese(cheese)
  }

  showHideMenu = () => {
    if (this.state.show == true) {
      this.setState({ show: false, menuTitle: 'Cheese Menu', search: '' });
    } else {
      this.setState({ show: true, menuTitle: 'Close Menu' });
    }
  };

  filterList(cheeseList) {
    return cheeseList.filter(cheeseItem => cheeseItem.name.toLowerCase().includes(this.state.search.toLowerCase()));
  }

  setCheese(cheese) {
    global.selectedCheese = cheese;
    return this.props.navigation.navigate('CheeseDetail');
  }

  render() {
    const cheeseList = this.props.cheeses;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Cheeses</Text>
          {this.filterList(cheeseList.sort((a, b) => (a.name > b.name) ? 1 : -1)).map((cheeseItem, index) => (
            <View key={index} style={styles.cheeseContainer}>
              <View style={styles.cheese} >
                <UserAvatar size={40} name= {cheeseItem.name.charAt(0)} />
                <Text style={styles.cheeseTitle} onPress={() => this.setCheese(cheeseItem)}> {cheeseItem.name} </Text>
              </View>
              <Text style={styles.cheeseDesc} > {cheeseItem.description}</Text>
            </View>
          ))}
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText} onPress={this.showHideMenu}>{this.state.menuTitle}</Text>
          </TouchableHighlight>
          {this.state.show ? (
          <View>
            <View style={styles.line}/>
            <View style={styles.searchContainer}>
              <Text style={styles.searchTitle}>1. Search for your favorite cheese</Text>
              <TextInput
                onChangeText={(search) => this.setState({search})}
                style={styles.searchBar}
              />
            </View>
            <Adder/>
            <View style={styles.line}/>
          </View>
          ) : null}
        </View>
      </ScrollView>
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
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Avenir-Roman',
    marginTop: 15,
  },
  input: {
    backgroundColor: '#e4e4e4',
    height: 55,
    borderRadius: 3,
    padding: 5,
    marginTop: 12,
  },
  button: {
    backgroundColor: '#F7BF7F',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
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
    fontFamily: 'Avenir-Roman',
  },
  cheeseDesc: {
    fontSize: 15,
    marginLeft: 50,
    fontFamily: 'Avenir-Roman',
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
    fontFamily: 'Avenir-Roman',
    marginTop: 10,
  },
  searchContainer: {
    padding: 20,
  },
  line: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  }
});

function mapStateToProps (state) {
  return {
    cheeses: state.cheeses.cheeses
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchSelectCheese: (cheese) => dispatch(selectCheese(cheese))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cheeses)
