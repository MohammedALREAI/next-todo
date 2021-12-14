import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Ar } from 'src/locales/ar'
import { En } from 'src/locales/en'

interface ITodoFooter{
    numberOfIncompleteTasks:number
}

function TodoFooter({
    numberOfIncompleteTasks
}:ITodoFooter) {


    const router = useRouter()

    const { locale, locales, defaultLocale } = router
    const  t= locale==="en"? En :Ar
    return (
        <div className="flex justify-between">
            <p className='font-bold text-gray-600'>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ?  t.task : `${t.task}s`} {t.left}</p>
            <Link href="/followers">
                <p className='font-semibold'>
                {t.followers}
                </p>
                </Link>
        </div>
    )
}

export default TodoFooter