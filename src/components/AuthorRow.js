import React from "react";
import {
  StyleSheet,
  ColorPropType,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";

import Avatar from "./Avatar";

export default function AuthorRow({ fullname, linkText, onPressLinkText }) {
  return (
    <View style={styles.container}>
      <Avatar size={35} initials={"TN"} backgroundColor={"red"} />
      <Text style={styles.text} numberOfLines={1}>
        {fullname}
      </Text>
      {!!linkText && (
        <TouchableOpacity onPress={onPressLinkText}>
          <Text numberOfLines={1}>{linkText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

AuthorRow.propTypes = {
  fullname: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10
  },
  text: {
    flex: 1,
    marginHorizontal: 6
  }
});
