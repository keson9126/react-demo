import React, { Component } from "react";
import store from "./store";
import { changeInputAction, addItemAction, removeItemAction, getMyListAction } from "./store/actionCreators";
import TodoListUI from "./TodoListUI";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.removeItem = this.removeItem.bind(this)

    store.subscribe(this.storeChange);
  }

  componentDidMount() {
    const action = getMyListAction()
    store.dispatch(action)
  }
  removeItem(index) {
    const action = removeItemAction(index)
    store.dispatch(action)
  }
  clickBtn() {
    const action = addItemAction()
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState())
  }
  changeInputValue(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        removeItem={this.removeItem}
      />
    );
  }
}

export default TodoList;
