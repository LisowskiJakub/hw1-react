import { Profile } from './Profile/Profile';
import user from './Profile/user'
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data';
import { FriendsList } from './FriendsList/FriendsList';
import friends from './FriendsList/friends'
import { TransactionHistory } from './transaction/TransactionHistory';
import Transactions from './transaction/transactions'
export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}>
      </Profile>

      <Statistics stats={data} />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory data={Transactions} />

    </div>
  );
};
