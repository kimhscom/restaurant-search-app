import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [Term, setTerm] = useState("");
  const [searchApi, Results, ErrorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === "$" || "$$" || "$$$"
    return Results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={Term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(Term)}
      />
      {ErrorMessage ? <Text>{ErrorMessage}</Text> : null}
      <Text>We have found {Results.length} results</Text>
      <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit pricier" />
      <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
