import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [Term, setTerm] = useState("");
  const [searchApi, Results, ErrorMessage] = useResults();

  return (
    <View>
      <SearchBar
        term={Term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(Term)}
      />
      {ErrorMessage ? <Text>{ErrorMessage}</Text> : null}
      <Text>We have found {Results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
