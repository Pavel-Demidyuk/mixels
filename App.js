import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const colors = [
  "#C0392B",
  "#9B59B6",
  "#2980B9",
  "#1ABC9C",
  "#F1C40F",
  "#E67E22",
  "#F0F3F4",
  "#2C3E50"
]
export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      mixelColors : []
    }

  }

  onMixelPress (mixelNumber) {

    console.log(mixelNumber)
    let tempColors = this.state.mixelColors

    if (typeof tempColors[mixelNumber] === "undefined" || tempColors[mixelNumber] + 1 === colors.length ) {
      tempColors[mixelNumber] = 0
    }
    else {
      tempColors[mixelNumber] = tempColors[mixelNumber] % colors.length + 1
    }

    this.setState({mixelColors: tempColors})
  }

  render() {
    let mixels = [], suggests = []


    for (let i =0 ; i <64 ; i++) {
      mixels.push(
        <TouchableOpacity key={i} onPress={() => { this.onMixelPress(i) }} style={[styles.mixel, {backgroundColor: colors[this.state.mixelColors[i]]}]}/>
      )
    }

    for (let colorNum in colors) {
      suggests.push(
        <TouchableOpacity key={'s' + colorNum} style={[styles.mixel, {backgroundColor: colors[colorNum]}]}/>
      )
    }


    return (
      <View style={styles.container}>

        {mixels}


         {suggests}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '20%'
  },

  mixel: {
    width: '12%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    aspectRatio: 1
  }
});
