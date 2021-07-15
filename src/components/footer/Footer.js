import React from 'react';
import {
	Grid, Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

const useStyles = makeStyles(theme => ({
	footer: {
		backgroundColor: "black",
		height: 160,
		alignItems: 'center',
    	justifyContent: 'center',
	},
	text: {
		color: "#FFFFFF",
		fontWeight: "bold"
	},
	textOrange: {
		color: "orange"
	},
	textDate: {
		opacity: "50%"
	}
}))


const Footer = () => {
	const classes = useStyles();

	return (
		<Grid container justify="center" className={classes.footer}>
			<Grid item xs={4} align="center" justify="center">
				<Typography variant="h6" className={classes.text}><span className={classes.textDate}>@2021</span>MJM</Typography>
			</Grid>

			<Grid item xs={4} align="center" justify="center">
				<HomeWorkIcon fontSize="large" style={{ color: 'white', fontSize: "90px" }} />
			</Grid>
				
			<Grid item xs={4} align="center" justify="center">
				<Typography variant="h6" className={classes.text}><span className={classes.textDate}>E-mail: </span>  mjm.home.im@mail.com</Typography>
				<Typography variant="h6" className={classes.text}><span className={classes.textDate}>Phone: </span>  919 772 270</Typography>
			</Grid>
		</Grid>
	)
}

export default Footer;