// import { useState, useEffect } from 'react'
import { /* useMutation, */useQuery } from "@apollo/client";
import { Link } from "react-router-dom"

import { QUERY_USERS } from '../utils/queries'
// import { RESET_SCORE } from '../utils/mutations'

const Leaderboard = () => {
    const { loading, error, data } = useQuery(QUERY_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const sortedUsers = [...data.allUsers].sort((a, b) => b.highScore - a.highScore);

    return (
        <>
            <header>
                <div>
                    <Link className="btn btn-secondary lbBtn" to={"/game"}>Game</Link>
                </div>  
                <div>
                    <Link className="btn btn-primary lbBtn" to="###">Reset Score</Link>
                </div>
                
            </header>
            <div className="container-wrap">
                <section id="leaderboard">
                    <nav className="ladder-nav">
                        <div className="ladder-title">
                            <h1>Leaderboard</h1>
                        </div>
                    </nav>
                    <table id="rankings" className="leaderboard-results" width="100%">
                        <thead>
                            <tr>
                                <th>Player</th>
                                <th>PTS</th>
                            </tr>
                            <ul className="leader-list">
                                {sortedUsers.map(user => (
                                    <li className="leader-unit" key={user._id}>
                                        <p className="leader-user">{user.username}</p>
                                        <p className="leader-score">{user.highScore}</p>
                                    </li>
                                ))}
                            </ul>
                        </thead>
                    </table>
                </section>
            </div>
        </>
    );
};

export default Leaderboard;
