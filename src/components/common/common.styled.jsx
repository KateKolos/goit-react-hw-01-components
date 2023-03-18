import styled from 'styled-components';

export const Wrapper = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  // gap: 20px;
  // padding-top: 20px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0px;
  justify-items: center;
  align-items: center;
`;
