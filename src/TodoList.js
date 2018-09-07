import React from "react";
import TodoItem from "./todoItem";

import './styles.css'

//定义一个React组件
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ""
    };
  }

  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleButtonClick = () => {
    if (this.state.inputValue) {
      this.setState({
        inputValue: "",
        list: [...this.state.list, this.state.inputValue]
      });
    } else {
      alert("空");
    }
  };

  /**
   * 父组件通过属性的形式向子组件传值
   * 子组件同过props接受父组件传递过来的参数
   */

  // 子组件调用父组件方法
  handleDelete = index => {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  };

  getTodoItems = () => {
    return this.state.list.map((item, index) => {
      // return <li key={index} onClick={this.handleRemove.bind(this,index)}>{item}</li>
      return (
        <TodoItem
          handleDelete={this.handleDelete}
          content={item}
          key={index}
          index={index}
        />
      );
    });
  };

  // 组件需要显示的内容
  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.handleChange} />
        <button className='red-btn' onClick={this.handleButtonClick}>add</button>
        <ul>{this.getTodoItems()}</ul>
      </div>
    );
  }
}

export default TodoList;
