import '../App.css';
import Auth from '../utils/auth';

const Home = () => {
    return (
        <div className="flex-row px-1 container">
            {Auth.loggedIn() ?
                <div>
                    <a href="/" class="btn btn-primary" role="button" onClick={() => Auth.logout()}>
                        Logout
                    </a>
                </div>
                :
                <div>
                    <a href="./signup" class="btn btn-primary" role="button">Signup</a>
                    <a href="./login" class="btn btn-secondary" role="button">Login</a>
                </div>
            }
        </div>
    );
};

export default Home;