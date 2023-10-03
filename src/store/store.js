import { createStore } from "redux";
// สร้าง reducer สำหรับการจัดการสถานะ
const data = {
  count: 0,
  name:"",
  todo:[],
};


function counterReducer(state = data, action) {
    console.log(action.type);
    console.log(action.playload);
  switch (action.type) {
    case "setcount":
      return { ...state, count: action.set };
    case "SET_NAME":
      return { ...state, name: action.set };
    case "settodo":
      return { ...state, todolist: action.set };
    default:
      return state;
  }
}


// สร้าง store จาก reducer
const store = createStore(counterReducer);
export default store;
