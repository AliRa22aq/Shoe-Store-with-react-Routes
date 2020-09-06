import React from 'react'
import { Grid } from '@material-ui/core';
import profile from './url/profile.jpg'
import Typography from '@material-ui/core/Typography';



import '../App.css';


function About() {
    return (
        <div>
            <Grid className = 'detailhead' container> <h4> Ali Razzaq </h4> </Grid>

        
           <Grid container> 
           
           <Grid className = 'profilepic' item xs = {4} > <img src={profile} alt="profile" height= "330" width = "280" />  </Grid>
           <Grid item xs = {8} >
           <Typography className='profiledetailhead' variant="h6" gutterBottom>
                       Hello Welcome To My Profile     
                      </Typography>     
            <Typography className='profiledetail' variant="subtitle2" gutterBottom>
                         I am a new React.js Developer who is trying his best to learn this beautiful Framework.
                         This project took me 1 week to complete. I just started one month ago with no prior knowledge of web deveoplemt but fortunately I found very good teachers.
                         If you are also interested in learning this skill then do visit <a href='https://panacloud.github.io/bootcamp-2020/'> <b>  PanaCloud's 
                         Bootcamp 2020 </b> </a>  which is a free Online Fasttrack Bootcamp to Learn Freelancing and do Remote Work in the COVID-19 Economic Environment.

            </Typography>     
            <Typography className='profiledetail' variant="subtitle2" gutterBottom>
                         Check out my other Projects:
                         <ol> 
                             <b>  <li> Project 1: <a href= 'http://bootcamp-expense-tracking-ali.surge.sh/'>  Expense Tracker </a> </li> </b>
                             <b>   <li> Project 2: <a href= 'http://covid19-tracker-app-ali.surge.sh/'>    COVID-19 Tracker </a> </li> </b>
                         </ol>

            </Typography>   
           </Grid>
           
           </Grid>
        </div>
    )
}

export default About
