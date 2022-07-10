import React, { useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import useStyles from './NavbarStyles'
import gabosl from '../../images/gabo_perfect.png'
import * as ActionType from '../../constants/ActionTypes'
import decode from 'jwt-decode'

export default function Navbar() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const logout = () => {
        dispatch({ type: ActionType.LOGOUT });
        history.push('/auth');
        setUser(null);
    };
    useEffect(() => {
        const token = user?.token;
        if (token) {
          const decodedToken = decode(token);
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);
  return (
    <>
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Gabo's Social Life</Typography>
                <img className={classes.image} src={gabosl} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Link to={`/creators/${user?.result.name}`} style={{ textDecoration: 'none', color: '#fff', fontWeight: 900 }}>{`${user?.result.name}`}</Link>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    </>
  )
}
