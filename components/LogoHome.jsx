import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default class LogoHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: this.props.width,
            height: this.props.height,
            borderRadius: this.props.radius
          }}
          source={require("../assets/images/LogoWhiteBackground.png")}
        />
        <Text style={styles.logoText}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17
  },

  logoText: {
    padding: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff"
  }
});
