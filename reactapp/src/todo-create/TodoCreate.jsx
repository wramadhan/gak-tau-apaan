import './TodoCreate.css'
import { useState } from 'react'


//penambahan argument atau parameter (props) digunakan supaya dapat melempar fungsi dari component Chid ke Component Parent
const TodoCreate = (props) =>{
    
    const [getInputTodo, setInputTodo] = useState('')
    //buat event handler supaya ketika button submit ditekan tidak refresh
    const handleSubmit = (event) =>{
        //penggunaan preventDefault berfungsi untuk mengubah kebiasaan/default dari suatu fungsi
        event.preventDefault()
        const newTodo ={
            id: Math.floor(Math.random()*100)+1,
            title : getInputTodo,
        }
        //penambahan fungsi newTodo ke array Todos di parent
        props.onCreateTodo(newTodo)
        // console.log(newTodo)
        
        //untuk mengosongkan kembali kolom inputannya
        setInputTodo('');
    }

    const handleInputTodo = (event) => {
        setInputTodo(event.target.value)
        console.log(getInputTodo)
    }

    return(
        //tambahan onSubmit yang memanggil func handleSubmit berguna untuk mengubah fungsi button, dari efek refresh ke keluaran value di console
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" value={getInputTodo} onChange={handleInputTodo}/>
            <button type="submit">Add</button>
        </form>
    )
}
export default TodoCreate