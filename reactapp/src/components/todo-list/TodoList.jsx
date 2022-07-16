// import Todo from '../todo/Todo';
import './TodoList.css';


const TodoList = (props) =>{
    //console.log (props.dataTodos) //untuk mengecek isi dari (props.dataTodos)
    return(
        <ul>{
            props.dataTodos.map((todo)=>{
                return(
                    <>
                <li key={todo.id}>{todo.title}</li>
                    </>
                )
            })
        }</ul>
    )
}

export default TodoList