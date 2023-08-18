/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import PxLogo from "./src/designSystem/button/logo/logo";

export default function App() {
  return (
      <View style={styles.container}>
        <PxLogo/>
      <StatusBar style="auto" />
      </View>
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
