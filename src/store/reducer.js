import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM,GET_TODO_LIST } from "./actionTypes";

const defaultState = {
  inputValue: "",
  list: [],
};

export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = ''
    return newState
  }
  if (action.type === REMOVE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  if (action.type === GET_TODO_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data.list
    return newState
  }

  return state;
};
