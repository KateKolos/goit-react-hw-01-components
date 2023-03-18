import styled from 'styled-components';

export const UserCard = styled.div`
  width: 300px;
  border: 1px solid rgba(153, 128, 168, 0.35);
  box-shadow: rgba(153, 128, 168, 0.35) 0px 5px 15px;
  border-radius: 4px;
  padding: 20px 0;
  text-align: center;
  margin: 0 auto;
`;

export const UserInfo = styled.div`
  .user-avatar {
    width: 150px;
  }

  .user-name {
  }

  .user-tag {
  }

  .user-location {
  }
`;

export const UserStatistics = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

export const StatisticsItem = styled.li`
  display: flex;
  gap: 5px;
`;
