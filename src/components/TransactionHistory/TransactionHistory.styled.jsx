import styled from 'styled-components';

export const TransactionWrapper = styled.div`
  width: 300px;
  border: 1px solid rgba(153, 128, 168, 0.35);
  border-radius: 4px;
  box-shadow: rgba(153, 128, 168, 0.35) 0px 5px 15px;
`;

export const TransactionTable = styled.table`
  text-align: center;

  th,
  td {
    border: 1px solid #ddd;
    padding: 0 12px;
  }
  tr:hover {
    background-color: rgba(153, 128, 168, 0.5);
  }
`;
