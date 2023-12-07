import '../App.css';
import Auth from '../utils/auth';
import chef from '../assets/chef.png'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="flex-row px-1 container home">
            <div>
                <h1 className = "title">Fancy Chef</h1>
            </div><div>
                <img src={chef} className='chef' />
            </div>
            {Auth.loggedIn() ?
                <div>
                    <a href="/" class="btn btn-primary" role="button" onClick={() => Auth.logout()}>
                        Logout
                    </a>
                </div>
                :
                <div>
                    <div>
                        <Link to="/signup">
                        <button className="btn btn-primary">Sign Up</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/login">
                        <button className="btn btn-secondary">Login</button>
                        </Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default Home;