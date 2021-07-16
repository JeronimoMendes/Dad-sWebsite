import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from "../assets/img/mainBgImg.jpg"
import {
	Typography,
	Grid,
	Container
} from '@material-ui/core';

const services = ["Flooring", "Basement Remodeling", "Bathroom Remodeling", "Interior and Exterior Painting", "Gutters"]

const useStyles = makeStyles(theme => ({
	bgImage: {
		height: 800,
		width: "100%",
		backgroundImage: "url(" + HeaderImage +")",
		backgroundSize: "cover",
		backgroundPosition: "center",
		filter: "blur(2px)",
		transform: "scale(1.02)",
		position: "absolute",
		zIndex: 0,
		boxSizing: "border-box"
	},
	headerText: {
		filter: 0,
		color: "white",
		position: "absolute",
		zIndex: 50,
		marginLeft: "11%",
		top: "25%",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "11%",
			top: "0",
			width: "60%"
		}
	},
	HeaderContainer: {
		position: "relative",
		overflow:"hidden",
		height: "700px"
	},
	page: {
		boxSizing: "border-box"
	},
	container: {
		marginLeft: 0,
		paddingLeft: "11%",
		marginTop: "2%",
		marginBottom: "2%",
		width: "100%"
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

			<Container className={classes.container} >
				<Typography variant="h2">Services</Typography>
				
				
					<Grid container spacing={5} sx={12}>
						{services.map((service) => <Grid item xs={6} sm={4} key={service}><Typography variant="h5">{service}</Typography></Grid>)}
					</Grid>
				
			</Container>
		</div>
	)
}

export default IndexPage;