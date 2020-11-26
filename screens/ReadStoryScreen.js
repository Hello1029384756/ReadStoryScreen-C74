import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TextInput, TouchableOpacity} from 'react-native';
import db from '../config.js'
import { SearchBar} from 'react-native-elements'

export default class ReadStory extends React.Component {
constructor() {
  super()
  this.state = {
    search: '',
    allStories: [],
    dataSource: []
  }
}

componentDidMount() {
  this.retrieveStories()
}

updateSearch = (search) => {
  this.setState({ search });
};

retrieveStories = () => {
try {
  var allStories = []
  var stories = db.collection('stories').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      allStories.push(doc.data())
    })
    this.setState({
      allStories: allStories
    })
  }) 
}
catch(error) {
  console.log("Error", error)
  }
}

SearchFilterFunction(text) {
  const newData = this.state.allStories.filter((item)=> {
    const itemData = item.title ;
    const textData = text.toUpperCase();
    return itemData.indexOf(textData) > -1;
  });
  this.setState({
    dataSource: newData,
    search: text,
  });
}

render() {
  return (
    <View>
      <SearchBar
      placeHolder = "Search For Book or Author"
      onChangeText = {this.SearchFilterFunction}
      value = {this.state.search}
      />
      <FlatList
        data={this.state.search === "" ?  this.state.allStories: this.state.dataSource}
        renderItem={({ item }) => (
        <View style={styles.storyInfo}>
          <Text>  Title: {item.title}</Text>
          <Text>  Author : {item.author}</Text>
         </View>
          )}
         keyExtractor={(item, index) => index.toString()}
          /> 
    </View>
    )
  }
}

const styles = StyleSheet.create({
  storyInfo: {
    borderBottomWidth: 2
  }
})
