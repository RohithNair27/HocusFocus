import { ADD_TASK, DELETE_TASK, TASK_COMPLETED } from "../ActionTypes";

const InitialState = [
];

export function TaskReducer(state = InitialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      return [...state,action.payload]  
    }
    case DELETE_TASK: {
      const newState = state.filter((element)=> {
        return action.payload!==element.id  })
       return newState
    }
    case TASK_COMPLETED: {
        const updateState = state.map((element)=>{
          if(element.id===action.payload && element.taskCurrentState===false){
    
            return {...element,taskCurrentState:true}
          }
          else if(element.id===action.payload && element.taskCurrentState===true){
            return {...element,taskCurrentState:false}
          }
          else{
            return element
          }
        })
        return updateState;

     
    }
    default:
      return state;
  }
}
