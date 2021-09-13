import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { SetTodo } from "../store/action";

const useStyles = makeStyles((theme) => ({

    btn: {
         height:50,
         marginLeft:10
    }
  
}));
export default function Addtodo() {
  var [todo, settodo] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div style={
          {
              textAlign: 'center'
          }
      }>
        <TextField
          id="add"
          label="Add your new Todo"
          type="text"
          variant="outlined"
          onChange={(e) => settodo(e.target.value)}
        />
        <Button
        className={classes.btn}
          variant="contained"
          color="primary"
         
          onClick={() => {
            dispatch(SetTodo(String(todo)));
          }}
        >
          <p>+</p>
        </Button>
      </div>
    </form>
  );
}
