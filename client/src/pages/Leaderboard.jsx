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
                    <button className="btn btn-primary lbBtn" to="###">Reset Score</button>
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
                        </thead>
                        <tbody className="leader-list">
                            {sortedUsers.map(user => (
                                <tr className="leader-unit" key={user._id}>
                                    <th className="leader-user">{user.username}</th>
                                    <th className="leader-score">{user.highScore}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    );
};

export default Leaderboard;
