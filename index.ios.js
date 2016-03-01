/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var Button = require('react-native-button');
var React = require('react-native');
var TouchableHighLight = require('TouchableHighlight');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
//  Button
} = React;

var AwesomeProject = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Nativee!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <View style={styles.rowContainer}>
          <TouchableHighLight onPress ={this._handlePress}>
            <Image source={require('./img/smiley/START/START.png')}/>
          </TouchableHighLight> 
          <Button onPress ={this._handlePress}>
            <Image source={require('./img/flag/FLAG.png')}/>
          </Button>
        </View>    
      </View>
        // find out how to create different activities, maybe new view?
        // find out how to margin and alias views, buttons, and texts on a VIEW
        // 1st, 10x10 with 10 mines, randomly on the table, but use algorithm, so that the distribution is more or less even
        // create a method to handlePress(i,j) --- parameters: "i" and "j" are coordinates of a pressed button
        //2nd, create 2 more fields, different sizes
    );
},
_handlePress(event){
  console.log("CLICK!!");  
},

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  rowContainer: {
    flexDirection: 'row',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
