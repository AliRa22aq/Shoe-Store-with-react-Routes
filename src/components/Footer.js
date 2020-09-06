import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        padding: '1rem',
        textAlign: 'center',
    },
    footer: {
        padding: theme.spacing(3, 2),
        backgroundColor: 'white'
    },
    linkColor: {
        color: 'white',
    },
}));


const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1" color="primary">
                        Created by:{' '}
                        <Link className={classes.linkColor} href="https://github.com/AliRa22aq" target="_blank" rel="noopener noreferrer">
                         Ali Razzaq {'  '} 
                        </Link> 
                    </Typography>

                </Container>
            </footer>
        </div>
    );
};

export default Footer;
