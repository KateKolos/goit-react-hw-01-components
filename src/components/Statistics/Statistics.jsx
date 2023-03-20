import PropTypes from 'prop-types';

import { StatsList, StatsTitle, StatsWrapper } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatsWrapper>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          let getRandomColor =
            '#' + Math.floor(Math.random() * 16777215).toString(16);
          return (
            <li
              key={id}
              className="stat-item"
              style={{ backgroundColor: getRandomColor }}
            >
              <span className="stat-item__label">{label}</span>
              <span className="stat-item__percentage">{percentage}%</span>
            </li>
          );
        })}
      </StatsList>
    </StatsWrapper>
  );
};

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
