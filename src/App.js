import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';

const datas = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]


class App extends React.Component {
  
  state = {
    dataList: datas,
    task: ''
  };

  addNewTask = newTaskName => {
    const newState = {
      ...this.state, dataList: [
        ...this.state.dataList, {task: newTaskName, purchased: false, id: Date.now()}
      ]
    };
    this.setState(newState)
  }

  toggleTask = id => {
    console.log("hwt", id)
    const newState = {
      ...this.state, 
      dataList: this.state.dataList.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo
      })
    };
    this.setState(newState)

  };

  clearTask = () => {
    const newState = {
      ...this.state, dataList: this.state.dataList.filter(e => {
        return !e.completed
      })
    };
    this.setState(newState)
  }



  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2> Welcome to your Todo App </h2>
        <TodoForm addNewTask = {this.addNewTask} />

        <TodoList
        datas={this.state.dataList}
        toggleTask={this.toggleTask}
        clearTask={this.clearTask}
        />

      </div>
    );
  }
}

export default App;
