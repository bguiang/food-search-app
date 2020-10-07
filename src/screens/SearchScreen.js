import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  //console.log(props);
  const [searchText, setSearchText] = useState("");
  const [searchAPI, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price = $ || $$ || $$$

    return results.filter((result) => {
      return result.price == price;
    });
  };

  return (
    <>
      <SearchBar
        searchText={searchText}
        onSearchTextChange={(newSearchText) => setSearchText(newSearchText)}
        onSearchSubmit={() => searchAPI(searchText)}
      />
      {errorMessage ? (
        <Text style={{ marginLeft: 15 }}>{errorMessage}</Text>
      ) : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
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
