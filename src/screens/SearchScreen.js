import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
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
    <>
      <SearchBar
        term={Term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(Term)}
      />
      {ErrorMessage ? <Text>{ErrorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
