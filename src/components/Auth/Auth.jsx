import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
// import jwt_deocde from "jwt-decode"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { useHistory } from 'react-router-dom'
// import { GoogleLogin } from 'react-google-login'
import useStyles from './AuthStyles'
import Input from './Input'
// import Icon from './Icon'
// import { AUTH } from '../../constants/ActionTypes.js'
import { signin, signup } from '../../actions/AuthAction'
// import { useScript } from '../../hooks/useScript'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmedPassword: '' };

export default function SignUp() {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signup(form, history));
        } else {
            dispatch(signin(form, history));
        }
    };
    // const googleSuccess = async (res) => {
    //     const result = res?.profileObj;
    //     const token = res?.tokenId;
    //     try {
    //         dispatch({ type: AUTH, data: { result, token } });
    //         history.push('/');
    //     } catch (err) {
    //         console.error("Error with Google Sign In: ",err);
    //     }
    // };
    // const googleError = (err) => console.error('Google Sign In was unsuccessful because of this error: ', err);
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


    // const googlebuttonref = useRef();
    // const [user, setuser] = useState(false);
    // const onGoogleSignIn = (user) => {
    //   let userCred = user.credential;
    //   let payload = jwt_deocde(userCred);
    //   console.log(payload);
    //   setuser(payload);
    // };
    // useScript("https://accounts.google.com/gsi/client", () => {
    //   window.google.accounts.id.initialize({
    //     client_id: process.env.REACT_APP_GOOGLE_ID,
    //     callback: onGoogleSignIn,
    //     auto_select: false,
    //   });
  
    //   window.google.accounts.id.renderButton(googlebuttonref.current, {
    //     size: "medium",
    //   });
    // });





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
                        { isSignup && <Input name="confirmedPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button id="submitFormBtn" type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>
                    {/* <GoogleLogin 
                        clientId={process.env.REACT_APP_GOOGLE_ID}
                        render={(renderProps) => (
                        <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                            { isSignup ? 'Sign up with Google' : 'Sign in with Google' }
                        </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"
                    /> */}
                    {/* {!user && <div ref={googlebuttonref}></div>}
                        {user && (
                            <div>
                            <h1>{user.name}</h1>
                            <img src={user.picture} alt="profile" />
                            <p>{user.email}</p>

                            <button
                                onClick={() => {
                                setuser(false);
                                }}
                            >
                                Logout
                            </button>
                            </div>
                        )} */}
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
