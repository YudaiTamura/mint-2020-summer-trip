import styled from 'styled-components';

import Variables from '../Variables';

export const HeaderTitle = styled.h1`
  color: ${Variables.COLOR.BASE};
  background-color: ${Variables.COLOR.OLIVE};
  width: 100vw;
  height: ${Variables.HEADER_HEIGHT};
  line-height: ${Variables.HEADER_HEIGHT};
  text-align: center;
  font-weight: 200;
  letter-spacing: 0.1rem;
`;
