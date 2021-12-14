import React, { useState } from 'react'
import "./AddInput.module.css"
import { v4 } from "uuid"
import TodoList from '../TodoList/TodoList'
import { useRouter } from 'next/router'
import { En } from 'src/locales/en'
import { Ar } from 'src/locales/ar'


export interface  ITodo{
    
        id: string ,
        task: string,
        completed: boolean

}


export interface IAddInput{
    todos:ITodo[],
    setTodos:React.Dispatch<React.SetStateAction<ITodo[]>>

} 
function AddInput({
    setTodos, todos
}:IAddInput) {

        
    const router = useRouter()

    const { locale, locales, defaultLocale } = router
    const  t= locale==="en"? En :Ar

    const [todo, setTodo] = useState<string>("")

    const addTodo = () => {
        if(!todo) return
        let updatedTodos = [
            ...todos,
            {
                id: v4(),
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("")
    }

    return (
        <div className=" container mx-auto bg-white rounded p-4 shadow flex justify-between mt-[2rem] ">
            <input 
                className="border-none w-[90%] focus:outline-none" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)}
                placeholder={t.placeholder}
            />
            <button 
                className="customButton"
                onClick={addTodo}
            >
                {t.addButton}
            </button>
        </div>
    )
}

export default AddInput