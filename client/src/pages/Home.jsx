import '../App.css';
import Auth from '../utils/auth';
import chef from '../assets/chef.png'


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
                        <a href="./signup" class="btn btn-primary" role="button">Sign Up</a>
                    </div>
                    <div>
                        <a href="./login" class="btn btn-secondary" role="button">Login</a>
                    </div>
                </div>
            }
        </div>
    );
};

export default Home;