import React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	navbar: {
		backgroundColor: "red",
		boxShadow: theme.shadows[0],
		padding: 0
	}
}))


const Navbar = () => {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.navbar}>
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>Title</Typography>
    			<Button color="inherit">Signup</Button>
			</Toolbar>
		</AppBar>
	)
};

export default Navbar;