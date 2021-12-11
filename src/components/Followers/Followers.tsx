import React from 'react'
import FollowersList from '../FollowersList/FollowersList'
import Header from '../Header/Header'
import "./Followers.module.css"

export default function Followers() {
    console.log("SKKDJK");
    
    return (
        <div className="followers">
            <Header title="Followers" />
            <FollowersList />
        </div>
    )
}