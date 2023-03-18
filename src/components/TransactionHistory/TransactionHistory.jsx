import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionWrapper,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionWrapper>
      <TransactionTable>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id}>
                <td style={{ textTransform: 'capitalize' }}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </TransactionTable>
    </TransactionWrapper>
  );
};

TransactionHistory.prototype = {
  items: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
