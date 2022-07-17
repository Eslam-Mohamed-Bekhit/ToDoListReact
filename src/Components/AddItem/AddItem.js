
import React, { Component } from 'react'
import './AddItem.css'



export default class AddItem extends Component {

    state ={
        name:'',
        task:''
    }
handleChange = (e)=>{
    this.setState({[e.target.id]:e.target.value})


}


handleSubmit = (e)=>{
    e.preventDefault();
    if(e.target.name.value === ''){
        return false
    }else{
        this.props.AddTask(this.state)
        this.setState({
            name:'',
            task:''
        });

    }
    
};
  render() {
    return (

<div> 
    <form onSubmit={this.handleSubmit}>
        <input type='text' 
            name='name'
            id='name'
            placeholder='enter your task name'  
            onChange={this.handleChange} 
            value = {this.state.name}
            />
        <input type='number' 
            name='task'
            id='task' 
            placeholder='enter your task ' 
            onChange={this.handleChange} 
            value = {this.state.task}
            />
        <input className='action ' type='submit' value='submit'  />
     

    </form>
</div>
      
    )
  }
}


/* import React, { useEffect, useState } from 'react'

export default function AddItem(props) {
    const {items,addTask} = props 
    const [newtask,setNewtask] = useState(
        { 
            id: 'id',
            name:'name',
            task:'task',
            deadline:'deadline',
            state:'state'

        }
    )


    const handleChange = (e)=>{
        const keyOfTarget = e.target.id;
        const valOfTarget = e.target.value;
        let x = ({...newtask, [keyOfTarget] :valOfTarget})
        setNewtask(x);
        console.log(newtask)
 
    }

    useEffect(()=>{
        handleChange
    
    }
         ,[])
    
     const handleSubmit = (e)=>{



       
     }
  return (
<div> 
    <form onSubmit={handleSubmit}>

        <input type='text' id='name' placeholder='enter your task name'  onChange={handleChange} />
        <input type='text' id='task' placeholder='enter your task ' onChange={handleChange} />
        <input type='text' id='deadline' placeholder='enter your task deadLine' onChange={handleChange} />
        <input type='text' id='state' placeholder='enter your task state' onChange={handleChange} />
        <input type='submit' value='submit'  />
        {console.log(newtask)}

    </form>
</div>
  )
}
 */
