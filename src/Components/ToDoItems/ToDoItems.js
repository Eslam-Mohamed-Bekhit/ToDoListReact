import React from 'react'

export default function ToDoItems(props) {
  const {items,deleteItem} = props;
  const ListItem = items.length ? items.map(item=> { 
    return (
      <div key={item.id}>
        <span className='name'> {item.name} </span>
        <span className='age'> {item.task} </span>
        <span className='action icon' onClick={()=>deleteItem(item.id)}> &times; </span>
      </div>
  )}):
  <p>NO Taske To Render</p>

  return (
    <div className='ListItem'>
      <div>
        <span className='title name'>name</span>
        <span className='title age'>task</span>
        <span className='title action'>action</span>
      </div>
      
       {ListItem}
    </div>
  
  )
}
