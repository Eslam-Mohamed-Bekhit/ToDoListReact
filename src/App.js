import React, { Component } from 'react'
import './App.css';
import ToDoItems from './Components/ToDoItems/ToDoItems';
import AddItem from './Components/AddItem/AddItem';

export default class App extends Component {

  state = {
    items :[
      {id:1 , name:'react' ,task:'end task' },
      {id:2 , name:'angular' ,task:'end task'},
      {id:3 , name:'fullstack' ,task:'end task ' }
    ]
  }

   deleteItem = (id)=>{
    let items =  this.state.items.filter(item=> item.id !== id)
   this.setState({items})  }

   addTask = (item)=>{
    item.id = Math.random()
   let items =this.state.items
   items.push(item)
    
    this.setState(items) 
   }





  render() {
   
        return (
        
          <div className='App container'>
            <h1 className='text-center'>Todo List</h1>
            <ToDoItems items={this.state.items} deleteItem={this.deleteItem} />
            <AddItem   AddTask={this.addTask}/>
          </div>);
        }
}







