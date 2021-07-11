import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from "../assets/img/mainBgImg.jpg"

const useStyles = makeStyles(theme => ({
	bgImage: {
		height: 800,
		width: "100vw",
		backgroundImage: "url(" + HeaderImage +")",
		backgroundSize: "cover",
		backgroundPosition: "center"
	},
}));

const IndexPage = () => {
	const classes = useStyles();

	return (
		<div className={classes.bgImage} />
	)
}

export default IndexPage;