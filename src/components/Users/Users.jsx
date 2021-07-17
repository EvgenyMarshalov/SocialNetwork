import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';


const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, ...props }) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount} pageSize={pageSize} />
            <div>
                {
                    props.users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress}
                        follow={props.follow} unfollow={props.unfollow} />
                    )
                }
            </div>
        </div>
    );
}

export default Users;