import styled from "styled-components";

import Variables from "../Variables";

export const KeyVisualContainer = styled.div`
  width: 100vw;
  height: 100vh;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.2);
  }
`;

export const KeyVisual = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  padding: 8rem 0;
  justify-content: space-around;
`;

export const Link = styled.a`
  display: block;
  width: calc((90vw - 5rem) / 2);
  height: calc((90vw - 5rem) / 2);
  background-color: ${Variables.COLOR.BROWN};
  color: ${Variables.COLOR.WHITE};
  border-radius: 20%;
  line-height: calc((90vw - 5rem) / 2);
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  font-family: serif;
  position: relative;
  box-shadow: 0.1rem 0.1rem 0.6rem 0.1rem ${Variables.COLOR.DARK_BROWN};
`;
