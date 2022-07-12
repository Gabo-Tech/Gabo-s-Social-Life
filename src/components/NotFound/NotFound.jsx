import React from 'react'
import useStyles from './NotFoundStyles';

export default function NotFound() {
    const classes = useStyles();
    return (
      <div className="page-container">
        <div className="bg" style={{ backgroundImage: 'url()'}}></div>
        <h1 className={classes.title}>404</h1>
      </div>
    )
}
