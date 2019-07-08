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

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AuthorRow
          fullname={"First Last"}
          linkText={"Comments"}
          onPressLinkText={() => {
            console.log("Press");
          }}
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
