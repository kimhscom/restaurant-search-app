import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [Result, setResult] = useState(null);

  const id = navigation.getParam("id");

  console.log(Result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View>
      <Text>Results Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
