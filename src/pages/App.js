import '../styles/App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import IndexPage from "./IndexPage"
import Navbar from "../components/navbar/Navbar"


function App() {
	return (
		<div>
			<Navbar />
			<Router>
				<Switch>
					<Route exact path='/'>
						<IndexPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
