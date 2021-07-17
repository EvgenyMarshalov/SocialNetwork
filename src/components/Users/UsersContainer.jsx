import { connect } from 'react-redux';
import { follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow } from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { compose } from 'redux';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsersSuperSelector } from '../../redux/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    // toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    //    users: getUsers(state),
       users: getUsersSuperSelector(state),
       pageSize: getPageSize(state),
       totalUsersCount: getTotalUsersCount(state),
       currentPage: getCurrentPage(state),
       isFetching: getIsFetching(state),
       followingInProgress: getFollowingInProgress(state)
    }
}

// const mapStateToProps = (state) => {
//     return {
//        users: state.usersPage.users,
//        pageSize: state.usersPage.pageSize,
//        totalUsersCount: state.usersPage.totalUsersCount,
//        currentPage: state.usersPage.currentPage,
//        isFetching: state.usersPage.isFetching,
//        followingInProgress: state.usersPage.followingInProgress
//     }
// }

// let withRedirect = withAuthRedirect(UsersContainer);
// export default connect(mapStateToProps,
//     {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})(UsersContainer);
// export default (withRedirect);

export default compose(
    // withAuthRedirect,  // Не показывать страницу Users неавторизованным пользователям
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})
) (UsersContainer)