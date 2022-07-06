import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { useHistory } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import useStyles from './AuthStyles'
import Input from './Input'
import Icon from './Icon'
import env from "react-dotenv"
import { AUTH } from '../../constants/ActionTypes'
import { signin, signup } from '../../actions/AuthAction'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

export default function Auth() {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
          dispatch(signup(form, history));
        } else {
          dispatch(signin(form, history));
        }
    };
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
          dispatch({ type: AUTH, data: { result, token } });
          history.push('/');
        } catch (err) {
          console.error("Error with Google Sign In: ",err);
        }
    };
    const googleError = (err) => console.error('Google Sign In was unsuccessful because of this error: ', err);
  return (
    <>
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={6}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignup && (
                        <>
                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                        <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                        </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>
                    <GoogleLogin
                        clientId="156954969625-t0037gj1uq8usc5demo0ujj8kuntnhqa.apps.googleusercontent.com"/*{window.env.GOOGLE_ID}*/
                        render={(renderProps) => (
                        <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                            Sign in with Google 
                        </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"
                    />
                    {/* {console.log(window.env.DOTENV)} */}
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                        <Button onClick={switchMode}>
                            { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                        </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    </>
  )
}
