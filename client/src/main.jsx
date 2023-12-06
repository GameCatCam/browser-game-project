import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NoMatch from './pages/NoMatch'
import Game from './pages/Game.jsx'
import Leader from './pages/Leaderboard.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <h1 className="display-2">Wrong page!</h1>,
		children: [
			{
				index: true,
				element: <Landing/>
			},  {
				path: '/home',
				element: <Home />
			},{
				path: '/login',
				element: <Login />
			}, {
				path: '/signup',
				element: <Signup />
			}, {
				path: "*",
				element: <NoMatch />
			}, {
				path: '/game',
				element: <Game />
			}, {
				path: '/leaderboard',
				element: <Leader />
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
)
