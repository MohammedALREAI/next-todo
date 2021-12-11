import axios from 'axios'
import { GetServerSidePropsContext, NextPage } from 'next'
import React from 'react'
import FollowersList from 'src/components/FollowersList/FollowersList'
export  interface Ifollower{
    picture:{
        large:string
    }
    name:{
        last:string,
        first:string
    }
    login:{
        username:string
    }
}
export interface Ifollowers{
    followers:Array<Ifollower>
}



 const followers:NextPage<Ifollowers> = (props) => {
     
    return (
        <FollowersList followers={props.followers}/>
    )
}



export async function getServerSideProps(context:GetServerSidePropsContext) {


    
    try {
    if(context.req.method="GET"){
          const  {data} = await axios.get(`https://randomuser.me/api/?results=5`);


          return {
            props: {
                followers: (data.results)  as  Array<Ifollower>
            }
        }
        
    }else{
        return {
            props: {
                followers: []
            }
        }
    }
} catch(e){
    throw new Error("there  some  error")
}
}

export  default followers;




