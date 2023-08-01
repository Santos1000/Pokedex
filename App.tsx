/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Title } from "./src/components";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Helloooo</Text>
        <Title>Whereas a common understanding</Title>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
