import React from "react";
import styled from "styled-components";

import himejijoImg from "../images/himejijo1.jpg";

import Variables from "./Variables";

const KeyVisual = styled.img`
  width: 100%;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  padding: 8rem 0;
  justify-content: space-around;
`;

const Link = styled.a`
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

const TopPage = () => {
  return (
    <section className="top-page">
      <KeyVisual src={himejijoImg} />
      <Links>
        <Link href="./schedule">日程</Link>
        <Link href="./stay">宿泊先</Link>
      </Links>
    </section>
  );
};

export default TopPage;
