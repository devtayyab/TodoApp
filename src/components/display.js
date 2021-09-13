import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from "@material-ui/core/styles";
import { Delete } from "../store/action";
import { Button } from '@material-ui/core';
import { mergeClasses } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
 
      btn: {
              height:10
      },
      del : {
         backgroundColor: 'red'
      }
    
  }));
export const Display = () => {
    const classes = useStyles();
  const Todos = useSelector((state) => {
    console.log(state.todo);
    return state.todo;
  });
  const dispatch = useDispatch();

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'column'
    }}>
    
      {Todos.map((v, i) => (
        <>
         
          <p key={i} style={{
              textAlign:'center',
             height: '50px',
              backgroundColor:'lightgray',
              width: '300px',
              borderRadius:2,
              display: 'flex',
              justifyContent:'space-between',
              alignItems: 'center',
    
              
              
}}>
            {v}
            <Button
              variant="outline-danger"
              onClick={() => dispatch(Delete((i = i)))}
            >
              <DeleteIcon
              className={classes.del}
              ></DeleteIcon>
                    
            </Button>
          </p>
        </>
      ))}
    </div>
  );
};
