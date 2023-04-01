import React from "react";
import { Text, View } from "react-native";

function Bicycle() {
  return (
    <View>
      <Text>Hi i'm a bicycle</Text>
      <TakeARide />
      {Place2Go()}
    </View>
  );
}

export default Bicycle;

const TakeARide = () => {
  return <Text>Let's go riding with me</Text>;
};

function Place2Go() {
  return <Text>We'r going to south west now, come on.</Text>;
}