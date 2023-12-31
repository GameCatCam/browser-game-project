import { useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom"

import { QUERY_USERS } from '../utils/queries'
import { UPDATE_SCORE } from '../utils/mutations'


const Leaderboard = () => {
    const { loading, error, data, refetch } = useQuery(QUERY_USERS);
    const [updateScore] = useMutation(UPDATE_SCORE);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    const sortedUsers = [...data.allUsers].sort((a, b) => b.highScore - a.highScore);
    const userRanks = sortedUsers.map((user, index) => ({
        ...user,
        playerRank: index + 1
    }))
    const topEight = userRanks.slice(0, 8)

    //Resets the score back to zero using the updateScore mutation
    const resetScoreFunction = async () => {
        try {
            updateScore({
                variables: {
                    highScore: 0
                },
            })

            await refetch();
            
        } catch (error) {
          console.error('Failed to reset user score: ', error.message);
        }
      };

    return (
        <>
            <header className="site-header">
                <div>
                    <Link className="btn btn-secondary lbBtn" to={"/game"}>Game</Link>
                </div>  
                <div>
                    <button className="btn btn-primary lbBtn" onClick={resetScoreFunction} to="###">Reset Score</button>
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
                                <th>Rank</th>
                                <th>Player</th>
                                <th>PTS</th>
                            </tr>
                        </thead>
                        <tbody className="leader-list">
                            {topEight.map(user => (
                                <tr className="leader-unit" key={user._id}>
                                    <th className="leader-rank">{user.playerRank}</th>
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
