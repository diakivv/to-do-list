import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "../actions/actionTypes";

const initialState = [
  { id: 1, description: "Call mum", isCompleted: false },
  { id: 2, description: "Walk dog", isCompleted: false },
  { id: 3, description: "Do laundry", isCompleted: false }
];

export default function toDoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      return [
        ...state,
        {
          id: action.payload.id,
          description: action.payload.description,
          isCompleted: false
        }
      ];
    }
    case TOGGLE_TASK: {
      return state.map(task => {
        if (task.id == action.payload.id) {
          return {
            ...task,
            isCompleted: !task.isCompleted
          };
        } else {
          return task;
        }
      });
    }
    case DELETE_TASK: {
      return state.filter(task => task.id !== action.payload.id);
    }
    default:
      return state;
  }
}
