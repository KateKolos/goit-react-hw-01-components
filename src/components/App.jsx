import userData from '../JSON/user';
import statisticsData from '../JSON/data';
import friendsData from '../JSON/friends';
import transactionData from '../JSON/transactions';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import { Wrapper } from './common/common.styled';
export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   alignItems: 'center',
    //   // fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Wrapper>
        <Profile userData={userData} />
        <Statistics stats={statisticsData} title="Upload stats" />
        <FriendList friends={friendsData} />
        <TransactionHistory items={transactionData} />
      </Wrapper>
    </div>
  );
};
