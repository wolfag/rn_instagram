/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, View } from "react-native";

import AuthorRow from "./src/components/AuthorRow";
import Card from "./src/components/Card";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          fullname={"First Last"}
          linkText={"Comments"}
          onPressLinkText={() => {
            console.log("Press");
          }}
          image={{ uri: "https://unsplash.it/600/600" }}
        />
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
