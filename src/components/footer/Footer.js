import React, { useLayoutEffect, useState } from 'react';
import {
	Grid, Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

const useStyles = makeStyles(theme => ({
	footer: {
		backgroundColor: "black",
		height: "auto",
		alignItems: 'center',
    	justifyContent: 'center',
		paddingTop: 20,
		paddingBottom: 20
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
	const [width, height] = useWindowSize();
	const classes = useStyles();
	const widthMobile = width < 600
	console.log(widthMobile);

	return (
		
			(widthMobile ? (
				<Grid container justify="center" className={classes.footer}>
					<Grid item xs={12} align="center" justify="center">
						<HomeWorkIcon fontSize="large" style={{ color: 'white', fontSize: "90px" }} />
					</Grid>
					
					<Grid item xs={12} align="center" justify="center">
						<Typography variant="h6" className={classes.text}><span className={classes.textDate}>©2021</span>MJM</Typography>
					</Grid>

					<Grid item xs={12} align="center" justify="center">
						<Typography variant="h6" className={classes.text}><span className={classes.textDate}>E-mail: </span>  mjm.home.im@mail.com</Typography>
						<Typography variant="h6" className={classes.text}><span className={classes.textDate}>Phone: </span>  919 772 270</Typography>
					</Grid>
			</Grid>
				) : (
					<Grid container justify="center" className={classes.footer}>
						<Grid item xs={4} align="center" justify="center">
							<Typography variant="h6" className={classes.text}><span className={classes.textDate}>©2021</span>MJM</Typography>
						</Grid>

						<Grid item xs={4} align="center" justify="center">
							<HomeWorkIcon fontSize="large" style={{ color: 'white', fontSize: "90px" }} />
						</Grid>
							
							
						<Grid item xs={4} align="center" justify="center">
							<Typography variant="h6" className={classes.text}><span className={classes.textDate}>E-mail: </span>  mjm.home.im@mail.com</Typography>
							<Typography variant="h6" className={classes.text}><span className={classes.textDate}>Phone: </span>  919 772 270</Typography>
						</Grid>
					</Grid>
				))
	)
}

function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
	  function updateSize() {
		setSize([window.innerWidth, window.innerHeight]);
	  }
	  window.addEventListener('resize', updateSize);
	  updateSize();
	  return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
  }
  

export default Footer;