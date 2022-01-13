import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM, GET_TODO_LIST } from "./actionTypes";
import axios from "axios";

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const removeItemAction = (index) => ({
  type: REMOVE_ITEM,
  index
})

export const getTodoListAction = (data) => ({
  type: GET_TODO_LIST,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/d147e6c1d84190f5572ee7b4cc00b729/react_learn/todolist01').then((res) => {
      const action = getTodoListAction(res.data)
      dispatch(action)
    }).catch((err) => {
      console.log(err);
    })
  }
}
