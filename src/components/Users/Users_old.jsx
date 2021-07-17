import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';


const Users = (props) => {
    let requestUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items);
            });
            // props.setUsers([
            //     { id: 1, photoUrl: 'https://russiancouncil.ru/upload/main/3b8/kiku.jpg', followed: false, fullname: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
            //     { id: 2, photoUrl: 'https://russiancouncil.ru/upload/main/3b8/kiku.jpg', followed: true, fullname: 'Sasha', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } },
            //     { id: 3, photoUrl: 'https://russiancouncil.ru/upload/main/3b8/kiku.jpg', followed: false, fullname: 'Igor', status: 'I am a boss too', location: { city: 'Ivanovo', country: 'Russia' } }
            // ])
        }
    }

    return (
        <div>
            <button onClick={requestUsers}>Get Users</button> 
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small: userPhoto} className={styles.userPhoto} />
                        </div>
                        <div>
                            { u.followed 
                            ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button> 
                            : <button onClick={ () => { props.follow(u.id) } }>Follow</button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div> )
            }
        </div>
    );
}

export default Users;