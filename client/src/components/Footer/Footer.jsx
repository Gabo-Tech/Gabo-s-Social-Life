import React from 'react';
import { Container, Box, Typography, Link } from '@material-ui/core';
import useStyles from './FooterStyles';


export default function Footer(props) {
  const classes = useStyles();
  const content = {
    'brand': { image: '', width: 110 },
    'copy': `© ${new Date().getFullYear()} GABO S. L. All rights reserved.`,
    'link1': 'Twitter',
    'link2': 'Instagram',
    'link3': 'Facebook',
    'link4': 'LinkedIn',
    ...props.content
  };
  let brand;
  if (content.brand.image) {
    brand = <img src={ content.brand.image } alt="" width={ content.brand.width } />;
  } else {
    brand = content.brand.text || '';
  }
  return (
    <footer className={classes.invert}>
      <Container maxWidth="lg">
        <Box py={6} display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
          <Link href="#" color="inherit" underline="none">
            {brand}
          </Link>
          <Box component="nav" className={classes.footerNav}>
            <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link1']}</Link>
            <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link2']}</Link>
            <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link3']}</Link>
            <Link href="https://www.linkedin.com/in/gabowebdeveloper/" variant="body1" color="textPrimary" target="_blank" className={classes.footerLink}>{content['link4']}</Link>
          </Box>
          <Typography color="#fff" component="p" variant="caption" gutterBottom={false}>{content['copy']}</Typography>
        </Box>
      </Container>
    </footer>
  );
}