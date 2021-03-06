import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';


const images = [
  {
      caseNo: 1,
    case: 'case1',
    url: 'https://cdn.lowgif.com/full/1ce8053f63898345-how-to-clean-your-shoes-expert-tips-for-cleaning-leather-suede.gif',
    title: 'Boys Shoes',
    width: '50%',
  },
  {
    case: 'case2',
    url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/a6ab2011364769.560f680c40dd7.gif',
    title: 'Girls Shoes',
    width: '50%',
  },
  {
    case: 'case3',
    url: 'https://media2.giphy.com/media/l3q2rCBSrr6D7XKLK/giphy.gif',
    title: 'Kids Shoes',
    width: '50%',
  },
  {
    case: 'case4',
    url: 'https://www.unisock.co.uk/media/wysiwyg/GIF/Mix-match-1.gif',
    title: 'Socks',
    width: '50%',
  },


];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 400,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function PictureButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}> 
  
      {images.map((image) => (
          
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
            <Link to={image.case}> 
          <span
            className={classes.imageSrc}
            style={{
                backgroundImage: `url(${image.url})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
           <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
               {image.title}         

              <span className={classes.imageMarked} />
            </Typography>
          </span></Link>
        </ButtonBase> 
      ))}
    </div>
  );
}
