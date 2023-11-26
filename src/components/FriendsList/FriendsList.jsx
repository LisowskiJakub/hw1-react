import css from './Friends.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
export const FriendsList = ({ friends }) => (
    <ul className={css.friendsList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
        )
        )}
    </ul>
)

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number
    }))
};