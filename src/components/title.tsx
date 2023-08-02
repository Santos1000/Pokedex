import React from "react";
import { TitleProps } from "./type";
import * as Styled from './title.styled';


export function Title({ children }: TitleProps) {
  return <Styled.Title>{children}</Styled.Title>;
}
