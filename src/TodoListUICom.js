import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

class TodoListUI extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            style={{ width: "260px", marginRight: "10px" }}
            onChange={this.props.changeInputValue}
            value={this.props.inputValue}
          />
          <Button type="primary" onClick={this.props.clickBtn}>
            Add
          </Button>
        </div>
        <div style={{ width: "300px", margin: "10px" }}>
          <List
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item onClick={() => {this.props.removeItem(index)}}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default TodoListUI;
