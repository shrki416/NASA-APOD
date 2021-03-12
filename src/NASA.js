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
  padding: 0.5em;
  color: #0b3d91;
`;

const Footer = styled.footer`
  font-family: nasalization, sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  color: #1e272e;
`;

function NASA({ data }) {
  const { hdurl: image, explanation, date, copyright, title } = data;
  return (
    <>
      <Img src={image} alt={image}></Img>

      {explanation && (
        <Ticker offset="run-in" speed={Number(7)}>
          {() => <Explanation>{`${explanation}.... `}</Explanation>}
        </Ticker>
      )}
      <Footer>
        <h4>{`© ${copyright}`}</h4>
        <h4>{title}</h4>
        <h4>{date}</h4>
      </Footer>
    </>
  );
}

export default NASA;
