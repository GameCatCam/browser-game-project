import '../App.css';
import Auth from '../utils/auth';
import chef from '../assets/chef.png'
import chef2 from '../assets/chef2.png'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="flex-row px-1 container home">
            <div>
                <h1 className="title">Fancy Chef</h1>
            </div><div>
                <img src={chef2} className='chef' />
            </div>
            {Auth.loggedIn() ?
                <div className='home-buttons'>
                    <div className='home-button' id='home-home'>
                        <Link to="/game">
                            <button className="btn btn-primary btnsgnp">Game</button>
                        </Link>
                    </div>
                    <div className='home-button'>
                        <a href="/" className="btn btn-secondary home-button" role="button" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </div>

                </div>
                :
                <div className='home-buttons'>
                    <div className='home-button'>
                        <Link to="/signup">
                            <button className="btn btn-primary btnsgnp">Sign Up</button>
                        </Link>
                    </div>
                    <div className='home-button'>
                        <Link to="/login">
                            <button className="btn btn-secondary btnsgnp">Login</button>
                        </Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default Home;