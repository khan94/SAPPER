/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var AwesomeProject = React.createClass({
  render: function() {
    int i = Math.random();
    var online = false;
    var flagUp = false;
    
    //square:
    //  mine(i,j): if mine->true/else-false
    //  open(i,j): has the user opened the square yet, at the end, all mines are open
    //  flagged(i,j): has the user flagged the square
    //  value: #mines around, if(mine)=-1/else='initial value' = 0
    //  icon(i,j): based on above values, an icon to appear for the user
    //  FIRST: onPress(i,j)
    //  SECOND: identify type of icon
    //  THIRD: identify type of 
    
    
    // this is wrong, instead of variable, create an object square
    // add constructor to set if mine, i,j, etc. if there is etc.
    // create a list or grid(i,j) for the "MINNOE POLE"
    
    //ABOVE CONT.: maybe just create nxn=square(n) as we go along with buttons/pressablehighlights
    
    var square = {
        i = 0,
        j = 0,
        mine: 0, // must be set using a mine generator algorithm, based on location
        open: false,
        flagged: false,
        value: this.mine ? -1:0,
        icon: null,
    };

//ICON TYPES:
// OPEN BUTTON
// NULL (not pressable)
// MINE
// RED MINE
// numbers: 1-8
// FLAG
// FLAG (OFF)
// SMILEY FACE


//WE have squares, we need method to handle pressing on each square, by row and column


// we need to position the squares on the screen
// TouchableElement?

    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
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
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
