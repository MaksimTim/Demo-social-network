import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {

    return <div>
        <Paginator totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}
        />
        <div>
            {users.map((user) => (
                <User key={user.id}
                      followingInProgress={props.followingInProgress}
                      follow={props.follow}
                      unfollow={props.unfollow}
                      user={user}
                />
            ))}
        </div>
    </div>
}

export default Users