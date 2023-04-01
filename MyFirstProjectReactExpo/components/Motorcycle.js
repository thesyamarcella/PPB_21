import React from "react";
import { Text, View } from "react-native";

var name = "Honda";

const Motorcycle = () => {
  return (
    <View>
      <Text>Hi i'm a motorcycle</Text>
      <Text>Merk : {name}</Text>
      <Text>Type : {types.type}</Text>
      <Text>Model : {types.model}</Text>
      <Text>Model : {types.harga}</Text>
    </View>
  );
};

const types = { type: "Matic", model: "Vario", harga: 15000 };

export default Motorcycle;