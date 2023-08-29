import React from "react";
import * as Styled from './logo.styled';


export default function PxLogo(): JSX.Element {
  return (
    <Styled.containerView>
      <Styled.ImageBox source={require('./images/image2.png')} alt='Pokemon logo' testID="Logo"></Styled.ImageBox>
    </Styled.containerView>
 )
}
