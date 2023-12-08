import '../App.css';
import Auth from '../utils/auth';
import chef from '../assets/chef.png'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="flex-row px-1 container home">
            <div>
                <h1 className="title">Fancy Chef</h1>
            </div><div>
                <img src={chef} className='chef' />
            </div>
            {Auth.loggedIn() ?
                <div>
                    <div>
                        <Link to="/game">
                            <button className="btn btn-primary game">Game</button>
                        </Link>
                    </div>
                    <div>
                        <a href="/" class="btn btn-secondary" role="button" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </div>

                </div>
                :
                <div>
                    <div>
                        <Link to="/signup">
                            <button className="btn btn-primary btnsgnp">Sign Up</button>
                        </Link>
                    </div>
                    <div>
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