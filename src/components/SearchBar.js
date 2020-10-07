import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = (props) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={props.searchText}
        onChangeText={(newSearchText) =>
          props.onSearchTextChange(newSearchText)
        }
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={() => props.onSearchSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f0eeee",
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 5,
  },

  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
