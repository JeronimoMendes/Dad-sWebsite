import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from "../assets/img/mainBgImg.jpg"
import {
	Typography
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
	bgImage: {
		height: 800,
		width: "100vw",
		backgroundImage: "url(" + HeaderImage +")",
		backgroundSize: "cover",
		backgroundPosition: "center",
		filter: "blur(2px)",
		transform: "scale(1.02)",
		position: "absolute",
		zIndex: 0
	},
	headerText: {
		filter: 0,
		color: "white",
		position: "absolute",
		zIndex: 50,
		margin: 50,
		top: "25%"
	},
	HeaderContainer: {
		position: "relative",
		overflow:"hidden",
		width: "100vw",
		height: "700px"
	}
}));

const IndexPage = () => {
	const classes = useStyles();

	return (
		<div className={classes.page}>
			<div className={classes.HeaderContainer}>
				<Typography className={classes.headerText} variant="h1">You've got a problem,<br /> we've got a solution</Typography>
				<div className={classes.bgImage} />
			</div>
		</div>
	)
}

export default IndexPage;