import React from 'react'
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function ProductsIndex() {

  const classes = useStyles();

  return (
    <div>

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>  <h1> Products </h1> </Paper>
          </Grid>


          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/New_Balance_574_shoe.gif"
                alt={"Nothing"}
                width={200}
                height={200} />
              <br />
              <Link to='Case1'> Men Shoes </Link> <br />
            </Paper>
          </Grid>


          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <img
                src="https://cdn.shopify.com/s/files/1/0070/0497/9264/products/KV128326_0011_10_grande.gif?v=1588240501"
                alt={"Nothing"}
                width={200}
                height={200} />
              <br />
              <Link to='Case2'> Women Shoes </Link> <br />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <img
                src="https://media2.giphy.com/media/l3q2rCBSrr6D7XKLK/giphy.gif"
                alt={"Nothing"}
                width={200}
                height={200} />
              <br />
              <Link to='Case3'> Kids Shoes </Link> <br />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <img
                src="https://ak1.ostkcdn.com/images/products/30756882/Dunham-Mens-8000-Ubal-Waterproof-Lace-Up-Sneaker-Shoes-72fe64fd-778e-4e69-a9a8-ce3d254cfc42.jpg"
                alt={"Nothing"}
                width={200}
                height={200} />
              <br />
              <Link to='Case4'> Accessories </Link>
            </Paper>
          </Grid>
        </Grid>

      </div>

    </div>
  )
}

export default ProductsIndex


