import React from "react";
import { Button } from "react-native";
import { ButtonProps } from "./type";

export default function PxButton({ title, onPress }: ButtonProps) {
  return <Button title={title} onPress={onPress} />;
}
