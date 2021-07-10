import React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import BuildIcon from '@material-ui/icons/Build';


const useStyles = makeStyles(theme => ({
	menuButton: {
		marginRight: theme.spacing(2),
		color: "grey"
	},
	title: {
		flexGrow: 1,
		color: "grey",
	},
	navbar: {
		backgroundColor: "white",
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
				<BuildIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>MJM Home Repairs</Typography>
				<NavbarButton href="/" text="Home" />
				<NavbarButton href="/about-us" text="About us" />
				<NavbarButton href="/services" text="Services" />
				<NavbarButton href="/contact" text="Contact" />
			</Toolbar>
		</AppBar>
	)
};


const NavbarButton = (props) => {
	const color = (window.location.pathname === props.href) ? "orange" : "grey";

	return <Button style={{color: color}} href={props.href}>{props.text}</Button>
}



export default Navbar;