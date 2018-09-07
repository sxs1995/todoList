import React from 'react';

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete(){
        this.props.handleDelete(this.props.index)
    }
    //子组件如果想和父组件通信,子组件需要调用父组件的方法
    render(){
        const {content} = this.props;
        return (
            <li className='red-btn' onClick={this.handleDelete}>{content}</li>
        )
    }
}

export default TodoItem;