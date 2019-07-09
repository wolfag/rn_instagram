/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, View } from "react-native";

import CardList from "./src/components/CardList";

const items = [
  { id: 0, author: "Bob Ross" },
  { id: 1, author: "Chuck Norris" }
];
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardList items={items} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10
  }
});

export default App;
