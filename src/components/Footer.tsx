import React from "react";
import styled from "styled-components";

import Variables from "./Variables";

const FooterItem = styled.p`
  height: ${Variables.FOOTER_HEIGHT};
  width: 100%;
  line-height: ${Variables.FOOTER_HEIGHT};
  text-align: center;
  font-weight: 100;
  font-size: 12px;
  background-color: ${Variables.COLOR.OLIVE};
  color: ${Variables.COLOR.WHITE};
`;

const Footer = () => {
  return (
    <div>
      <FooterItem>©︎ Yudai Tamura FROM MINT</FooterItem>
    </div>
  );
};

export default Footer;
