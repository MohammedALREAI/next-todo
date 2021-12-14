
import axios from 'axios'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Ar } from 'src/locales/ar'
import { En } from 'src/locales/en'
import AddInput, { IAddInput, ITodo } from '../AddInput/addInput'
import Header from '../Header/Header'
import TodoList from '../TodoList/TodoList'
import "./Todo.module.css"


export  const Todo=({todos,setTodos}:IAddInput)=>{
    
    const router = useRouter()

    const { locale, locales, defaultLocale } = router
    const  t= locale==="en"? En :Ar

    return (
        <div className=''>
            <Header title={t.todo} />
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





