import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    filter: 'invert(100%)'
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
    filter: 'invert(100%)'
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  searchButton:{
    backgroundColor:'#c0ae4a',
    color:'#000'
  }
}));