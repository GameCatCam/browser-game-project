// import { useState, useEffect } from 'react'
import { /* useMutation, */useQuery } from "@apollo/client";

import { QUERY_USERS } from '../utils/queries'
// import { RESET_SCORE } from '../utils/mutations'

const Leaderboard = () => {
    const { loading, error, data } = useQuery(QUERY_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const users = data.allUsers;

	return (
        <>
            <h2 className="leader-header">
                Leaderboard Page
            </h2>
            <div>
                <ul className="leader-list">
                {users.map(user => (
                    <li className="leader-unit" key={user._id}>
                        <p className="leader-user">{user.username}</p>
                        <p className="leader-score">{user.highScore}</p>
                    </li>
                ))}
                </ul>
            </div>
        </>
	);
};

export default Leaderboard;
