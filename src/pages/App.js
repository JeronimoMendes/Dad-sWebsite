import '../styles/App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import IndexPage from "./IndexPage"
import Navbar from "../components/navbar/Navbar"
import {
	Grid
} from "@material-ui/core"


function App() {
	return (
		<Grid>
			<Grid item>
				<Navbar />
			</Grid>
			<Grid item>
				<div style={{margin: 16}}>
					<Router>
						<Switch>
							<Route exact path='/'>
								<IndexPage />
							</Route>
							<Route exact path='/services'>
								<h1>Services</h1>
							</Route>
							<Route exact path='/about-us'>
								<h1>About us</h1>
							</Route>
							<Route exact path='/contact'>
								<h1>Contact</h1>
							</Route>
						</Switch>
					</Router>
				</div>
			</Grid>
		</Grid>
	);
}

export default App;
