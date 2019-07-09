import React from "react";
import { FlatList, View } from "react-native";
import PropTypes from "prop-types";

import { getImageFromId } from "../utils/api";
import Card from "./Card";

const keyExtractor = ({ id }) => id.toString();

export default class CardList extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired
      })
    ).isRequired
  };

  renderItem = ({ item }) => {
    return (
      <Card
        fullname={item.author}
        image={{
          uri: getImageFromId(item.id)
        }}
      />
    );
  };

  render() {
    const { items } = this.props;
    return (
      <FlatList
        data={items}
        renderItem={this.renderItem}
        keyExtractor={keyExtractor}
      />
    );
  }
}
