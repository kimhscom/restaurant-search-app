import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

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
      <ResultsList title="Cost Effective" />
      <ResultsList title="Bit pricier" />
      <ResultsList title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
