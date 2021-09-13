const IntialState = {
    todo : []
}


export const ToDos = (state= IntialState , action)=>{
    console.log(action.payload)
    console.log(action)
    console.log(state)
    console.log(state.todo)
    console.log(action.index)

    console.log(action.value)

    switch(action.type) {
        
        case "ADDDATA" : {
            return state ={ 
                todo : [action.payload,...state.todo]}

        }
    
        case "DELETEALL" :{
            state.todo = []
            return  state ={
                todo: [...state.todo]}
        
     }
        
        case "DELETEITEM" :{
            state.todo.splice(action.payload,1)
            return  state ={
                   todo: [...state.todo]}
           
        }
    }
  
return state
}