import React from "react";
import Ticker from "react-ticker";
import styled from "styled-components";

const Img = styled.img`
  width: 60vw;
  height: auto;
  border-radius: 5px;
`;

const Explanation = styled.h3`
  white-space: nowrap;
  /* padding: 1em; */
  color: #0b3d91;
`;

const Footer = styled.footer`
  /* padding: 1em; */
  font-family: nasalization, sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function NASA({ copyright, date, title, image, explanation }) {
  return (
    <>
      <Img src={image} alt={image}></Img>

      {explanation ? (
        <Ticker offset="run-in" speed={Number(7)}>
          {() => <Explanation>{`${explanation}.... `}</Explanation>}
        </Ticker>
      ) : null}
      <Footer>
        <h4>{`© ${copyright}`}</h4>
        <h4>{title}</h4>
        <h4>{date}</h4>
      </Footer>
    </>
  );
}

export default NASA;
