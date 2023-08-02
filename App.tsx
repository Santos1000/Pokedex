/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { StatusBar } from "expo-status-bar";
import {  useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { StyleSheet, Text, View } from "react-native";
import { Title } from "./src/components";


export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: Poppins_400Regular,
    PoppinsBold: Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <Text>Helloooo</Text>
        <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 30 }}>Inter Black</Text>
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
