import { GetServerSidePropsContext, NextPage } from 'next'
import React, { useState } from 'react'
import {Todo} from 'src/components/Todo'
import getConfig from 'next/config'
import { IAddInput, ITodo } from 'src/components/AddInput/addInput'
import axios from 'axios'
import TodoFooter from 'src/components/TodoFooter/TodoFooter'
import { useRouter } from 'next/router'

const { serverRuntimeConfig} = getConfig()
const  {API_ENDPOINT}=serverRuntimeConfig



 const index:NextPage = () => {


    const [todos, setTodos] = useState<ITodo[]>([])
    return <Todo todos={todos} setTodos={setTodos} />

}



export  default index