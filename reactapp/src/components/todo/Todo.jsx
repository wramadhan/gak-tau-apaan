import { useState } from 'react'
import './Todo.css'
import TodoList from '../todo-list/TodoList'
import TodoCreate from '../../todo-create/TodoCreate'

const Todo =()=>{
    //constructor
    //ganti todos jadi getTodos(untuk mengambil data), dan setTodos (untuk menambahkan objek) ketika useState
    const [getTodos,setTodos] = useState([
        {id:1, title: 'Eat'},
        {id:2, title: 'Sleep'},
        {id:3, title: 'Code'},
    ])
    //fungsi untuk mempush value ke dalam array todos
    const eventCreateTodo =(todo)=>{
        //menggunakan set+NamaVariabel untuk menambahkan value dalam
        setTodos(getTodos.concat(todo));
        // console.log(todo)
        //menggunakan get+NamaVariabel untuk mengambil value dalam constructor
        console.log(getTodos) //untuk melihat jumlah dan apa saja yang di push ke todo
    }

    

    return (
        <>
        <h3>Todo List</h3>
        {/* 1. untuk membuat dan memanggil fungsi untuk push data ke todos melalui TodoCreate */}
        <TodoCreate onCreateTodo={eventCreateTodo}/>
        <TodoList dataTodos={getTodos} />
        </>
    )
}

export default Todo