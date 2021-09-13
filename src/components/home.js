
import { Button } from '@material-ui/core';
import './home.css'
import Addtodo from './addtodo';
import { Display } from './display';
import {DeleteAll} from '../store/action'
import {useDispatch, useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  btn: {
   height:30,
   margin:5
  },
 app:{
     backgroundColor: 'blue'
 }
}));
function Home() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const Todos = useSelector((state) => {
    console.log(state.todo.length);
    return state.todo.length
  });
  return (
    <div className={classes.app}>
    
      <div className= 'box'>
      <h1>Todo App </h1>
      <Addtodo></Addtodo>
      <Display></Display>
      <div style={{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-around'
      }}>
        <p style={{
          textAlign:'center'
        }}>You have {Todos} Pendingtask  </p>
      <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          onClick={() =>{
            dispatch(DeleteAll());
          }}
        >
          <p>Clear All</p>
        </Button>
        </div>
        </div>
    </div>
  );
}

export default Home;
