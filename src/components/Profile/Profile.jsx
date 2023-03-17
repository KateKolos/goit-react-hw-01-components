import PropTypes from 'prop-types';

import {
  UserCard,
  UserInfo,
  UserStatistics,
  StatisticsItem,
} from './Profile.styled';

export const Profile = ({ userData }) => {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <UserCard className="profile">
      <UserInfo className="description">
        <img src={avatar} alt="User avatar" className="user-avatar" />
        <p className="user-name">{username}</p>
        <p className="user-tag">{tag}</p>
        <p className="user-location">{location}</p>
      </UserInfo>

      <UserStatistics className="stats">
        <StatisticsItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatisticsItem>
        <StatisticsItem>
          <span className="label">Vievs</span>
          <span className="quantity">{stats.views}</span>
        </StatisticsItem>
        <StatisticsItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StatisticsItem>
      </UserStatistics>
    </UserCard>
  );
};

Profile.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
