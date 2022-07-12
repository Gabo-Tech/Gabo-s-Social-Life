import { makeStyles } from '@material-ui/core/styles';
import { batch } from 'react-redux';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    filter: 'invert(100%)'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor:'#c0ae4a',
    color:'#000'
  },
  buttonClear: {
    marginBottom: 10,
    backgroundColor:'#0affa8',
    color:'#000'
  }
}));