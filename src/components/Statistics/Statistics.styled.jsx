import styled from 'styled-components';

export const StatsWrapper = styled.div`
  border-radius: 4px;
  box-shadow: rgba(153, 128, 168, 0.35) 0px 5px 15px;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;

  .stat-item {
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
`;

export const StatsTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  padding: 30px 5px;
  text-align: center;
  text-transform: uppercase;
`;
