import React from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

const TodoListUI = (props) => {
  return (
    <div style={{ margin: "10px" }}>
      <div>
        <Input
          placeholder="write something"
          style={{ width: "260px", marginRight: "10px" }}
          onChange={props.changeInputValue}
          value={props.inputValue}
          onPressEnter={props.clickBtn}
        />
        <Button type="primary" onClick={props.clickBtn}>
          Add
        </Button>
      </div>
      <div style={{ width: "300px", margin: "10px" }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.removeItem(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default TodoListUI;
