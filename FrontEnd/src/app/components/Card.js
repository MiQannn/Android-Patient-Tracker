import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function Card({
  title,
  subTitle,
  subTitle2,
  subTitle3,
  subTitle4,
  subTitle5,
  subTitle6,
  subTitle7,
  // image,
}) {
  return (
    <View style={styles.card}>
      {/* <Image style={styles.image} source={image} /> */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subTitle} numberOfLines={1}>
          {subTitle}
        </Text>
        <Text style={styles.subTitle} numberOfLines={1}>
          {subTitle2}
        </Text>
        <Text style={styles.subTitle} numberOfLines={1}>
          {subTitle3}
        </Text>
        <Text style={styles.subTitle} numberOfLines={2}>
          {subTitle4}
        </Text>
        <Text style={styles.subTitle} numberOfLines={2}>
          {subTitle5}
        </Text>
        <Text style={styles.subTitle} numberOfLines={2}>
          {subTitle6}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: colors.white,
    marginBottom: 2,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 5,
  },
  image: {
    width: "80%",
    height: 0,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 1,
  },
});

export default Card;
