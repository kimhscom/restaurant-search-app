import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  return (
    <View>
      <Text>Results Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
