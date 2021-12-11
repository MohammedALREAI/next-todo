import React from 'react'
import "./header.module.css"



export default function Header({title}:{title:string}) {
    return <h1 className="header container mx-auto px-2">{title}</h1>
}