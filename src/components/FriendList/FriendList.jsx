import PropTypes from 'prop-types';

import { FriendsListItem, FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ isOnline, avatar, name, id }) => {
        return (
          <FriendsListItem key={id} isOnline={isOnline}>
            <span className="status">{isOnline}</span>
            <img
              className="avatar"
              src={avatar}
              alt="user avatar"
              width="55px"
            />
            <p className="name">{name}</p>
          </FriendsListItem>
        );
      })}
    </FriendsList>
  );
};

FriendList.prototype = {
  FriendList: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
