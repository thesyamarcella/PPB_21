import React, { Component } from "react";
import { Text, View } from "react-native";

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merek: "Toyota",
      types: { type: "Matik", model: "Calya ADS" },
    };
  }
  render() {
    return (
      <View>
        <Text>Hi i'm a car</Text>
        <Text>Merek : {this.state.merek}</Text>
        <Text>Type : {this.state.types.type}</Text>
        <Text>Model : {this.state.types.model}</Text>
      </View>
    );
  }
}

export default Car;