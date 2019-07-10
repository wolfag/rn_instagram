/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, View, Platform, Modal, AsyncStorage } from "react-native";

import Feed from "./src/screens/Feed";
import Comments from "./src/screens/Comments";

const ASYNC_STORAGE_COMMENTS_KEY = "ASYNC_STORAGE_COMMENTS_KEY";
class App extends React.Component {
  state = {
    commentsForItem: {},
    showModal: false,
    selectItemId: null
  };

  async componentDidMount() {
    try {
      const commentsForItem = await AsyncStorage.getItem(
        ASYNC_STORAGE_COMMENTS_KEY
      );
      this.setState({
        commentsForItem: commentsForItem ? JSON.parse(commentsForItem) : {}
      });
    } catch (error) {
      console.log(error);
    }
  }

  openCommentScreen = id => {
    this.setState({ showModal: true, selectItemId: id });
  };

  closeCommentScreen = () => {
    this.setState({ showModal: false, selectItemId: null });
  };

  onSubmitComment = async text => {
    const { selectItemId, commentsForItem } = this.state;
    const comments = commentsForItem[selectItemId] || [];

    const updated = {
      ...commentsForItem,
      [selectItemId]: [...comments, text]
    };

    this.setState({ commentsForItem: updated });

    try {
      await AsyncStorage.setItem(
        ASYNC_STORAGE_COMMENTS_KEY,
        JSON.stringify(updated)
      );
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { commentsForItem, showModal, selectItemId } = this.state;
    return (
      <View style={styles.container}>
        <Feed
          style={styles.feed}
          commentsForItem={commentsForItem}
          onPressComments={this.openCommentScreen}
        />
        <Modal
          visible={showModal}
          animationType="slide"
          onRequestClose={this.closeCommentScreen}
        >
          <Comments
            style={styles.container}
            comments={commentsForItem[selectItemId] || []}
            onClose={this.closeCommentScreen}
            onSubmitComment={this.onSubmitComment}
          />
        </Modal>
      </View>
    );
  }
}

const platformVersion =
  Platform.OS === "ios" ? parseInt(Platform.Version, 10) : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10
  },
  feed: {
    flex: 1,
    marginTop: Platform.OS === "android" || platformVersion < 11 ? 10 : 0
  },
  comments: {
    flex: 1,
    marginTop: Platform.OS === "ios" && platformVersion < 11 ? 10 : 0
  }
});

export default App;
