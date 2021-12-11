
import axios from 'axios'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import React, { useState } from 'react'
import AddInput, { IAddInput, ITodo } from '../AddInput/addInput'
import Header from '../Header/Header'
import TodoList from '../TodoList/TodoList'
import "./Todo.module.css"

export  const Todo=({todos,setTodos}:IAddInput)=>{
    

    return (
        <div className=''>
            <Header title="Todo" />
            <AddInput 
                setTodos={setTodos}
                todos={todos}
            />
            <TodoList 
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    )
}





