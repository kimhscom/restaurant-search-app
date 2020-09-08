import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [Term, setTerm] = useState("");

  return (
    <View>
      <SearchBar
        term={Term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log("term was submitted")}
      />
      <Text>Search Screen</Text>
      <Text>{Term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
