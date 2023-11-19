import { Profile } from './Profile/Profile';
import user  from './Profile/user'

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
    </div>
  );
};
