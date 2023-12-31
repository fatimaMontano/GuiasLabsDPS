import React, {useState} from "react";
import Todo from '../components/Todo';

const Form =() => {
    const [todo, setTodo]=useState({})
    const [todos, setTodos]= useState([
        {todo: 'todo 1'},
        {todo: 'todo 2'},
        {todo: 'todo 3'}
    ])

    const handleChange =e => setTodo({[e.target.name]: e.target.value})
    const handleClick =e=>{
        if(Object.keys(todo).length ===0 || todo.todo.trim()===''){
            alert('El campo no puede estar vacío')
            return
        }
        setTodos([...todos, todo])
    }

    const deleteTodo =indice=>{
        const newTodos= [...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }

    return(
        <>

        <form onSubmit={e=>e.preventDefault()}>
            <h3>Agregar tarea</h3> <br/>
            <input type="text" name="todo" onChange={handleChange}/>
            <button onClick={handleClick}>Agregar</button>
        </form>
        {
            todos.map((value, index) => (
                < Todo todo={value.todo} key={index} index={index} deletoTodo={deleteTodo} /> 
            ))
        }
        </>
    )
}
export default Form
