import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [Term, setTerm] = useState("");
  const [Results, setResults] = useState([]);
  const [ErrorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: Term,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };

  return (
    <View>
      <SearchBar term={Term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {ErrorMessage ? <Text>{ErrorMessage}</Text> : null}
      <Text>We have found {Results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
