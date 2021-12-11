import Link from 'next/link'
import React from 'react'

interface ITodoFooter{
    numberOfIncompleteTasks:number
}

function TodoFooter({
    numberOfIncompleteTasks
}:ITodoFooter) {
    return (
        <div className="flex justify-between">
            <p className='font-bold text-gray-600'>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left</p>
            <Link href="/followers">
                <p className='font-semibold'>
                Followers
                </p>
                </Link>
        </div>
    )
}

export default TodoFooter