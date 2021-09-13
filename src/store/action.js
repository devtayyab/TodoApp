function SetTodo(task){

    return {
        type : "ADDDATA",
        payload : task
    }
}


export const Delete = (index) =>{
    return {
        type: "DELETEITEM",
        payload: index
        
    }
    
    }
    export const DeleteAll = () =>{
        return {
            type: "DELETEALL",
             }
            }
export {
    SetTodo
}