import React, { useEffect, useState } from 'react'
import axios from "axios"
import FollowersListComponent from "./Components/FollowersListComponent";
import follwe from 'src/pages/api/Followers/follwe';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Ifollower } from 'src/pages/followers';
import Header from '../Header/Header';

interface IFollowersList{
followers:Array<Ifollower>

}
export default function FollowersList(props:IFollowersList) {


    return (
        <>
                        <Header title="follower" />
        
        <FollowersListComponent followers={props.followers}/>
        </>
    )
}




