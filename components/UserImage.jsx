import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default class UserImage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 200, height: 200, borderRadius: 125 }}
          source={{
            uri:
              "https://media-exp2.licdn.com/dms/image/C5603AQE-BJdNxcv43Q/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=fGHMX21UZF68DDg69Xl15wL3jCaOiW0WALMQKU5rTik"
          }}
        />
        <Text style={styles.name}>{this.props.fullName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },

  name: {
    padding: 10,
    fontSize: 40,
    color: "black"
  }
});
