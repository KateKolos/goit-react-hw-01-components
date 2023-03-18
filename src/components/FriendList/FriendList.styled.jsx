import styled from 'styled-components';

export const FriendsWrapper = styled.div`
  width: 300px;
  border: 1px solid rgba(153, 128, 168, 0.35);
  border-radius: 4px;
  // padding: 15px;
  box-shadow: rgba(153, 128, 168, 0.35) 0px 5px 15px;
`;

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px 45px;
`;

export const FriendsListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  border: 1px solid rgba(153, 128, 168, 0.35);
  border-radius: 4px;
  padding: 10px;
  gap: 10px;
  box-shadow: rgba(153, 128, 168, 0.35) 0px 5px 15px;

  .status {
    height: 10px;
    width: 10px;
    border-radius: 100px;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
  }
  .avatar {
  }
  .name {
    color: rgb(61 30 70);
  }
`;
